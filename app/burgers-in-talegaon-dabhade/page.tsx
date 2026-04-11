import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";
import { siteInfo } from "../../lib/constants";
import { generatePageMetadata } from "../../lib/seo";

export const metadata = generatePageMetadata("burgersInTalegaon");

export default function BurgersInTalegaon() {
  return (
    <div
      style={{ background: "var(--page-bg)" }}
      className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
              #1 Rated in Talegaon Dabhade
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Best Burger Shop in{" "}
            <span style={{ color: "#3B82F6" }}>Talegaon Dabhade</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#3B82F6" }} />
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Looking for the <strong>best burger shop in Talegaon Dabhade</strong>? Kangen Burgers is Talegaon&apos;s 
            favourite burger destination with a <strong>4.8★ rating on Google</strong> from 1,800+ reviews. 
            We serve handcrafted burgers, gourmet pizzas, crispy snacks, and refreshing beverages — 
            all prepared with the unique health benefits of alkaline Kangen Water. Located right at 
            Chatrapati Shivaji Maharaj Chowk on Station Road, we&apos;re just <strong>2 minutes from Talegaon Railway Station</strong>.
          </p>
        </SectionReveal>

        {/* Why Section */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
            Why Kangen Burgers is the <span style={{ color: "#3B82F6" }}>#1 Burger Shop in Talegaon</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Kangen Water-Infused Recipes", desc: "Every dish at our Talegaon burger shop is prepared using ionized alkaline Kangen water (pH 9.5) for better taste, softer textures, and enhanced health benefits." },
              { title: "40+ Menu Items", desc: "From classic veg burgers (₹69) to premium chicken cheese smash burgers (₹169), gourmet pizzas, pasta, cakes, and milkshakes — the largest menu of any burger shop in Talegaon Dabhade." },
              { title: "Hospital-Grade Hygiene", desc: "We use 2.5 pH Strong Acidic Water (a hospital-grade sanitizer) to clean all surfaces and raw ingredients. One of the most hygienic restaurants near Talegaon Station." },
              { title: "Near Talegaon Railway Station", desc: "Located at 409, Station Road, Yashwant Nagar — just a 2-minute walk from Talegaon Railway Station and bus stand. The most accessible burger shop in Talegaon." },
              { title: "4.8★ Google Rating", desc: "With over 1,800 Google reviews and a 4.8-star rating, Kangen Burgers is the highest-rated burger restaurant in Talegaon Dabhade, Pune." },
              { title: "Affordable Prices", desc: "Burgers starting at just ₹69, fries from ₹69, and mojitos at ₹99. The best value-for-money burger shop near Talegaon Dabhade." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
                <h3 className="text-lg font-black mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* What We Serve */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            What We Serve at Our <span style={{ color: "#3B82F6" }}>Talegaon Burger Shop</span>
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Our menu at the best burger shop in Talegaon Dabhade includes something for everyone:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: "🍔", title: "Burgers", desc: "22+ varieties — Veg Tikki, Paneer Tandoori, Crispy Chicken, Butter Chicken & more" },
              { emoji: "🍕", title: "Pizzas", desc: "8\" & 10\" — Margherita, BBQ Chicken, Tandoori Paneer, Exotic Veggie & more" },
              { emoji: "🍟", title: "Fries & Snacks", desc: "Normal, Peri Peri, Cheesy, BBQ Fries + Chicken Wings, Nuggets, Nachos" },
              { emoji: "🌯", title: "Frankies & Sandwiches", desc: "Tandoori, Peri Peri, Chipotle Frankies + Club, Paneer, Chicken Tikka Sandwiches" },
              { emoji: "🍰", title: "Cakes & Desserts", desc: "Red Velvet, Truffle Chocolate, Fresh Mango, Blueberry & more" },
              { emoji: "🥤", title: "Beverages", desc: "Mojitos, Milkshakes, Cold Coffee, Fresh Lime Soda & Alkaline Kangen Water" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h3 className="text-base font-black mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/menu" className="inline-block px-8 py-3.5 rounded-full font-black text-sm text-white transition-all hover:scale-105" style={{ background: "#3B82F6" }}>
              View Full Menu
            </Link>
          </div>
        </SectionReveal>

        {/* Customer Reviews */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            What Talegaon Customers Say About <span style={{ color: "#3B82F6" }}>Kangen Burgers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Priya S.", text: "The best burgers in Talegaon, hands down! We come here every weekend with family. The Kangen water twist makes them taste super fresh.", rating: "5★" },
              { name: "Rahul P.", text: "As a food blogger, I've tried every burger shop in Talegaon Dabhade. Kangen Burgers stands out — amazing taste, great hygiene, and the alkaline water concept is unique.", rating: "5★" },
              { name: "Sneha D.", text: "Best cafe near Talegaon station. The Paneer Tandoori Burger is to die for, and the cold coffee is perfect. Highly recommended!", rating: "5★" },
              { name: "Amit K.", text: "Started as a customer, now I'm a franchise partner! The best burger shop in Talegaon Dabhade with incredible potential for growth.", rating: "5★" },
            ].map((review, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400 font-bold text-sm">{review.rating}</span>
                  <span className="font-black text-sm" style={{ color: "var(--text-primary)" }}>{review.name}</span>
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Location + Map */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Find the Best Burger Shop <span style={{ color: "#3B82F6" }}>Near Talegaon Station</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
              <div className="space-y-5">
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Address</span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{siteInfo.address}</p>
                </div>
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Landmark</span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Near Talegaon Railway Station, opposite Chatrapati Shivaji Maharaj Chowk</p>
                </div>
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Phone</span>
                  <a href={`tel:${siteInfo.phone}`} className="text-sm hover:text-[#3B82F6] transition-colors" style={{ color: "var(--text-secondary)" }}>{siteInfo.phone}</a>
                </div>
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Hours</span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Monday – Sunday, 10:00 AM – 10:00 PM</p>
                </div>
                <div className="flex gap-3 pt-4">
                  <Link href="/menu" className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105" style={{ background: "#3B82F6" }}>
                    View Menu
                  </Link>
                  <Link href="/order-online" className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105" style={{ color: "var(--text-primary)", border: "1px solid var(--card-border)", background: "var(--card-bg)" }}>
                    Order Online
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[300px] lg:h-auto rounded-2xl overflow-hidden" style={{ border: "1px solid var(--card-border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.3803888861985!2d73.67388900000003!3d18.736538600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b163be0c7683%3A0x9cc4c420bc6b6587!2sKangen%20Burger%27s%20cafe%20%7C%20Best%20cafe%20in%20Yashwant%20Nagar%20%7C%20Talegaon%20Dabhade!5e0!3m2!1sen!2sin!4v1774434716133!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-none grayscale"
                title="Kangen Burgers - Best Burger Shop in Talegaon Dabhade near Talegaon Station"
              />
            </div>
          </div>
        </SectionReveal>

        {/* FAQ Section for this page */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Frequently Asked Questions About <span style={{ color: "#3B82F6" }}>Burgers in Talegaon</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "What is the best burger shop in Talegaon Dabhade?", a: "Kangen Burgers is rated #1 on Google with a 4.8★ rating from 1,800+ reviews. Located at Station Road, Yashwant Nagar, near Talegaon Railway Station, we serve 40+ varieties of handcrafted burgers made with alkaline Kangen Water." },
              { q: "Where is Kangen Burgers located in Talegaon?", a: "We are at 409, Station Road, Chatrapati Shivaji Maharaj Chowk, Yashwant Nagar, Talegaon Dabhade, Maharashtra 410507 — just a 2-minute walk from Talegaon Railway Station." },
              { q: "Does the best burger shop in Talegaon offer delivery?", a: "Yes! You can order through Magicpin, Zomato, or Swiggy, or call us directly at +91 8805174783 for takeaway and delivery across Talegaon Dabhade and surrounding areas." },
              { q: "What are the prices at Kangen Burgers Talegaon?", a: "Our burgers start at just ₹69 (Crunchy Burger), with premium options up to ₹309. Fries from ₹69, pizzas from ₹199, and mojitos at ₹99. Best value burger shop in Talegaon!" },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Ready to taste the best burgers in Talegaon Dabhade?
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              Visit our burger shop near Talegaon Station today or order online for fast delivery &amp; takeaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/order-online" className="px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 inline-block" style={{ background: "#3B82F6" }}>
                Order Now
              </Link>
              <a
                href={siteInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full font-black text-base transition-all hover:scale-105 inline-block"
                style={{ color: "var(--text-primary)", border: "1px solid var(--card-border)", background: "var(--card-bg)" }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
