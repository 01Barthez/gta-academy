
import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const AgendaHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gta-red via-gta-red-light to-primary py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="font-medium">Planning en temps réel</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Agenda des
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Formations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Découvrez toutes nos formations en cours et à venir. 
            Consultez les horaires, les disponibilités et inscrivez-vous directement.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Clock className="w-8 h-8 mx-auto" />
              </div>
              <p className="font-semibold">Temps réel</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Users className="w-8 h-8 mx-auto" />
              </div>
              <p className="font-semibold">Inscriptions</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <MapPin className="w-8 h-8 mx-auto" />
              </div>
              <p className="font-semibold">Localisation</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <p className="font-semibold">Planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaHero;
