
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105">
      <img 
        src="/images/logo.png" 
        alt="GTA Logo" 
        className="h-12 w-auto"
      />
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-gta-red">GTA ACADEMY</h1>
        <p className="text-sm text-muted-foreground">Centre de Formation Professionnelle</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
