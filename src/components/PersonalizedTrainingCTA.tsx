
import React, { useState } from 'react';
import { Phone, Mail, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePhoneCall } from '@/hooks/usePhoneCall';
import ConsultationModal from '@/components/ConsultationModal';

const PersonalizedTrainingCTA = () => {
  const { toast } = useToast();
  const { makeCall } = usePhoneCall();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    objectives: ''
  });

  const advantages = [
    "Consultation gratuite de 30 minutes",
    "Devis personnalisé sous 24h",
    "Formateur expert dédié",
    "Flexibilité totale des horaires",
    "Suivi post-formation inclus"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.domain) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons sous 24h pour discuter de votre projet.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      domain: '',
      objectives: ''
    });
  };

  const handlePhoneCall = () => {
    makeCall("+225 XX XX XX XX");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full mb-6">
                <span className="font-semibold">Offre Limitée</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Prêt à Transformer
                <span className="block text-orange-400">Votre Carrière ?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Rejoignez l'élite des professionnels qui ont choisi l'excellence. 
                Votre formation personnalisée vous attend.
              </p>

              <div className="space-y-3 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Réserver ma consultation gratuite
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300"
                  onClick={handlePhoneCall}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant
                </Button>
              </div>
            </div>

            {/* Formulaire de contact rapide */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Demande de Formation Personnalisée
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone *
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                    placeholder="+225 XX XX XX XX"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Domaine d'intérêt *
                  </label>
                  <select 
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                    required
                  >
                    <option value="">Sélectionnez un domaine</option>
                    <option value="web-dev">Développement Web</option>
                    <option value="mobile-dev">Développement Mobile</option>
                    <option value="data-science">Data Science & IA</option>
                    <option value="cybersecurity">Cybersécurité</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="other">Autre (à préciser)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Décrivez vos objectifs
                  </label>
                  <textarea 
                    name="objectives"
                    value={formData.objectives}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                    placeholder="Parlez-nous de vos objectifs, votre niveau actuel, vos contraintes..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="mr-2 w-5 h-5" />
                  Envoyer ma demande
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Réponse garantie sous 24h • Consultation gratuite
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modale de consultation */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
};

export default PersonalizedTrainingCTA;
