
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import ContactFAQ from '@/components/ContactFAQ';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      
      {/* Contact Info Cards */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <ContactInfo />
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/50 animate-fade-in w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 w-full">
            <ContactForm />
            
            <div className="space-y-8">
              <ContactMap />
              <ContactFAQ />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
