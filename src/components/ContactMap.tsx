
import React from 'react';
import { MapPin } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="bg-card rounded-xl shadow-lg border overflow-hidden w-full h-full max-h-[450px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.4270115107965!2d11.579122111477124!3d3.9319623960252974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc7001b1fc47d%3A0x6fb7c796c3d6e65b!2sBASE%20SATOM!5e0!3m2!1sfr!2scm!4v1750053895377!5m2!1sfr!2scm" 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade" 
      className="w-full h-full border-0"
      />
    </div>
  );
};

export default ContactMap;
