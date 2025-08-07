import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faire défiler vers le haut de la page de manière fluide
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]); // Se déclenche à chaque changement d'URL

  return null; // Ce composant ne rend rien
}
