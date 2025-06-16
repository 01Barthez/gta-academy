
import React, { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 100;

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, [checkVisibility]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[60] p-3 rounded-full bg-gta-red shadow-lg hover:bg-gta-red-light text-white transition-colors animate-glow flex items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.12, rotate: -10 }}
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
