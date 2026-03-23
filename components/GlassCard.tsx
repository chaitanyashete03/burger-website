import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
      dark 
        ? "bg-black/40 border-white/10" 
        : "bg-white/70 border-white/40",
      className
    )}>
      {children}
    </div>
  );
}
