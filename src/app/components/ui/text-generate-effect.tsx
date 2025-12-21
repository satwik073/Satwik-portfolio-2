"use client";
import { useEffect, useRef, memo } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}

// Memoized component to prevent unnecessary re-renders
export const TextGenerateEffect = memo(function TextGenerateEffect({
  words,
  className,
  filter = false, // Disabled blur by default for better performance
  duration = 0.5,
  delay = 0,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(triggerRef, { once: true, margin: "-10% 0px" });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          // Use transform instead of filter for GPU acceleration
          transform: "translateY(0px)",
        },
        {
          duration: duration ?? 0.5,
          delay: stagger(0.15, { startDelay: delay }),
        }
      );
    }
  }, [isInView, animate, duration, delay]);

  return (
    <motion.span
      ref={(node) => {
        (scope as any).current = node;
        triggerRef.current = node;
      }}
      className={cn(className)}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="text-black dark:text-white leading-tight inline-block mr-[0.25em]"
          style={{
            opacity: 0,
            // Use GPU-accelerated transform instead of filter blur
            transform: "translateY(8px)",
            willChange: "opacity, transform",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
});
