"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Beach Wedding",
    link: "#beach-wedding",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=600&fit=crop",
  },
  {
    title: "Fashion Model",
    link: "#fashion",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop",
  },
  {
    title: "Maternity Glow",
    link: "#maternity",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
  },
  {
    title: "Garden Wedding",
    link: "#garden-wedding",
    thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop",
  },
  {
    title: "Newborn Baby",
    link: "#newborn",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
  },
  {
    title: "Vintage Wedding",
    link: "#vintage-wedding",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop",
  },
  {
    title: "Professional Headshot",
    link: "#headshot",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
  },
  {
    title: "Couple Engagement",
    link: "#engagement",
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop",
  },
  {
    title: "Outdoor Maternity",
    link: "#outdoor-maternity",
    thumbnail: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&h=600&fit=crop",
  },
  {
    title: "Church Wedding",
    link: "#church-wedding",
    thumbnail: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=600&fit=crop",
  },
  {
    title: "Glamour Portrait",
    link: "#glamour",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop",
  },
  {
    title: "Family Portrait",
    link: "#family",
    thumbnail: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=600&fit=crop",
  },
  {
    title: "Rustic Wedding",
    link: "#rustic-wedding",
    thumbnail: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=600&fit=crop",
  },
  {
    title: "Studio Model",
    link: "#studio-model",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop",
  },
  {
    title: "Pregnancy Silhouette",
    link: "#pregnancy",
    thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
  },
];