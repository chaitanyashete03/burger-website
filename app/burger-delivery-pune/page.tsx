import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";
import { siteInfo } from "../../lib/constants";
import { generatePageMetadata } from "../../lib/seo";

export const metadata = generatePageMetadata("burgerDeliveryPune");

export default function BurgerDeliveryPune() {
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
              Fast Delivery
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Burger Delivery in <span style={{ color: "#3B82F6" }}>Pune</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#3B82F6" }} />
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Get Kangen Burgers delivered fresh to your doorstep across Talegaon Dabhade and Pune. 
            Order via Zomato, Swiggy, or call us directly for the fastest delivery and takeaway experience.
          </p>
        </SectionReveal>

        {/* How to Order */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
            How to <span style={{ color: "#3B82F6" }}>Order</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Choose Your Platform", desc: "Order via Zomato, Swiggy, or call us directly for takeaway and delivery." },
              { step: "02", title: "Pick Your Favourites", desc: "Browse our full menu — burgers, pizzas, snacks, shakes, and combo meals." },
              { step: "03", title: "Enjoy Fresh Delivery", desc: "Your Kangen Water-infused meal arrives hot and fresh at your doorstep." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="text-[3rem] font-black leading-none mb-3 select-none" style={{ color: "rgba(59,130,246,0.12)" }}>{item.step}</div>
                <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
                <h3 className="text-lg font-black mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Delivery Platforms */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
            Order on Your <span style={{ color: "#3B82F6" }}>Favourite Platform</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Zomato", desc: "Order on Zomato for exclusive deals and fast delivery.", color: "#E23744" },
              { name: "Swiggy", desc: "Get your Kangen Burgers delivered via Swiggy.", color: "#FC8019" },
              { name: "Direct Call", desc: `Call ${siteInfo.phone} for direct orders and special requests.`, color: "#3B82F6" },
            ].map((platform, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${platform.color}15` }}>
                  <span className="text-2xl font-black" style={{ color: platform.color }}>{platform.name[0]}</span>
                </div>
                <h3 className="text-lg font-black mb-2" style={{ color: "var(--text-primary)" }}>{platform.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{platform.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Delivery Areas */}
        <SectionReveal className="mb-16">
          <div className="rounded-2xl p-8" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
              Delivery Areas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                "Talegaon Dabhade", "Yashwant Nagar", "Kanhe", "Vadgaon", 
                "Malavli", "Lonavala Road", "Dehu Road", "Talegaon Station Area",
              ].map((area, i) => (
                <div key={i} className="flex items-center gap-2 py-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3B82F6" }} />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Hungry? Order Kangen Burgers Now!
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              Fresh, healthy, and delivered fast across Pune.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/order-online" className="px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105" style={{ background: "#3B82F6" }}>
                Order Online
              </Link>
              <a href={`tel:${siteInfo.phone}`} className="px-10 py-4 rounded-full font-black text-base transition-all hover:scale-105" style={{ color: "var(--text-primary)", border: "1px solid var(--card-border)", background: "var(--card-bg)" }}>
                Call Us
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
