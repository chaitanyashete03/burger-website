"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/components/GlassCard";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Franchise", href: "/franchise" },
  { name: "Kangen Water", href: "/kangen-water" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount just in case
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-0"
          : "py-2"
      )}
      style={{
        background: scrolled ? "rgba(15,10,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="z-50 font-black text-xl tracking-tight">
            <span style={{ color: "#FF6B35" }}>KANGEN</span>
            <span className="text-white">BURGERS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] font-semibold tracking-wide transition-colors duration-200",
                  pathname === link.href
                    ? "text-[#FF6B35]"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/order-online"
              className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              Order Online
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden z-50 transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(15,10,8,0.97)", backdropFilter: "blur(24px)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black tracking-tight text-white hover:text-[#FF6B35] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/order-online"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 rounded-full font-black text-lg transition-transform active:scale-95"
            style={{ background: "#FF6B35", color: "#fff" }}
          >
            Order Online
          </Link>
        </div>
      )}
    </header>
  );
}
