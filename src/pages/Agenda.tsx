
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgendaHero from '@/components/agenda/AgendaHero';
import AgendaFilters from '@/components/agenda/AgendaFilters';
import AgendaCalendar from '@/components/agenda/AgendaCalendar';
import AgendaStats from '@/components/agenda/AgendaStats';
import PageSEO from '@/components/seo/PageSEO';

const Agenda = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Agenda des Formations - GTA Academy"
        description="Consultez notre agenda complet des formations en temps réel. Trouvez les sessions en cours, à venir et inscrivez-vous directement."
        keywords="agenda formations, planning GTA Academy, formations en cours, inscription formation"
      />
      <Header />
      <AgendaHero />
      {/* <AgendaStats /> */}
      <div className="container mx-auto px-4 py-8">
        <AgendaFilters />
        <AgendaCalendar />
      </div>
      <Footer />
    </div>
  );
};

export default Agenda;
