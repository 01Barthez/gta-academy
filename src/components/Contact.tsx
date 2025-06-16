
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactButtons from './ContactButtons';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CONTACTEZ-NOUS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Prêt à commencer votre formation ? Nos conseillers vous accompagnent
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gta-red to-gta-red-light mx-auto mt-6"></div>
        </div>

        <ContactInfo />
        <ContactButtons />
      </div>
    </section>
  );
};

export default Contact;
