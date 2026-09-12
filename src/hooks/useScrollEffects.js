import { useEffect } from "react";

export default function useScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return undefined;

    const targets = [...document.querySelectorAll(
      "#main > section:not(:first-child) h2, #main > section:not(:first-child) h3, #main > section:not(:first-child) p, #main > section:not(:first-child) article, #main > section:not(:first-child) figure"
    )];
    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-reveal-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: .08, rootMargin: "0px 0px -45px" });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);
}
