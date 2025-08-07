
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

const smoothScrollToTop = (duration: number = 700) => {
  const start = window.pageYOffset;
  const startTime = performance.now();

  const animateScroll = (timestamp: number) => {
    const currentTime = timestamp - startTime;
    const progress = Math.min(currentTime / duration, 1);
    const easeProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, start - (start * easeProgress));
    
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Utiliser l'animation personnalisée au lieu du comportement natif
    const timer = setTimeout(() => {
      smoothScrollToTop(800); // 800ms de durée pour une animation douce
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
