
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PersonalizedQuoteForm from '@/components/PersonalizedQuoteForm';
import PersonalizedQuoteAside from '@/components/PersonalizedQuoteAside';
import PersonalizedQuoteInfo from '@/components/PersonalizedQuoteInfo';

const PersonalizedQuotePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de la page */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Demande de <span className="text-gta-red">Devis Personnalisé</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Obtenez une formation sur mesure parfaitement adaptée à vos besoins et objectifs professionnels.
            </p>
          </div>

          {/* Contenu principal avec formulaire et aside */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <PersonalizedQuoteForm />
            </div>
            
            <div className="lg:col-span-1">
              <PersonalizedQuoteAside />
            </div>
          </div>

          {/* Section d'informations supplémentaires */}
          <PersonalizedQuoteInfo />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PersonalizedQuotePage;
