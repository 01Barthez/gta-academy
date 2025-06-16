
import React from 'react';

const HeroHeading = () => {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Transformez
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
          Votre Avenir
        </span>
        <br />
        <span className="text-white drop-shadow-lg">Tech</span>
      </h1>
      
      <p className="text-lg lg:text-xl mb-10 text-blue-100/90 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-sm">
        Rejoignez <span className="text-blue-300 font-bold">GTA Academy</span> et maîtrisez les technologies du futur avec nos formations ultra-pratiques et notre accompagnement personnalisé.
      </p>
    </>
  );
};

export default HeroHeading;
