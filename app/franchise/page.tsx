"use client";

import { useState } from "react";
import SectionReveal from "../../components/SectionReveal";
import { franchiseBenefits, siteInfo } from "../../lib/constants";

export default function FranchisePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    capital: "₹5L – ₹10L",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Capture to Google Sheets if webhook is configured
    if (siteInfo.googleFranchiseWebhookUrl) {
      try {
        fetch(siteInfo.googleFranchiseWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            source: "Franchise Inquiry",
            ...formData,
            details: formData.message,
            price: formData.capital
          }),
        });
      } catch (err) {
        console.error("Franchise sheet capture failed", err);
      }
    }

    setIsSubmitted(true);
  };

  const fieldStyle = {
    background: "var(--page-bg)",
    border: "1px solid var(--card-border)",
    color: "var(--text-primary)"
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden" 
          style={{ background: "var(--page-bg)" }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
           style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <SectionReveal className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
              Franchise Opportunity
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}>
            Join the<br /><span style={{ color: "#3B82F6" }}>Kangen Family</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#3B82F6" }} />
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Partner with a proven model that merges culinary excellence with health-conscious values.
          </p>
        </SectionReveal>

        {/* Benefits Section */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            Franchise <span style={{ color: "#3B82F6" }}>Benefits</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {franchiseBenefits.map((benefit, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <div
                className="group relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#3B82F6]/5"
                />
                <div className="text-[3rem] font-black mb-4 select-none"
                     style={{ color: "var(--number-color)" }}>{String(idx + 1).padStart(2, "0")}</div>
                <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#3B82F6" }} />
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
              <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Apply Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "var(--text-primary)" }}>Franchise Inquiry</h2>
            
            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>Application Received!</h3>
                <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
                  Thank you for your interest in the Kangen family. Our expansion team will review your details and reach out within 48–72 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-black tracking-widest uppercase hover:text-[#3B82F6] transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Full Name</label>
                    <input type="text" required 
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Email</label>
                    <input type="email" required 
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Phone</label>
                    <input type="tel" required 
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Preferred City</label>
                    <input type="text" required 
                           value={formData.city}
                           onChange={(e) => setFormData({...formData, city: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Available Capital</label>
                    <select className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle}
                            value={formData.capital}
                            onChange={(e) => setFormData({...formData, capital: e.target.value})}>
                      <option>₹5L – ₹10L</option>
                      <option>₹10L – ₹20L</option>
                      <option>Above ₹20L</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                         style={{ color: "var(--text-muted)" }}>Message / Experience</label>
                  <textarea rows={4} required 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style={fieldStyle} />
                </div>
                <div className="pt-2 text-center">
                  <button type="submit" className="px-12 py-4 rounded-full font-black text-base tracking-wide transition-all hover:scale-105"
                          style={{ background: "#3B82F6", color: "#fff" }}>
                    Submit Inquiry
                  </button>
                  <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>We respond within 48–72 hours.</p>
                </div>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
