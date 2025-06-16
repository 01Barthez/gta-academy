
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, User, Mail, Phone, Briefcase, Clock, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    domain: '',
    level: '',
    duration: '',
    format: '',
    budget: '',
    objectives: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      title: "Demande de devis envoyée !",
      description: "Nous vous ferons parvenir un devis personnalisé sous 24h.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      domain: '',
      level: '',
      duration: '',
      format: '',
      budget: '',
      objectives: '',
      timeline: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-2xl text-orange-600">
            <FileText className="w-6 h-6" />
            <span>Demander un devis personnalisé</span>
          </DialogTitle>
        </DialogHeader>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg mb-6 border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Devis gratuit et sans engagement</h3>
          <p className="text-orange-700 text-sm">
            Recevez un devis détaillé avec programme personnalisé, planning et tarification adaptés à vos besoins.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Informations personnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <User className="w-4 h-4 inline mr-1" />
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="+225 XX XX XX XX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>
          </div>

          {/* Détails de la formation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Détails de la formation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Target className="w-4 h-4 inline mr-1" />
                  Domaine de formation *
                </label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Sélectionnez un domaine</option>
                  <option value="web-dev">Développement Web</option>
                  <option value="mobile-dev">Développement Mobile</option>
                  <option value="data-science">Data Science & IA</option>
                  <option value="cybersecurity">Cybersécurité</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="devops">DevOps</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Autre (à préciser)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Niveau actuel
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="beginner">Débutant</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="advanced">Avancé</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Durée souhaitée
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionnez une durée</option>
                  <option value="1-week">1 semaine</option>
                  <option value="2-weeks">2 semaines</option>
                  <option value="1-month">1 mois</option>
                  <option value="2-months">2 mois</option>
                  <option value="3-months">3 mois</option>
                  <option value="6-months">6 mois</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Format de formation
                </label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionnez un format</option>
                  <option value="online">100% en ligne</option>
                  <option value="presential">100% présentiel</option>
                  <option value="hybrid">Hybride (mixte)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          {/* Objectifs et budget */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Objectifs et budget</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Objectifs de formation
              </label>
              <textarea
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Décrivez vos objectifs, ce que vous souhaitez apprendre ou améliorer..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget approximatif
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="under-500k">Moins de 500 000 FCFA</option>
                  <option value="500k-1m">500 000 - 1 000 000 FCFA</option>
                  <option value="1m-2m">1 000 000 - 2 000 000 FCFA</option>
                  <option value="2m-plus">Plus de 2 000 000 FCFA</option>
                  <option value="flexible">À discuter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Délai souhaité
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Quand souhaitez-vous commencer ?</option>
                  <option value="immediately">Immédiatement</option>
                  <option value="within-week">Dans la semaine</option>
                  <option value="within-month">Dans le mois</option>
                  <option value="within-quarter">Dans le trimestre</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            >
              <FileText className="w-4 h-4 mr-2" />
              Envoyer ma demande de devis
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuler
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
