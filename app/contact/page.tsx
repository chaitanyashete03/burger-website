import SectionReveal from "@/components/SectionReveal";
import { siteInfo } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata("contact");

const fieldStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#fff",
  outline: "none",
};

export default function Contact() {
  return (
    <div style={{ background: "#0f0a08" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <SectionReveal className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>Get in Touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-white mb-5">
            Contact <span style={{ color: "#FF6B35" }}>Us</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-5" style={{ background: "#FF6B35" }} />
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            We'd love to hear from you — always ready to answer questions or receive feedback.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Details + Map */}
          <SectionReveal>
            <div className="flex flex-col gap-6">
              {/* store details */}
              <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-6 h-[2px] mb-4 rounded-full" style={{ background: "#FF6B35" }} />
                <h3 className="text-xl font-black text-white mb-6">Store Details</h3>
                <div className="space-y-5">
                  {[
                    { label: "Address", value: siteInfo.address, href: siteInfo.mapUrl },
                    { label: "Phone", value: siteInfo.phone, href: `tel:${siteInfo.phone}` },
                    { label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
                  ].map(({ label, value, href }) => (
                    <div key={label}>
                      <span className="block text-[10px] font-black tracking-widest uppercase mb-1"
                            style={{ color: "rgba(255,255,255,0.25)" }}>{label}</span>
                      {href ? (
                        <a href={href} className="text-sm hover:text-[#FF6B35] transition-colors"
                           style={{ color: "rgba(255,255,255,0.65)" }}>{value}</a>
                      ) : (
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* map */}
              <div className="h-[340px] rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3780.207802871147!2d73.6811201!3d18.7289896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQzJzQ0LjQiTiA3M8KwNDAnNTIuMCJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
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
                 style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-6 h-[2px] mb-4 rounded-full" style={{ background: "#FF6B35" }} />
              <h2 className="text-2xl font-black text-white mb-8">Send a Message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                         style={{ color: "rgba(255,255,255,0.35)" }}>Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                </div>
                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                         style={{ color: "rgba(255,255,255,0.35)" }}>Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={fieldStyle} />
                </div>
                <div>
                  <label className="block text-[10px] font-black tracking-widest uppercase mb-2"
                         style={{ color: "rgba(255,255,255,0.35)" }}>Message</label>
                  <textarea rows={5} required className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style={fieldStyle} />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl font-black text-base tracking-wide transition-all hover:opacity-90"
                        style={{ background: "#FF6B35", color: "#fff" }}>
                  Send Message
                </button>
              </form>
            </div>
          </SectionReveal>

        </div>
      </div>
    </div>
  );
}
