"use client";

import React, { useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { DietType } from "./MenuItemCard";

interface Category {
  id: string;
  label: string;
}

interface MenuFilterBarProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  dietFilter: DietType | "all";
  setDietFilter: (filter: DietType | "all") => void;
}

export default function MenuFilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  dietFilter,
  setDietFilter,
}: MenuFilterBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll active category into view
  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector('[data-active="true"]') as HTMLButtonElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-16 z-30 backdrop-blur-md bg-[var(--page-bg)]/80 py-4 mb-6 border-b border-[var(--card-border)] transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        {/* Search */}
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-[var(--card-border)] rounded-full leading-5 bg-[var(--card-bg)] text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] sm:text-sm transition-colors duration-300"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Veg/Non-Veg Toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto p-1 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]">
          {(["all", "veg", "nonVeg"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setDietFilter(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                dietFilter === type
                  ? type === "veg"
                    ? "bg-green-600/10 text-green-600"
                    : type === "nonVeg"
                    ? "bg-red-600/10 text-red-600"
                    : "bg-[#3B82F6]/10 text-[#3B82F6]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {type === "all" ? "All" : type === "veg" ? "Veg" : "Non-Veg"}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Scrollable Tabs */}
      <div
        ref={scrollRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        ` }} />
        {categories.map((category) => (
          <button
            key={category.id}
            data-active={activeCategory === category.id}
            onClick={() => {
              setActiveCategory(category.id);
              // Small delay to ensure state updates before scroll
              setTimeout(() => {
                const element = document.getElementById(`category-${category.id}`);
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY - 180;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 50);
            }}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20"
                : "bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)] hover:bg-[var(--card-border)] hover:text-[var(--text-primary)]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
