"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/components/GlassCard";
import DarkModeToggle from "@/components/DarkModeToggle";

import { useIsDarkMode } from "@/hooks/useIsDarkMode";

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
  const isDark = useIsDarkMode();

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
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
    <header
      className={cn(
        "fixed top-0 w-full z-[90] transition-all duration-500",
        scrolled
          ? "py-0"
          : "py-2"
      )}
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="z-50 font-black text-xl tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Image 
                src={isDark ? "/logo-white.png" : "/logo-black.png"} 
                alt="Kangen Burgers Logo" 
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-1 leading-none">
              <span style={{ color: "#FF6B35" }}>KANGEN</span>
              <span style={{ color: "var(--text-primary)" }}>BURGERS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-semibold tracking-wide transition-colors duration-200"
                  style={{
                    color: isActive ? "#FF6B35" : "var(--nav-text)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "var(--nav-text-hover)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "var(--nav-text)";
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <Link
              href="/order-online"
              className="btn-glow px-6 py-2.5 rounded-full font-bold text-sm tracking-wide text-white"
            >
              Order Online
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden z-50 transition-colors"
            style={{ color: "var(--nav-text)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile overlay */}
    {isOpen && (
      <div
        className="md:hidden fixed inset-0 z-[80] flex flex-col items-center justify-start pt-32 pb-12 gap-8 overflow-y-auto"
        style={{ background: "var(--page-bg)" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black tracking-tight transition-colors hover:text-[#FF6B35]"
            style={{ color: pathname === link.href ? "#FF6B35" : "var(--text-primary)" }}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center gap-4 mt-2">
          <DarkModeToggle />
        </div>
        <Link
          href="/order-online"
          onClick={() => setIsOpen(false)}
          className="mt-2 px-10 py-4 rounded-full font-black text-lg btn-glow text-white"
        >
          Order Online
        </Link>
      </div>
    )}
    </>
  );
}
