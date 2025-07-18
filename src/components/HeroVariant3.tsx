
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cpu, Globe, Cloud, Sparkles, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroVariant3 = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const innovationFeatures = [
    {
      title: "IA & Machine Learning",
      description: "Formez-vous aux technologies de l'intelligence artificielle",
      icon: Cpu
    },
    {
      title: "Blockchain & Web3",
      description: "Découvrez les technologies du futur décentralisé",
      icon: Globe
    },
    {
      title: "Cloud & DevOps",
      description: "Maîtrisez l'infrastructure cloud et l'automatisation",
      icon: Cloud
    }
  ];

  const techStats = [
    { value: "15+", label: "Technologies" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Pratique" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-red-900 to-gta-red-dark text-white py-16 lg:py-24 overflow-hidden min-h-screen -mt-20 flex items-center dark:from-red-900 dark:via-red-800/80 dark:to-gta-red-dark">
      {/* Subtle Background Elements */}

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <Badge className="bg-gta-black/80 text-gta-red-light border-gta-red/30 hover:bg-gta-red/30 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation Technologique
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gta-red-light bg-clip-text text-transparent leading-tight">
                <span className="block">Technologies</span>
                <span className="block">du Futur</span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                À la pointe de la technologie, nous formons les leaders de demain. 
                <span className="text-gta-red-light font-semibold"> Découvrez les technologies qui révolutionnent l'industrie.</span>
              </p>
            </div>

            {/* Innovation Features */}
            <div className="space-y-4">
              {innovationFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gta-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gta-red-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
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
                onClick={() => window.location.href = '/training'}
              >
                Explorer les technologies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => window.location.href = '/about'}
              >
                À propos de nous
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gta-red-light rounded-full animate-pulse"></div>
                <span>IA & Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gta-red rounded-full animate-pulse"></div>
                <span>Blockchain & Web3</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gta-red-dark rounded-full animate-pulse"></div>
                <span>Cloud & DevOps</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute w-full h-full inset-0 bg-gta-red/60 rounded-3xl blur-2xl"></div>
              <img
                src="/images/Gilles-content.jpeg"
                alt="Innovation Technologique GTA Academy"
                className="relative z-10 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 w-full h-full max-h-96 object-cover object-top border border-gta-red/20"
              />
              
              {/* Tech Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gta-red-light">15+</div>
                  <div className="text-xs text-gray-300">Technologies</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gta-red-light">100%</div>
                  <div className="text-xs text-gray-300">Pratique</div>
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

export default HeroVariant3;
