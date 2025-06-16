
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  return (
    <div className="bg-card p-8 rounded-xl shadow-lg border w-full">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Envoyez-nous un message</h2>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Prénom</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Nom</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Téléphone</label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
            placeholder="+237 6XX XXX XXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Sujet</label>
          <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent">
            <option>Demande d'information sur les formations</option>
            <option>Inscription à une formation</option>
            <option>Partenariat entreprise</option>
            <option>Support technique</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
            placeholder="Décrivez votre demande en détail..."
          ></textarea>
        </div>

        <Button className="w-full bg-gta-red hover:bg-gta-red-light text-white">
          <Send className="w-4 h-4 mr-2" />
          Envoyer le message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
