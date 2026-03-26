import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { siteInfo } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata("burgersInTalegaon");

export default function BurgersInTalegaon() {
  return (
    <div
      style={{ background: "var(--page-bg)" }}
      className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
              Talegaon Dabhade
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Best Burgers in{" "}
            <span style={{ color: "#FF6B35" }}>Talegaon Dabhade</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-6" style={{ background: "#FF6B35" }} />
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Kangen Burgers is Talegaon Dabhade&apos;s favourite burger destination, 
            serving handcrafted burgers, gourmet pizzas, crispy snacks, and refreshing beverages — 
            all prepared with the unique health benefits of alkaline Kangen Water. Located right at 
            Chatrapati Shivaji Maharaj Chowk on Station Road, we&apos;re just minutes from Talegaon Railway Station.
          </p>
        </SectionReveal>

        {/* Why Section */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
            Why Talegaon Loves <span style={{ color: "#FF6B35" }}>Kangen Burgers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Kangen Water-Infused", desc: "Every dish is prepared using ionized alkaline water for better taste and health benefits." },
              { title: "Extensive Menu", desc: "40+ burgers, pizzas, pastas, snacks, cakes, and beverages — both vegetarian and non-vegetarian." },
              { title: "Premium Hygiene", desc: "We use hospital-grade 2.5 pH acidic water to sanitize surfaces and ingredients before cooking." },
              { title: "Prime Location", desc: "Located at Station Road, Yashwant Nagar — easily accessible from Talegaon Railway Station and bus stand." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="w-6 h-[2px] mb-3 rounded-full" style={{ background: "#FF6B35" }} />
                <h3 className="text-lg font-black mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Location + Map */}
        <SectionReveal className="mb-16">
          <h2 className="text-3xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Find Us in <span style={{ color: "#FF6B35" }}>Talegaon Dabhade</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
              <div className="space-y-5">
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Address</span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{siteInfo.address}</p>
                </div>
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Phone</span>
                  <a href={`tel:${siteInfo.phone}`} className="text-sm hover:text-[#FF6B35] transition-colors" style={{ color: "var(--text-secondary)" }}>{siteInfo.phone}</a>
                </div>
                <div>
                  <span className="block text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Hours</span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Monday – Sunday, 10:00 AM – 10:00 PM</p>
                </div>
                <div className="flex gap-3 pt-4">
                  <Link href="/menu" className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105" style={{ background: "#FF6B35" }}>
                    View Menu
                  </Link>
                  <Link href="/order-online" className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105" style={{ color: "var(--text-primary)", border: "1px solid var(--card-border)", background: "var(--card-bg)" }}>
                    Order Online
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[300px] lg:h-auto rounded-2xl overflow-hidden" style={{ border: "1px solid var(--card-border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.3803888861985!2d73.67388900000003!3d18.736538600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b163be0c7683%3A0x9cc4c420bc6b6587!2sKangen%20Burger%27s%20cafe%20%7C%20Best%20cafe%20in%20Yashwant%20Nagar%20%7C%20Talegaon%20Dabhade!5e0!3m2!1sen!2sin!4v1774434716133!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-none grayscale"
                title="Kangen Burgers Location in Talegaon Dabhade"
              />
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <h2 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Ready to taste the best burgers in Talegaon?
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              Visit us today or order online for delivery & takeaway.
            </p>
            <Link href="/order-online" className="px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 inline-block" style={{ background: "#FF6B35" }}>
              Order Now
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
