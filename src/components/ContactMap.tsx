
import React from 'react';
import { MapPin } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="bg-card rounded-xl shadow-lg border overflow-hidden w-full h-full max-h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.446240979648!2d11.592228775881553!3d3.9279332478700457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7c56070593%3A0xbf715022b55ca0dc!2sIFP%20GTA-ACADEMY!5e0!3m2!1sfr!2scm!4v1752776156647!5m2!1sfr!2scm"
        width="600"
        height="450"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default ContactMap;
