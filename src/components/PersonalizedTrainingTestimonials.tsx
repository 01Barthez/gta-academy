
import React from 'react';
import { Star, Quote } from 'lucide-react';

const PersonalizedTrainingTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Kouakou",
      role: "Développeuse Full-Stack",
      company: "Tech Solutions Abidjan",
      image: "/placeholder.svg",
      rating: 5,
      content: "La formation personnalisée m'a permis de passer de débutante à développeuse confirmée en 4 mois. Mon formateur a adapté chaque module à mes besoins spécifiques. Aujourd'hui, j'ai trouvé le poste de mes rêves !",
      highlight: "De débutante à experte en 4 mois"
    },
    {
      name: "Mamadou Traoré",
      role: "Data Scientist",
      company: "Analytics Pro",
      image: "/placeholder.svg", 
      rating: 5,
      content: "J'avais des contraintes d'horaires très spécifiques. L'équipe GTA a créé un programme sur mesure avec des sessions le week-end. Le suivi personnalisé et la flexibilité ont fait toute la différence.",
      highlight: "Programme adapté à mes contraintes"
    },
    {
      name: "Fatou Diallo",
      role: "Chef de Projet Digital",
      company: "Innovation Hub",
      image: "/placeholder.svg",
      rating: 5,
      content: "Après 10 ans dans le marketing traditionnel, je voulais me reconvertir dans le digital. La formation personnalisée m'a permis d'acquérir exactement les compétences dont j'avais besoin. L'accompagnement post-formation est exceptionnel.",
      highlight: "Reconversion réussie à 35 ans"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gta-red/5 to-gta-red-light/10 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Ils ont Transformé leur Carrière
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les success stories de nos apprenants qui ont choisi la formation personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 dark:border-gray-700">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gta-red dark:bg-gta-red-light rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Highlight */}
              <div className="bg-gradient-to-r from-gta-red to-gta-red-light dark:from-gta-red-light dark:to-gta-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                {testimonial.highlight}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gta-red to-gta-red-light dark:from-gta-red-light dark:to-gta-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-gta-red dark:text-gta-red-light font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-gta-red dark:text-gta-red-light mb-2">98%</div>
            <div className="text-sm md:text-base text-muted-foreground">Taux de satisfaction</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-gta-red-light dark:text-gta-red mb-2">95%</div>
            <div className="text-sm md:text-base text-muted-foreground">Insertion professionnelle</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-gta-red dark:text-gta-red-light mb-2">500+</div>
            <div className="text-sm md:text-base text-muted-foreground">Apprenants formés</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-gta-red-light dark:text-gta-red mb-2">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground">Support disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedTrainingTestimonials;
