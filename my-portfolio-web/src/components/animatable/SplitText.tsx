"use client";

import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
}

export default function SplitText({ text, className }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      // Obtenemos todas las spans de palabra
      const words = containerRef.current.querySelectorAll(".split-word");

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  const words = text.split(" ").map((word, index) => (
    <span key={index} className="split-word inline-block mr-1">
      {word}
    </span>
  ));

  return (
    <div className="container" ref={containerRef}>
      <p className={` ${className || ""}`}>{words}</p>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        justify-content: left;
        align-items: left;
        width: 100%;
        text-align: left;
        visibility: hidden;
      }

      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
