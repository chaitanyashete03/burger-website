"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { testimonials } from "@/lib/constants";

const AUTOPLAY_INTERVAL = 5000;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Swipe handler
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const item = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section
      className="relative overflow-hidden py-28 lg:py-36 px-6 sm:px-10 lg:px-20"
      style={{ background: "var(--page-bg)" }}
    >
      {/* radial glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
            <span
              className="text-[10px] font-black tracking-[0.4em] uppercase"
              style={{ color: "#FF6B35" }}
            >
              Testimonials
            </span>
            <div className="w-8 h-px" style={{ background: "#FF6B35" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
              style={{ color: "var(--text-primary)" }}>
            What Our <span style={{ color: "#FF6B35" }}>Customers</span> Say
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative min-h-[280px] sm:min-h-[240px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <div
                className="relative rounded-3xl p-8 sm:p-12 text-center"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Quote icon */}
                <div
                  className="absolute top-4 left-6 text-[5rem] leading-none font-black select-none pointer-events-none"
                  style={{ color: "var(--number-color)" }}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={i < item.rating ? "#FF6B35" : "none"}
                      stroke={i < item.rating ? "#FF6B35" : "var(--card-border)"}
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
                  style={{ color: "var(--text-secondary)" }}
                >
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  {/* Avatar circle with initials */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-black"
                    style={{
                      background: "rgba(255,107,53,0.08)",
                      color: "#FF6B35",
                      border: "1px solid rgba(255,107,53,0.15)",
                    }}
                  >
                    {item.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <p className="font-black text-sm" style={{ color: "var(--text-primary)" }}>{item.name}</p>
                  <p
                    className="text-[10px] font-bold tracking-widest uppercase mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-6 w-10 h-10 rounded-full flex items-center justify-center
                       transition-all hover:scale-110"
            style={{
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              color: "var(--text-secondary)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-6 w-10 h-10 rounded-full flex items-center justify-center
                       transition-all hover:scale-110"
            style={{
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              color: "var(--text-secondary)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: idx === current ? "24px" : "8px",
                height: "8px",
                background: idx === current ? "#FF6B35" : "var(--card-border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
