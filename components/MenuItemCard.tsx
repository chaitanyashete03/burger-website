"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export type DietType = "veg" | "nonVeg" | "none";

interface MenuItemCardProps {
  id: string;
  name: string;
  price?: string;
  type: DietType;
  accentColor?: string;
  onClick?: () => void;
}

export default function MenuItemCard({
  id,
  name,
  price,
  type,
  accentColor = "#3B82F6",
  onClick,
}: MenuItemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dampen = 10;
    setRotateX((y - centerY) / dampen);
    setRotateY(-(x - centerX) / dampen);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Parse trailing piece counts from names e.g. "Chicken Popcorn (15pcs)"
  const pieceMatch = name.match(/(?:\(([^)]*pcs[^)]*)\)|-\s*([\d]+)\s*$)/i);
  let displayName = name;
  let pieceCount = "";

  if (pieceMatch) {
    pieceCount = pieceMatch[1] || pieceMatch[2] + "pcs";
    displayName = name.replace(pieceMatch[0], "").trim();
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-2xl p-6 transition-all duration-300 ease-out cursor-pointer"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`,
      }}
      layoutId={`card-container-${id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${accentColor}15, transparent 60%)` }}
      />
      <div className="flex justify-between items-start mb-3" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-start gap-3">
          {type !== "none" && (
            <div
              className={`mt-1.5 shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-[3px] border-2 ${
                type === "veg" ? "border-green-600" : "border-red-600"
              }`}
            >
              {type === "veg" ? (
                <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
              ) : (
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-red-600" />
              )}
            </div>
          )}
          <div className="flex flex-col">
            <motion.h3
              layoutId={`card-title-${id}`}
              className="text-lg font-black leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {displayName}
            </motion.h3>
            {pieceCount && (
              <span
                className="text-xs font-bold mt-1 px-2 py-0.5 rounded border inline-block w-fit"
                style={{ color: accentColor, borderColor: accentColor }}
              >
                {pieceCount}
              </span>
            )}
          </div>
        </div>
        <motion.span
          layoutId={`card-price-${id}`}
          className="font-black text-lg ml-3 shrink-0"
          style={{ color: accentColor }}
        >
          {price || "—"}
        </motion.span>
      </div>
      <div className="w-6 h-[1px] mt-2" style={{ background: accentColor, transform: "translateZ(20px)" }} />
    </motion.div>
  );
}
