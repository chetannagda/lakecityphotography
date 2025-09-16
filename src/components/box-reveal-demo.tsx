"use client";

import { BoxReveal } from "@/components/ui/box-reveal";

export default function BoxRevealDemo() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Professional <span className="text-blue-500">Photography</span>
        </h3>
      </BoxReveal>

      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <p className="text-lg md:text-xl text-neutral-300 mb-6">
          At Lake City Photography, we believe every moment tells a story worth preserving. 
          With over a decade of experience, we specialize in capturing life's most <span className="text-blue-500">precious moments</span> through our lens.
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <p className="text-lg md:text-xl text-neutral-300 mb-6">
          From intimate weddings to corporate events, family portraits to artistic compositions, 
          we bring <span className="text-blue-500">passion</span> and <span className="text-blue-500">professionalism</span> to every shoot.
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <p className="text-lg md:text-xl text-neutral-300">
          Our mission is to create timeless memories that you'll <span className="text-blue-500">treasure forever</span>.
        </p>
      </BoxReveal>
    </div>
  );
}