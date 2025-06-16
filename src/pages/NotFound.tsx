
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gta-red/10 via-blue-100 to-purple-50 dark:from-gta-red/30 dark:to-blue-900">
      <motion.div
        className="rounded-xl shadow-xl bg-white/80 dark:bg-gray-900/80 max-w-lg px-10 py-16 text-center border border-gta-red"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5, type: "spring" }}
      >
        <motion.h1
          className="text-7xl font-bold mb-6 text-gta-red animate-glow"
          initial={{ scale: 1.4, color: "#FF6B6B" }}
          animate={{ scale: 1, color: "#DC143C" }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl font-medium mb-4 text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Ooops! Page introuvable.
        </motion.p>
        <motion.p className="text-gray-500 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-gta-red hover:bg-gta-red-light text-white rounded-full font-semibold transition animate-float"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
        <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}>
          <div className="mt-10 text-base text-gta-red">Besoin d'aide ? <a href="mailto:academy@gta-it.com" className="underline hover:text-gta-red-light">Contactez-nous</a></div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFound;
