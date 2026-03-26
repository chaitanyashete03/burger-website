"use client";

import { useState } from "react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { faqData } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div
        style={{ background: "var(--page-bg)" }}
        className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span
                className="text-[10px] font-black tracking-[0.4em] uppercase"
                style={{ color: "#FF6B35" }}
              >
                Got Questions?
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#FF6B35" }}>Questions</span>
            </h1>
            <div
              className="w-8 h-[2px] rounded-full mb-5"
              style={{ background: "#FF6B35" }}
            />
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Everything you need to know about Kangen Burgers, our unique
              alkaline water preparation, delivery options, and more.
            </p>
          </SectionReveal>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <SectionReveal key={idx} delay={idx * 0.04}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : idx)
                      }
                      className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200"
                    >
                      <span
                        className="text-base font-bold leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className="flex-shrink-0 transition-transform duration-300"
                        style={{
                          color: "#FF6B35",
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? "500px" : "0px",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div
                        className="px-6 pb-6 text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <div
                          className="w-full h-px mb-4"
                          style={{ background: "var(--card-border)" }}
                        />
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          {/* CTA */}
          <SectionReveal delay={0.3}>
            <div
              className="mt-16 rounded-2xl p-10 text-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="text-2xl font-black mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Still have questions?
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                We&apos;re always happy to help. Reach out to us anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-full font-bold text-sm tracking-wide text-white transition-all hover:scale-105"
                  style={{ background: "#FF6B35" }}
                >
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/919112738490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105"
                  style={{
                    color: "var(--text-primary)",
                    border: "1px solid var(--card-border)",
                    background: "var(--card-bg)",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  );
}
