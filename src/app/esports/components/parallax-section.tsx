"use client";

import type React from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  offset = 50,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
