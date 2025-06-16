
import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const HeaderTopBar = () => {
  return (
    <div className="hidden md:block bg-gradient-to-r from-gta-red to-gta-red-light text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-white/90 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+237 690 419 336 | +237 670 456 700</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white/90 transition-colors">
              <Mail className="w-4 h-4" />
              <span>academy@gta-it.com</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
