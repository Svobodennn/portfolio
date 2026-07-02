"use client";

import { cn } from "@/lib/utils";
import { m, useReducedMotion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const defaultVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : yOffset,
      opacity: 0,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      y: shouldReduceMotion ? 0 : -yOffset,
      opacity: 1,
      filter: "blur(0px)",
    },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {characters.map((char, i) => (
          <m.span
            key={i}
            initial="hidden"
            animate="visible"
            variants={combinedVariants}
            transition={{
              delay: delay + i * characterDelay,
              ease: "easeOut",
            }}
            className={cn("inline-block", className)}
            style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
          >
            {char}
          </m.span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <m.span
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          delay,
          ease: "easeOut",
        }}
        className={cn("inline-block", className)}
      >
        {text}
      </m.span>
    </div>
  );
};

export default BlurFadeText;
