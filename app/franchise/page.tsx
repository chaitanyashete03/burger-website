"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { franchiseBenefits } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

const fieldStyle = {
  background: "var(--input-bg)",
  border: "1px solid var(--input-border)",
  color: "var(--input-text)",
  outline: "none",
};

export default function Franchise() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Hero Header */}
        <SectionReveal className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
              Franchise Opportunity
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}>
            Join the<br /><span style={{ color: "#FF6B35" }}>Kangen Family</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#FF6B35" }} />
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Partner with a proven model that merges culinary excellence with health-conscious values.
          </p>
        </SectionReveal>

        {/* Benefits Section */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
            Franchise <span style={{ color: "#FF6B35" }}>Benefits</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {franchiseBenefits.map((benefit, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <div
                className="group relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#FF6B35]/5"
                />
                <div className="text-[3rem] font-black mb-4 select-none"
                     style={{ color: "var(--number-color)" }}>{String(idx + 1).padStart(2, "0")}</div>
                <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#FF6B35" }} />
                <h3 className="text-xl font-black mb-3" style={{ color: "var(--text-primary)" }}>{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{benefit.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Inquiry Form */}
        <SectionReveal>
          <div id="apply" className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12 mb-20"
               style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>Apply Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "var(--text-primary)" }}>Franchise Inquiry</h2>
            
            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>Application Received!</h3>
                <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
                  Thank you for your interest in the Kangen family. Our expansion team will review your details and reach out within 48–72 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-black tracking-widest uppercase hover:text-[#FF6B35] transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Phone</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Preferred City</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Available Capital</label>
                    <select className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle}>
                      <option>₹5L – ₹10L</option>
                      <option>₹10L – ₹20L</option>
                      <option>Above ₹20L</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                         style={{ color: "var(--text-muted)" }}>Message / Experience</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style={fieldStyle} />
                </div>
                <div className="pt-2 text-center">
                  <button type="submit" className="px-12 py-4 rounded-full font-black text-base tracking-wide transition-all hover:scale-105"
                          style={{ background: "#FF6B35", color: "#fff" }}>
                    Submit Inquiry
                  </button>
                  <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>We respond within 48–72 hours.</p>
                </div>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
