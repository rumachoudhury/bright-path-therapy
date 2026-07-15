"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in a fade/slide-up reveal triggered on scroll into view.
 * Respects prefers-reduced-motion and degrades gracefully without JS
 * (content is visible by default; the "hidden" state only applies once
 * mounted, so there's no flash of invisible content on slow connections).
 */
export default function Reveal({ children, className = "", as: Tag = "div", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
