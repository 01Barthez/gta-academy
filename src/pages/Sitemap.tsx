
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Map, Home, User, GraduationCap, Phone, FileText, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: "Pages Principales",
      icon: Home,
      pages: [
        { name: "Accueil", href: "/", description: "Page d'accueil de GTA Academy" },
        { name: "À propos", href: "/about", description: "Découvrez notre histoire et notre mission" },
        { name: "Contact", href: "/contact", description: "Contactez-nous pour plus d'informations" }
      ]
    },
    {
      title: "Formations",
      icon: GraduationCap,
      pages: [
        { name: "Toutes les Formations", href: "/training", description: "Vue d'ensemble de nos programmes de formation" },
        { name: "Formations Certifiantes", href: "/training/certified", description: "Programmes de certification professionnelle" },
        { name: "Formations Vacances", href: "/training/holidays", description: "Formations intensives pendant les vacances" },
        { name: "Formations Entreprise", href: "/training/enterprise", description: "Solutions de formation pour les entreprises" },
        { name: "Formations Personnalisées", href: "/training/personalized", description: "Programmes sur mesure adaptés à vos besoins" }
      ]
    },
    {
      title: "Modules de Formation Vacances",
      icon: GraduationCap,
      pages: [
        { name: "Module 1 - Initiation", href: "/training/holidays/modules/module1", description: "Introduction aux technologies web" },
        { name: "Module 2 - Développement", href: "/training/holidays/modules/module2", description: "Développement web avancé" },
        { name: "Module 3 - Spécialisation", href: "/training/holidays/modules/module3", description: "Spécialisation technique" },
        { name: "Module 4 - Projet Final", href: "/training/holidays/modules/module4", description: "Réalisation de projet professionnel" }
      ]
    },
    {
      title: "Informations Légales",
      icon: FileText,
      pages: [
        { name: "Mentions Légales", href: "/legal", description: "Informations légales et conditions d'utilisation" },
        { name: "Politique de Confidentialité", href: "/privacy", description: "Protection et traitement de vos données personnelles" },
        { name: "Plan du Site", href: "/sitemap", description: "Navigation complète du site" },
        { name: "FAQ", href: "/faq", description: "Questions fréquemment posées" }
      ]
    }
  ];

  const externalLinks = [
    { name: "Visite Technique Automobile", url: "https://gta-nomayos.cm", description: "Services de contrôle technique automobile" },
    { name: "E-Commerce GTA", url: "https://eshop.gta-it.com", description: "Boutique en ligne de produits technologiques" },
    { name: "Agence IT GTA", url: "https://gta-it.com", description: "Services de développement et consulting IT" },
    { name: "Labs GTA", url: "https://kasm.gta-it.com/", description: "Laboratoire de recherche et développement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Map className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Plan du Site
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Explorez facilement toutes les pages et ressources disponibles sur GTA Academy
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Internal Pages */}
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <div key={sectionIndex} className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-8">
                    <IconComponent className="w-8 h-8 text-gta-red mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        to={page.href}
                        className="block p-6 border border-border rounded-lg hover:border-gta-red hover:shadow-lg transition-all duration-300 group bg-card"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gta-red transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {page.description}
                        </p>
                        <div className="mt-4 flex items-center text-gta-red text-sm font-medium">
                          <span>Visiter la page</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* External Links - Ecosystem */}
          <div className="mt-16 bg-gradient-to-br from-muted/50 to-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 text-gta-red mr-3" />
              <h2 className="text-2xl font-bold text-foreground">
                Écosystème GTA
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Découvrez l'ensemble des services et plateformes de l'écosystème GTA
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border border-border rounded-lg hover:border-gta-red hover:shadow-lg transition-all duration-300 group bg-card"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gta-red transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center text-gta-red text-sm font-medium">
                    <span>Visiter le site</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-gta-red to-gta-red-light text-white rounded-lg p-8 text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Besoin d'Aide pour Naviguer ?
            </h2>
            <p className="text-red-100 mb-6">
              Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gta-red px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Nous Contacter
              </Link>
              <Link
                to="/faq"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gta-red transition-colors"
              >
                Consulter la FAQ
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;
