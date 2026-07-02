"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import { ReactNode } from "react";

// Loads only the DOM animation feature bundle and enforces the lightweight
// `m` component everywhere (strict), shrinking the framer-motion client cost.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
