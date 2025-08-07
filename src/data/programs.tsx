import { Code, Cpu, Shield, Smartphone, Cloud, Bot, BarChart2, Mail, Users, Image, Search, Lock, Terminal, Film, FileText } from 'lucide-react';

interface Program {
  id: string;
  image?: string;
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    title: "Data Science & Intelligence Artificielle",
    duration: "8 mois",
    students: "50 max",
    level: "Intermédiaire à Avancé",
    price: "450,000 FCFA",
    description: "Maîtrisez l'analyse de données, le Machine Learning et le Deep Learning avec Python et les bibliothèques modernes.",
    longDescription: "Cette formation complète vous permettra de maîtriser les techniques avancées d'analyse de données et d'intelligence artificielle, de la collecte des données au déploiement de modèles en production.",
    modules: [
      "Python pour la Data Science (NumPy, Pandas)",
      "Visualisation des données (Matplotlib, Seaborn, Plotly)",
      "Statistiques pour la Data Science",
      "Machine Learning avec Scikit-learn",
      "Deep Learning avec TensorFlow et PyTorch",
      "Traitement du langage naturel (NLP)",
      "Vision par ordinateur",
      "Déploiement de modèles ML"
    ],
    certification: "Certificat GTA + CQP",
    nextStart: "15 Septembre 2025",
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
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&auto=format&fit=crop",
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
    image: "https://www.redacteur.com/blog/wp-content/uploads/sites/6/2022/11/redaction-seo-blog.jpg",
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
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop",
    title: "Community Management",
    duration: "3 mois",
    students: "100 max",
    level: "Débutant à Intermédiaire",
    price: "150,000 FCFA",
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
    longDescription: "Cette formation complète vous permettra de maîtriser les outils essentiels de l'infographie moderne et de créer des designs professionnels.",
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
    icon: Image,
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop",
    prerequisites: "Aucun prérequis technique n'est nécessaire. Une sensibilité pour le design et la créativité est un plus.",
    objectives: [
      "Maîtriser les outils de base de l'infographie",
      "Créer des visuels professionnels",
      "Comprendre les principes du design graphique",
      "Réaliser des projets concrets"
    ],
    outcomes: [
      "Capacité à créer des logos, affiches et supports de communication",
      "Maîtrise des logiciels d'infographie",
      "Création d'un portfolio de travaux"
    ],
    included: [
      "Accès aux logiciels pendant la formation",
      "Support de cours complet",
      "Accompagnement personnalisé",
      "Attestation de formation"
    ]
  },
  {
    id: 'email-marketing',
    image: "https://images.unsplash.com/photo-1603796846097-bbb99c9c37b8?w=800&auto=format&fit=crop",
    title: "Email Marketing",
    duration: "1 mois",
    students: "100 max",
    level: "Débutant",
    price: "50,000 FCFA",
    description: "Formation sur la création et la gestion de campagnes d'emailing efficaces.",
    longDescription: "Maîtrisez l'art de l'email marketing pour fidéliser vos clients et augmenter vos ventes grâce à des campagnes ciblées et performantes.",
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
    icon: Mail,
    prerequisites: "Aucun prérequis technique n'est nécessaire. Une connaissance de base du marketing est un plus.",
    objectives: [
      "Comprendre les fondamentaux de l'email marketing",
      "Créer des campagnes d'emailing efficaces",
      "Segmenter une base de contacts",
      "Analyser les performances des campagnes"
    ],
    outcomes: [
      "Création de campagnes d'emailing performantes",
      "Maîtrise des outils d'emailing",
      "Optimisation du taux d'ouverture et de clics"
    ],
    included: [
      "Accès aux outils d'emailing pendant la formation",
      "Support de cours complet",
      "Accompagnement personnalisé",
      "Attestation de formation"
    ]
  },
  {
    id: 'aws',
    title: "Parcours AWS",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation approfondie sur les services cloud d'Amazon Web Services (AWS).",
    longDescription: "Devenez un expert des services cloud AWS avec cette formation complète couvrant l'infrastructure, le déploiement et la gestion des services dans le cloud. Apprenez à concevoir, déployer et maintenir des applications hautement disponibles et évolutives sur la plateforme cloud la plus populaire au monde.",
    modules: [
      "Introduction à AWS et concepts du cloud computing",
      "Services de calcul (EC2, Lambda, ECS, EKS)",
      "Stockage et bases de données (S3, EBS, RDS, DynamoDB)",
      "Réseaux et sécurité (VPC, IAM, KMS, WAF)",
      "Automatisation et DevOps (CloudFormation, CodePipeline, CodeDeploy)",
      "Surveillance et journalisation (CloudWatch, CloudTrail)",
      "Architecture des applications cloud natives",
      "Préparation à la certification AWS Certified Solutions Architect"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Cloud,
    prerequisites: "Connaissances de base en administration système et réseaux, expérience avec la ligne de commande Linux, notions de programmation. Une compréhension des concepts fondamentaux du cloud est un plus.",
    objectives: [
      "Maîtriser les services fondamentaux d'AWS",
      "Apprendre à concevoir des architectures cloud évolutives",
      "Sécuriser les applications et les données dans le cloud",
      "Automatiser le déploiement et la gestion des infrastructures",
      "Préparer les certifications AWS officielles"
    ],
    outcomes: [
      "Capacité à concevoir et déployer des applications sur AWS",
      "Maîtrise des services de calcul, de stockage et de base de données AWS",
      "Compétences en sécurité et conformité dans le cloud",
      "Capacité à optimiser les coûts et les performances"
    ],
    included: [
      "Accès à un environnement AWS dédié pour les travaux pratiques",
      "Support de cours complet et mises à jour régulières",
      "Accompagnement par des formateurs certifiés AWS",
      "Ateliers pratiques sur des cas d'utilisation réels",
      "Préparation aux certifications AWS",
      "Accès à une communauté d'anciens élèves"
    ]
  },
  {
    id: "azure",
    title: "Parcours Azure",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation spécialisée sur la plateforme cloud Microsoft Azure.",
    longDescription: "Maîtrisez Microsoft Azure, la plateforme cloud complète de Microsoft, et apprenez à déployer, gérer et sécuriser des applications d'entreprise dans le cloud. Cette formation couvre l'ensemble des services Azure essentiels pour les professionnels de l'informatique et les développeurs.",
    modules: [
      "Fondamentaux du cloud avec Microsoft Azure",
      "Services de calcul (VM, App Services, Azure Kubernetes Service)",
      "Stockage (Blob, Files, Disques) et bases de données (SQL Database, Cosmos DB)",
      "Réseaux virtuels (VNet), équilibrage de charge et sécurité (Azure AD, RBAC, Key Vault)",
      "DevOps avec Azure (Azure DevOps, GitHub Actions, Azure Pipelines)",
      "Conteneurs et orchestration (AKS, Container Instances)",
      "Sécurité et conformité dans Azure",
      "Surveillance et gestion des coûts",
      "Préparation aux certifications Microsoft Azure"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Cloud,
    prerequisites: "Connaissances de base en administration système et réseaux, familiarité avec les concepts du cloud computing. Une expérience avec Windows Server ou Linux est un plus.",
    objectives: [
      "Comprendre l'architecture et les services d'Azure",
      "Maîtriser le déploiement et la gestion des ressources Azure",
      "Sécuriser les applications et les données dans Azure",
      "Automatiser les déploiements avec les outils Azure DevOps",
      "Préparer les certifications Microsoft Azure"
    ],
    outcomes: [
      "Capacité à concevoir et implémenter des solutions cloud sur Azure",
      "Maîtrise des services de calcul, de stockage et de mise en réseau Azure",
      "Compétences en sécurité et conformité des applications cloud",
      "Capacité à optimiser les coûts et les performances dans Azure"
    ],
    included: [
      "Accès à un abonnement Azure pour les travaux pratiques",
      "Support de cours complet avec exercices pratiques",
      "Accompagnement par des formateurs certifiés Microsoft",
      "Ateliers sur des scénarios d'entreprise réels",
      "Préparation aux certifications Microsoft Azure",
      "Accès à la communauté des anciens apprenants"
    ]
  },
  {
    id: 'linux',
    title: "Administration Linux Professionnelle",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation complète sur l'administration des systèmes Linux pour les environnements professionnels et les infrastructures critiques.",
    longDescription: "Devenez un administrateur Linux compétent avec cette formation complète couvrant l'administration système, la sécurité, le réseau et l'automatisation sous Linux. Apprenez à gérer des serveurs en production, à sécuriser des systèmes et à automatiser des tâches d'administration courantes.",
    modules: [
      "Fondamentaux de Linux et ligne de commande",
      "Gestion des utilisateurs et des permissions",
      "Gestion des paquets et des services (apt, yum, systemd)",
      "Configuration réseau avancée (netplan, iptables, firewalld)",
      "Systèmes de fichiers et gestion du stockage (LVM, RAID)",
      "Sécurité Linux (SELinux, AppArmor, auditd)",
      "Scripting Bash avancé et automatisation",
      "Surveillance et journalisation (journald, syslog, Prometheus)",
      "Virtualisation et conteneurs (KVM, Docker, Podman)",
      "Configuration de services réseau (Apache, Nginx, DNS, DHCP)",
      "Sauvegarde et récupération"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Terminal,
    prerequisites: "Connaissances de base en informatique et en ligne de commande. Une expérience préalable avec Linux est un plus mais n'est pas obligatoire.",
    objectives: [
      "Maîtriser l'administration système sous Linux",
      "Apprendre à sécuriser un système Linux",
      "Automatiser les tâches d'administration avec des scripts",
      "Configurer et maintenir des services réseau",
      "Préparer les certifications Linux professionnelles"
    ],
    outcomes: [
      "Capacité à administrer des serveurs Linux en production",
      "Maîtrise des outils de diagnostic et de dépannage",
      "Compétences en sécurité système et réseau",
      "Capacité à automatiser des tâches d'administration"
    ],
    included: [
      "Accès à des serveurs virtuels pour les travaux pratiques",
      "Support de cours complet avec exercices pratiques",
      "Accompagnement par des formateurs expérimentés",
      "Ateliers sur des cas concrets d'entreprise",
      "Préparation aux certifications Linux reconnues",
      "Accès à une communauté d'administrateurs Linux"
    ]
  },
  {
    id: 'big-data',
    title: "Big Data & Analyse de Données Massives",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Maîtrisez les technologies et outils essentiels pour le traitement et l'analyse des données massives.",
    longDescription: "Cette formation complète en Big Data vous permettra d'acquérir les compétences nécessaires pour concevoir, implémenter et maintenir des solutions Big Data. Apprenez à utiliser les outils les plus populaires comme Hadoop, Spark, et les bases de données NoSQL pour traiter et analyser efficacement de grands volumes de données.",
    modules: [
      "Fondamentaux de la Big Data et écosystème Hadoop",
      "Traitement distribué avec Apache Spark (RDD, DataFrames, Spark SQL)",
      "Stockage et gestion des données avec HDFS, HBase et Cassandra",
      "Traitement par lots et en temps réel (MapReduce, Spark Streaming, Kafka)",
      "Bases de données NoSQL (MongoDB, Cassandra, Neo4j)",
      "Analyse de données avec Python (Pandas, NumPy, Matplotlib)",
      "Machine Learning avec Spark MLlib",
      "Visualisation de données (Tableau, Power BI, D3.js)",
      "Architecture des solutions Big Data dans le cloud (AWS EMR, Google Dataproc)",
      "Projets pratiques sur des jeux de données réels"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: BarChart2,
    prerequisites: "Bonne connaissance en programmation (Python ou Java), notions de base en bases de données et en algorithmique. Une expérience préalable avec les données est un plus.",
    objectives: [
      "Comprendre les concepts fondamentaux de la Big Data",
      "Maîtriser l'écosystème Hadoop et ses composants",
      "Apprendre à utiliser Spark pour le traitement distribué",
      "Découvrir les bases de données NoSQL et leurs cas d'utilisation",
      "Mettre en œuvre des solutions Big Data complètes"
    ],
    outcomes: [
      "Capacité à concevoir des architectures Big Data",
      "Maîtrise des outils de traitement de données massives",
      "Compétences en analyse et visualisation de données",
      "Capacité à prendre des décisions basées sur les données"
    ],
    included: [
      "Accès à des clusters Hadoop et Spark pour les travaux pratiques",
      "Support de cours complet avec exercices pratiques",
      "Accompagnement par des experts en Big Data",
      "Ateliers sur des cas d'utilisation concrets",
      "Projets pratiques sur des données réelles",
      "Accès à une communauté d'experts en données"
    ]
  },
  {
    id: 'deep-learning',
    title: "Deep Learning Avancé",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Maîtrisez les concepts avancés du deep learning et des réseaux de neurones profonds pour des applications innovantes.",
    longDescription: "Cette formation complète en Deep Learning vous permettra de maîtriser les algorithmes et architectures de pointe en apprentissage profond. Apprenez à concevoir, entraîner et déployer des modèles de deep learning pour la vision par ordinateur, le traitement du langage naturel et bien plus encore, en utilisant les frameworks les plus récents comme TensorFlow et PyTorch.",
    modules: [
      "Fondamentaux des réseaux de neurones",
      "Perceptrons multicouches et rétropropagation",
      "Réseaux de neurones convolutifs (CNN) pour la vision par ordinateur",
      "Réseaux de neurones récurrents (RNN, LSTM, GRU)",
      "Transformers et modèles de langage (BERT, GPT)",
      "Génération d'images avec GAN et VAE",
      "Apprentissage par renforcement profond",
      "Déploiement de modèles avec TensorFlow Serving et ONNX",
      "Optimisation et accélération des modèles",
      "Projets pratiques sur des cas d'utilisation concrets"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Bot,
    prerequisites: "Bonne maîtrise de Python, connaissances en algèbre linéaire et en calcul différentiel. Une expérience en machine learning est recommandée mais pas obligatoire.",
    objectives: [
      "Comprendre les concepts fondamentaux du deep learning",
      "Maîtriser les architectures de réseaux de neurones avancés",
      "Apprendre à utiliser TensorFlow et PyTorch pour le développement de modèles",
      "Mettre en œuvre des solutions de deep learning pour des problèmes concrets",
      "Déployer des modèles de deep learning en production"
    ],
    outcomes: [
      "Capacité à concevoir des modèles de deep learning complexes",
      "Maîtrise des frameworks modernes d'apprentissage profond",
      "Compétences en traitement d'images et de texte avec des réseaux de neurones",
      "Capacité à optimiser et déployer des modèles en production"
    ],
    included: [
      "Accès à des ressources GPU pour l'entraînement des modèles",
      "Support de cours complet avec notebooks Jupyter",
      "Accompagnement par des experts en deep learning",
      "Ateliers pratiques sur des jeux de données réels",
      "Projets concrets pour le portfolio",
      "Accès à une communauté d'apprenants et d'experts"
    ]
  },
  {
    id: 'machine-learning',
    title: "Machine Learning Professionnel",
    duration: "6 mois",
    students: "100 max",
    level: "Intermédiaire à Avancé",
    price: "300,000 FCFA",
    description: "Formation complète en Machine Learning couvrant les concepts théoriques et pratiques pour maîtriser l'apprentissage automatique.",
    longDescription: "Acquérez une expertise complète en Machine Learning avec cette formation intensive qui couvre l'ensemble du processus de développement de modèles prédictifs, de la préparation des données au déploiement en production. Maîtrisez les algorithmes classiques et modernes, et apprenez à les appliquer à des problèmes concrets dans divers domaines.",
    modules: [
      "Fondamentaux du Machine Learning et écosystème Python",
      "Prétraitement et exploration des données avec Pandas et NumPy",
      "Visualisation des données avec Matplotlib et Seaborn",
      "Apprentissage supervisé (régression, classification, arbres de décision, forêts aléatoires)",
      "Apprentissage non supervisé (clustering, réduction de dimension, détection d'anomalies)",
      "Sélection de modèles et optimisation d'hyperparamètres",
      "Traitement du langage naturel (NLP) avec NLTK et spaCy",
      "Introduction aux réseaux de neurones avec Keras et TensorFlow",
      "Déploiement de modèles avec Flask et FastAPI",
      "Projets pratiques sur des données réelles"
    ],
    certification: "Attestation GTA + AQP",
    nextStart: "Tout au long de l'année",
    featured: false,
    icon: Cpu,
    prerequisites: "Bonne maîtrise de Python, connaissances de base en algèbre linéaire et en statistiques. Une expérience préalable en programmation est nécessaire.",
    objectives: [
      "Maîtriser les concepts fondamentaux du Machine Learning",
      "Apprendre à utiliser les bibliothèques Python pour l'analyse de données et le ML",
      "Comprendre et implémenter différents algorithmes de Machine Learning",
      "Apprendre à évaluer et optimiser les performances des modèles",
      "Savoir déployer des modèles en production"
    ],
    outcomes: [
      "Capacité à résoudre des problèmes complexes avec des techniques de ML",
      "Maîtrise complète de l'écosystème Python pour la science des données",
      "Compétences en visualisation et analyse exploratoire des données",
      "Capacité à concevoir et déployer des solutions ML de bout en bout"
    ],
    included: [
      "Accès à des jeux de données variés pour la pratique",
      "Support de cours complet avec notebooks Jupyter",
      "Accompagnement par des experts en science des données",
      "Ateliers pratiques sur des cas d'entreprise réels",
      "Projets concrets pour le portfolio",
      "Accès à une communauté d'apprenants et de professionnels"
    ]
  },
  {
    id: 'montage-audio-visuel',
    title: "Montage Audio-Visuel",
    duration: "3 mois",
    students: "100 max",
    level: "Débutant à Intermédiaire",
    price: "150,000 FCFA",
    description: "Formation sur le montage et la production de contenus audio-visuels.",
    longDescription: "Maîtrisez les techniques de montage vidéo et audio professionnel pour créer des contenus captivants avec les outils les plus utilisés dans l'industrie.",
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
    icon: Film,
    prerequisites: "Aucun prérequis technique n'est nécessaire. Une sensibilité pour l'image et le son est un plus.",
    objectives: [
      "Maîtriser les techniques de base du montage vidéo",
      "Apprendre à utiliser Adobe Premiere Pro",
      "Comprendre les principes du montage audio",
      "Réaliser des projets concrets"
    ],
    outcomes: [
      "Création de vidéos professionnelles",
      "Maîtrise des logiciels de montage",
      "Montage audio de qualité"
    ],
    included: [
      "Accès aux logiciels pendant la formation",
      "Support de cours complet",
      "Accompagnement personnalisé",
      "Attestation de formation"
    ]
  },
  {
    id: 'bureautique',
    title: "Informatique & Outils de Bureautique",
    duration: "3 mois",
    students: "100 max",
    level: "Débutant",
    price: "150,000 FCFA",
    description: "Formation sur les outils bureautiques essentiels pour la productivité professionnelle.",
    longDescription: "Acquérez les compétences essentielles en bureautique pour être opérationnel dans tout environnement professionnel moderne. Maîtrisez les outils incontournables de la suite Microsoft Office.",
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
    icon: FileText,
    prerequisites: "Aucun prérequis n'est nécessaire. Cette formation est ouverte à tous les débutants.",
    objectives: [
      "Maîtriser les bases de l'informatique",
      "Utiliser efficacement Microsoft Word pour la rédaction",
      "Créer et gérer des tableaux avec Microsoft Excel",
      "Concevoir des présentations professionnelles avec PowerPoint"
    ],
    outcomes: [
      "Maîtrise complète des outils bureautiques",
      "Création de documents professionnels",
      "Gestion efficace des données"
    ],
    included: [
      "Accès aux logiciels pendant la formation",
      "Support de cours complet",
      "Exercices pratiques",
      "Accompagnement personnalisé",
      "Attestation de formation"
    ]
  },
];