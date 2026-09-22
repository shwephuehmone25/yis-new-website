import { useEffect } from "react";
import Lenis from "lenis";

export default function useScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let lenis;
    let animationFrame;

    if (!reduced && process.env.NODE_ENV !== "test") {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: false,
      });
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const updateScrollTrigger = () => ScrollTrigger?.update();
      lenis.on("scroll", updateScrollTrigger);
      if (gsap?.ticker) {
        const tick = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger?.refresh();
        animationFrame = { gsap, tick };
      } else {
        const raf = (time) => {
          lenis.raf(time);
          animationFrame = requestAnimationFrame(raf);
        };
        animationFrame = requestAnimationFrame(raf);
      }
    }

    const headings = [
      ...document.querySelectorAll("#main > section:not(:first-child) h2"),
    ];
    const grids = [
      ...document.querySelectorAll(
        '[class*="Grid"], [class*="grid"], [class*="Strip"], [class*="steps"]',
      ),
    ].filter((grid) => grid.closest("#main") && grid.children.length > 1);
    const items = grids.flatMap((grid) => [...grid.children]);
    const targets = [...new Set([...headings, ...items])];
    headings.forEach((target) => target.classList.add("scroll-reveal"));
    items.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.classList.add("scroll-reveal-item");
      target.style.setProperty("--reveal-order", index % 6);
    });
    let observer;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((target) =>
        target.classList.add("scroll-reveal-visible"),
      );
    } else {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("scroll-reveal-visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.12, rootMargin: "0px 0px -8%" },
      );
      targets.forEach((target) => observer.observe(target));
    }
    return () => {
      observer?.disconnect();
      targets.forEach((target) => {
        target.classList.remove(
          "scroll-reveal",
          "scroll-reveal-item",
          "scroll-reveal-visible",
        );
        target.style.removeProperty("--reveal-order");
      });
      if (typeof animationFrame === "number")
        cancelAnimationFrame(animationFrame);
      if (animationFrame?.gsap)
        animationFrame.gsap.ticker.remove(animationFrame.tick);
      lenis?.destroy();
    };
  }, []);
}
