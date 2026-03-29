"use client";

import { useState } from "react";
import SectionReveal from "../../components/SectionReveal";
import { kangenClub, siteInfo } from "../../lib/constants";

export default function KangenClub() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      if (siteInfo.googleSheetsWebhookUrl) {
        setIsSubmitting(true);
        setErrorMsg("");
        try {
          const res = await fetch(siteInfo.googleSheetsWebhookUrl, {
            method: "POST",
            body: JSON.stringify({
              source: "Kangen Club",
              phone: phone,
              details: "New Loyalty Program Signup",
              price: "-",
            }),
          });
          const data = await res.json();
          if (data && data.success === false) {
             setErrorMsg(data.error || "This phone number is already registered!");
             setIsSubmitting(false);
             return; // Stop submission
          }
        } catch (err) {
          console.error("Sheet capture failed", err);
        }
        setIsSubmitting(false);
      }

      // Open WhatsApp with pre-filled message
      window.open(
        `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(
          `Hi! I'd like to join the Kangen Club. My phone number is ${phone}`
        )}`,
        "_blank"
      );
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{ background: "var(--page-bg)" }}
      className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <SectionReveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
              Loyalty Program
            </span>
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Kangen <span style={{ color: "#3B82F6" }}>Club</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-5 mx-auto" style={{ background: "#3B82F6" }} />
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {kangenClub.tagline}
          </p>
        </SectionReveal>

        {/* Signup Card */}
        <SectionReveal className="mb-20">
          <div
            className="max-w-lg mx-auto rounded-2xl p-8 sm:p-10 text-center"
            style={{
              background: "var(--card-bg)",
              border: "2px solid #3B82F6",
              boxShadow: "0 8px 40px rgba(59,130,246,0.12)",
            }}
          >
            <div className="text-5xl mb-4">🏆</div>
            <h2 className="text-2xl font-black mb-2" style={{ color: "var(--text-primary)" }}>
              Join the Club — It&apos;s Free!
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Register with your phone number and start earning rewards instantly.
            </p>
            {!submitted ? (
              <form onSubmit={handleJoin} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                      setErrorMsg(""); // Clear error when typing
                    }}
                    placeholder="Enter your 10-digit phone number"
                    required
                    minLength={10}
                    maxLength={10}
                    disabled={isSubmitting}
                    className="flex-1 px-5 py-3.5 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3B82F6] disabled:opacity-50"
                    style={{ background: "var(--page-bg)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full font-black text-sm tracking-wide text-white transition-all hover:scale-105 active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                    style={{ background: "#3B82F6" }}
                  >
                    {isSubmitting ? "Checking..." : "Join Now"}
                  </button>
                </div>
                {errorMsg && (
                   <div className="text-red-500 text-sm font-bold text-left px-4 animate-in fade-in">
                     {errorMsg}
                   </div>
                )}
              </form>
            ) : (
              <div className="py-4">
                <div className="text-3xl mb-2">✅</div>
                <p className="font-bold text-lg" style={{ color: "#3B82F6" }}>Welcome to Kangen Club!</p>
                <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                  Complete your registration on WhatsApp to start earning rewards.
                </p>
              </div>
            )}
          </div>
        </SectionReveal>

        {/* Perks Grid */}
        <SectionReveal className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--text-primary)" }}>
              Member <span style={{ color: "#3B82F6" }}>Perks</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kangenClub.perks.map((perk, idx) => (
              <SectionReveal key={idx} delay={idx * 0.06}>
                <div
                  className="group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
                >
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: "rgba(59,130,246,0.08)" }}
                  >
                    {perk.icon}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(59,130,246,0.15)" }}
                    />
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ color: "var(--text-primary)" }}>
                    {perk.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {perk.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        {/* How It Works */}
        <SectionReveal className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--text-primary)" }}>
              How It <span style={{ color: "#3B82F6" }}>Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {kangenClub.howItWorks.map((step, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div
                    className="text-[4rem] font-black leading-none mb-3 select-none"
                    style={{ color: "rgba(59,130,246,0.1)" }}
                  >
                    {step.step}
                  </div>
                  <div className="w-6 h-[2px] mx-auto mb-3 rounded-full" style={{ background: "#3B82F6" }} />
                  <h3 className="text-xl font-black mb-2" style={{ color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        {/* Bottom CTA */}
        <SectionReveal>
          <div
            className="rounded-2xl p-10 sm:p-14 text-center"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <h2 className="text-3xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Start Earning <span style={{ color: "#3B82F6" }}>Today</span>
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              Visit Kangen Burgers, give us your phone number, and your first order starts earning points!
            </p>
            <a
              href={`https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to join the Kangen Club loyalty program.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 inline-block"
              style={{ background: "#3B82F6" }}
            >
              Join on WhatsApp
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
