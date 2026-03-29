"use client";

import { useState } from "react";
import SectionReveal from "../../components/SectionReveal";
import { siteInfo } from "../../lib/constants";
import { generatePageMetadata } from "../../lib/seo";

const fieldStyle = {
  background: "var(--input-bg)",
  border: "1px solid var(--input-border)",
  color: "var(--input-text)",
  outline: "none",
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <SectionReveal className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>Get in Touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}>
            Contact <span style={{ color: "#3B82F6" }}>Us</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-5" style={{ background: "#3B82F6" }} />
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We'd love to hear from you — always ready to answer questions or receive feedback.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Details + Map */}
          <SectionReveal>
            <div className="flex flex-col gap-6">
              {/* store details */}
              <div className="rounded-2xl p-8" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                <div className="w-6 h-[2px] mb-4 rounded-full" style={{ background: "#3B82F6" }} />
                <h3 className="text-xl font-black mb-6" style={{ color: "var(--text-primary)" }}>Store Details</h3>
                <div className="space-y-5">
                  {[
                    { label: "Address", value: siteInfo.address, href: siteInfo.mapUrl },
                    { label: "Phone", value: siteInfo.phone, href: `tel:${siteInfo.phone}` },
                    { label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
                  ].map(({ label, value, href }) => (
                    <div key={label}>
                      <span className="block text-[10px] font-black tracking-widest uppercase mb-1"
                            style={{ color: "var(--text-muted)" }}>{label}</span>
                      {href ? (
                        <a href={href} target={label === "Address" ? "_blank" : undefined} rel={label === "Address" ? "noopener noreferrer" : undefined} className="text-sm hover:text-[#3B82F6] transition-colors"
                           style={{ color: "var(--text-secondary)" }}>{value}</a>
                      ) : (
                        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* map */}
              <div className="h-[340px] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--card-border)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.3803888861985!2d73.67388900000003!3d18.736538600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b163be0c7683%3A0x9cc4c420bc6b6587!2sKangen%20Burger%27s%20cafe%20%7C%20Best%20cafe%20in%20Yashwant%20Nagar%20%7C%20Talegaon%20Dabhade!5e0!3m2!1sen!2sin!4v1774434716133!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-none grayscale"
                  title="Kangen Burgers Location"
                />
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={0.2}>
            <div className="rounded-2xl p-8 md:p-10 h-full"
                 style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
              <div className="w-6 h-[2px] mb-4 rounded-full" style={{ background: "#3B82F6" }} />
              <h2 className="text-2xl font-black mb-8" style={{ color: "var(--text-primary)" }}>Send a Message</h2>
              
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>Message Sent!</h3>
                  <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
                    We've received your message and will get back to you shortly. Thank you for reaching out!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-xs font-black tracking-widest uppercase hover:text-[#3B82F6] transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Email</label>
                    <input type="email" required 
                           pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                           title="Please enter a valid email address."
                           className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                           style={{ color: "var(--text-muted)" }}>Message</label>
                    <textarea rows={5} required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style={fieldStyle} />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl font-black text-base tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
                          style={{ background: "#3B82F6", color: "#fff" }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>

        </div>
      </div>
    </div>
  );
}
