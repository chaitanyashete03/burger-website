"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { siteInfo } from "../lib/constants";
import { calculateDistance, requestUserLocation } from "../lib/geolocation";
import Link from "next/link";

export default function NearbyAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    // Check if dismissed today
    const dismissedAt = localStorage.getItem("nearby-alert-dismissed");
    if (dismissedAt) {
      const dismissedDate = new Date(parseInt(dismissedAt));
      const today = new Date();
      if (dismissedDate.toDateString() === today.toDateString()) {
        return; // Don't show again today
      }
    }

    // Auto-trigger location request
    requestUserLocation()
      .then((position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        
        const dist = calculateDistance(
          userLat,
          userLon,
          siteInfo.coordinates.lat,
          siteInfo.coordinates.lng
        );
        
        if (dist <= siteInfo.coordinates.radiusKm) {
          setDistance(Math.round(dist * 1000)); // Convert to meters
          // Add a slight delay for better UX
          setTimeout(() => setIsVisible(true), 2500); 
        }
      })
      .catch((err) => {
        console.log("Geolocation error/denied:", err.message);
      });
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("nearby-alert-dismissed", Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 sm:bottom-6 sm:right-6 z-[100] max-w-sm w-[calc(100vw-48px)] sm:w-full p-6 rounded-3xl shadow-2xl overflow-hidden"
          style={{ 
            background: "var(--card-bg)", 
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--card-border)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)"
          }}
        >
          {/* Subtle gradient glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6]/10 to-transparent blur-xl pointer-events-none" />
          
          <button 
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1.5 rounded-full transition-colors hover:bg-white/10"
            style={{ color: "var(--text-muted)" }}
          >
            <X size={16} />
          </button>

          <div className="flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-[#3B82F6]/10">
              <MapPin className="text-[#3B82F6]" size={24} />
            </div>
            
            <div className="flex-1 pr-6">
              <h3 className="font-black text-lg leading-tight mb-2" style={{ color: "var(--text-primary)" }}>
                You're close by!
              </h3>
              <p className="text-sm mb-5 leading-snug" style={{ color: "var(--text-secondary)" }}>
                You are only <span className="font-bold text-[#3B82F6]">{distance}m</span> away from Kangen Burgers. Drop by for a fresh alkaline burger!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={siteInfo.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 bg-[#3B82F6] text-white rounded-xl text-sm font-black hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
                >
                  Get Directions
                </a>
                <Link 
                  href="/combo-builder"
                  onClick={handleDismiss}
                  className="flex-1 text-center py-3 rounded-xl text-sm font-black transition-colors"
                  style={{ background: "var(--page-bg)", color: "var(--text-primary)", border: "1px solid var(--card-border)" }}
                >
                  Order Ahead
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
