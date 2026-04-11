import SectionReveal from "../../components/SectionReveal";
import Link from "next/link";
import { Utensils, ShoppingBag, PhoneCall, MapPin } from "lucide-react";
import { siteInfo } from "../../lib/constants";
import { generatePageMetadata } from "../../lib/seo";

export const metadata = generatePageMetadata("orderOnline");

export default function OrderOnline() {
  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6">

      <SectionReveal className="w-full max-w-2xl">

        {/* header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Delivery & Pickup</span>
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}>
            Order <span style={{ color: "#3B82F6" }}>Online</span>
          </h1>
          <div className="flex justify-center mb-5">
            <div className="w-8 h-[2px] rounded-full" style={{ background: "#3B82F6" }} />
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Enjoy our delicious, healthy burgers right at your door — choose your preferred platform.
          </p>
        </div>

        {/* platform cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Swiggy */}
          <a
            href={siteInfo.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "radial-gradient(circle at center, #FC801915, transparent 65%)" }}
            />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
              style={{ background: "#FC801918", color: "#FC8019" }}
            >
              <ShoppingBag size={30} />
            </div>
            <h3 className="text-2xl font-black mb-2" style={{ color: "var(--text-primary)" }}>Swiggy</h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Order via Swiggy for Fast Delivery</p>
            <div className="mt-6 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white" 
                 style={{ background: "#FC8019" }}>
              Order Now
            </div>
          </a>

          {/* Zomato */}
          <a
            href={siteInfo.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "radial-gradient(circle at center, #E2374415, transparent 65%)" }}
            />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
              style={{ background: "#E2374418", color: "#E23744" }}
            >
              <Utensils size={30} />
            </div>
            <h3 className="text-2xl font-black mb-2" style={{ color: "var(--text-primary)" }}>Zomato</h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Order via Zomato for Best Deals</p>
            <div className="mt-6 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white" 
                 style={{ background: "#E23744" }}>
              Order Now
            </div>
          </a>

          {/* Magicpin */}
          <a
            href={siteInfo.magicpinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "radial-gradient(circle at center, #ff316115, transparent 65%)" }}
            />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
              style={{ background: "#ff316118", color: "#ff3161" }}
            >
              <MapPin size={30} />
            </div>
            <h3 className="text-2xl font-black mb-2" style={{ color: "var(--text-primary)" }}>Magicpin</h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Order via Magicpin for Great Savings</p>
            <div className="mt-6 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white" 
                 style={{ background: "#ff3161" }}>
              Order Now
            </div>
          </a>
        </div>

        {/* divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: "var(--card-border)" }} />
          <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Or</span>
          <div className="flex-1 h-px" style={{ background: "var(--card-border)" }} />
        </div>

        {/* call CTA */}
        <div className="text-center">
          <p className="text-[10px] font-black tracking-widest uppercase mb-5"
             style={{ color: "var(--text-muted)" }}>Call Us Directly for Takeaway</p>
          <a
            href={`tel:${siteInfo.phone}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base tracking-wide transition-all hover:scale-105"
            style={{ background: "#3B82F6", color: "#fff" }}
          >
            <PhoneCall size={20} />
            {siteInfo.phone}
          </a>
        </div>

      </SectionReveal>
    </div>
  );
}
