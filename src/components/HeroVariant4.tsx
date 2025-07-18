import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Users, Target, Award, Clock, Star, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroVariant4 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const enterpriseServices = [
    {
      title: "Formation Sur Mesure",
      description: "Programmes adaptés à vos besoins spécifiques",
      icon: Target
    },
    {
      title: "Accompagnement RH",
      description: "Gestion des talents et développement des compétences",
      icon: Users
    },
    {
      title: "Certifications Reconnues",
      description: "CQP, DQP, AQP et certifications internationales",
      icon: Award
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center -mt-16 justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
src='/images/meeting.jpeg'
alt="Équipe en réunion d'entreprise"
          className="w-full h-full object-cover"
        />
        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-gta-red/30"></div>
        {/* Subtle Corporate Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge className="bg-gta-red/20 text-gta-red-light border-gta-red/30 hover:bg-gta-red/30 px-4 py-2 text-sm font-medium">
                <Building2 className="w-4 h-4 mr-2" />
                Solutions Entreprises
              </Badge>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="block">Formez vos équipes</span>
                  <span className="block bg-gradient-to-r from-gta-red-light to-gta-red bg-clip-text text-transparent">
                    aux Métiers du Numérique
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Développez les compétences de vos collaborateurs avec nos formations sur mesure. 
                  <span className="text-gta-red-light font-semibold"> Augmentez votre productivité et votre compétitivité.</span>
                </p>
              </div>

              {/* Enterprise Services */}
              <div className="space-y-4">
                {enterpriseServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gta-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-gta-red-light" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">{service.title}</h3>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gta-red hover:bg-gta-red-light text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/training/enterprise'}
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Prendre contact
                </Button>
              </div>
            </div>

            {/* Right Column - Enterprise Focus */}
            <div className="space-y-8">

              {/* Enterprise Benefits Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-gta-red-light" />
                  Avantages Entreprises
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Formations sur site ou en ligne</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Horaires flexibles adaptés à vos équipes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Suivi personnalisé des progrès</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Certifications reconnues par l'État</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">Support technique 24/7</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="bg-gta-red/20 backdrop-blur-sm rounded-xl p-6 border border-gta-red/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-5 h-5 text-gta-red-light" />
                  <h4 className="font-semibold text-white">Besoin d'une formation urgente ?</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Nos experts peuvent organiser une formation sur mesure en moins de 48h.
                </p>
                <Button 
                  size="sm"
                  className="bg-gta-red hover:bg-gta-red-light text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gta-red to-transparent"></div>
    </div>
  );
};

export default HeroVariant4;
