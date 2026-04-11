const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable is not set.');
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const IMAGE_DIR = path.join(__dirname, '../public/images/menu');
const CONSTANTS_PATH = path.join(__dirname, '../lib/constants.ts');

async function run() {
    console.log('--- Analyzing and Renaming Images with Vision AI ---');

    // 1. Parse constants.ts to get all unmapped items
    const content = fs.readFileSync(CONSTANTS_PATH, 'utf8');
    const itemRegex = /\{\s*name:\s*"((?:[^"\\]|\\.)*)",\s*price:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)"\s*\}/g;
    
    let match;
    const allItems = [];
    while ((match = itemRegex.exec(content)) !== null) {
        let [_, name, price, description, imagePath] = match;
        name = name.replace(/\\"/g, '"');
        
        // Exclude combos or soft drinks usually not photographed individually
        if (name.includes('Combo') || name.includes('Meal') || name.includes('Box')) continue;
        if (name.includes('Sprite') || name.includes('Coke') || name.includes('Fanta')) continue;
        
        const slug = path.basename(imagePath, '.webp');
        allItems.push({ name, description, slug });
    }

    // 2. Read all files in the directory
    const files = fs.readdirSync(IMAGE_DIR).filter(f => f.endsWith('.png'));
    
    // Find files that are ALREADY correctly named (their basename matches a slug)
    const correctlyNamedSlugs = new Set();
    const filesToAnalyze = [];

    for (const file of files) {
        const basename = path.basename(file, '.png');
        if (allItems.some(item => item.slug === basename)) {
            correctlyNamedSlugs.add(basename);
        } else {
            filesToAnalyze.push(file);
        }
    }

    const remainingItems = allItems.filter(item => !correctlyNamedSlugs.has(item.slug));
    const itemsListString = remainingItems.map(i => `${i.name}: ${i.slug}`).join('\n');

    console.log(`Found ${filesToAnalyze.length} unnamed images.`);
    if (filesToAnalyze.length === 0) {
        console.log("No images left to rename!");
        return;
    } 

    // 3. Process each unmapped file
    for (let i = 0; i < filesToAnalyze.length; i++) {
        const file = filesToAnalyze[i];
        const filePath = path.join(IMAGE_DIR, file);
        
        console.log(`\n[${i + 1}/${filesToAnalyze.length}] Analyzing: ${file}`);
        
        try {
            const imageBuffer = fs.readFileSync(filePath);
            
            const prompt = `
You are an expert food classifier. I have a list of menu items from my restaurant. Look at this food image and tell me exactly WHICH ONE of these menu items it is.

Be extremely precise. Look for clues (e.g. if it looks like pasta vs burger vs drink, veg vs chicken, fries).
If it's a burger, try to see if it has chicken or a vegetable patty.

Here are the available remaining items (Format: "Name: Slug"):
${itemsListString}

Respond with ONLY the exact "Slug" of the most likely item from the list. Do not include any other text or punctuation.`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: prompt },
                            {
                                inlineData: {
                                    mimeType: 'image/png',
                                    data: imageBuffer.toString('base64')
                                }
                            }
                        ]
                    }
                ]
            });

            const likelySlug = response.text.trim().toLowerCase();
            const matchedItem = remainingItems.find(item => item.slug === likelySlug);
            
            if (matchedItem) {
                const newFilePath = path.join(IMAGE_DIR, `${likelySlug}.png`);
                fs.renameSync(filePath, newFilePath);
                console.log(`\x1b[32m✔ Renamed to: ${likelySlug}.png\x1b[0m`);
                
                // Remove from remaining list so we don't map multiple images to the same item
                remainingItems.splice(remainingItems.indexOf(matchedItem), 1);
            } else {
                console.warn(`\x1b[33m⚠ Model returned unknown slug or format: "${likelySlug}". Skipping.\x1b[0m`);
            }
            
            // Wait 5 seconds to avoid rate limiting
            await new Promise(r => setTimeout(r, 5000));
            
        } catch (error) {
            console.error(`\x1b[31m✘ Failed: ${error.message}\x1b[0m`);
        }
    }

    console.log('\n--- Analysis Complete ---');
}

run();
