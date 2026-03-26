import Link from "next/link";
import { siteInfo, aboutText, whyChooseUs, specialOffers } from "@/lib/constants";
import SectionReveal from "@/components/SectionReveal";
import GlassCard from "@/components/GlassCard";
import BurgerScroll from "@/components/BurgerScroll";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <>
      {/* Hero IS the scroll animation */}
      <BurgerScroll />

      {/* ── Kitchen Insight ─────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)]">
              <Image src="/images/scroll-laptop/ezgif-frame-100.jpg" alt="Our Kitchen" fill className="object-cover" />
              <div className="absolute inset-0"
                   style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.15) 0%, transparent 60%)" }} />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
                Behind the Counter
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6"
                style={{ color: "var(--text-primary)" }}>
              Our <span style={{ color: "#FF6B35" }}>Kitchen</span>
            </h2>
            <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#FF6B35" }} />
            <p className="text-base leading-[1.85] mb-8" style={{ color: "var(--text-secondary)" }}>{aboutText.short}</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm font-black tracking-wide uppercase
                         transition-colors hover:opacity-70"
              style={{ color: "#FF6B35" }}>
              Read Our Full Story <span>→</span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── Menu & Variety ─────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--section-dark-bg)" }}>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(139,0,0,0.18) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
                What We Serve
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Our Menu &amp; <span style={{ color: "#FF6B35" }}>Variety</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Delicious Variety", body: "Meticulously crafted burgers and gourmet pizzas designed to tantalize your tastebuds." },
              { n: "02", title: "Crafted with Expertise", body: "Our chefs bring years of culinary excellence, ensuring every bite is a commitment to flavor." },
              { n: "03", title: "Nutritious Ingredients", body: "Enhanced with Kangen Water, our meals prioritize your health without compromising taste." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{ background: "radial-gradient(circle at top left, rgba(255,107,53,0.08), transparent 60%)" }} />
                  <div className="text-[4rem] font-black leading-none mb-4 select-none"
                       style={{ color: "rgba(255,107,53,0.10)" }}>{item.n}</div>
                  <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#FF6B35" }} />
                  <h3 className="text-lg font-black text-white mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About — Premium Dark Editorial ─────────────── */}
      <section
        className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
        style={{ background: "var(--section-dark-bg)" }}
      >
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,0,0,0.25) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal>
            <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] bg-black/20">
              <Image 
                src="/images/about-cafe.jpg" 
                alt="About Kangen Burgers Cafe Front" 
                fill 
                className="object-cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)" }} />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="w-6 h-px" style={{ background: "#FF6B35" }} />
                <span className="text-[9px] font-black tracking-[0.35em] uppercase"
                  style={{ color: "rgba(255,255,255,0.5)" }}>Since 2020</span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>Our Story</span>
              <div className="flex-1 h-px max-w-[3rem]" style={{ background: "linear-gradient(90deg, #FF6B35, transparent)" }} />
            </div>
            <div className="text-[7rem] leading-none font-black select-none mb-[-1.5rem]"
              style={{ color: "rgba(255,107,53,0.08)", lineHeight: 1 }}>&ldquo;</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
              About<br /><span style={{ color: "#FF6B35" }}>Kangen Burgers</span>
            </h2>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] rounded-full" style={{ background: "#FF6B35" }} />
              <div className="flex-1 h-px max-w-[120px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>
            <div className="space-y-5 text-base leading-[1.85] whitespace-pre-line"
              style={{ color: "rgba(255,255,255,0.55)" }}>
              {aboutText.full}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Kangen Water — Themed ──────────────────────── */}
      <section
        className="relative overflow-hidden py-32 lg:py-44 px-6 sm:px-10 flex items-center justify-center"
        style={{ background: "var(--section-kangen-bg)" }}
      >
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,180,200,0.12) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(30,60,140,0.18) 0%, transparent 55%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[500px] h-[500px] rounded-full pointer-events-none"
             style={{ border: "1px solid rgba(0,200,220,0.06)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[340px] h-[340px] rounded-full pointer-events-none"
             style={{ border: "1px solid rgba(0,200,220,0.08)" }} />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="w-8 h-px" style={{ background: "var(--kangen-accent)" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase"
                    style={{ color: "var(--kangen-accent)" }}>Alkaline Science</span>
              <div className="w-8 h-px" style={{ background: "var(--kangen-accent)" }} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6"
                style={{ color: "var(--text-primary)" }}>
              Discover the<br />
              <span style={{ color: "var(--kangen-accent)" }}>Kangen Water</span> Difference
            </h2>
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="w-8 h-[2px] rounded-full" style={{ background: "var(--kangen-accent)" }} />
              <div className="h-px w-16" style={{ background: "var(--divider)" }} />
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
               style={{ color: "var(--text-muted)" }}>
              Alkaline, antioxidant-rich hydration — the secret behind the freshness,
              taste, and nutrition of every Kangen creation.
            </p>
            <Link
              href="/kangen-water"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base
                         tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--kangen-card-bg)",
                border: "1px solid var(--kangen-card-border)",
                color: "var(--text-primary)",
                backdropFilter: "blur(12px)",
              }}
            >
              Explore Kangen Water
              <span style={{ opacity: 0.6 }}>→</span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── Special Offers ─────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
        style={{ background: "var(--section-dark-bg)" }}
      >
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,0,0,0.2) 0%, transparent 65%)" }} />

        <div className="relative max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
                Limited Time
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Special <span style={{ color: "#FF6B35" }}>Offers</span>
            </h2>
            <div className="mt-5 flex flex-col md:flex-row md:items-center gap-3">
              <div className="w-8 h-[2px] rounded-full" style={{ background: "#FF6B35" }} />
              <div className="h-px w-24" style={{ background: "rgba(255,255,255,0.08)" }} />
              <p className="text-sm md:ml-3" style={{ color: "rgba(255,255,255,0.5)"}}>Available only at our physical outlet.</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((offer, idx) => (
              <SectionReveal key={idx} delay={idx * 0.12}>
                <div
                  className="group relative h-full rounded-2xl p-8 flex flex-col justify-between
                             transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(circle at top left, rgba(255,107,53,0.08), transparent 60%)" }}
                  />
                  <div className="text-[4rem] font-black leading-none mb-4 select-none"
                    style={{ color: "rgba(255,107,53,0.12)" }}>{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#FF6B35" }} />
                    <div className="text-[10px] font-black tracking-[0.3em] uppercase mb-3"
                         style={{ color: "#FF6B35" }}>{offer.subtitle}</div>
                    <h3 className="text-xl font-black text-white mb-3 leading-tight">{offer.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {offer.description}
                    </p>
                  </div>
                  <Link href="/menu"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wide
                               transition-colors duration-200 text-white/35 hover:text-accent"
                  >
                    Order Now <span className="text-base">→</span>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>The Kangen Difference</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
              Why Choose <span style={{ color: "#FF6B35" }}>Us</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <SectionReveal key={item.id} delay={idx * 0.1}>
                <div className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                     style={{ background: "var(--card-bg-solid)", border: `1px solid var(--card-border-solid)`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{ background: "radial-gradient(circle at top left, rgba(255,107,53,0.06), transparent 70%)" }} />
                  <div className="text-[3rem] font-black mb-3 select-none" style={{ color: "var(--number-color)" }}>
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#FF6B35" }} />
                  <p className="font-black text-sm uppercase tracking-wide" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <TestimonialsCarousel />
      
      {/* ── Stay Connected ─────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-32 px-6 sm:px-10 text-center"
               style={{ background: "var(--section-dark-bg)" }}>
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,107,53,0.08) 0%, transparent 60%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>Newsletter</span>
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-4">
              Stay <span style={{ color: "#FF6B35" }}>Connected</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Get the latest updates, special combos, and exclusive offers straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-full text-sm font-medium focus:outline-none"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full font-black text-sm tracking-wide transition-all hover:scale-105"
                style={{ background: "#FF6B35", color: "#fff" }}
              >
                Subscribe
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
