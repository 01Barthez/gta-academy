
import React from 'react';

const ContactFAQ = () => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-lg border">
      <h3 className="text-xl font-semibold mb-4 text-foreground">Questions fréquentes</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-foreground mb-2">Quand puis-je commencer une formation ?</h4>
          <p className="text-sm text-muted-foreground">Nos formations débutent chaque mois. Contactez-nous pour connaître les prochaines dates.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-foreground mb-2">Proposez-vous des formations en ligne ?</h4>
          <p className="text-sm text-muted-foreground">Oui, nous proposons des formations en présentiel, en ligne et en mode hybride.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-foreground mb-2">Les certifications sont-elles reconnues ?</h4>
          <p className="text-sm text-muted-foreground">Nos certifications sont reconnues internationalement par nos partenaires.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;
