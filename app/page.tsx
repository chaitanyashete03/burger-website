import Link from "next/link";
import { siteInfo, aboutText, whyChooseUs, specialOffers, faqData, kangenClub } from "../lib/constants";
import SectionReveal from "../components/SectionReveal";
import GlassCard from "../components/GlassCard";
import BurgerScroll from "../components/BurgerScroll";
import Image from "next/image";
import { generatePageMetadata } from "../lib/seo";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Magnetic from "../components/Magnetic";

export const metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <>
      {/* Hero IS the scroll animation */}
      <BurgerScroll />

      {/* ── Kitchen Insight ─────────────────────────────── */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden" 
               style={{ background: "var(--page-bg-secondary)" }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
             style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" delay={0.2}>
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
                  Behind the Counter
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6"
                  style={{ color: "var(--text-primary)" }}>
                Our <span style={{ color: "#3B82F6" }}>Kitchen</span>
              </h2>
              <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#3B82F6" }} />
              <p className="text-base leading-[1.85] mb-8" style={{ color: "var(--text-secondary)" }}>{aboutText.short}</p>
              <Magnetic>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-black tracking-wide uppercase
                             transition-colors hover:opacity-70"
                  style={{ color: "#3B82F6" }}>
                  Read Our Full Story <span>→</span>
                </Link>
              </Magnetic>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/about-cafe.jpg" alt="Our Kitchen" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Menu & Variety ─────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--section-dark-bg)" }}>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(30,58,138,0.18) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
                What We Serve
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Our Menu &amp; <span style={{ color: "#3B82F6" }}>Variety</span>
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
                       style={{ background: "radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 60%)" }} />
                  <div className="text-[4rem] font-black leading-none mb-4 select-none"
                       style={{ color: "rgba(59,130,246,0.10)" }}>{item.n}</div>
                  <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
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
          style={{ background: "radial-gradient(circle, rgba(30,58,138,0.25) 0%, transparent 70%)" }}
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
                <div className="w-6 h-px" style={{ background: "#3B82F6" }} />
                <span className="text-[9px] font-black tracking-[0.35em] uppercase"
                  style={{ color: "rgba(255,255,255,0.5)" }}>Since 2020</span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Our Story</span>
              <div className="flex-1 h-px max-w-[3rem]" style={{ background: "linear-gradient(90deg, #3B82F6, transparent)" }} />
            </div>
            <div className="text-[7rem] leading-none font-black select-none mb-[-1.5rem]"
              style={{ color: "rgba(59,130,246,0.08)", lineHeight: 1 }}>&ldquo;</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
              About<br /><span style={{ color: "#3B82F6" }}>Kangen Burgers</span>
            </h2>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] rounded-full" style={{ background: "#3B82F6" }} />
              <div className="flex-1 h-px max-w-[120px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>
            <div className="space-y-5 text-base leading-[1.85] whitespace-pre-line"
              style={{ color: "rgba(255,255,255,0.55)" }}>
              {aboutText.full}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Kangen Club CTA ────────────────────────────── */}
      <section className="relative py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Join the Club</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
                  Eat More. Save More.<br />
                  Join the <span style={{ color: "#3B82F6" }}>Kangen Club</span>
                </h2>
                <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                  Our loyalty program rewards you for every bite. Buy 5 burgers and get the 6th one free! 
                  Earn points, celebrate with birthday discounts, and unlock exclusive member-only perks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {kangenClub.perks.slice(0, 2).map((perk, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl">{perk.icon}</span>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{perk.title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Magnetic>
                  <Link href="/kangen-club" 
                        className="inline-block px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105"
                        style={{ background: "#3B82F6" }}>
                    Join Kangen Club Now
                  </Link>
                </Magnetic>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/scroll-laptop/ezgif-frame-002.jpg" alt="Kangen Club" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <div className="text-center p-8 rounded-full border-2 border-dashed border-white/40 aspect-square flex flex-col items-center justify-center animate-pulse">
                    <span className="text-5xl mb-2">🎁</span>
                    <span className="text-white font-black text-xl tracking-widest uppercase">Member Gifts</span>
                  </div>
                </div>
              </div>
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
            <Magnetic>
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
            </Magnetic>
          </SectionReveal>
        </div>
      </section>

      {/* ── Special Offers ─────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
        style={{ background: "var(--section-dark-bg)" }}
      >
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 65%)" }} />

        <div className="relative max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
                Limited Time
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Special <span style={{ color: "#3B82F6" }}>Offers</span>
            </h2>
            <div className="mt-5 flex flex-col md:flex-row md:items-center gap-3">
              <div className="w-8 h-[2px] rounded-full" style={{ background: "#3B82F6" }} />
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
                    style={{ background: "radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 60%)" }}
                  />
                  <div className="text-[4rem] font-black leading-none mb-4 select-none"
                    style={{ color: "rgba(59,130,246,0.12)" }}>{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
                    <div className="text-[10px] font-black tracking-[0.3em] uppercase mb-3"
                         style={{ color: "#3B82F6" }}>{offer.subtitle}</div>
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

      {/* ── Combo Builder Promo ────────────────────────── */}
      <section className="relative py-28 lg:py-36 px-6 sm:px-10 lg:px-20" style={{ background: "var(--page-bg)" }}>
        <SectionReveal>
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden" 
                 style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", backdropFilter: "blur(10px)" }}>
            <div className="absolute top-0 right-0 p-6 text-6xl opacity-10 rotate-12 select-none">🍔</div>
            <div className="absolute bottom-0 left-0 p-6 text-6xl opacity-10 -rotate-12 select-none">🍟</div>
            
            <h3 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
              Build Your Own <span style={{ color: "#3B82F6" }}>Custom Combo</span>
            </h3>
            <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
              Craving something specific? Mix and match your favorite burger, fries, and drink 
              to create your perfect meal and <span className="font-black text-[#3B82F6]">save 15% instantly!</span>
            </p>
            <Magnetic>
              <Link href="/combo-builder" 
                    className="inline-block px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105"
                    style={{ background: "#3B82F6" }}>
                Launch Combo Builder
              </Link>
            </Magnetic>
          </div>
        </div>
      </SectionReveal>
      </section>

      {/* ── Why Choose Us ──────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>The Kangen Difference</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
              Why Choose <span style={{ color: "#3B82F6" }}>Us</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <SectionReveal key={item.id} delay={idx * 0.1}>
                <div className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                     style={{ background: "var(--card-bg-solid)", border: `1px solid var(--card-border-solid)`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{ background: "radial-gradient(circle at top left, rgba(59,130,246,0.06), transparent 70%)" }} />
                  <div className="text-[3rem] font-black mb-3 select-none" style={{ color: "var(--number-color)" }}>
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
                  <p className="font-black text-sm uppercase tracking-wide" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--page-bg)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Got Questions?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
              Frequently Asked <span style={{ color: "#3B82F6" }}>Questions</span>
            </h2>
            <div className="w-8 h-[2px] rounded-full mb-10" style={{ background: "#3B82F6" }} />
          </SectionReveal>
          <div className="space-y-3 mb-10">
            {faqData.slice(0, 5).map((faq, idx) => (
              <SectionReveal key={idx} delay={idx * 0.05}>
                <div className="rounded-2xl p-6" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>{faq.question}</h3>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>{faq.answer}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center">
              <Link href="/faq" className="px-8 py-3.5 rounded-full font-black text-sm tracking-wide text-white transition-all hover:scale-105 inline-block" style={{ background: "#3B82F6" }}>View All FAQs</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Google Reviews CTA ────────────────────────── */}
      <section className="relative py-20 lg:py-28 px-6 sm:px-10 lg:px-20"
               style={{ background: "var(--page-bg)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <div className="rounded-2xl p-10 sm:p-14" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill={star <= 4 ? "#FBBF24" : "none"} stroke="#FBBF24" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="ml-2 text-2xl font-black" style={{ color: "var(--text-primary)" }}>4.6</span>
              </div>
              <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Based on 320+ Google Reviews</p>
              <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                Love Our Food? <span style={{ color: "#3B82F6" }}>Leave a Review!</span>
              </h2>
              <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
                Your reviews help us grow and serve you better. Share your experience on Google!
              </p>
              <a
                href={siteInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 inline-block"
                style={{ background: "#3B82F6" }}
              >
                Write a Google Review ★
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <TestimonialsCarousel />
      
      {/* ── Stay Connected ─────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-32 px-6 sm:px-10 text-center"
               style={{ background: "var(--section-dark-bg)" }}>
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Newsletter</span>
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-4">
              Stay <span style={{ color: "#3B82F6" }}>Connected</span>
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
                style={{ background: "#3B82F6", color: "#fff" }}
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
