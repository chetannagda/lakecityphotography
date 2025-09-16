"use client";
import React from "react";
import LayoutTextFlipDemo from "@/components/layout-text-flip-demo";
import BoxRevealDemo from "@/components/box-reveal-demo";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-32 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">About Us</h2>
        <div className="mb-12">
          <LayoutTextFlipDemo />
        </div>
        <div className="py-12">
          <BoxRevealDemo />
        </div>
      </div>
    </section>
  );
}
