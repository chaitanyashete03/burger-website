"use client";

import React from "react";

export type DietType = "veg" | "nonVeg" | "none";

interface MenuItemCardProps {
  name: string;
  price?: string;
  type: DietType;
  accentColor?: string;
}

export default function MenuItemCard({
  name,
  price,
  type,
  accentColor = "#FF6B35",
}: MenuItemCardProps) {
  return (
    <div
      className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${accentColor}15, transparent 60%)` }}
      />
      <div className="flex justify-between items-start mb-3">
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
          <h3
            className="text-lg font-black leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {name}
          </h3>
        </div>
        <span className="font-black text-lg ml-3 shrink-0" style={{ color: accentColor }}>
          {price || "—"}
        </span>
      </div>
      <div className="w-6 h-[1px] mt-2" style={{ background: accentColor }} />
    </div>
  );
}
