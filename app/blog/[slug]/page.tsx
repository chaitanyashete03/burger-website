import { blogPosts } from "@/lib/constants";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateBlogMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found | Kangen Burgers" };
  return generateBlogMetadata(post);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div style={{ background: "#0f0a08" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          {/* back link */}
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase mb-12 transition-colors hover:text-[#FF6B35]"
            style={{ color: "rgba(255,255,255,0.30)" }}>
            ← Back to Blog
          </Link>

          {/* header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#FF6B35" }}>
              {post!.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
            {post!.title}
          </h1>

          <div className="w-8 h-[2px] rounded-full mb-10" style={{ background: "#FF6B35" }} />

          {/* article */}
          <article>
            <p className="text-lg leading-[1.85] mb-8 font-medium"
               style={{ color: "rgba(255,255,255,0.65)" }}>
              {post!.excerpt}
            </p>

            <div className="space-y-6 text-base leading-[1.9]" style={{ color: "rgba(255,255,255,0.50)" }}>
              <h2 className="text-xl font-black text-white mt-10 mb-3">The Role of Quality and Health</h2>
              <p>
                At Kangen Burgers, we believe that great food starts with great ingredients.
                Every burger, pizza, and beverage is crafted using high-quality produce sourced from
                trusted local farmers — ensuring maximum freshness, nutrition, and taste in every bite.
              </p>
              <p>
                The secret that sets us apart is our use of alkaline Kangen water (pH 8.5–9.5)
                in our cooking process. This micro-clustered water penetrates ingredients more deeply,
                unlocking richer natural flavours while preserving vitamins and minerals that regular
                cooking water often strips away.
              </p>

              <h2 className="text-xl font-black text-white mt-10 mb-3">Bringing It All Together</h2>
              <p>
                Whether it&apos;s the 100% organic patty, the farm-fresh veggies, or the unique twist
                of our alkaline water preparation — what makes our burgers truly stand out is our
                unwavering commitment to quality, health, and an incredible eating experience.
              </p>
              <p>
                We invite you to come in, taste the Kangen difference, and understand why health-conscious
                food lovers across Pune keep coming back for more.
              </p>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-14 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.30)" }}>
              Enjoyed reading? Try it for yourself.
            </p>
            <Link href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm tracking-wide transition-all hover:scale-105"
              style={{ background: "#FF6B35", color: "#fff" }}>
              Explore Our Menu →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
