"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";

export default function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Welcome to "
          words={["LakeCity Photography", "Professional Studios", "Creative Vision", "Timeless Memories"]}
        />
      </motion.div>
    </div>
  );
}