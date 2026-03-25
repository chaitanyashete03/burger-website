import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import { Utensils, ShoppingBag, PhoneCall } from "lucide-react";
import { siteInfo } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata("orderOnline");

export default function OrderOnline() {
  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6">

      <SectionReveal className="w-full max-w-2xl">

        {/* header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>Delivery & Pickup</span>
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}>
            Order <span style={{ color: "#FF6B35" }}>Online</span>
          </h1>
          <div className="flex justify-center mb-5">
            <div className="w-8 h-[2px] rounded-full" style={{ background: "#FF6B35" }} />
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Enjoy our delicious, healthy burgers right at your door — choose your preferred platform.
          </p>
        </div>

        {/* platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {[
            { href: "#", icon: <Utensils size={28} />, name: "Zomato", sub: "Order via Zomato", accent: "#e23744" },
            { href: "#", icon: <ShoppingBag size={28} />, name: "Swiggy", sub: "Order via Swiggy", accent: "#fc8019" },
          ].map(({ href, icon, name, sub, accent }) => (
            <a
              key={name}
              href={href}
              className="group relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${accent}15, transparent 65%)` }}
              />
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: `${accent}18`, color: accent }}
              >
                {icon}
              </div>
              <h3 className="text-2xl font-black mb-1" style={{ color: "var(--text-primary)" }}>{name}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{sub}</p>
            </a>
          ))}
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
            style={{ background: "#FF6B35", color: "#fff" }}
          >
            <PhoneCall size={20} />
            {siteInfo.phone}
          </a>
        </div>

      </SectionReveal>
    </div>
  );
}
