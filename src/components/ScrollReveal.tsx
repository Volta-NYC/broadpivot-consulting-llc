"use client";

import { useEffect } from "react";

const revealSelectors = [
  "main section > .wrap",
  "main section .display",
  "main section .display-sm",
  "main section .display-xs",
  "main section .lede",
  "main section p",
  "main section blockquote",
  "main section form > div",
  "main section aside > div",
  "main section dl > div",
  "main section .stagger > *",
  "main section .cap-card",
  "main section .reveal",
  "main section .reveal-left",
  "main section .reveal-right",
  "main section .reveal-soft",
];

function directionFor(el: Element, index: number) {
  if (el.classList.contains("reveal-soft")) return "fade";
  if (el.classList.contains("reveal-right")) return "right";
  if (el.classList.contains("reveal-left")) return "left";
  if (el.matches(".stagger > *")) return index % 2 === 0 ? "left" : "right";
  if (el.matches(".display, .display-sm, .display-xs")) return "left";
  if (el.matches(".lede, p, blockquote, form > div, aside > div, dl > div")) {
    return "up";
  }
  return index % 2 === 0 ? "left" : "right";
}

function kindFor(el: Element) {
  if (el.classList.contains("cap-card") || el.matches(".stagger > *")) {
    return "card";
  }
  if (el.matches(".display, .display-sm, .display-xs")) return "title";
  if (el.matches(".lede, p, blockquote, form > div, aside > div, dl > div")) {
    return "text";
  }
  return "panel";
}

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selected = new Set<Element>();
    revealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => selected.add(el));
    });

    const elements = Array.from(selected).filter((el) => {
      if (el.closest(".cap-card") && !el.classList.contains("cap-card")) return false;
      if (el.closest(".stagger") && !el.matches(".stagger > *")) return false;
      if (el.closest("blockquote") && el.tagName.toLowerCase() === "p") return false;
      return !el.closest("header, footer");
    });

    elements.forEach((el, index) => {
      el.classList.add(
        "scroll-reveal",
        `scroll-reveal--${directionFor(el, index)}`,
        `scroll-reveal--${kindFor(el)}`,
      );
      if (el instanceof HTMLElement) {
        el.style.setProperty("--reveal-delay", `${(index % 5) * 75}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
