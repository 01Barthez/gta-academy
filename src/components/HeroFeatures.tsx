
import React from 'react';
import { CheckCircle, Award, Users, Star } from 'lucide-react';

const HeroFeatures = () => {
  const features = [
    {
      icon: CheckCircle,
      text: "Accompagnement VIP",
      bgColor: "from-blue-400/25 to-blue-500/25",
      iconColor: "text-blue-200",
      borderColor: "border-blue-300/30"
    },
    {
      icon: Award,
      text: "Certifications",
      bgColor: "from-purple-400/25 to-purple-500/25",
      iconColor: "text-purple-200",
      borderColor: "border-purple-300/30"
    },
    {
      icon: Users,
      text: "Communauté",
      bgColor: "from-blue-500/25 to-purple-400/25",
      iconColor: "text-blue-200",
      borderColor: "border-blue-300/30"
    },
    {
      icon: Star,
      text: "Placement Garanti",
      bgColor: "from-purple-500/25 to-blue-400/25",
      iconColor: "text-purple-200",
      borderColor: "border-purple-300/30"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center space-y-2 group hover:scale-105 transition-all duration-300">
          <div className={`w-12 h-12 bg-gradient-to-br ${feature.bgColor} rounded-full flex items-center justify-center shadow-lg border ${feature.borderColor} backdrop-blur-sm`}>
            <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
          </div>
          <span className="font-semibold text-sm text-blue-100/90 group-hover:text-blue-100 transition-colors duration-300">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;
