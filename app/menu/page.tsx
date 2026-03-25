import SectionReveal from "@/components/SectionReveal";
import { menuItems } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata("menu");

function MenuSection({
  label,
  accent,
  title,
  items,
  cols = 2,
}: {
  label: string;
  accent: string;
  title: string;
  items: { name: string; price: string; description: string }[];
  cols?: 2 | 3;
}) {
  return (
    <SectionReveal className="mb-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px" style={{ background: accent }} />
        <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: accent }}>
          {label}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "var(--text-primary)" }}>{title}</h2>
      <div className={`grid grid-cols-1 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-5`}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(circle at top left, ${accent}15, transparent 60%)` }}
            />
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-black leading-tight" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
              <span className="font-black text-lg ml-3 shrink-0" style={{ color: accent }}>{item.price}</span>
            </div>
            <div className="w-6 h-[1px] mb-3" style={{ background: accent }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}

export default function Menu() {
  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* page header */}
        <SectionReveal className="mb-20">
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

        <MenuSection label="Signature" accent="#FF6B35" title="Craft Burgers" items={menuItems.burgers} />
        <MenuSection label="Stone Baked" accent="#c8a96b" title="Gourmet Pizzas" items={menuItems.pizzas} />
        <MenuSection label="Refreshing" accent="#4fb3e8" title="Beverages" items={menuItems.beverages} cols={3} />

      </div>
    </div>
  );
}
