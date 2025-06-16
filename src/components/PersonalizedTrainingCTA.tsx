
import React, { useState } from 'react';
import { Phone, Mail, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePhoneCall } from '@/hooks/usePhoneCall';
import ConsultationModal from '@/components/ConsultationModal';
import { useNavigate } from 'react-router-dom';

const PersonalizedTrainingCTA = () => {
  const { toast } = useToast();
  const { makeCall } = usePhoneCall();
  const navigate = useNavigate();
  const advantages = [
    "Consultation gratuite de 30 minutes",
    "Devis personnalisé sous 24h",
    "Formateur expert dédié",
    "Flexibilité totale des horaires",
    "Suivi post-formation inclus"
  ];

  const handlePhoneCall = () => {
    makeCall("+237690419336");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-between flex-col md:flex-row">
            {/* Contenu principal */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-6">
                <span className="font-semibold">Offre Limitée</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Prêt à Transformer
                <span className="block text-red-400">Votre Carrière ?</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Rejoignez l'élite des professionnels qui ont choisi l'excellence.
                Votre formation personnalisée vous attend.
              </p>

              <div className="space-y-3 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/training/personalized/quote")}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Réserver ma consultation gratuite
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300"
                  onClick={handlePhoneCall}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant
                </Button>
              </div>
            </div>

            {/* Formulaire de contact rapide */}
            <div className="w-full h-full">
              <div className="relative border-2 border-gta-red rounded-md overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black/30"></div>
                <img
                  src="/public/images/team-happy.jpg"
                  alt="teamm GTA"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedTrainingCTA;
