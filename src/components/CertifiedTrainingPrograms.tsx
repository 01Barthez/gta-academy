
import React from 'react';
import { Code, Cpu, Shield, Smartphone, Cloud, Database, Globe, Bot, Layers3 } from 'lucide-react';
import CertifiedProgramCard from './CertifiedProgramCard';

const CertifiedTrainingPrograms = () => {
  const programs = [
    {
      title: "Développement Web Full-Stack",
      duration: "6 mois",
      students: "25 max",
      level: "Débutant à Avancé",
      price: "450,000 FCFA",
      description: "Formation complète en développement web moderne avec les dernières technologies.",
      modules: [
        "HTML5, CSS3, JavaScript ES6+, Typescript",
        "React.js et écosystème",
        "Node.js et Express",
        "Bases de données (MongoDB, PostgreSQL)",
        "APIs REST et GraphQL",
        "Déploiement et Outils DevOps"
      ],
      certification: "Certificat GTA + CQP/DQP/AQP",
      nextStart: "01 Septembre 2025",
      featured: true,
      icon: Code
    },
    {
      title: "Data Science & Machine Learning",
      duration: "5 mois",
      students: "20 max",
      level: "Intermédiaire",
      price: "550,000 FCFA",
      description: "Maîtrisez l'analyse de données et l'intelligence artificielle.",
      modules: [
        "Python pour la Data Science",
        "Statistiques et probabilités",
        "Machine Learning avec Scikit-learn",
        "Deep Learning avec TensorFlow",
        "Visualisation de données",
        "Projets pratiques avec données réelles"
      ],
      certification: "Certificat GTA + CQP/DQP/AQP",
      nextStart: "1er Septemvre 2025",
      featured: false,
      icon: Cpu
    },
    {
      title: "Cybersécurité Avancée",
      duration: "4 mois",
      students: "15 max",
      level: "Intermédiaire à Avancé",
      price: "500,000 FCFA",
      description: "Devenez expert en sécurité informatique et protection des données.",
      modules: [
        "Ethical Hacking et Penetration Testing",
        "Sécurité des réseaux",
        "Cryptographie appliquée",
        "Forensique numérique",
        "Gestion des incidents de sécurité",
        "Conformité et audit"
      ],
      certification: "Certificat GTA + CQP/DQP/AQP",
      nextStart: "1er Septembre 2025",
      featured: false,
      icon: Shield
    },
    {
      title: "Développement Mobile",
      duration: "4 mois",
      students: "20 max",
      level: "Intermédiaire",
      price: "400,000 FCFA",
      description: "Créez des applications mobiles performantes pour iOS et Android.",
      modules: [
        "React Native fondamentaux",
        "Navigation et état global",
        "APIs et services web",
        "Publication sur stores",
        "Performance et optimisation",
        "Tests et débogage"
      ],
      certification: "Certificat GTA + CQP/DQP/AQP",
      nextStart: "1er Avril 2025",
      featured: false,
      icon: Smartphone
    },
    {
      title: "Services Cloud Azure",
      duration: "5 mois",
      students: "18 max",
      level: "Intermédiaire à Avancé",
      price: "600,000 FCFA",
      description: "Maîtrisez les services cloud Microsoft Azure et devenez architecte cloud certifié.",
      modules: [
        "Fondamentaux Azure et Architecture Cloud",
        "Azure Compute Services (VMs, App Services)",
        "Azure Storage et Base de données",
        "Azure Networking et Sécurité",
        "Azure DevOps et CI/CD",
        "Monitoring et Gestion des coûts",
        "Azure AI et Machine Learning Services"
      ],
      certification: "Certificat GTA + Microsoft Azure Fundamentals (AZ-900) + Azure Solutions Architect (AZ-305)",
      nextStart: "07 Octobre 2025",
      featured: false,
      icon: Cloud
    },
    {
      title: "Services Cloud AWS",
      duration: "5 mois",
      students: "18 max",
      level: "Intermédiaire à Avancé",
      price: "~650,000 FCFA",
      description: "Devenez expert en services Amazon Web Services et architecte solutions cloud.",
      modules: [
        "AWS Core Services et Architecture",
        "EC2, S3, RDS et services de stockage",
        "AWS Networking (VPC, Route 53, CloudFront)",
        "AWS Security et Identity Management",
        "AWS Lambda et services Serverless",
        "AWS DevOps et automatisation",
        "Monitoring avec CloudWatch et X-Ray"
      ],
      certification: "Certificat GTA + AWS Cloud Practitioner / AWS Solutions Architect Associate",
      nextStart: "07 Octobre 2025",
      featured: true,
      icon: Database
    },
    {
      title: "Web Scraping & Automation",
      duration: "3 mois",
      students: "22 max",
      level: "Intermédiaire",
      price: "300,000 FCFA",
      description: "Automatisez vos tâches et extrayez des données du web efficacement.",
      modules: [
        "Python pour l'automatisation",
        "Selenium pour sites dynamiques",
        "APIs REST et GraphQL",
        "Gestion des données avec Pandas",
        "Automatisation avec scheduled tasks",
        "Déploiement sur serveurs cloud",
        "Automatisation avec n8n et make",
      ],
      certification: "Certificat GTA",
      nextStart: "18 Août 2025",
      featured: false,
      icon: Globe
    },
    {
      title: "Intelligence Artificielle",
      duration: "6 mois",
      students: "16 max",
      level: "Avancé",
      price: "800,000 FCFA",
      description: "Plongez dans l'IA moderne : Machine Learning, Deep Learning et IA générative.",
      modules: [
        "Mathématiques pour l'IA",
        "Machine Learning avec Python",
        "Deep Learning et réseaux de neurones",
        "Computer Vision et traitement d'images",
        "Natural Language Processing (NLP)",
        "IA générative (GPT, DALL-E, etc.)",
        "Déploiement de modèles IA en production",
        "Éthique et biais en IA"
      ],
      certification: "Certificat GTA + Google AI Certificate + CQP/DQP/AQP",
      nextStart: "05 Octobre 2025",
      featured: true,
      icon: Bot
    },
    {
      title: "Développement 3D",
      duration: "4 mois",
      students: "20 max",
      level: "Intermédiaire",
      price: "600,000 FCFA",
      description: "Créez des expériences 3D immersives pour le web, les jeux et la réalité virtuelle.",
      modules: [
        "Fondamentaux de la 3D et géométrie",
        "Blender pour la modélisation 3D",
        "Three.js pour le web 3D",
        "Unity pour les applications interactives",
        "Texturing et éclairage avancé",
        "Animation 3D et rigging",
        "Réalité virtuelle avec WebXR",
        "Optimisation et performance"
      ],
      certification: "Certificat GTA",
      nextStart: "01 Decembre 2025",
      featured: false,
      icon: Layers3
    }
  ];

  return (
    <section id="cerifiedcourses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Nos Programmes Certifiants</h2>
          <p className="text-xl text-muted-foreground">
            Choisissez la formation qui correspond à vos objectifs professionnels
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <CertifiedProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedTrainingPrograms;
