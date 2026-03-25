import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata("kangenWater");

const benefits = [
  {
    n: "01",
    title: "Alkalizes the Body",
    body: "Helps restore balance to your body's pH levels, reducing acidity from processed foods.",
  },
  {
    n: "02",
    title: "Antioxidant Rich",
    body: "Fights free radicals and oxidative stress to keep your cells healthy and vibrant.",
  },
  {
    n: "03",
    title: "Better Hydration & Taste",
    body: "Micro-clustered molecules penetrate ingredients more deeply, unlocking richer, bolder natural flavour.",
  },
  {
    n: "04",
    title: "Enhanced Nutrition",
    body: "Preserves vitamins and nutrients better than regular water during cooking and preparation.",
  },
];

export default function KangenWaterPage() {
  return (
    <div style={{ background: "var(--section-kangen-bg)" }} className="min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28 px-6 sm:px-10 lg:px-16">
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(0,180,200,0.12) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(30,60,140,0.15) 0%, transparent 55%)" }} />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "var(--kangen-accent)" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "var(--kangen-accent)" }}>Alkaline Science</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6"
                style={{ color: "var(--text-primary)" }}>
              The Secret Behind<br /><span style={{ color: "var(--kangen-accent)" }}>Our Taste</span>
            </h1>
            <div className="w-8 h-[2px] rounded-full mb-7" style={{ background: "var(--kangen-accent)" }} />
            <p className="text-base leading-[1.85] mb-10" style={{ color: "var(--text-secondary)" }}>
              At Kangen Burgers, we use revolutionary Kangen Water — alkaline, antioxidant-rich hydration
              that enhances the deliciousness and nutritional value of every dish we serve.
            </p>
            <Link href="/menu"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-base tracking-wide transition-all hover:scale-105"
              style={{ background: "var(--kangen-card-bg)", border: "1px solid var(--kangen-card-border)", color: "var(--text-primary)", backdropFilter: "blur(12px)" }}>
              Explore Our Menu <span style={{ opacity: 0.6 }}>→</span>
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            {/* visual card */}
            <div className="relative h-[420px] rounded-3xl overflow-hidden flex items-center justify-center"
                 style={{ background: "var(--kangen-card-bg)", border: "1px solid var(--kangen-card-border)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              w-56 h-56 rounded-full"
                   style={{ background: "radial-gradient(circle, rgba(0,200,220,0.15) 0%, transparent 70%)" }} />
              <div className="relative text-center p-8">
                <div className="text-7xl font-black mb-3 select-none" style={{ color: "rgba(0,200,220,0.20)" }}>H₂O</div>
                <div className="w-8 h-[1px] mx-auto mb-3" style={{ background: "var(--kangen-accent)" }} />
                <h3 className="text-xl font-black mb-2" style={{ color: "var(--text-primary)" }}>Kangen Water</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>pH 8.5 – 9.5 Alkaline</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 sm:px-10 lg:px-16" style={{ background: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "var(--kangen-accent)" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "var(--kangen-accent)" }}>Why It Matters</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
              The <span style={{ color: "var(--kangen-accent)" }}>Benefits</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5"
                     style={{ background: "var(--kangen-card-bg)", border: "1px solid var(--kangen-card-border)" }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{ background: "radial-gradient(circle at top left, rgba(0,200,220,0.08), transparent 60%)" }} />
                  <div className="text-[3.5rem] font-black mb-3 select-none" style={{ color: "rgba(0,200,220,0.15)" }}>{b.n}</div>
                  <div className="w-6 h-[1px] mb-3" style={{ background: "var(--kangen-accent)" }} />
                  <h3 className="text-lg font-black mb-2" style={{ color: "var(--text-primary)" }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-10 text-center relative overflow-hidden" style={{ background: "var(--page-bg)" }}>
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,200,220,0.06) 0%, transparent 70%)" }} />
        <SectionReveal className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-5" style={{ color: "var(--text-primary)" }}>
            Experience "The <span style={{ color: "var(--kangen-accent)" }}>Kangen Twist</span>"
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            Visit any Kangen Burgers outlet and taste the alkaline difference — your body will thank you.
          </p>
          <Link href="/menu"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base tracking-wide transition-all hover:scale-105"
            style={{ background: "var(--kangen-accent)", color: "#000" }}>
            Browse Our Menu →
          </Link>
        </SectionReveal>
      </section>

    </div>
  );
}
