
import React from 'react';
import { CheckCircle, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnterpriseTrainingServices = () => {
  const services = [
    "Audit des compétences",
    "Plan de formation personnalisé",
    "Formation en présentiel ou à distance",
    "Certification officielle",
    "Support technique post-formation",
    "Évaluation des acquis"
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Nos Services</h2>
            <p className="text-muted-foreground mb-8">
              Un accompagnement complet pour développer les compétences de vos équipes
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gta-red text-white p-8 rounded-xl">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Contactez-nous</h3>
            </div>
            <div className="space-y-4 mb-6">
              <p>Discutons de vos besoins en formation et élaborons ensemble un plan sur mesure.</p>
              <div className="space-y-2 text-sm">
                <p>📞 +237 690 419 336</p>
                <p>📧 academy@gta-it.com</p>
                <p>🌐 academy.gta-it</p>
              </div>
            </div>
            <Button className="w-full bg-white text-gta-red hover:bg-gray-100">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTrainingServices;
