
import React from 'react';
import { Globe, Shield, BarChart3, Target } from 'lucide-react';
import EnterpriseTrainingProgramCard from './EnterpriseTrainingProgramCard';

const EnterpriseTrainingCategories = () => {
  const categories = [
    {
      title: "Cloud & Infrastructure",
      icon: Globe,
      color: "from-blue-600 to-blue-700",
      programs: [
        {
          name: "Microsoft Azure Fundamentals",
          duration: "3 jours",
          certification: "AZ-900",
          level: "Débutant",
          description: "Maîtrisez les concepts de base du cloud computing avec Azure et préparez-vous à la certification officielle Microsoft.",
          price: "180,000 FCFA",
          participants: "12-15 participants",
          objectives: [
            "Comprendre les concepts fondamentaux du cloud",
            "Naviguer dans le portail Azure",
            "Gérer les services de base Azure",
            "Comprendre la tarification et la facturation"
          ],
          prerequisites: "Connaissances informatiques de base",
          included: [
            "Support de cours officiel Microsoft",
            "Accès laboratoire Azure pendant 30 jours",
            "Voucher d'examen AZ-900",
            "Certificat de participation"
          ],
          outcomes: [
            "Certification Azure Fundamentals",
            "Compétences cloud reconnues",
            "Évolution de carrière"
          ],
          popular: false,
          nextSessions: ["15 Mars 2025", "10 Avril 2025"]
        },
        {
          name: "Amazon Web Services (AWS)",
          duration: "5 jours", 
          certification: "AWS Cloud Practitioner",
          level: "Débutant à Intermédiaire",
          description: "Formation complète sur les services AWS essentiels avec préparation à la certification AWS Cloud Practitioner.",
          price: "280,000 FCFA",
          participants: "10-12 participants",
          objectives: [
            "Maîtriser les services AWS de base",
            "Concevoir des architectures cloud scalables",
            "Optimiser les coûts AWS",
            "Implémenter la sécurité cloud"
          ],
          prerequisites: "Expérience en administration système recommandée",
          included: [
            "Formation avec expert AWS certifié",
            "Accès AWS Free Tier étendu",
            "Voucher d'examen officiel",
            "Projets pratiques réels"
          ],
          outcomes: [
            "Certification AWS Cloud Practitioner",
            "Expertise en architecture cloud",
            "Augmentation salariale moyenne: 35%"
          ],
          popular: true,
          nextSessions: ["20 Mars 2025", "15 Avril 2025"]
        },
        {
          name: "Azure Solutions Architect",
          duration: "10 jours",
          certification: "AZ-104",
          level: "Avancé",
          description: "Formation avancée pour devenir architecte solutions Azure avec certification AZ-104 Administrator Associate.",
          price: "450,000 FCFA",
          participants: "8-10 participants",
          objectives: [
            "Gérer les identités et la gouvernance Azure",
            "Implémenter et gérer le stockage",
            "Déployer et gérer les ressources de calcul",
            "Configurer et gérer les réseaux virtuels"
          ],
          prerequisites: "Expérience Azure Fundamentals requise",
          included: [
            "Formation intensive avec labs pratiques",
            "Accès environnement Azure dédié",
            "2 tentatives d'examen incluses",
            "Mentorat post-formation 3 mois"
          ],
          outcomes: [
            "Certification Azure Administrator",
            "Expertise architecture cloud avancée",
            "Opportunités senior architect"
          ],
          popular: false,
          nextSessions: ["1er Avril 2025", "1er Mai 2025"]
        }
      ]
    },
    {
      title: "Cybersécurité",
      icon: Shield,
      color: "from-red-600 to-red-700",
      programs: [
        {
          name: "Cybersécurité Fondamentale",
          duration: "5 jours",
          certification: "Security+",
          level: "Débutant",
          description: "Formation complète aux concepts fondamentaux de la cybersécurité avec préparation à la certification CompTIA Security+.",
          price: "320,000 FCFA",
          participants: "12-15 participants",
          objectives: [
            "Identifier les menaces et vulnérabilités",
            "Implémenter des contrôles de sécurité",
            "Gérer les incidents de sécurité",
            "Comprendre la cryptographie appliquée"
          ],
          prerequisites: "Connaissances réseau de base recommandées",
          included: [
            "Kit de formation CompTIA officiel",
            "Simulateur d'attaques cyber",
            "Voucher examen Security+",
            "Outils de sécurité premium"
          ],
          outcomes: [
            "Certification Security+ reconnue mondialement",
            "Compétences en analyse des menaces",
            "Accès aux postes cybersécurité"
          ],
          popular: true,
          nextSessions: ["25 Mars 2025", "20 Avril 2025"]
        },
        {
          name: "Ethical Hacking",
          duration: "10 jours",
          certification: "CEH",
          level: "Intermédiaire",
          description: "Maîtrisez les techniques de piratage éthique et de tests de pénétration avec certification Certified Ethical Hacker.",
          price: "580,000 FCFA",
          participants: "8-12 participants",
          objectives: [
            "Effectuer des tests de pénétration",
            "Identifier les vulnérabilités systèmes",
            "Utiliser les outils de hacking éthique",
            "Rédiger des rapports d'audit sécurité"
          ],
          prerequisites: "Expérience en sécurité informatique requise",
          included: [
            "Laboratoire de hacking dédié",
            "Outils professionnels inclus",
            "Certification CEH officielle",
            "Projets réels d'entreprise"
          ],
          outcomes: [
            "Certification CEH internationalement reconnue",
            "Expertise en tests de pénétration",
            "Salaire moyen: 8-15M FCFA/an"
          ],
          popular: true,
          nextSessions: ["5 Avril 2025", "10 Mai 2025"]
        },
        {
          name: "Gestion des Risques Cyber",
          duration: "3 jours",
          certification: "CISA",
          level: "Avancé",
          description: "Formation spécialisée en audit et gouvernance de la sécurité informatique pour les professionnels expérimentés.",
          price: "380,000 FCFA",
          participants: "6-8 participants",
          objectives: [
            "Conduire des audits de sécurité",
            "Établir une gouvernance IT",
            "Gérer les risques cybersécurité",
            "Assurer la conformité réglementaire"
          ],
          prerequisites: "5+ années d'expérience en IT/Sécurité",
          included: [
            "Méthodes d'audit avancées",
            "Frameworks de gouvernance",
            "Préparation CISA intensive",
            "Networking avec experts"
          ],
          outcomes: [
            "Certification CISA prestigieuse",
            "Postes de direction sécurité",
            "Expertise audit et conformité"
          ],
          popular: false,
          nextSessions: ["15 Avril 2025", "25 Mai 2025"]
        }
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "from-purple-600 to-purple-700",
      programs: [
        {
          name: "Data Analyst with Power BI",
          duration: "7 jours",
          certification: "PL-300",
          level: "Intermédiaire",
          description: "Devenez expert en analyse de données avec Power BI et obtenez la certification Microsoft Data Analyst Associate.",
          price: "350,000 FCFA",
          participants: "10-12 participants",
          objectives: [
            "Créer des tableaux de bord interactifs",
            "Analyser et visualiser les données",
            "Optimiser les performances Power BI",
            "Implémenter la sécurité des données"
          ],
          prerequisites: "Connaissances Excel avancées",
          included: [
            "Licence Power BI Premium",
            "Datasets d'entreprise réels",
            "Templates de tableaux de bord",
            "Certification Microsoft PL-300"
          ],
          outcomes: [
            "Certification Data Analyst Associate",
            "Maîtrise complète Power BI",
            "Opportunités business intelligence"
          ],
          popular: true,
          nextSessions: ["30 Mars 2025", "25 Avril 2025"]
        },
        {
          name: "KQL (Kusto Query Language)",
          duration: "3 jours",
          certification: "Certificat interne",
          level: "Intermédiaire",
          description: "Maîtrisez le langage de requête KQL pour l'analyse avancée de données dans l'écosystème Azure.",
          price: "220,000 FCFA",
          participants: "8-10 participants",
          objectives: [
            "Écrire des requêtes KQL complexes",
            "Analyser les logs et métriques",
            "Créer des alertes intelligentes",
            "Optimiser les performances des requêtes"
          ],
          prerequisites: "Expérience SQL recommandée",
          included: [
            "Accès Azure Data Explorer",
            "Jeux de données réels",
            "Exercices pratiques intensifs",
            "Support technique 3 mois"
          ],
          outcomes: [
            "Expertise KQL reconnue",
            "Compétences Azure Analytics",
            "Avantage concurrentiel données"
          ],
          popular: false,
          nextSessions: ["10 Avril 2025", "5 Mai 2025"]
        },
        {
          name: "Azure Data Engineer",
          duration: "10 jours",
          certification: "DP-203",
          level: "Avancé",
          description: "Formation complète pour devenir ingénieur données Azure avec certification Data Engineering Associate.",
          price: "520,000 FCFA",
          participants: "6-8 participants",
          objectives: [
            "Concevoir des pipelines de données",
            "Implémenter des solutions de stockage",
            "Optimiser les performances données",
            "Sécuriser les flux de données"
          ],
          prerequisites: "Expérience développement et SQL",
          included: [
            "Environnement Azure complet",
            "Projets d'entreprise réels",
            "Certification DP-203 incluse",
            "Mentorat expert 6 mois"
          ],
          outcomes: [
            "Certification Azure Data Engineer",
            "Expertise pipelines de données",
            "Postes senior data engineer"
          ],
          popular: true,
          nextSessions: ["15 Avril 2025", "20 Mai 2025"]
        }
      ]
    },
    {
      title: "Management de Projet",
      icon: Target,
      color: "from-green-600 to-green-700",
      programs: [
        {
          name: "PMP (Project Management Professional)",
          duration: "15 jours",
          certification: "PMP",
          level: "Intermédiaire à Avancé",
          description: "La certification PMP la plus reconnue mondialement en gestion de projet, avec méthodologie PMBOK 7.",
          price: "680,000 FCFA",
          participants: "12-15 participants",
          objectives: [
            "Maîtriser le framework PMBOK",
            "Gérer des projets complexes",
            "Optimiser les ressources et budgets",
            "Leadership et gestion d'équipe"
          ],
          prerequisites: "3+ années d'expérience en gestion de projet",
          included: [
            "Manuel PMBOK 7 officiel",
            "Simulateur d'examen PMP",
            "35h de formation PDU validées",
            "Support jusqu'à réussite examen"
          ],
          outcomes: [
            "Certification PMP prestigieuse",
            "Augmentation salariale 25-40%",
            "Opportunités management senior"
          ],
          popular: true,
          nextSessions: ["1er Avril 2025", "15 Mai 2025"]
        },
        {
          name: "Scrum Master",
          duration: "3 jours",
          certification: "PSM I",
          level: "Débutant à Intermédiaire",
          description: "Formation intensive Scrum Master avec certification Professional Scrum Master I de Scrum.org.",
          price: "280,000 FCFA",
          participants: "10-12 participants",
          objectives: [
            "Faciliter les événements Scrum",
            "Coacher l'équipe de développement",
            "Éliminer les obstacles",
            "Promouvoir l'amélioration continue"
          ],
          prerequisites: "Connaissances Agile de base",
          included: [
            "Certification PSM I incluse",
            "Outils Scrum professionnels",
            "Simulations d'équipe réelles",
            "Coaching post-formation 2 mois"
          ],
          outcomes: [
            "Certification Scrum Master reconnue",
            "Compétences facilitation Agile",
            "Opportunités transformation digitale"
          ],
          popular: true,
          nextSessions: ["20 Mars 2025", "10 Avril 2025"]
        },
        {
          name: "Product Owner",
          duration: "2 jours",
          certification: "PSPO I",
          level: "Intermédiaire",
          description: "Formation spécialisée Product Owner avec certification Professional Scrum Product Owner I.",
          price: "220,000 FCFA",
          participants: "8-10 participants",
          objectives: [
            "Gérer le backlog produit",
            "Définir la vision produit",
            "Prioriser les fonctionnalités",
            "Collaborer avec les stakeholders"
          ],
          prerequisites: "Expérience produit/projet recommandée",
          included: [
            "Certification PSPO I officielle",
            "Outils de gestion produit",
            "Études de cas réels",
            "Réseau Product Owners"
          ],
          outcomes: [
            "Certification Product Owner",
            "Expertise gestion produit",
            "Postes responsable produit"
          ],
          popular: false,
          nextSessions: ["25 Mars 2025", "15 Avril 2025"]
        }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Nos Domaines d'Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Formations certifiantes dans les technologies les plus demandées
          </p>
        </div>
        
        <div className="space-y-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.programs.map((program, idx) => (
                    <EnterpriseTrainingProgramCard 
                      key={idx} 
                      program={program} 
                      categoryColor={category.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTrainingCategories;
