import { Code, Cpu, Shield, Smartphone, Cloud, Bot, BarChart2, Mail, Users, Image, Search, Lock, Terminal, Film, FileText } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  description: string;
  longDescription?: string;
  modules: string[];
  certification: string;
  nextStart: string;
  featured: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  prerequisites?: string;
  objectives?: string[];
  outcomes?: string[];
  included?: string[];
}

export const programs: Program[] = [
  {
    id: 'web-dev',
    title: "Web Design (Génie Logiciel)",
    duration: "9 mois + 3 mois de stage",
    students: "100 max",
    level: "Débutant à Avancé",
    price: "400,000 FCFA",
    description: "Formation complète en conception et développement web, couvrant les technologies modernes pour créer des applications web performantes.",
    longDescription: "Cette formation intensive vous permettra de maîtriser les technologies web modernes, du front-end au back-end, avec une approche pratique et professionnalisante.",
    modules: [
      "Initiation et fondamentaux du Web",
      "HTML, CSS, Tailwind CSS",
      "UI Design avec Figma",
      "Gestion de versions avec Git & GitHub",
      "JavaScript & TypeScript",
      "Frameworks modernes (React, Vue)",
      "Bases de données : PostgreSQL, MongoDB",
      "Intégration continue et déploiement",
      "Spécialisations : Full-Stack JS, Python, PHP, WordPress, Odoo, Mobile"
    ],
    certification: "Certificat GTA + CQP",
    nextStart: "06 Octobre 2025",
    featured: true,
    icon: Code,
    prerequisites: "Aucun prérequis technique n'est nécessaire. Une bonne maîtrise de l'outil informatique et une forte motivation sont recommandées.",
    objectives: [
      "Maîtriser les langages fondamentaux du web (HTML, CSS, JavaScript)",
      "Développer des applications web complètes avec des frameworks modernes",
      "Concevoir des interfaces utilisateur attrayantes et réactives",
      "Gérer des bases de données et des API",
      "Mettre en production des applications web"
    ],
    outcomes: [
      "Portfolio de projets concrets",
      "Compétences en développement full-stack",
      "Expérience pratique avec les outils professionnels",
      "Accompagnement vers l'emploi"
    ],
    included: [
      "Accès à la plateforme d'apprentissage en ligne",
      "Support de cours complet",
      "Accompagnement personnalisé",
      "Certification reconnue",
      "Accès à l'espace coworking"
    ]
  },
  {
    id: 'data-science',
    title: "Data Science & Intelligence Artificielle",
    duration: "9 mois + 3 mois de stage",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "500,000 FCFA",
    description: "Programme approfondi sur l'analyse de données et l'intelligence artificielle, incluant les techniques d'apprentissage automatique et de traitement des données massives.",
    longDescription: "Devenez un expert en data science et IA grâce à ce programme complet qui couvre l'analyse de données, le machine learning et le deep learning, avec des projets concrets sur des données réelles.",
    modules: [
      "Introduction à la Data Science",
      "Statistiques et probabilités",
      "Python pour la Data Science",
      "Machine Learning (Scikit-learn, TensorFlow)",
      "Deep Learning",
      "Big Data et Hadoop",
      "Visualisation de données (Tableau, Power BI)",
      "Déploiement de modèles d'IA",
      "Projets pratiques en IA"
    ],
    certification: "Certificat GTA + CQP",
    nextStart: "06 Octobre 2025",
    featured: true,
    icon: BarChart2,
    prerequisites: "Bases en programmation (Python recommandé) et en mathématiques. Une expérience préalable en analyse de données est un plus mais pas obligatoire.",
    objectives: [
      "Maîtriser les concepts fondamentaux de la data science et de l'IA",
      "Développer des modèles prédictifs avancés",
      "Manipuler et analyser de grands volumes de données",
      "Déployer des modèles d'IA en production",
      "Communiquer efficacement les résultats d'analyse"
    ],
    outcomes: [
      "Portfolio de projets data science",
      "Compétences en machine learning et deep learning",
      "Expérience avec les outils professionnels (Python, TensorFlow, etc.)",
      "Certification reconnue"
    ],
    included: [
      "Accès aux datasets de formation",
      "Environnement de développement en ligne",
      "Mentorat individuel",
      "Accès aux ressources d'apprentissage",
      "Support technique"
    ]
  },
  {
    id: 'marketing-digital',
    title: "Marketing Digital",
    duration: "9 mois + 3 mois de stage",
    students: "100 max",
    level: "Débutant à Avancé",
    price: "400,000 FCFA",
    description: "Formation complète en marketing numérique, couvrant les stratégies modernes de promotion en ligne et d'engagement client.",
    longDescription: "Développez des compétences complètes en marketing digital, du référencement aux campagnes publicitaires en passant par la stratégie de contenu et l'analyse des performances.",
    modules: [
      "Introduction au Marketing Digital",
      "SEO et SEA",
      "Marketing sur les réseaux sociaux",
      "Email Marketing",
      "Analyse de données marketing",
      "Publicité en ligne (Google Ads, Meta Ads)",
      "Stratégies de contenu",
      "Projets pratiques en marketing"
    ],
    certification: "Certificat GTA + CQP",
    nextStart: "06 Octobre 2025",
    featured: true,
    icon: Mail,
    prerequisites: "Aucun prérequis technique n'est nécessaire. Une bonne culture web et une curiosité pour le marketing sont des atouts.",
    objectives: [
      "Maîtriser les canaux du marketing digital",
      "Créer et gérer des campagnes publicitaires efficaces",
      "Développer une stratégie de contenu performante",
      "Analyser et optimiser les performances marketing",
      "Gérer la présence en ligne d'une marque"
    ],
    outcomes: [
      "Certification Google Ads et Analytics",
      "Stratégie marketing complète",
      "Portfolio de campagnes",
      "Accompagnement vers l'emploi"
    ],
    included: [
      "Accès aux outils professionnels",
      "Budget publicitaire pour les projets",
      "Support de cours complet",
      "Ateliers pratiques",
      "Réseau d'anciens élèves"
    ]
  },
  {
    id: 'cloud-computing',
    title: "Cloud Computing & DevOps",
    duration: "9 mois + 3 mois de stage",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "500,000 FCFA",
    description: "Formation complète sur les technologies cloud et les pratiques DevOps pour le déploiement et la gestion d'applications à grande échelle.",
    longDescription: "Maîtrisez les technologies cloud de pointe et les méthodologies DevOps pour concevoir, déployer et maintenir des infrastructures évolutives et fiables sur les principales plateformes cloud.",
    modules: [
      "Fondamentaux du Cloud Computing",
      "AWS, Azure et Google Cloud Platform",
      "Conteneurisation avec Docker",
      "Orchestration avec Kubernetes",
      "Infrastructure as Code (Terraform)",
      "CI/CD avec Jenkins et GitLab CI",
      "Sécurité dans le Cloud",
      "Projets pratiques"
    ],
    certification: "Certificat GTA + CQP",
    nextStart: "06 Octobre 2025",
    featured: true,
    icon: Cloud,
    prerequisites: "Bases en administration système et réseaux. Connaissance de base de Linux et de la ligne de commande. Expérience en programmation recommandée mais pas obligatoire.",
    objectives: [
      "Maîtriser les services des principaux fournisseurs cloud",
      "Mettre en place des infrastructures évolutives et résilientes",
      "Automatiser les processus de déploiement et d'intégration continue",
      "Sécuriser des environnements cloud",
      "Optimiser les coûts et les performances"
    ],
    outcomes: [
      "Certifications cloud (AWS, Azure ou GCP)",
      "Projets concrets sur des infrastructures cloud",
      "Compétences en automatisation et infrastructure as code",
      "Expérience avec les outils DevOps modernes"
    ],
    included: [
      "Accès aux plateformes cloud pour la pratique",
      "Environnements de développement préconfigurés",
      "Support technique dédié",
      "Ressources d'apprentissage premium",
      "Accès à la communauté des anciens"
    ]
  },

  // Autres formations certifiantes (AQP)
  {
    id: 'ia-marketing',
    title: "IA & Automatisation Marketing",
    duration: "2 mois",
    students: "100 max",
    level: "Intermédiaire",
    price: "100,000 FCFA",
    description: "Formation spécialisée en intelligence artificielle appliquée à l'automatisation des stratégies marketing.",
    longDescription: "Maîtrisez les outils d'IA et d'automatisation pour optimiser vos campagnes marketing et personnaliser l'expérience client à grande échelle.",
    modules: [
      "Introduction à l'IA en marketing",
      "Outils d'automatisation (HubSpot, n8n)",
      "Analyse prédictive",
      "Personnalisation des campagnes",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Mail,
    prerequisites: "Bonne connaissance des bases du marketing digital. Une expérience préalable avec des outils marketing est un plus.",
    objectives: [
      "Comprendre les applications de l'IA dans le marketing",
      "Automatiser les processus marketing récurrents",
      "Utiliser l'analyse prédictive pour anticiper les tendances",
      "Personnaliser les expériences clients à grande échelle"
    ],
    outcomes: [
      "Maîtrise des outils d'automatisation",
      "Stratégies marketing optimisées par l'IA",
      "Rapports d'analyse avancée",
      "Certification reconnue"
    ],
    included: [
      "Accès aux plateformes d'automatisation",
      "Cas pratiques réels",
      "Support pédagogique",
      "Ressources d'apprentissage"
    ]
  },
  {
    id: 'seo-sea',
    title: "Référencement SEO/SEA",
    duration: "2 mois",
    students: "100 max",
    level: "Intermédiaire",
    price: "100,000 FCFA",
    description: "Formation axée sur l'optimisation pour les moteurs de recherche (SEO) et la publicité sur les moteurs de recherche (SEA).",
    longDescription: "Développez une expertise complète en référencement naturel et payant pour améliorer la visibilité des sites web et générer un trafic qualifié.",
    modules: [
      "Fondamentaux du SEO",
      "Recherche de mots-clés",
      "Optimisation on-page et off-page",
      "Google Ads et campagnes SEA",
      "Analytics et suivi des performances"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Search,
    prerequisites: "Bonne compréhension d'internet et des outils numériques. Aucune expérience préalable en SEO/SEA n'est requise.",
    objectives: [
      "Maîtriser les techniques de référencement naturel",
      "Créer et gérer des campagnes publicitaires efficaces",
      "Analyser et optimiser les performances",
      "Développer une stratégie de contenu optimisée"
    ],
    outcomes: [
      "Certification Google Analytics et Google Ads",
      "Audit complet de site web",
      "Stratégie de mots-clés",
      "Plan d'optimisation SEO/SEA"
    ],
    included: [
      "Outils professionnels de suivi SEO",
      "Budget publicitaire pour les exercices",
      "Support de cours complet",
      "Accès à la communauté d'experts"
    ]
  },
  {
    id: 'community-management',
    title: "Community Management",
    duration: "2 mois",
    students: "100 max",
    level: "Débutant à Intermédiaire",
    price: "80,000 FCFA",
    description: "Formation complète pour gérer efficacement les communautés en ligne et développer une présence digitale forte.",
    longDescription: "Apprenez à construire, animer et fidéliser une communauté en ligne, à créer une stratégie de contenu engageante et à mesurer l'impact de vos actions sur les réseaux sociaux.",
    modules: [
      "Stratégie de contenu",
      "Gestion des réseaux sociaux",
      "Création de contenu engageant",
      "Analyse des performances",
      "Gestion de crise"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Users,
    prerequisites: "Bonne maîtrise des réseaux sociaux. Aucun prérequis technique n'est nécessaire.",
    objectives: [
      "Développer une stratégie de communauté efficace",
      "Créer du contenu engageant pour différents réseaux sociaux",
      "Animer et modérer une communauté en ligne",
      "Analyser les performances et ajuster sa stratégie",
      "Gérer les situations de crise sur les réseaux sociaux"
    ],
    outcomes: [
      "Stratégie de contenu complète",
      "Calendrier éditorial",
      "Plan de gestion de communauté",
      "Rapport d'analyse des performances"
    ],
    included: [
      "Modèles de stratégie de contenu",
      "Outils d'analyse gratuits",
      "Support de cours complet",
      "Accès au groupe privé d'échange"
    ]
  },
  {
    id: 'infographie',
    title: "Infographie",
    duration: "3 mois",
    students: "100 max",
    level: "Débutant à Intermédiaire",
    price: "150,000 FCFA",
    description: "Formation en conception graphique pour créer des visuels percutants avec des outils modernes.",
    modules: [
      "Introduction à l'infographie",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva et autres outils",
      "Projets de design graphique"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Image
  },
  {
    id: 'email-marketing',
    title: "Email Marketing",
    duration: "1 mois",
    students: "100 max",
    level: "Débutant",
    price: "50,000 FCFA",
    description: "Formation sur la création et la gestion de campagnes d'emailing efficaces.",
    modules: [
      "Principes de l'email marketing",
      "Création de newsletters",
      "Segmentation et ciblage",
      "Analyse des performances",
      "Outils d'emailing (Mailchimp, Sendinblue)"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Mail
  },
  {
    id: 'aws',
    title: "Parcours AWS",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation approfondie sur les services cloud d'Amazon Web Services (AWS).",
    modules: [
      "Introduction à AWS",
      "Services de calcul (EC2, Lambda)",
      "Stockage (S3, EBS)",
      "Réseaux et sécurité",
      "Projets pratiques AWS"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Cloud
  },
  {
    id: "azure",
    title: "Parcours Azure",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation spécialisée sur la plateforme cloud Microsoft Azure.",
    modules: [
      "Introduction à Azure",
      "Services de calcul (VM, App Services)",
      "Stockage et bases de données",
      "Réseaux et sécurité",
      "Projets pratiques Azure"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Cloud
  },
  {
    id: 'linux',
    title: "Administration Linux",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation sur l'administration des systèmes Linux pour les environnements professionnels.",
    modules: [
      "Introduction à Linux",
      "Gestion des utilisateurs",
      "Configuration des serveurs",
      "Scripts Shell",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Terminal
  },
  {
    id: 'big-data',
    title: "Initiation à la Big Data",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire",
    price: "300,000 FCFA",
    description: "Introduction aux concepts et outils de gestion des données massives.",
    modules: [
      "Introduction à la Big Data",
      "Hadoop et Spark",
      "Gestion des données massives",
      "Stockage distribué",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: BarChart2
  },
  {
    id: 'deep-learning',
    title: "Initiation au Deep Learning",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation sur les bases du deep learning et des réseaux neuronaux.",
    modules: [
      "Introduction au Deep Learning",
      "Réseaux neuronaux",
      "TensorFlow et Keras",
      "Traitement des images",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Bot
  },
  {
    id: 'machine-learning',
    title: "Initiation au Machine Learning",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Introduction aux algorithmes et techniques de machine learning.",
    modules: [
      "Introduction au Machine Learning",
      "Algorithmes supervisés",
      "Algorithmes non supervisés",
      "Scikit-learn",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Bot
  },
  {
    id: 'montage-audio-visuel',
    title: "Montage Audio-Visuel",
    duration: "3 mois",
    students: "100 max",
    level: "Débutant à Intermédiaire",
    price: "150,000 FCFA",
    description: "Formation sur le montage et la production de contenus audio-visuels.",
    modules: [
      "Introduction au montage vidéo",
      "Adobe Premiere Pro",
      "Montage audio avec Audacity",
      "Effets spéciaux",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Film
  },
  {
    id: 'bureautique',
    title: "Informatique & Outils de Bureautique",
    duration: "3 mois",
    students: "100 max",
    level: "Débutant",
    price: "150,000 FCFA",
    description: "Formation sur les outils bureautiques essentiels pour la productivité professionnelle.",
    modules: [
      "Introduction à l'informatique",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Projets pratiques"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: FileText
  },

  /*
   
*/
];