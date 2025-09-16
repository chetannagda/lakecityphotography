"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BoxRevealProps {
  children: React.ReactNode;
  className?: string;
  boxColor?: string;
  duration?: number;
}

export const BoxReveal = ({
  children,
  className,
  boxColor = "#5046e6",
  duration = 0.5,
}: BoxRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
        transition={{ duration: duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={isInView ? { left: "100%" } : { left: 0 }}
        transition={{ duration: duration, ease: "easeInOut" }}
        style={{ backgroundColor: boxColor }}
        className="absolute top-0 h-full w-full"
      />
    </div>
  );
};