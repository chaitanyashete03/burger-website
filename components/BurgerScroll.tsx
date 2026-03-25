"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";

const TOTAL_FRAMES = 200;
const MOBILE_BREAKPOINT = 768;

function frameUrl(folder: string, index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/images/${folder}/ezgif-frame-${padded}.jpg`;
}

// ─────────────────────────────────────────────────────────────────────────────
//  EDITORIAL OVERLAY — cinematic, no boxy card
// ─────────────────────────────────────────────────────────────────────────────
function Overlay({
  chapter,
  label,
  accent,
  headline,
  sub,
  opacity,
}: {
  chapter: string;
  label: string;
  accent: string;
  headline: React.ReactNode;
  sub: string;
  // @ts-ignore – MotionValue<number> works fine at runtime
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      // @ts-ignore
      style={{ opacity }}
      className="absolute inset-0 z-20 pointer-events-none
                 flex flex-col justify-start md:justify-center
                 pt-24 md:pt-0 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      {/* ── vertical progress tick ── */}
      <div className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2
                      hidden md:flex flex-col items-center gap-1">
        <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, transparent, ${accent})` }} />
        <span className="text-[10px] font-black tracking-[0.2em] rotate-90 origin-center my-3"
              style={{ color: accent }}>{chapter}</span>
        <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }} />
      </div>

      {/* ── text block ── */}
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">

        {/* chapter + label row */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <span className="text-[10px] md:text-xs font-black tracking-[0.35em] uppercase"
                style={{ color: accent }}>{chapter}</span>
          <div className="flex-1 h-px max-w-[3rem]"
               style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
        </div>

        {/* headline */}
        <h2
          className="font-black leading-[0.95] tracking-tight text-white
                     text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}
        >
          {headline}
        </h2>

        {/* divider */}
        <div className="my-4 md:my-5 flex items-center gap-4">
          <div className="h-px w-8" style={{ background: accent }} />
          <div className="h-px flex-1 max-w-[5rem]"
               style={{ background: "rgba(255,255,255,0.12)" }} />
        </div>

        {/* sub */}
        <p className="text-sm md:text-base leading-relaxed max-w-xs"
           style={{ color: "rgba(255,255,255,0.60)" }}>{sub}</p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function BurgerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const frameRef     = useRef<number>(0);
  const rafRef       = useRef<number | null>(null);

  const [folder, setFolder]       = useState<"scroll-laptop" | "scroll-mobile">("scroll-laptop");
  const [loadedCount, setLoaded]  = useState(0);
  const [ready, setReady]         = useState(false);
  const [heroGone, setHeroGone]   = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // device
  useEffect(() => {
    const pick = () => window.innerWidth < MOBILE_BREAKPOINT ? "scroll-mobile" : "scroll-laptop";
    setFolder(pick());
    let prev = pick();
    const fn = () => { const n = pick(); if (n !== prev) { prev = n; setFolder(n); } };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // draw
  const draw = useCallback((img: HTMLImageElement) => {
    const c = canvasRef.current;
    if (!c || !img.complete || !img.naturalWidth) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const { width: w, height: h } = c.getBoundingClientRect();
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; }
    const s = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const dx = (w - img.naturalWidth  * s) / 2;
    const dy = (h - img.naturalHeight * s) / 2;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, dx, dy, img.naturalWidth * s, img.naturalHeight * s);
  }, []);

  // preload
  useEffect(() => {
    // Determine the frame corresponding to current scroll progress
    const currentP = scrollYProgress.get();
    const initialFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(currentP * TOTAL_FRAMES));

    imagesRef.current = [];
    setLoaded(0);
    setReady(false);
    frameRef.current = initialFrame;

    let cancelled = false, loaded = 0;
    const imgs = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = frameUrl(folder, i + 1);
      img.onload = () => {
        if (cancelled) return;
        loaded++;
        setLoaded(loaded);
        if (loaded === TOTAL_FRAMES) setReady(true);
        // Draw only if it is the current frame
        if (i === frameRef.current) draw(img);
      };
      img.onerror = () => {
        if (!cancelled) {
          loaded++;
          setLoaded(loaded);
        }
      };
      return img;
    });
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folder]);

  // scroll → frame
  useEffect(() => {
    const u = scrollYProgress.on("change", (p) => {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.floor(p * TOTAL_FRAMES));
      if (idx === frameRef.current) return;
      frameRef.current = idx;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => { const img = imagesRef.current[idx]; if (img) draw(img); });
    });
    return () => { u(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [scrollYProgress, draw]);

  // resize
  useEffect(() => {
    const fn = () => { const img = imagesRef.current[frameRef.current]; if (img) draw(img); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [draw]);

  // ── hero ──────────────────────────────────────────────────────────────────
  const heroO = useTransform(scrollYProgress, [0, 0.04],  [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.05],  [0, -80]);
  const hintO = useTransform(scrollYProgress, [0, 0.03],  [1, 0]);
  useMotionValueEvent(scrollYProgress, "change", (p) => setHeroGone(p > 0.05));

  // ── 5 overlay phases ──────────────────────────────────────────────────────
  const o1 = useTransform(scrollYProgress, [0.08, 0.13, 0.22, 0.27], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.29, 0.34, 0.44, 0.49], [0, 1, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.51, 0.55, 0.64, 0.69], [0, 1, 1, 0]);
  const o4 = useTransform(scrollYProgress, [0.71, 0.75, 0.84, 0.89], [0, 1, 1, 0]);
  const o5 = useTransform(scrollYProgress, [0.91, 0.94, 0.97, 1.00], [0, 1, 1, 0]);

  // ── exit ─────────────────────────────────────────────────────────────────
  const exitO  = useTransform(scrollYProgress, [0.97, 1.0], [0, 1]);
  const exitS  = useTransform(scrollYProgress, [0.97, 1.0], [1, 0.96]);

  // ── progress bar (thin line at bottom of sticky) ──────────────────────────
  const barW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: "700vh", background: "#0d0000" }}>
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ scale: exitS, transformOrigin: "center top" }}
      >

        {/* canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* bottom vignette — darkens lower edge so text pops */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 40%), " +
                           "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, transparent 25%)",
             }} />

        {/* loading */}
        {!ready && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6"
               style={{ background: "#0d0000" }}>
            <div className="text-center">
              <p className="text-white/25 text-[9px] tracking-[0.5em] uppercase mb-8">Kangen Burgers</p>
              <div className="w-48 h-px bg-white/10 overflow-hidden mx-auto">
                <div className="h-full transition-all duration-200"
                     style={{ width: `${pct}%`, background: "#FF6B35" }} />
              </div>
              <p className="text-white/20 text-[10px] mt-3 tracking-widest">{pct}%</p>
            </div>
          </div>
        )}

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {!heroGone && (
          <motion.div style={{ opacity: heroO, y: heroY }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.25,0.4,0.25,1] }}
              className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ background: "#FF6B35" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase"
                    style={{ color: "#FF6B35" }}>Fresh · Alkaline · Handcrafted</span>
              <div className="h-px w-8" style={{ background: "#FF6B35" }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25,0.4,0.25,1] }}
              className="font-black leading-[0.95] tracking-tight text-white
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl"
              style={{ textShadow: "0 4px 48px rgba(0,0,0,0.8)" }}>
              Enjoy Healthy &amp;<br />
              <em className="not-italic" style={{ color: "#FF6B35" }}>Tasty Burgers</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-7 text-base md:text-lg max-w-md leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}>
              Alkaline Kangen Water inside every recipe — the secret to a healthier, bolder burger.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <Link href="/menu"
                className="px-10 py-4 rounded-full font-bold text-base tracking-wide
                           shadow-2xl transition-all hover:scale-105 hover:shadow-orange-500/30"
                style={{ background: "#FF6B35", color: "#fff" }}>
                Explore Menu
              </Link>
              <Link href="/order-online"
                className="px-10 py-4 rounded-full font-bold text-base tracking-wide
                           transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.06)",
                         border: "1px solid rgba(255,255,255,0.18)", color: "#fff",
                         backdropFilter: "blur(12px)" }}>
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        )}

        {/* ── 5 EDITORIAL OVERLAYS ─────────────────────────────────────────── */}
        <Overlay opacity={o1} chapter="01" accent="#FF6B35"
          label="The Beginning"
          headline={<>Every Bite<br />Tells a Story</>}
          sub="Each ingredient sourced with passion. Assembled with craft. Delivered with pride." />

        <Overlay opacity={o2} chapter="02" accent="#c8a96b"
          label="The Foundation"
          headline={<>Built on the<br />Perfect Base</>}
          sub="A golden sesame bun — pillowy soft, lightly toasted, holding it all together." />

        <Overlay opacity={o3} chapter="03" accent="#4fb3e8"
          label="Alkaline Science"
          headline={<>Kangen Water<br />Makes It Better</>}
          sub="Alkaline hydration locks in moisture, boosts nutrition, and deepens every flavor." />

        <Overlay opacity={o4} chapter="04" accent="#76c442"
          label="Nature's Best"
          headline={<>Layered Fresh,<br />Every Time</>}
          sub="Crisp lettuce, vine-ripe tomatoes, sweet onion — stacked order by order." />

        <Overlay opacity={o5} chapter="05" accent="#FFB830"
          label="The Grand Finale"
          headline={<>The Ultimate<br />Kangen Burger</>}
          sub="Molten cheese, succulent patty, our signature Kangen sauce. Perfection served." />

        {/* ── progress bar ──────────────────────────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-30">
          <motion.div className="h-full" style={{ width: barW, background: "#FF6B35" }} />
        </div>

        {/* ── exit dissolve ─────────────────────────────────────────────────── */}
        <motion.div className="absolute inset-0 z-40 pointer-events-none"
          style={{ opacity: exitO, background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 65%)" }} />

        {/* ── scroll hint ───────────────────────────────────────────────────── */}
        <motion.div style={{ opacity: hintO }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-white/25 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-4 h-7 rounded-full border border-white/15 flex justify-center pt-1">
            <motion.div className="w-0.5 h-1.5 rounded-full"
              style={{ background: "#FF6B35" }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
