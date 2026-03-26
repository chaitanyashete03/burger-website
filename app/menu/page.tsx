"use client";

import React, { useState, useMemo, useEffect } from "react";
import SectionReveal from "@/components/SectionReveal";
import { menuData } from "@/lib/constants";
import MenuItemCard, { DietType } from "@/components/MenuItemCard";
import ComboCard from "@/components/ComboCard";
import MenuFilterBar from "@/components/MenuFilterBar";

// Map structure for easier iteration and rendering
interface CategorizedItem {
  id: string; // unique ID for key
  name: string;
  type: DietType; // 'veg' | 'nonVeg' | 'none'
  price?: string; // Currently not well defined in new object, using undefined initially
  description?: string;
}

interface ProcessedCategory {
  id: string;
  label: string;
  items: CategorizedItem[];
  combos?: { name: string; items: string[] }[];
  accentColor: string;
}

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState<DietType | "all">("all");
  const [activeCategory, setActiveCategory] = useState<string>("burgers");

  // Flatten and process menu data into a predictable shape array
  const processedCategories: ProcessedCategory[] = useMemo(() => {
    return [
      {
        id: "burgers",
        label: "Burgers",
        accentColor: "#FF6B35",
        items: [
          ...menuData.burgers.veg.map((n) => ({ id: `burger-v-${n}`, name: n, type: "veg" as DietType })),
          ...menuData.burgers.nonVeg.map((n) => ({ id: `burger-nv-${n}`, name: n, type: "nonVeg" as DietType })),
        ],
      },
      {
        id: "friesAndPizza",
        label: "Fries & Pizza",
        accentColor: "#f59e0b",
        items: [
          ...menuData.friesAndPizza.fries.map((n) => ({ id: `fries-${n}`, name: n, type: "veg" as DietType })), // Assuming fries veg
          ...menuData.friesAndPizza.pizza.map((n) => ({ id: `pizza-${n}`, name: n, type: n.includes("Chicken") ? "nonVeg" as DietType : "veg" as DietType })),
        ],
      },
      {
        id: "pasta",
        label: "Pasta",
        accentColor: "#ef4444",
        items: [
          ...menuData.pasta.veg.map((n) => ({ id: `pasta-v-${n}`, name: n, type: "veg" as DietType })),
          ...menuData.pasta.nonVeg.map((n) => ({ id: `pasta-nv-${n}`, name: n, type: "nonVeg" as DietType })),
        ],
      },
      {
        id: "garlicBread",
        label: "Garlic Bread",
        accentColor: "#eab308",
        items: menuData.garlicBread.map((n) => ({ id: `gb-${n}`, name: n, type: "veg" as DietType })),
      },
      {
        id: "snacks",
        label: "Snacks",
        accentColor: "#8b5cf6",
        items: [
          ...menuData.snacks.veg.map((n) => ({ id: `snack-v-${n}`, name: n, type: "veg" as DietType })),
          ...menuData.snacks.nonVeg.map((n) => ({ id: `snack-nv-${n}`, name: n, type: "nonVeg" as DietType })),
        ],
      },
      {
        id: "sandwiches",
        label: "Sandwiches",
        accentColor: "#10b981",
        items: [
          ...menuData.sandwiches.veg.map((n) => ({ id: `sand-v-${n}`, name: n, type: "veg" as DietType })),
          ...menuData.sandwiches.nonVeg.map((n) => ({ id: `sand-nv-${n}`, name: n, type: "nonVeg" as DietType })),
        ],
      },
      {
        id: "cakes",
        label: "Cakes",
        accentColor: "#ec4899",
        items: menuData.cakes.map((n) => ({ id: `cake-${n}`, name: n, type: "none" as DietType })),
      },
      {
        id: "beverages",
        label: "Beverages",
        accentColor: "#06b6d4",
        items: menuData.beverages.map((n) => ({ id: `bev-${n}`, name: n, type: "none" as DietType })),
      },
      {
        id: "softDrinks",
        label: "Soft Drinks",
        accentColor: "#3b82f6",
        items: menuData.softDrinks.map((n) => ({ id: `sd-${n}`, name: n, type: "none" as DietType })),
      },
      {
        id: "alkalineWater",
        label: "Alkaline Water",
        accentColor: "#0ea5e9",
        items: menuData.alkalineWater.map((n) => ({ id: `aw-${n}`, name: n, type: "none" as DietType })),
      },
      {
        id: "combos",
        label: "Combos",
        accentColor: "#f43f5e",
        items: [],
        combos: menuData.combos.map((c) => ({ ...c })),
      },
    ];
  }, []);

  // Use IntersectionObserver to update active tab on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible entry with the largest intersection ratio
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by Y position to get the one closest to the top
          visibleEntries.sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y);
          // Set active category to the first one that is somewhat visible at top
          const id = visibleEntries[0].target.id.replace("category-", "");
          setActiveCategory(id);
        }
      },
      { rootMargin: "-200px 0px -60% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    processedCategories.forEach((cat) => {
      const el = document.getElementById(`category-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [processedCategories]);

  // Filter data based on search and diet
  const filteredCategories = useMemo(() => {
    return processedCategories.map((category) => {
      const isCombos = category.id === "combos";

      const filteredItems = category.items.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDiet =
          dietFilter === "all" || item.type === "none" || item.type === dietFilter;
        return matchesSearch && matchesDiet;
      });

      const filteredCombos = isCombos
        ? category.combos?.filter((combo) => {
            const matchesSearch =
              combo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              combo.items.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
            
            // Combos typically hide if diet filter is strict and name implies otherwise,
            // but for simplicity, we let combos show unless it's obviously opposite, 
            // or just follow the search query.
            // Requirement: "For categories without classification (e.g., cakes, beverages, combos), show both regardless."
            return matchesSearch;
          })
        : undefined;

      return {
        ...category,
        items: filteredItems,
        combos: filteredCombos,
      };
    }).filter((category) => category.items.length > 0 || (category.combos && category.combos.length > 0));
  }, [processedCategories, searchQuery, dietFilter]);

  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
              What We Serve
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}>
            Our <span style={{ color: "#FF6B35" }}>Menu</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#FF6B35" }} />
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Discover our wide range of offerings — perfectly blended with our signature Kangen Water twist.
          </p>
        </SectionReveal>

        <MenuFilterBar
          categories={processedCategories.map((c) => ({ id: c.id, label: c.label }))}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dietFilter={dietFilter}
          setDietFilter={setDietFilter}
        />

        <div className="space-y-20 relative">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>No items found</h3>
              <p style={{ color: "var(--text-secondary)" }}>Try adjusting your search or filters.</p>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.id} id={`category-${category.id}`} className="scroll-mt-48 pt-4">
                <SectionReveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px]" style={{ background: category.accentColor }} />
                    <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--text-primary)" }}>
                      {category.label}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.items.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        type={item.type}
                        accentColor={category.accentColor}
                      />
                    ))}
                    {category.combos?.map((combo, idx) => (
                      <ComboCard
                        key={`combo-${idx}`}
                        name={combo.name}
                        items={combo.items}
                        accentColor={category.accentColor}
                      />
                    ))}
                  </div>
                </SectionReveal>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
