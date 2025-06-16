
import React from 'react';

const HeroTrustIndicators = () => {
  const indicators = [
    {
      number: "15+",
      text: "Formations Expert",
      numberColor: "text-blue-300",
      hoverColor: "group-hover:text-blue-200"
    },
    {
      number: "Pro",
      text: "Formateurs Certifiés",
      numberColor: "text-purple-300",
      hoverColor: "group-hover:text-purple-200"
    },
    {
      number: "100%",
      text: "Pratique Intensive",
      numberColor: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 items-center">
      {indicators.map((indicator, index) => (
        <div key={index} className="flex items-center space-x-2 group cursor-default">
          <span className={`font-black ${indicator.numberColor} text-2xl group-hover:scale-110 transition-transform duration-300`}>
            {indicator.number}
          </span>
          <span className={`text-blue-100/90 font-medium text-sm ${indicator.hoverColor} transition-colors duration-300`}>
            {indicator.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeroTrustIndicators;
