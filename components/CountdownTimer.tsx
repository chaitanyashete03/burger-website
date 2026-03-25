"use client";

import { useState, useEffect } from "react";
import { offerEndDate } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft(offerEndDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const t = getTimeLeft(offerEndDate);
      setTimeLeft(t);
      if (!t) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check how urgent (< 3 days)
  const isUrgent = timeLeft !== null && timeLeft.days < 3;

  if (timeLeft === null) {
    return (
      <div className="flex items-center justify-center gap-3 my-8">
        <div
          className="px-6 py-3 rounded-xl text-sm font-black tracking-widest uppercase"
          style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}
        >
          Offer Expired
        </div>
      </div>
    );
  }

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="my-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-5 h-px" style={{ background: "#FF6B35" }} />
        <span className="text-[9px] font-black tracking-[0.35em] uppercase" style={{ color: "#FF6B35" }}>
          Offer Ends In
        </span>
        <div className="w-5 h-px" style={{ background: "#FF6B35" }} />
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {blocks.map(({ label, value }) => (
          <div
            key={label}
            className={`flex flex-col items-center justify-center
                        w-16 h-20 sm:w-20 sm:h-24 rounded-2xl
                        transition-all duration-500 ${isUrgent ? "countdown-urgent" : ""}`}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: isUrgent
                ? "1px solid rgba(255,107,53,0.4)"
                : "1px solid rgba(255,255,255,0.08)",
              boxShadow: isUrgent
                ? "0 0 20px rgba(255,107,53,0.15)"
                : "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <span
              className="text-2xl sm:text-3xl font-black leading-none tabular-nums"
              style={{ color: isUrgent ? "#FF6B35" : "#fff" }}
            >
              {String(value).padStart(2, "0")}
            </span>
            <span
              className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase mt-1.5"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
