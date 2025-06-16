
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroAbout from '@/components/HeroAbout';
import { Users, Target, Award, Lightbulb, Heart, Star, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque formation que nous dispensons pour préparer nos étudiants au succès."
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Chaque étudiant bénéficie d'un suivi personnalisé tout au long de son parcours de formation."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nos programmes sont constamment mis à jour pour refléter les dernières tendances technologiques."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Nos formations débouchent sur des certifications CQP, DQP, AQP et des certifications reconnues par l'industrie."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Enhanced Hero Section with GTA theme */}
      <HeroAbout />

      {/* Story Section with GTA theme integration */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Notre Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                <span className="text-gta-red dark:text-gta-red-light font-semibold">GTA Academy</span> est un centre de formation technologique nouvellement créé, né de la volonté de répondre aux besoins croissants du marché digital camerounais et africain.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Notre mission est de former la prochaine génération de <span className="text-gta-red-light dark:text-gta-red-light font-semibold">talents technologiques</span> en offrant des formations pratiques, orientées emploi et adaptées aux réalités du marché actuel.
              </p>
              <p className="text-lg text-muted-foreground">
                Avec une approche pédagogique moderne et des formateurs experts, nous préparons nos étudiants à intégrer efficacement le monde professionnel de la technologie.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/meeting.jpeg"
                alt="Formation GTA Academy"
                className="rounded-lg shadow-xl border-2 border-gta-red/10 dark:border-gta-red-light/20"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with GTA theme */}
      <section className="py-20 bg-gta-red/5 dark:bg-gray-800/50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre approche pédagogique
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gta-red to-gta-red-light mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gta-red/10 dark:border-gta-red-light/20 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-gta-red to-gta-red-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gta-red dark:text-gta-red-light">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with GTA theme */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Prêt à Commencer Votre <span className="text-gta-red dark:text-gta-red-light">Parcours</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez <span className="text-gta-red-light dark:text-gta-red-light font-semibold">GTA Academy</span> et donnez un nouvel élan à votre carrière dans la technologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/training"
              className=""
            >
              <button className="bg-gta-red hover:bg-gta-red-dark dark:bg-gta-red-light dark:hover:bg-gta-red text-white px-6 py-2 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl">
                Voir nos formations
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
