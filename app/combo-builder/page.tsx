"use client";

import { useState, useMemo } from "react";
import SectionReveal from "../../components/SectionReveal";
import { comboBuilderOptions, siteInfo } from "../../lib/constants";

type SelectedItems = {
  main: number | null;
  side: number | null;
  drink: number | null;
};

export default function ComboBuilder() {
  const [selected, setSelected] = useState<SelectedItems>({
    main: null,
    side: null,
    drink: null,
  });

  const [phone, setPhone] = useState("");

  const { mains, sides, drinks, comboDiscount } = comboBuilderOptions;

  const computed = useMemo(() => {
    const mainPrice = selected.main !== null ? mains[selected.main].price : 0;
    const sidePrice = selected.side !== null ? sides[selected.side].price : 0;
    const drinkPrice = selected.drink !== null ? drinks[selected.drink].price : 0;
    const total = mainPrice + sidePrice + drinkPrice;
    const allSelected = selected.main !== null && selected.side !== null && selected.drink !== null;
    const discount = allSelected ? Math.round(total * comboDiscount / 100) : 0;
    const comboPrice = total - discount;
    return { mainPrice, sidePrice, drinkPrice, total, discount, comboPrice, allSelected };
  }, [selected, mains, sides, drinks, comboDiscount]);

  const handleOrder = async () => {
    if (!computed.allSelected || phone.length < 10) return;
    const main = mains[selected.main!];
    const side = sides[selected.side!];
    const drink = drinks[selected.drink!];

    const getMainEmoji = (cat: string) => {
      if (cat === "Burger") return "🍔";
      if (cat === "Frankie") return "🥙";
      if (cat === "Sandwich") return "🥪";
      return "🍽️";
    };

    const getSideEmoji = (cat: string) => {
      if (cat === "Fries") return "🍟";
      return "🍗";
    };

    const msg = `Hi! I'd like to order my custom combo:\n${getMainEmoji(main.category)} ${main.name} (₹${main.price})\n${getSideEmoji(side.category)} ${side.name} (₹${side.price})\n🥤 ${drink.name} (₹${drink.price})\n\n💰 Combo Price: ₹${computed.comboPrice} (saved ₹${computed.discount})`;
    
    // Capture to Google Sheets if webhook is configured
    if (siteInfo.googleSheetsWebhookUrl) {
      try {
        fetch(siteInfo.googleSheetsWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            source: "Combo Builder",
            phone: phone,
            details: `Combo: ${main.name} + ${side.name} + ${drink.name}`,
            price: `₹${computed.comboPrice}`,
          }),
        });
      } catch (err) {
        console.error("Sheet capture failed", err);
      }
    }

    window.open(
      `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const categories = [
    {
      key: "main" as const,
      label: "The Main Attraction",
      emoji: "🍔",
      step: "01",
      items: mains.map((m) => ({ 
        name: m.name, 
        price: m.price, 
        badge: m.type === "veg" ? "🟢" : "🔴",
        category: m.category 
      })),
    },
    {
      key: "side" as const,
      label: "The Perfect Side",
      emoji: "🍟",
      step: "02",
      items: sides.map((s) => ({ 
        name: s.name, 
        price: s.price, 
        badge: "🟢",
        category: s.category
      })),
    },
    {
      key: "drink" as const,
      label: "The Refreshment",
      emoji: "🥤",
      step: "03",
      items: drinks.map((d) => ({ 
        name: d.name, 
        price: d.price, 
        badge: "",
        category: d.category
      })),
    },
  ];

  const getMainEmoji = (cat: string) => {
    if (cat === "Burger") return "🍔";
    if (cat === "Frankie") return "🥙";
    if (cat === "Sandwich") return "🥪";
    return "🍽️";
  };

  const getSideEmoji = (cat: string) => {
    if (cat === "Fries") return "🍟";
    return "🍗";
  };

  return (
    <div style={{ background: "var(--page-bg)" }} className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <SectionReveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3B82F6" }}>
              Build Your Own
            </span>
            <div className="w-8 h-px" style={{ background: "#3B82F6" }} />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Combo <span style={{ color: "#3B82F6" }}>Builder</span>
          </h1>
          <div className="w-8 h-[2px] rounded-full mb-5 mx-auto" style={{ background: "#3B82F6" }} />
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Pick a main + side + drink and get <span className="font-black text-[#3B82F6]">{comboDiscount}% OFF</span> your total! Build your perfect meal below.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Selection Columns */}
          {categories.map((cat) => (
            <SectionReveal key={cat.key}>
              <div className="flex flex-col h-[600px]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <div className="text-[10px] font-black tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                      Step {cat.step}
                    </div>
                    <h2 className="text-xl font-black" style={{ color: "var(--text-primary)" }}>
                      {cat.label}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                  {cat.items.map((item, idx) => {
                    const isSelected = selected[cat.key] === idx;
                    return (
                      <button
                        key={item.name}
                        onClick={() =>
                          setSelected((prev) => ({
                            ...prev,
                            [cat.key]: prev[cat.key] === idx ? null : idx,
                          }))
                        }
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group"
                        style={{
                          background: isSelected ? "rgba(59,130,246,0.1)" : "var(--card-bg)",
                          border: isSelected ? "2px solid #3B82F6" : "1px solid var(--card-border)",
                          transform: isSelected ? "scale(1.01)" : "scale(1)",
                        }}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {cat.key === "main" && (
                            <span className="text-xs flex-shrink-0">{item.badge}</span>
                          )}
                          <div className="flex flex-col min-w-0">
                             <span className="text-[9px] uppercase font-black opacity-30 leading-none mb-1">
                               {item.category}
                             </span>
                             <span
                              className="text-sm font-bold truncate leading-tight"
                              style={{ color: isSelected ? "#3B82F6" : "var(--text-primary)" }}
                            >
                              {item.name}
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-sm font-black flex-shrink-0"
                          style={{ color: isSelected ? "#3B82F6" : "var(--text-muted)" }}
                        >
                          ₹{item.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Sticky Price Summary */}
        <SectionReveal>
          <div
            className="sticky bottom-6 z-30 rounded-2xl p-6 sm:p-8 transition-all duration-300"
            style={{
              background: "var(--card-bg)",
              border: computed.allSelected ? "2px solid #3B82F6" : "1px solid var(--card-border)",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Summary */}
              <div className="flex-1 w-full">
                <div className="text-[10px] font-black tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                  Your Custom Combo
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="flex items-center gap-1">
                    {selected.main !== null ? getMainEmoji(mains[selected.main].category) : "🍔"}{" "}
                    <span className="font-bold" style={{ color: selected.main !== null ? "var(--text-primary)" : "var(--text-muted)" }}>
                      {selected.main !== null ? mains[selected.main].name : "Pick a Main"}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    {selected.side !== null ? getSideEmoji(sides[selected.side].category) : "🍟"}{" "}
                    <span className="font-bold" style={{ color: selected.side !== null ? "var(--text-primary)" : "var(--text-muted)" }}>
                      {selected.side !== null ? sides[selected.side].name : "Pick a Side"}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    🥤{" "}
                    <span className="font-bold" style={{ color: selected.drink !== null ? "var(--text-primary)" : "var(--text-muted)" }}>
                      {selected.drink !== null ? drinks[selected.drink].name : "Pick a Drink"}
                    </span>
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                {computed.allSelected && (
                  <div className="w-full sm:w-64">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="Enter Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                      style={{ background: "var(--page-bg)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
                    />
                  </div>
                )}
                <div className="text-right flex flex-col items-center sm:items-end">
                  {computed.allSelected && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm line-through" style={{ color: "var(--text-muted)" }}>
                        ₹{computed.total}
                      </span>
                      <span
                        className="text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                        style={{ background: "#3B82F6" }}
                      >
                        SAVE ₹{computed.discount}
                      </span>
                    </div>
                  )}
                  <div className="text-3xl font-black" style={{ color: computed.allSelected ? "#3B82F6" : "var(--text-muted)" }}>
                    ₹{computed.allSelected ? computed.comboPrice : computed.total || 0}
                  </div>
                </div>
                <button
                  onClick={handleOrder}
                  disabled={!computed.allSelected || (computed.allSelected && phone.length < 10)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl shadow-blue-500/20"
                  style={{ background: "#3B82F6" }}
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
