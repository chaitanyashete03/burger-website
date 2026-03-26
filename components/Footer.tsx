"use client";

import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/lib/constants";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";

export default function Footer() {
  const isDark = useIsDarkMode();

  return (
    <footer style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--footer-border)" }} className="pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* brand */}
          <div>
            <Link href="/" className="font-black text-xl tracking-tight mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Image 
                  src={isDark ? "/logo-white.png" : "/logo-black.png"} 
                  alt="Kangen Burgers Logo" 
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="leading-none text-[#FF6B35]">KANGEN</span>
                <span className="leading-none text-white/90">BURGERS</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              {siteInfo.headline}
            </p>
            <div className="flex gap-4">
              <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                 style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                 style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                 style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {["/", "/menu", "/franchise", "/kangen-water", "/blog", "/faq", "/catering"].map((href, i) => {
                const labels = ["Home", "Menu", "Franchise", "Kangen Water", "Blog", "FAQ", "Catering"];
                return (
                  <li key={href}>
                    <Link href={href}
                      className="text-sm transition-colors hover:text-[#FF6B35]"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              <li>
                <span className="block text-[10px] font-black tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.3)" }}>Address</span>
                <a href={siteInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35] transition-colors inline-block">
                  {siteInfo.address}
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-black tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.3)" }}>Phone</span>
                <a href={`tel:${siteInfo.phone}`} className="hover:text-[#FF6B35] transition-colors">{siteInfo.phone}</a>
              </li>
              <li>
                <span className="block text-[10px] font-black tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.3)" }}>Email</span>
                <a href={`mailto:${siteInfo.email}`} className="hover:text-[#FF6B35] transition-colors">{siteInfo.email}</a>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Newsletter</h4>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>Subscribe for special offers &amp; updates.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                required
                className="px-4 py-2.5 rounded-lg text-sm focus:outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "#fff" }}
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                style={{ background: "#FF6B35", color: "#fff" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
             style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}>
          <p>&copy; {new Date().getFullYear()} Kangen Burgers. All rights reserved.</p>
          <div className="flex gap-6">
            {[["Privacy Policy", "/privacy"], ["Terms", "/terms"], ["Refund Policy", "/refund-policy"]].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-[#FF6B35] transition-colors">{label}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
