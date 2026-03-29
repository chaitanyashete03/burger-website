import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";
import { cateringPackages, siteInfo } from "../../lib/constants";
import { generatePageMetadata } from "../../lib/seo";

export const metadata = generatePageMetadata("catering");

export default function Catering() {
  return (
    <div
      style={{ background: "var(--page-bg)" }}
      className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span
              className="text-[10px] font-black tracking-[0.4em] uppercase"
              style={{ color: "#3B82F6" }}
            >
              Parties & Events
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            Catering & <span style={{ color: "#3B82F6" }}>Party Orders</span>
          </h1>
          <div
            className="w-8 h-[2px] rounded-full mb-5"
            style={{ background: "#3B82F6" }}
          />
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Make your celebrations unforgettable with Kangen Burgers. From
            birthday parties to corporate events, we&apos;ve got packages to
            suit every occasion and budget.
          </p>
        </SectionReveal>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cateringPackages.map((pkg, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <div
                className="group relative h-full rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--card-bg)",
                  border: pkg.popular
                    ? "2px solid #3B82F6"
                    : "1px solid var(--card-border)",
                  boxShadow: pkg.popular
                    ? "0 8px 32px rgba(59,130,246,0.15)"
                    : "none",
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div
                    className="absolute -top-3 left-8 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-white"
                    style={{ background: "#3B82F6" }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(59,130,246,0.06), transparent 60%)",
                  }}
                />
                {/* Header */}
                <div className="mb-6">
                  <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
                  <h3
                    className="text-2xl font-black mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: "#3B82F6" }}
                  >
                    {pkg.subtitle}
                  </p>
                </div>
                {/* Price */}
                <div className="mb-6">
                  <span
                    className="text-4xl font-black"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className="text-sm ml-2 font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    / {pkg.serves}
                  </span>
                </div>
                {/* Items list */}
                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#3B82F6" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* CTA */}
                <a
                  href={`https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Hi! I'm interested in the "${pkg.name}" catering package for my event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: pkg.popular ? "#3B82F6" : "transparent",
                    color: pkg.popular ? "#fff" : "var(--text-primary)",
                    border: pkg.popular
                      ? "none"
                      : "1px solid var(--card-border)",
                  }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Custom CTA */}
        <SectionReveal>
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <h2
              className="text-2xl font-black mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Need a Custom Package?
            </h2>
            <p
              className="text-sm mb-6 max-w-md mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              We can create a bespoke catering plan tailored to your exact
              requirements, guest count, and budget. Just reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full font-bold text-sm tracking-wide text-white transition-all hover:scale-105"
                style={{ background: "#3B82F6" }}
              >
                Contact Us
              </Link>
              <a
                href={`tel:${siteInfo.phone}`}
                className="px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105"
                style={{
                  color: "var(--text-primary)",
                  border: "1px solid var(--card-border)",
                  background: "var(--card-bg)",
                }}
              >
                Call {siteInfo.phone}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
