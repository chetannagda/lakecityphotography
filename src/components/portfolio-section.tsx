"use client";
import React from "react";
import ParallaxScrollDemo from "@/components/parallax-scroll-demo";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen bg-black text-white py-32 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">Portfolio</h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-12 text-center max-w-3xl mx-auto">
          Explore our collection of stunning photography work across various styles and occasions.
        </p>
        <ParallaxScrollDemo />
      </div>
    </section>
  );
}