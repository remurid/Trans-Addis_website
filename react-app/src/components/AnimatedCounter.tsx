'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number; 
  duration?: number;  
  delay?: number; 
}

const AnimatedCounter = ({ end, duration = 2.5, delay = 0 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, end, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString();
        }
      },
    });

    return () => controls.stop();
  }, [isInView, end, duration, delay]);

  return <span ref={ref}>0</span>;
};

export default AnimatedCounter;