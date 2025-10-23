"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxMountains() {
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, [0, 600], [0, 60]);
  const yMid = useTransform(scrollY, [0, 600], [0, 120]);
  const yFront = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <motion.div style={{ y: yBack }} className="absolute inset-x-0 top-0 h-[60vh]" aria-hidden>
        <div className="w-full h-full opacity-20 bg-gradient-to-b from-mediumBlue/40 to-transparent" />
      </motion.div>
      <motion.div style={{ y: yMid }} className="absolute inset-x-0 top-10 h-[55vh]" aria-hidden>
        <div className="w-full h-full opacity-25 bg-gradient-to-b from-darkBlue/50 to-transparent" />
      </motion.div>
      <motion.div style={{ y: yFront }} className="absolute inset-x-0 top-20 h-[50vh]" aria-hidden>
        <div className="w-full h-full opacity-35 bg-gradient-to-b from-orange/30 to-transparent" />
      </motion.div>
    </div>
  );
}

