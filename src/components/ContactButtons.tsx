
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ContactButtons = () => {
  return (
    <div className="text-center space-y-4">
      <Link
        to="https://wa.me/237690419336"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-red-500 hover:bg-red-600 text-white mr-4"
          onClick={() => window.location.href = '/contact'}
        >
          <AiOutlineWhatsApp className="mr-2 w-4 h-4" />
          WhatsApp
        </Button>
      </Link>

      <Button
        size="lg"
        variant="outline"
        className="border-gta-red text-gta-red hover:bg-gta-red hover:text-white"
        onClick={() => window.location.href = '/contact'}
      >
        Formulaire de contact
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default ContactButtons;
