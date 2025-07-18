import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Award, Users, Clock, Star, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroVariant2 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const featuredPrograms = [
    {
      title: "Web Full-Stack",
      duration: "9 mois",
      price: "450,000 FCFA",
      startDate: "06 Octobre 2025"
    },
    {
      title: "Intelligence Artificielle",
      duration: "12 mois", 
      price: "500,000 FCFA",
      startDate: "06 Octobre 2025"
    },
    {
      title: "Hacking & Cybersécurité",
      duration: "5 mois",
      price: "650,000 FCFA", 
      startDate: "06 Octobre 2025"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
         src="/images/jason-learn.jpeg"
          alt="Étudiants en formation numérique"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-gta-red/45"></div>
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge className="bg-gta-red/20 text-gta-red-light border-gta-red/30 hover:bg-gta-red/30 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Rentrée Octobre 2025
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="block">Formez-vous aux</span>
                  <span className="block bg-gradient-to-r from-gta-red-light to-gta-red bg-clip-text text-transparent">
                    Métiers du Futur
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Développez votre carrière avec nos formations certifiantes de haut niveau. 
                  <span className="text-gta-red-light font-semibold"> 100% d'insertion professionnelle garantie.</span>
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gta-red/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-gta-red-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Certifications Reconnues</div>
                    <div className="text-sm text-gray-300">CQP + Certificat GTA</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gta-red/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-gta-red-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Accompagnement Pro</div>
                    <div className="text-sm text-gray-300">Experts passionnés</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gta-red/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gta-red-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Stage Garanti</div>
                    <div className="text-sm text-gray-300">En fin de formation</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gta-red/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-gta-red-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Post-Suivi</div>
                    <div className="text-sm text-gray-300">Des apprenants</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gta-red hover:bg-gta-red-light text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={onRegisterClick}
                >
                  S'inscrire maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => window.location.href = '/training/certified'}
                >
                  Découvrir les formations
                </Button>
              </div>
            </div>

            {/* Right Column - Featured Programs */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Programmes Vedettes</h3>
                <p className="text-gray-300">Début des cours : 06 Octobre 2025</p>
              </div>
              
              <div className="space-y-4">
                {featuredPrograms.map((program, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{program.title}</h4>
                      <Badge className="bg-gta-red/20 text-gta-red-light border-gta-red/30">
                        {program.duration}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Début : {program.startDate}
                      </span>
                      <span className="font-semibold text-gta-red-light">{program.price}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Certification CQP incluse</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gta-red-light">15-25</div>
                  <div className="text-sm text-gray-300">Étudiants max</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gta-red-light">100%</div>
                  <div className="text-sm text-gray-300">Insertion</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gta-red-light">9</div>
                  <div className="text-sm text-gray-300">Formations</div>
                </div>
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

export default HeroVariant2;
