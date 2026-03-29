"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ComboCardProps {
  name: string;
  items: string[];
  price?: string;
  originalPrice?: string;
  accentColor?: string;
}

export default function ComboCard({
  name,
  items,
  price,
  originalPrice,
  accentColor = "#3B82F6",
}: ComboCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative rounded-2xl p-6 transition-all duration-300"
      style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${accentColor}15, transparent 60%)` }}
      />
      <div className="flex justify-between items-start mb-3">
        <h3
          className="text-lg font-black leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </h3>
        <div className="flex flex-col items-end shrink-0 ml-3">
          <span className="font-black text-lg" style={{ color: accentColor }}>
            {price || "—"}
          </span>
          {originalPrice && (
            <span className="text-sm line-through opacity-60" style={{ color: "var(--text-secondary)" }}>
              {originalPrice}
            </span>
          )}
        </div>
      </div>
      <div className="w-6 h-[1px] mb-4" style={{ background: accentColor }} />
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm font-bold transition-colors w-full"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>
          {isExpanded ? "Hide Details" : `View Details (Includes ${items.length} items)`}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: accentColor }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
