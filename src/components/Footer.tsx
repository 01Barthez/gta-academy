import { AiOutlineWhatsApp } from "react-icons/ai";

import React from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Formations", href: "/training" },
    { name: "Contact", href: "/contact" },
  ];

  const ecosystem = [
    { name: "Agence IT", url: "https://gta-it.com" },
    { name: "Visite Technique Automobile", url: "https://gta-nomayos.cm" },
    { name: "E-Commerce", url: "https://eshop.gta-it.com" },
    { name: "Labs GTA", url: "https://kasm.gta-it.com/" }
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "Plan du site", href: "/sitemap" },
    { name: "FAQ", href: "/faq" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-black relative overflow-hidden">
      {/* Gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-red-950/30 to-transparent"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-red-600/20 via-transparent to-red-800/20"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 place-items-center md:place-items-start">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/logo.png"
                alt="GTA Logo"
                className="h-12 w-auto drop-shadow-lg"
                loading="lazy"
              />
              <div className="hidden sm:block">
                <h3 className="text-xl font-bold text-red-400 drop-shadow-lg">GTA Academy</h3>
                <p className="text-sm text-red-200/80">Centre de Formation Technologique</p>
              </div>
            </div>
            <p className="text-gray-200/90 leading-relaxed mb-6">
              GTA Academy forme les professionnels de demain avec des programmes de formation innovants en technologie et développement numérique.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/academyGTA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-red-800 to-red-900 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/gta-it"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-red-800 to-red-900 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                to="https://wa.me/237690419336"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-red-800 to-red-900 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <AiOutlineWhatsApp className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-red-300 mb-6 drop-shadow-md">Nos Formations</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/training/certified"
                  className="text-gray-200/90 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-md"
                >
                  Formations Certifiantes
                </Link>
              </li>

              <li>
                <Link
                  to="/training/holidays"
                  className="text-gray-200/90 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-md"
                >
                  Formations Vacances
                </Link>
              </li>

              <li>
                <Link
                  to="/training/enterprise"
                  className="text-gray-200/90 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-md"
                >
                  Formations Entreprise
                </Link>
              </li>

              <li>
                <Link
                  to="/training/personalized"
                  className="text-gray-200/90 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-md"
                >
                  Formations Personnalisées
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-red-300 mb-6 drop-shadow-md">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-200/90 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-red-300 mb-6 drop-shadow-md">Nous Contacter</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 drop-shadow-md" />
                <p className="text-gray-200/90">
                  Yaoundé, Cameroun<br />
                  Nkolfoulou base SATOM
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0 drop-shadow-md" />
                <Link
                  to="tel:+237690419336"
                  className="text-gray-200/90 hover:text-red-400 transition-colors hover:drop-shadow-md"
                >
                  +237 690 419 336
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0 drop-shadow-md" />
                <Link
                  to="mailto:academy@gta-it.com"
                  className="text-gray-200/90 hover:text-red-400 transition-colors hover:drop-shadow-md"
                >
                  academy@gta-it.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="border-t border-red-800/50 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-red-300 mb-4 drop-shadow-lg">Écosystème GTA</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {ecosystem.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200/90 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-red-800/50 bg-gradient-to-r from-black via-red-950/80 to-black relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300/80 text-sm">
              © 2025 GTA Academy - Centre de Formation Technologique. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300/80 hover:text-red-400 text-sm transition-colors hover:drop-shadow-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
