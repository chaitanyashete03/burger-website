import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { blogPosts } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata("blog");

export default function Blog() {
  return (
    <div style={{ background: "#0f0a08" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <SectionReveal className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>Stories & Insights</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-white mb-5">
            Our <span style={{ color: "#FF6B35" }}>Blog</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-5" style={{ background: "#FF6B35" }} />
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Insights, news, and mouth-watering stories from the Kangen Burgers kitchen.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <SectionReveal key={idx} delay={idx * 0.08}>
              <div
                className="group relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top left, rgba(255,107,53,0.07), transparent 60%)" }}
                />
                {/* thumbnail placeholder */}
                <div className="h-44 relative overflow-hidden flex-shrink-0"
                     style={{ background: "rgba(255,107,53,0.06)" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[4rem] font-black select-none"
                          style={{ color: "rgba(255,107,53,0.12)" }}>{String(idx + 1).padStart(2,"0")}</span>
                  </div>
                </div>
                {/* content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-black tracking-widest uppercase mb-3"
                        style={{ color: "#FF6B35" }}>{post.date}</span>
                  <h2 className="text-lg font-black text-white mb-3 leading-tight line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#FF6B35] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="w-6 h-[1px] mb-3" style={{ background: "#FF6B35" }} />
                  <p className="text-sm leading-relaxed flex-1 line-clamp-3"
                     style={{ color: "rgba(255,255,255,0.40)" }}>{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-black tracking-wide uppercase transition-colors hover:text-[#FF6B35]"
                    style={{ color: "rgba(255,255,255,0.30)" }}
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
