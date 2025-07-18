export const mockAgenda = [
    {
      id: '1',
      title: 'Introduction Conteneurisation Docker',
      type: 'Attestation',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2025-11-23'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 15000,
      level: 'Avancé',
      description: 'Formation complète sur la conteneurisation, Docker, Dockerfile, Docker-compose, Docker-Swarm et tout les concepts qui l\'accompagne.',
      longDescription: `
        Cette formation avancée vous plonge dans l'univers de la conteneurisation avec Docker. Vous apprendrez à créer, gérer et orchestrer des conteneurs pour déployer des applications de manière efficace et scalable. De la création de Dockerfiles à l'utilisation de Docker Compose et Docker Swarm, cette formation couvre tous les aspects essentiels pour maîtriser cette technologie incontournable.
      `,
      modules: [
        'Introduction à la conteneurisation',
        'Installation et configuration de Docker',
        'Création et gestion de Dockerfiles',
        'Utilisation de Docker Compose',
        'Orchestration avec Docker Swarm'
      ],
      prerequisites: [
        'Connaissances de base en Linux',
        'Familiarité avec les concepts de développement logiciel',
        'Notions de base en gestion de serveurs'
      ],
      objectives: [
        'Comprendre les principes de la conteneurisation',
        'Savoir créer et gérer des conteneurs Docker',
        'Maîtriser l\'orchestration des conteneurs avec Docker Swarm',
        'Automatiser les déploiements avec Docker Compose'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '2',
      title: 'Python pour Data Science',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '18:00',
      date: new Date('2025-11-30'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 99,
      price: 20000,
      level: 'Intermédiaire',
      description: 'Apprenez Python pour l\'analyse de données et le machine learning.',
      longDescription: `
        Cette formation vous initie à l'utilisation de Python pour l'analyse de données et le machine learning. Vous explorerez les bibliothèques essentielles comme Pandas, NumPy, Matplotlib et Scikit-learn pour manipuler, visualiser et modéliser des données. Des projets pratiques vous permettront de mettre en œuvre des techniques d'analyse et de prédiction.
      `,
      modules: [
        'Introduction à Python pour la data science',
        'Manipulation de données avec Pandas',
        'Visualisation de données avec Matplotlib et Seaborn',
        'Introduction au machine learning avec Scikit-learn',
        'Projets pratiques en data science'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Notions de statistiques',
        'Aucun prérequis en Python requis'
      ],
      objectives: [
        'Maîtriser les bases de Python pour l’analyse de données',
        'Savoir manipuler et nettoyer des datasets',
        'Créer des visualisations de données percutantes',
        'Appliquer des algorithmes de machine learning simples'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '3',
      title: 'Introduction au Cloud Computing',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '12:30',
      endTime: '16:30',
      date: new Date('2025-12-07'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 200,
      price: 5000,
      level: 'Débuttant',
      description: 'A la découverte du cloud, des grands fournisseurs de coud et des services cloud AWS/Azure/Google.',
      longDescription: `
        Cette formation d'introduction au cloud computing vous familiarise avec les concepts fondamentaux du cloud et les principaux fournisseurs comme AWS, Azure et Google Cloud. Vous découvrirez les avantages du cloud, les différents types de services (IaaS, PaaS, SaaS) et comment ils peuvent transformer les opérations informatiques.
      `,
      modules: [
        'Qu’est-ce que le cloud computing ?',
        'Les types de services cloud : IaaS, PaaS, SaaS',
        'Présentation des fournisseurs : AWS, Azure, Google Cloud',
        'Cas d’usage du cloud computing',
        'Atelier pratique : configuration d’un service cloud'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Intérêt pour les technologies informatiques'
      ],
      objectives: [
        'Comprendre les concepts de base du cloud computing',
        'Identifier les services offerts par AWS, Azure et Google Cloud',
        'Savoir choisir une solution cloud adaptée à un besoin',
        'Effectuer une configuration de base dans un environnement cloud'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '4',
      title: 'Marketing Digital',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '16:30',
      date: new Date('2025-12-14'),
      location: 'En ligne',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 10000,
      level: 'Intermédiaire',
      description: 'Apprenez les bases du marketing digital, SEO, SEA et gestion des réseaux sociaux.',
      longDescription: `
        Cette formation vous enseigne les fondamentaux du marketing digital, incluant le référencement naturel (SEO), la publicité en ligne (SEA) et la gestion des réseaux sociaux. Vous apprendrez à créer des campagnes efficaces, à optimiser la visibilité en ligne et à analyser les performances marketing.
      `,
      modules: [
        'Introduction au marketing digital',
        'SEO : optimiser son référencement naturel',
        'SEA : créer des campagnes publicitaires efficaces',
        'Gestion des réseaux sociaux',
        'Analyse des performances avec Google Analytics'
      ],
      prerequisites: [
        'Connaissances de base en navigation web',
        'Aucun prérequis en marketing requis'
      ],
      objectives: [
        'Comprendre les principes du marketing digital',
        'Maîtriser les bases du SEO et du SEA',
        'Gérer efficacement les réseaux sociaux',
        'Analyser les performances des campagnes marketing'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '5',
      title: 'Intégration avec n8n',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '17:00',
      date: new Date('2025-12-21'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 80,
      price: 12000,
      level: 'Avancé',
      description: 'Maîtrisez l’automatisation des workflows avec n8n pour optimiser vos processus.',
      longDescription: `
        Cette formation avancée explore n8n, un outil puissant d’automatisation des workflows. Vous apprendrez à connecter des applications, automatiser des tâches répétitives et créer des flux de travail complexes pour optimiser les processus métiers, avec des exemples concrets d’intégration.
      `,
      modules: [
        'Introduction à n8n et ses fonctionnalités',
        'Création de workflows simples',
        'Intégration avec des API tierces',
        'Gestion des erreurs dans les workflows',
        'Projets pratiques d’automatisation'
      ],
      prerequisites: [
        'Connaissances de base en API et HTTP',
        'Familiarité avec les outils d’automatisation',
        'Notions de programmation (facultatif)'
      ],
      objectives: [
        'Comprendre le fonctionnement de n8n',
        'Créer des workflows automatisés',
        'Intégrer des services externes via API',
        'Optimiser les processus métiers avec n8n'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '6',
      title: 'Design Graphique avec Canva',
      type: 'Attestation',
      status: 'places-dispo',
      startTime: '11:00',
      endTime: '15:00',
      date: new Date('2025-12-28'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 120,
      price: 5000,
      level: 'Débuttant',
      description: 'Créez des visuels professionnels avec Canva pour le marketing et la communication.',
      longDescription: `
        Cette formation d’initiation vous apprend à utiliser Canva pour concevoir des visuels attrayants pour le marketing, les réseaux sociaux et la communication professionnelle. Aucune expérience en design n’est requise, et vous repartirez avec des créations prêtes à l’emploi.
      `,
      modules: [
        'Découverte de l’interface Canva',
        'Création de visuels pour les réseaux sociaux',
        'Conception de supports marketing (flyers, affiches)',
        'Utilisation des templates et personnalisation',
        'Exportation et partage des créations'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Accès à un ordinateur avec connexion Internet'
      ],
      objectives: [
        'Maîtriser l’interface de Canva',
        'Créer des visuels professionnels pour différents usages',
        'Personnaliser des templates existants',
        'Exporter des designs pour une utilisation immédiate'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '7',
      title: 'Introduction à Terraform',
      type: 'Entreprise',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-01-04'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 90,
      price: 18000,
      level: 'Avancé',
      description: 'Apprenez à gérer l’infrastructure as code avec Terraform pour des déploiements cloud.',
      longDescription: `
        Cette formation vous initie à Terraform, un outil d’infrastructure as code (IaC). Vous apprendrez à automatiser le provisionnement et la gestion des infrastructures cloud (AWS, Azure, etc.) avec des configurations reproductibles et scalables.
      `,
      modules: [
        'Introduction à l’infrastructure as code',
        'Installation et configuration de Terraform',
        'Création de configurations Terraform',
        'Gestion des ressources cloud',
        'Projets pratiques avec Terraform'
      ],
      prerequisites: [
        'Connaissances de base en cloud computing',
        'Familiarité avec un fournisseur cloud (AWS, Azure, etc.)',
        'Notions de base en scripting'
      ],
      objectives: [
        'Comprendre les principes de l’infrastructure as code',
        'Maîtriser la syntaxe de Terraform',
        'Automatiser le provisionnement d’infrastructures cloud',
        'Gérer des environnements cloud complexes'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '8',
      title: 'Ansible pour l’Automatisation',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-01-11'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 85,
      price: 17000,
      level: 'Avancé',
      description: 'Maîtrisez Ansible pour automatiser la gestion des serveurs et des applications.',
      longDescription: `
        Cette formation vous apprend à utiliser Ansible pour automatiser la gestion des serveurs, des applications et des configurations. Vous découvrirez comment créer des playbooks Ansible pour déployer des infrastructures efficacement.
      `,
      modules: [
        'Introduction à Ansible',
        'Création de playbooks Ansible',
        'Gestion des serveurs avec Ansible',
        'Automatisation des déploiements',
        'Projets pratiques avec Ansible'
      ],
      prerequisites: [
        'Connaissances de base en Linux',
        'Notions de gestion de serveurs',
        'Familiarité avec YAML (facultatif)'
      ],
      objectives: [
        'Comprendre le fonctionnement d’Ansible',
        'Créer des playbooks pour automatiser des tâches',
        'Gérer des serveurs à grande échelle',
        'Automatiser les déploiements d’applications'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '9',
      title: 'Grafana & Prometheus pour le Monitoring',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-01-18'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 100,
      price: 16000,
      level: 'Avancé',
      description: 'Configurez Grafana et Prometheus pour surveiller les performances des systèmes.',
      longDescription: `
        Cette formation vous enseigne comment utiliser Prometheus pour collecter des métriques et Grafana pour visualiser les performances des systèmes. Vous apprendrez à configurer des tableaux de bord personnalisés et à surveiller des infrastructures en temps réel.
      `,
      modules: [
        'Introduction à Prometheus',
        'Configuration de Prometheus pour la collecte de métriques',
        'Découverte de Grafana',
        'Création de tableaux de bord personnalisés',
        'Projets pratiques de monitoring'
      ],
      prerequisites: [
        'Connaissances de base en administration système',
        'Familiarité avec les concepts de monitoring',
        'Notions de base en Linux'
      ],
      objectives: [
        'Configurer Prometheus pour collecter des métriques',
        'Créer des tableaux de bord avec Grafana',
        'Surveiller les performances des systèmes en temps réel',
        'Analyser les données de monitoring pour optimiser les systèmes'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '10',
      title: 'Développement WordPress',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '18:00',
      date: new Date('2026-01-25'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 110,
      price: 5000,
      level: 'Intermédiaire',
      description: 'Créez des sites web dynamiques avec WordPress, du thème à la personnalisation.',
      longDescription: `
        Cette formation vous apprend à créer et gérer des sites web avec WordPress. Vous explorerez la personnalisation des thèmes, l’ajout de plugins et l’optimisation des performances pour créer des sites dynamiques et professionnels.
      `,
      modules: [
        'Introduction à WordPress',
        'Installation et configuration de WordPress',
        'Personnalisation des thèmes',
        'Gestion des plugins',
        'Optimisation SEO et performances'
      ],
      prerequisites: [
        'Connaissances de base en HTML et CSS',
        'Aucune expérience WordPress requise'
      ],
      objectives: [
        'Installer et configurer WordPress',
        'Personnaliser un thème WordPress',
        'Utiliser des plugins pour ajouter des fonctionnalités',
        'Optimiser un site pour le SEO'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '11',
      title: 'Initiation au Développement Frontend',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '16:30',
      date: new Date('2026-02-01'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 150,
      price: 8000,
      level: 'Débutant',
      description: 'Apprenez les bases du développement frontend avec HTML, CSS et JavaScript.',
      longDescription: `
        Cette formation d’initiation vous enseigne les bases du développement frontend avec HTML, CSS et JavaScript. Vous apprendrez à créer des interfaces utilisateur interactives et responsives pour des sites web modernes.
      `,
      modules: [
        'Introduction au développement frontend',
        'HTML : structure des pages web',
        'CSS : stylisation et responsive design',
        'JavaScript : ajout d’interactivité',
        'Projet pratique : création d’un site web'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Accès à un ordinateur avec un éditeur de code'
      ],
      objectives: [
        'Maîtriser les bases de HTML et CSS',
        'Ajouter de l’interactivité avec JavaScript',
        'Créer des interfaces responsives',
        'Réaliser un site web simple'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '12',
      title: 'Initiation au Développement Backend',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '17:00',
      date: new Date('2026-02-08'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 100,
      price: 12000,
      level: 'Intermédiaire',
      description: 'Découvrez les bases du développement backend avec Node.js et bases de données.',
      longDescription: `
        Cette formation explore les bases du développement backend avec Node.js et les bases de données. Vous apprendrez à créer des API REST, gérer des bases de données et déployer des applications backend.
      `,
      modules: [
        'Introduction au développement backend',
        'Configuration de Node.js',
        'Création d’API REST avec Express',
        'Gestion des bases de données (SQL/NoSQL)',
        'Projet pratique : création d’une API'
      ],
      prerequisites: [
        'Connaissances de base en JavaScript',
        'Notions de programmation'
      ],
      objectives: [
        'Comprendre les concepts du développement backend',
        'Créer des API REST avec Node.js et Express',
        'Gérer des bases de données',
        'Déployer une application backend'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '13',
      title: 'Cours React',
      type: 'Attestation',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-02-15'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 90,
      price: 15000,
      level: 'Avancé',
      description: 'Maîtrisez React pour créer des interfaces utilisateur dynamiques et modernes.',
      longDescription: `
        Cette formation avancée vous apprend à utiliser React pour développer des interfaces utilisateur modernes et performantes. Vous explorerez les composants, les hooks et la gestion d’état avec Redux pour créer des applications web dynamiques.
      `,
      modules: [
        'Introduction à React',
        'Création de composants React',
        'Utilisation des hooks',
        'Gestion d’état avec Redux',
        'Projet pratique : application React'
      ],
      prerequisites: [
        'Connaissances solides en JavaScript',
        'Familiarité avec HTML et CSS',
        'Notions de base en ES6'
      ],
      objectives: [
        'Maîtriser la création de composants React',
        'Utiliser les hooks pour gérer l’état et les effets',
        'Gérer l’état global avec Redux',
        'Développer une application web complète avec React'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '14',
      title: 'Cours NodeJS-ExpressJS',
      type: 'Vacances',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-02-22'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 14000,
      level: 'Avancé',
      description: 'Construisez des API robustes avec Node.js et Express.js.',
      longDescription: `
        Cette formation vous apprend à développer des API robustes et scalables avec Node.js et Express.js. Vous explorerez la création de routes, la gestion des bases de données et l’authentification pour des applications backend modernes.
      `,
      modules: [
        'Introduction à Node.js et Express.js',
        'Création de routes et middlewares',
        'Connexion à une base de données',
        'Mise en place de l’authentification',
        'Projet pratique : création d’une API'
      ],
      prerequisites: [
        'Connaissances de base en JavaScript',
        'Notions de développement backend'
      ],
      objectives: [
        'Maîtriser Node.js et Express.js',
        'Créer des API REST robustes',
        'Gérer les bases de données dans une application',
        'Implémenter l’authentification dans une API'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '15',
      title: 'Introduction à la Cybersécurité',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-03-01'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 120,
      price: 11000,
      level: 'Intermédiaire',
      description: 'Découvrez les bases de la cybersécurité et les bonnes pratiques de protection.',
      longDescription: `
        Cette formation vous initie aux concepts fondamentaux de la cybersécurité, y compris la protection des systèmes, la gestion des vulnérabilités et les bonnes pratiques pour sécuriser les données et les réseaux.
      `,
      modules: [
        'Introduction à la cybersécurité',
        'Menaces et vulnérabilités courantes',
        'Sécurisation des systèmes et réseaux',
        'Gestion des mots de passe et authentification',
        'Atelier pratique : analyse de sécurité'
      ],
      prerequisites: [
        'Connaissances de base en informatique',
        'Aucun prérequis en cybersécurité requis'
      ],
      objectives: [
        'Comprendre les bases de la cybersécurité',
        'Identifier les menaces courantes',
        'Appliquer des bonnes pratiques de sécurité',
        'Analyser les vulnérabilités d’un système'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '16',
      title: 'Administration Linux',
      type: 'Attestation',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '18:00',
      date: new Date('2026-03-08'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 85,
      price: 16000,
      level: 'Avancé',
      description: 'Apprenez à gérer des serveurs Linux avec efficacité.',
      longDescription: `
        Cette formation avancée vous apprend à administrer des serveurs Linux, de la configuration initiale à la gestion des utilisateurs, des services et des performances. Vous explorerez les commandes essentielles et les outils pour gérer des environnements Linux.
      `,
      modules: [
        'Introduction à Linux',
        'Configuration des serveurs Linux',
        'Gestion des utilisateurs et permissions',
        'Administration des services',
        'Projet pratique : configuration d’un serveur'
      ],
      prerequisites: [
        'Connaissances de base en informatique',
        'Familiarité avec un terminal Linux (facultatif)'
      ],
      objectives: [
        'Maîtriser l’administration des serveurs Linux',
        'Gérer les utilisateurs et permissions',
        'Configurer des services Linux',
        'Optimiser les performances d’un serveur'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '17',
      title: 'Les Bases du Shell et du Scripting',
      type: 'Vacances',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '16:30',
      date: new Date('2026-03-15'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 9000,
      level: 'Intermédiaire',
      description: 'Maîtrisez les scripts shell pour automatiser les tâches sous Linux.',
      longDescription: `
        Cette formation vous enseigne les bases du shell Linux et du scripting Bash. Vous apprendrez à automatiser des tâches répétitives, à gérer des fichiers et à créer des scripts pour optimiser les workflows sous Linux.
      `,
      modules: [
        'Introduction au shell Linux',
        'Commandes de base du shell',
        'Création de scripts Bash',
        'Automatisation des tâches',
        'Projet pratique : script d’automatisation'
      ],
      prerequisites: [
        'Connaissances de base en Linux',
        'Aucun prérequis en scripting requis'
      ],
      objectives: [
        'Maîtriser les commandes de base du shell',
        'Créer des scripts Bash fonctionnels',
        'Automatiser des tâches sous Linux',
        'Gérer des fichiers et processus avec des scripts'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '18',
      title: 'Git & GitHub',
      type: 'Attestation',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '15:00',
      date: new Date('2026-03-22'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 150,
      price: 7000,
      level: 'Débutant',
      description: 'Apprenez à utiliser Git et GitHub pour le contrôle de version.',
      longDescription: `
        Cette formation d’initiation vous apprend à utiliser Git et GitHub pour gérer le contrôle de version de vos projets. Vous découvrirez les commandes essentielles, la collaboration en équipe et la gestion des branches.
      `,
      modules: [
        'Introduction à Git et GitHub',
        'Commandes de base de Git',
        'Gestion des branches',
        'Collaboration avec GitHub',
        'Projet pratique : gestion d’un dépôt'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Accès à un ordinateur avec Git installé'
      ],
      objectives: [
        'Comprendre le contrôle de version avec Git',
        'Maîtriser les commandes de base de Git',
        'Collaborer sur des projets avec GitHub',
        'Gérer des branches et des fusions'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '19',
      title: 'CI/CD avec Jenkins',
      type: 'Entreprise',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-03-29'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 90,
      price: 18000,
      level: 'Avancé',
      description: 'Mettez en place des pipelines CI/CD avec Jenkins pour des déploiements automatisés.',
      longDescription: `
        Cette formation avancée explore Jenkins pour mettre en place des pipelines d’intégration et de déploiement continus (CI/CD). Vous apprendrez à automatiser les tests, les builds et les déploiements pour des cycles de développement plus rapides.
      `,
      modules: [
        'Introduction à CI/CD',
        'Installation et configuration de Jenkins',
        'Création de pipelines CI/CD',
        'Intégration avec Git et autres outils',
        'Projet pratique : pipeline CI/CD'
      ],
      prerequisites: [
        'Connaissances de base en développement logiciel',
        'Familiarité avec Git',
        'Notions de base en DevOps'
      ],
      objectives: [
        'Comprendre les concepts de CI/CD',
        'Configurer Jenkins pour l’automatisation',
        'Créer des pipelines CI/CD efficaces',
        'Intégrer Jenkins avec d’autres outils'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '20',
      title: 'Kubernetes pour Débutants',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-04-05'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 80,
      price: 20000,
      level: 'Avancé',
      description: 'Introduction à l’orchestration de conteneurs avec Kubernetes.',
      longDescription: `
        Cette formation vous initie à Kubernetes, un outil puissant pour l’orchestration de conteneurs. Vous apprendrez à déployer, gérer et scaler des applications conteneurisées dans un environnement Kubernetes.
      `,
      modules: [
        'Introduction à Kubernetes',
        'Configuration d’un cluster Kubernetes',
        'Déploiement d’applications',
        'Gestion des pods et services',
        'Projet pratique : déploiement Kubernetes'
      ],
      prerequisites: [
        'Connaissances de base en Docker',
        'Familiarité avec les concepts de conteneurisation'
      ],
      objectives: [
        'Comprendre les bases de Kubernetes',
        'Configurer un cluster Kubernetes',
        'Déployer des applications conteneurisées',
        'Gérer les ressources dans Kubernetes'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '21',
      title: 'Formation Avancée Word et Excel',
      type: 'Vacances',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-04-12'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 200,
      price: 6000,
      level: 'Intermédiaire',
      description: 'Maîtrisez les fonctionnalités avancées de Word et Excel pour la bureautique.',
      longDescription: `
        Cette formation approfondit vos compétences sur Microsoft Word et Excel. Vous apprendrez à utiliser des fonctionnalités avancées comme les macros, les tableaux croisés dynamiques et la mise en forme conditionnelle pour optimiser vos tâches bureautiques.
      `,
      modules: [
        'Fonctionnalités avancées de Word',
        'Tableaux croisés dynamiques dans Excel',
        'Macros et automatisation dans Excel',
        'Mise en forme conditionnelle',
        'Projet pratique : rapport automatisé'
      ],
      prerequisites: [
        'Connaissances de base en Word et Excel',
        'Aucun prérequis en programmation requis'
      ],
      objectives: [
        'Maîtriser les fonctionnalités avancées de Word',
        'Utiliser les tableaux croisés dynamiques dans Excel',
        'Créer des macros pour automatiser des tâches',
        'Produire des rapports professionnels'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '22',
      title: 'Community Management',
      type: 'Attestation',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '16:00',
      date: new Date('2026-04-19'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 8000,
      level: 'Débutant',
      description: 'Apprenez à gérer les communautés sur les réseaux sociaux efficacement.',
      longDescription: `
        Cette formation vous enseigne les bases du community management, y compris la création de contenu, l’engagement des audiences et l’analyse des performances sur les réseaux sociaux comme Facebook, Instagram et Twitter.
      `,
      modules: [
        'Introduction au community management',
        'Création de contenu pour les réseaux sociaux',
        'Engagement et gestion des audiences',
        'Analyse des performances',
        'Projet pratique : stratégie réseaux sociaux'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Accès à un compte sur les réseaux sociaux'
      ],
      objectives: [
        'Comprendre le rôle du community manager',
        'Créer du contenu engageant',
        'Gérer les interactions avec les audiences',
        'Analyser les performances des publications'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '23',
      title: 'Introduction à l’Intelligence Artificielle',
      type: 'Entreprise',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '17:30',
      date: new Date('2026-04-26'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 22000,
      level: 'Avancé',
      description: 'Découvrez les bases de l’IA et ses applications pratiques.',
      longDescription: `
        Cette formation explore les concepts fondamentaux de l’intelligence artificielle, y compris le machine learning, les réseaux neuronaux et leurs applications dans divers domaines comme la reconnaissance d’images et le traitement du langage naturel.
      `,
      modules: [
        'Introduction à l’intelligence artificielle',
        'Concepts de base du machine learning',
        'Réseaux neuronaux et deep learning',
        'Applications de l’IA',
        'Projet pratique : modèle d’IA simple'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Notions de mathématiques (statistiques, algèbre)'
      ],
      objectives: [
        'Comprendre les concepts de l’IA',
        'Identifier les cas d’usage de l’IA',
        'Créer un modèle de machine learning simple',
        'Appliquer l’IA à des problèmes réels'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '24',
      title: 'Pentesting pour Débutants',
      type: 'Attestation',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '16:00',
      date: new Date('2026-05-03'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 90,
      price: 19000,
      level: 'Avancé',
      description: 'Introduction aux tests d’intrusion et à la sécurité des systèmes.',
      longDescription: `
        Cette formation vous initie aux tests d’intrusion éthique (pentesting). Vous apprendrez à identifier les vulnérabilités, à utiliser des outils comme Metasploit et à sécuriser les systèmes contre les attaques courantes.
      `,
      modules: [
        'Introduction au pentesting',
        'Identification des vulnérabilités',
        'Utilisation d’outils de pentesting (Metasploit, Nmap)',
        'Sécurisation des systèmes',
        'Projet pratique : simulation d’attaque'
      ],
      prerequisites: [
        'Connaissances de base en cybersécurité',
        'Familiarité avec Linux'
      ],
      objectives: [
        'Comprendre les bases du pentesting',
        'Identifier les vulnérabilités des systèmes',
        'Utiliser des outils de pentesting',
        'Appliquer des mesures de sécurité'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '25',
      title: 'Développement d’Applications Mobiles',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-05-10'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 110,
      price: 15000,
      level: 'Intermédiaire',
      description: 'Créez des applications mobiles avec Flutter ou React Native.',
      longDescription: `
        Cette formation vous apprend à développer des applications mobiles multiplateformes avec Flutter ou React Native. Vous explorerez la création d’interfaces utilisateur, la gestion des données et le déploiement d’applications mobiles.
      `,
      modules: [
        'Introduction au développement mobile',
        'Découverte de Flutter/React Native',
        'Création d’interfaces utilisateur',
        'Gestion des données et API',
        'Projet pratique : application mobile'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Familiarité avec JavaScript (pour React Native)'
      ],
      objectives: [
        'Maîtriser les bases de Flutter ou React Native',
        'Créer des interfaces utilisateur mobiles',
        'Intégrer des API dans une application mobile',
        'Déployer une application mobile'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '26',
      title: 'Introduction au Big Data',
      type: 'Entreprise',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-05-17'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 20000,
      level: 'Avancé',
      description: 'Découvrez les concepts du Big Data et les outils comme Hadoop et Spark.',
      longDescription: `
        Cette formation explore les concepts du Big Data et les outils comme Hadoop et Spark. Vous apprendrez à traiter et analyser de grands volumes de données pour extraire des insights précieux.
      `,
      modules: [
        'Introduction au Big Data',
        'Découverte de Hadoop',
        'Utilisation de Spark pour l’analyse de données',
        'Gestion des pipelines de données',
        'Projet pratique : analyse de données'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Notions de bases de données'
      ],
      objectives: [
        'Comprendre les concepts du Big Data',
        'Utiliser Hadoop pour gérer de grands volumes de données',
        'Analyser des données avec Spark',
        'Créer des pipelines de données'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '27',
      title: 'SEO Avancé',
      type: 'Attestation',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-05-24'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 120,
      price: 10000,
      level: 'Intermédiaire',
      description: 'Optimisez le référencement naturel pour améliorer la visibilité en ligne.',
      longDescription: `
        Cette formation approfondit les techniques de référencement naturel (SEO) pour optimiser la visibilité des sites web. Vous apprendrez à analyser les performances, à optimiser le contenu et à utiliser des outils SEO avancés.
      `,
      modules: [
        'Introduction au SEO avancé',
        'Analyse des mots-clés',
        'Optimisation on-page et off-page',
        'Utilisation d’outils SEO (Ahrefs, SEMrush)',
        'Projet pratique : audit SEO'
      ],
      prerequisites: [
        'Connaissances de base en SEO',
        'Familiarité avec la gestion de contenu web'
      ],
      objectives: [
        'Maîtriser les techniques avancées de SEO',
        'Analyser et optimiser les mots-clés',
        'Améliorer le classement des sites web',
        'Réaliser un audit SEO complet'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '28',
      title: 'Développement avec Django',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '18:00',
      date: new Date('2026-05-31'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 90,
      price: 14000,
      level: 'Avancé',
      description: 'Créez des applications web robustes avec le framework Django.',
      longDescription: `
        Cette formation vous apprend à développer des applications web avec Django, un framework Python puissant. Vous explorerez la création de modèles, de vues et de templates pour construire des applications robustes et sécurisées.
      `,
      modules: [
        'Introduction à Django',
        'Création de modèles et bases de données',
        'Développement de vues et templates',
        'Gestion de l’authentification',
        'Projet pratique : application Django'
      ],
      prerequisites: [
        'Connaissances de base en Python',
        'Notions de bases de données'
      ],
      objectives: [
        'Maîtriser les bases de Django',
        'Créer des applications web complètes',
        'Gérer les bases de données avec Django ORM',
        'Implémenter l’authentification dans une application'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '29',
      title: 'Introduction à la Blockchain',
      type: 'Entreprise',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '16:30',
      date: new Date('2026-06-07'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 21000,
      level: 'Avancé',
      description: 'Découvrez les bases de la blockchain et ses applications.',
      longDescription: `
        Cette formation explore les concepts fondamentaux de la blockchain, y compris les contrats intelligents et les applications décentralisées. Vous apprendrez les bases de la technologie blockchain et ses cas d’usage dans divers secteurs.
      `,
      modules: [
        'Introduction à la blockchain',
        'Fonctionnement des contrats intelligents',
        'Applications décentralisées (DApps)',
        'Cas d’usage de la blockchain',
        'Projet pratique : création d’un contrat intelligent'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Notions de cryptographie (facultatif)'
      ],
      objectives: [
        'Comprendre les bases de la blockchain',
        'Créer un contrat intelligent simple',
        'Identifier les cas d’usage de la blockchain',
        'Développer une application décentralisée'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '30',
      title: 'Tests de Pénétration Avancés',
      type: 'Attestation',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '17:00',
      date: new Date('2026-06-14'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 80,
      price: 25000,
      level: 'Avancé',
      description: 'Approfondissez vos compétences en tests de pénétration éthique.',
      longDescription: `
        Cette formation avancée approfondit les techniques de tests d’intrusion éthique. Vous apprendrez à exploiter des vulnérabilités complexes, à utiliser des outils avancés et à rédiger des rapports de pentesting professionnels.
      `,
      modules: [
        'Techniques avancées de pentesting',
        'Exploitation des vulnérabilités',
        'Utilisation d’outils avancés (Burp Suite, etc.)',
        'Rédaction de rapports de pentesting',
        'Projet pratique : pentesting avancé'
      ],
      prerequisites: [
        'Connaissances de base en pentesting',
        'Familiarité avec Linux et les réseaux'
      ],
      objectives: [
        'Maîtriser les techniques avancées de pentesting',
        'Exploiter des vulnérabilités complexes',
        'Utiliser des outils professionnels de pentesting',
        'Rédiger des rapports de sécurité détaillés'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '31',
      title: 'Power BI pour l’Analyse de Données',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-06-21'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 11000,
      level: 'Intermédiaire',
      description: 'Maîtrisez Power BI pour visualiser et analyser les données.',
      longDescription: `
        Cette formation vous apprend à utiliser Power BI pour créer des visualisations de données interactives et des rapports d’analyse. Vous explorerez l’importation de données, la création de tableaux de bord et l’analyse des performances.
      `,
      modules: [
        'Introduction à Power BI',
        'Importation et transformation des données',
        'Création de visualisations',
        'Développement de tableaux de bord',
        'Projet pratique : rapport Power BI'
      ],
      prerequisites: [
        'Connaissances de base en Excel',
        'Notions de base en analyse de données'
      ],
      objectives: [
        'Maîtriser l’interface de Power BI',
        'Importer et transformer des données',
        'Créer des visualisations interactives',
        'Produire des rapports d’analyse professionnels'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '32',
      title: 'Développement Full Stack',
      type: 'Entreprise',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '18:30',
      date: new Date('2026-06-28'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 20000,
      level: 'Avancé',
      description: 'Devenez un développeur full stack avec React et Node.js.',
      longDescription: `
        Cette formation vous forme au développement full stack avec React pour le frontend et Node.js pour le backend. Vous apprendrez à créer des applications web complètes, de l’interface utilisateur à l’API et la base de données.
      `,
      modules: [
        'Introduction au développement full stack',
        'Développement frontend avec React',
        'Développement backend avec Node.js',
        'Intégration frontend-backend',
        'Projet pratique : application full stack'
      ],
      prerequisites: [
        'Connaissances de base en JavaScript',
        'Familiarité avec HTML et CSS'
      ],
      objectives: [
        'Maîtriser le développement frontend avec React',
        'Créer des API avec Node.js',
        'Intégrer frontend et backend',
        'Développer une application full stack'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '33',
      title: 'Introduction à DevOps',
      type: 'Attestation',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-07-05'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 90,
      price: 18000,
      level: 'Avancé',
      description: 'Découvrez les pratiques DevOps pour une collaboration efficace.',
      longDescription: `
        Cette formation explore les pratiques DevOps pour améliorer la collaboration entre le développement et les opérations. Vous apprendrez à utiliser des outils comme Docker, Jenkins et Kubernetes pour automatiser et optimiser les déploiements.
      `,
      modules: [
        'Introduction à DevOps',
        'Outils DevOps : Docker, Jenkins, Kubernetes',
        'Automatisation des déploiements',
        'Monitoring et CI/CD',
        'Projet pratique : pipeline DevOps'
      ],
      prerequisites: [
        'Connaissances de base en développement logiciel',
        'Familiarité avec Linux'
      ],
      objectives: [
        'Comprendre les principes de DevOps',
        'Utiliser des outils DevOps pour l’automatisation',
        'Mettre en place des pipelines CI/CD',
        'Optimiser la collaboration entre équipes'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '34',
      title: 'Administration de Bases de Données',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '16:00',
      date: new Date('2026-07-12'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 100,
      price: 15000,
      level: 'Intermédiaire',
      description: 'Apprenez à gérer des bases de données SQL et NoSQL.',
      longDescription: `
        Cette formation vous apprend à administrer des bases de données relationnelles (SQL) et non relationnelles (NoSQL). Vous explorerez la gestion des données, l’optimisation des performances et la sécurisation des bases de données.
      `,
      modules: [
        'Introduction aux bases de données',
        'Gestion des bases SQL (MySQL, PostgreSQL)',
        'Introduction aux bases NoSQL (MongoDB)',
        'Optimisation des performances',
        'Projet pratique : gestion d’une base de données'
      ],
      prerequisites: [
        'Connaissances de base en informatique',
        'Notions de bases de données (facultatif)'
      ],
      objectives: [
        'Maîtriser la gestion des bases SQL et NoSQL',
        'Optimiser les performances des bases de données',
        'Sécuriser les données',
        'Administrer une base de données complète'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '35',
      title: 'Création de Contenu Vidéo',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '15:30',
      date: new Date('2026-07-19'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 120,
      price: 8000,
      level: 'Débutant',
      description: 'Créez des vidéos professionnelles pour les réseaux sociaux.',
      longDescription: `
        Cette formation d’initiation vous apprend à créer des vidéos professionnelles pour les réseaux sociaux avec des outils comme Adobe Premiere ou des alternatives gratuites. Vous explorerez le montage, l’ajout d’effets et l’optimisation pour différentes plateformes.
      `,
      modules: [
        'Introduction à la création vidéo',
        'Montage vidéo de base',
        'Ajout d’effets et transitions',
        'Optimisation pour les réseaux sociaux',
        'Projet pratique : création d’une vidéo'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Accès à un logiciel de montage vidéo'
      ],
      objectives: [
        'Maîtriser les bases du montage vidéo',
        'Créer des vidéos optimisées pour les réseaux sociaux',
        'Ajouter des effets et transitions',
        'Produire une vidéo professionnelle'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '36',
      title: 'Machine Learning Avancé',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '18:00',
      date: new Date('2026-07-26'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 80,
      price: 25000,
      level: 'Avancé',
      description: 'Approfondissez vos connaissances en machine learning avec TensorFlow.',
      longDescription: `
        Cette formation avancée approfondit vos compétences en machine learning avec TensorFlow. Vous explorerez les réseaux neuronaux, le deep learning et les techniques avancées pour résoudre des problèmes complexes.
      `,
      modules: [
        'Introduction au machine learning avancé',
        'Réseaux neuronaux avec TensorFlow',
        'Techniques de deep learning',
        'Optimisation des modèles',
        'Projet pratique : modèle de deep learning'
      ],
      prerequisites: [
        'Connaissances de base en machine learning',
        'Familiarité avec Python et TensorFlow'
      ],
      objectives: [
        'Maîtriser les réseaux neuronaux avec TensorFlow',
        'Appliquer des techniques de deep learning',
        'Optimiser les modèles de machine learning',
        'Développer un modèle avancé'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '37',
      title: 'Introduction à l’UX/UI Design',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-08-02'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 9000,
      level: 'Intermédiaire',
      description: 'Apprenez les bases de la conception UX/UI pour des interfaces utilisateur.',
      longDescription: `
        Cette formation vous initie à la conception UX/UI pour créer des interfaces utilisateur intuitives et attrayantes. Vous explorerez les principes de l’expérience utilisateur (UX) et de l’interface utilisateur (UI) avec des outils comme Figma.
      `,
      modules: [
        'Introduction à l’UX/UI',
        'Principes de l’expérience utilisateur',
        'Conception d’interfaces avec Figma',
        'Prototypage et tests utilisateurs',
        'Projet pratique : conception d’interface'
      ],
      prerequisites: [
        'Connaissances de base en design',
        'Aucun prérequis en UX/UI requis'
      ],
      objectives: [
        'Comprendre les principes de l’UX/UI',
        'Concevoir des interfaces avec Figma',
        'Réaliser des prototypes interactifs',
        'Effectuer des tests utilisateurs'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '38',
      title: 'Développement avec React',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-08-09'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 14000,
      level: 'Avancé',
      description: 'Créez des applications web avec le framework React.',
      longDescription: `
        Cette formation vous apprend à développer des applications web modernes avec React. Vous explorerez les composants, les hooks et la gestion d’état pour créer des interfaces utilisateur dynamiques et performantes.
      `,
      modules: [
        'Introduction à React',
        'Création de composants',
        'Utilisation des hooks',
        'Gestion d’état avec Redux',
        'Projet pratique : application React'
      ],
      prerequisites: [
        'Connaissances solides en JavaScript',
        'Familiarité avec HTML et CSS'
      ],
      objectives: [
        'Maîtriser la création de composants React',
        'Utiliser les hooks pour gérer l’état',
        'Gérer l’état global avec Redux',
        'Développer une application web avec React'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '39',
      title: 'Introduction à la Robotique',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-08-16'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 90,
      price: 20000,
      level: 'Avancé',
      description: 'Découvrez les bases de la robotique et de la programmation de robots.',
      longDescription: `
        Cette formation explore les bases de la robotique, y compris la programmation de robots et les capteurs. Vous apprendrez à concevoir et programmer des robots pour des applications pratiques.
      `,
      modules: [
        'Introduction à la robotique',
        'Programmation de robots',
        'Utilisation des capteurs',
        'Conception de systèmes robotiques',
        'Projet pratique : robot simple'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Notions d’électronique (facultatif)'
      ],
      objectives: [
        'Comprendre les bases de la robotique',
        'Programmer des robots simples',
        'Utiliser des capteurs pour des applications robotiques',
        'Concevoir un système robotique'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '40',
      title: 'Analyse de Données avec l\'IA',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '16:00',
      date: new Date('2026-08-23'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 100,
      price: 12000,
      level: 'Intermédiaire',
      description: 'Utilisez l\'IA pour l\'analyse statistique et la visualisation de données.',
      longDescription: `
        Cette formation vous apprend à utiliser l’intelligence artificielle pour analyser et visualiser des données. Vous explorerez des outils comme Python et des bibliothèques d’IA pour extraire des insights à partir de datasets.
      `,
      modules: [
        'Introduction à l’analyse de données avec IA',
        'Utilisation de Python pour l’IA',
        'Analyse statistique avec IA',
        'Visualisation des résultats',
        'Projet pratique : analyse de données'
      ],
      prerequisites: [
        'Connaissances de base en Python',
        'Notions de statistiques'
      ],
      objectives: [
        'Utiliser l’IA pour analyser des données',
        'Maîtriser les bibliothèques Python pour l’IA',
        'Créer des visualisations de données',
        'Extraire des insights à partir de datasets'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '41',
      title: 'Création de Sites E-commerce',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '15:30',
      date: new Date('2026-08-30'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 120,
      price: 10000,
      level: 'Intermédiaire',
      description: 'Créez des boutiques en ligne avec WooCommerce.',
      longDescription: `
        Cette formation vous apprend à créer des boutiques en ligne avec WooCommerce. Vous explorerez l’installation, la configuration et l’optimisation des boutiques pour maximiser les ventes en ligne.
      `,
      modules: [
        'Introduction à WooCommerce',
        'Installation et configuration',
        'Gestion des produits et paiements',
        'Optimisation SEO pour e-commerce',
        'Projet pratique : boutique en ligne'
      ],
      prerequisites: [
        'Connaissances de base en WordPress',
        'Notions de gestion de contenu web'
      ],
      objectives: [
        'Installer et configurer WooCommerce',
        'Gérer une boutique en ligne',
        'Optimiser une boutique pour le SEO',
        'Créer une boutique e-commerce fonctionnelle'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '42',
      title: 'Introduction au Deep Learning',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '18:00',
      date: new Date('2026-09-06'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 80,
      price: 25000,
      level: 'Avancé',
      description: 'Explorez les réseaux neuronaux et le deep learning avec PyTorch.',
      longDescription: `
        Cette formation vous initie au deep learning avec PyTorch. Vous apprendrez à concevoir et entraîner des réseaux neuronaux pour des applications comme la reconnaissance d’images et le traitement du langage naturel.
      `,
      modules: [
        'Introduction au deep learning',
        'Découverte de PyTorch',
        'Conception de réseaux neuronaux',
        'Entraînement et optimisation des modèles',
        'Projet pratique : modèle de deep learning'
      ],
      prerequisites: [
        'Connaissances de base en machine learning',
        'Familiarité avec Python'
      ],
      objectives: [
        'Comprendre les bases du deep learning',
        'Concevoir des réseaux neuronaux avec PyTorch',
        'Entraîner des modèles de deep learning',
        'Appliquer le deep learning à des cas pratiques'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '43',
      title: 'Photographie Numérique',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-09-13'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 7000,
      level: 'Débutant',
      description: 'Apprenez les bases de la photographie numérique et du post-traitement.',
      longDescription: `
        Cette formation d’initiation vous enseigne les bases de la photographie numérique, y compris la prise de vue et le post-traitement avec des outils comme Lightroom. Vous apprendrez à capturer des images de qualité et à les optimiser.
      `,
      modules: [
        'Introduction à la photographie numérique',
        'Techniques de prise de vue',
        'Post-traitement avec Lightroom',
        'Composition et éclairage',
        'Projet pratique : portfolio photo'
      ],
      prerequisites: [
        'Aucune connaissance préalable requise',
        'Accès à un appareil photo (facultatif)'
      ],
      objectives: [
        'Maîtriser les bases de la photographie',
        'Appliquer des techniques de prise de vue',
        'Optimiser les photos avec Lightroom',
        'Créer un portfolio photographique'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '44',
      title: 'Développement avec Vue.js',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-09-20'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 14000,
      level: 'Avancé',
      description: 'Créez des interfaces utilisateur modernes avec Vue.js.',
      longDescription: `
        Cette formation vous apprend à développer des interfaces utilisateur modernes avec Vue.js. Vous explorerez les composants, la gestion d’état et l’intégration avec des API pour créer des applications web dynamiques.
      `,
      modules: [
        'Introduction à Vue.js',
        'Création de composants Vue.js',
        'Gestion d’état avec Vuex',
        'Intégration avec des API',
        'Projet pratique : application Vue.js'
      ],
      prerequisites: [
        'Connaissances solides en JavaScript',
        'Familiarité avec HTML et CSS'
      ],
      objectives: [
        'Maîtriser la création de composants Vue.js',
        'Gérer l’état avec Vuex',
        'Intégrer des API dans une application Vue.js',
        'Développer une application web avec Vue.js'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '45',
      title: 'Introduction à l’IoT',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '09:00',
      endTime: '17:00',
      date: new Date('2026-09-27'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 3,
      maxParticipants: 90,
      price: 20000,
      level: 'Avancé',
      description: 'Découvrez l’Internet des Objets et ses applications pratiques.',
      longDescription: `
        Cette formation explore l’Internet des Objets (IoT) et ses applications pratiques. Vous apprendrez à concevoir des systèmes IoT, à utiliser des capteurs et à intégrer des données dans des applications.
      `,
      modules: [
        'Introduction à l’IoT',
        'Utilisation des capteurs et microcontrôleurs',
        'Connexion des dispositifs IoT',
        'Gestion des données IoT',
        'Projet pratique : système IoT'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Notions d’électronique (facultatif)'
      ],
      objectives: [
        'Comprendre les bases de l’IoT',
        'Utiliser des capteurs pour des applications IoT',
        'Connecter des dispositifs à Internet',
        'Développer un système IoT simple'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '46',
      title: 'Gestion de Projet Agile',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '10:00',
      endTime: '16:00',
      date: new Date('2026-10-04'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 9000,
      level: 'Intermédiaire',
      description: 'Maîtrisez les méthodologies agiles comme Scrum et Kanban.',
      longDescription: `
        Cette formation vous apprend à gérer des projets avec des méthodologies agiles comme Scrum et Kanban. Vous explorerez les principes de l’agilité, la planification des sprints et la gestion des équipes agiles.
      `,
      modules: [
        'Introduction à l’agilité',
        'Méthodologie Scrum',
        'Méthodologie Kanban',
        'Planification et gestion des sprints',
        'Projet pratique : gestion de projet agile'
      ],
      prerequisites: [
        'Connaissances de base en gestion de projet',
        'Aucun prérequis en agilité requis'
      ],
      objectives: [
        'Comprendre les principes de l’agilité',
        'Appliquer Scrum et Kanban dans des projets',
        'Planifier des sprints efficacement',
        'Gérer des équipes agiles'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '47',
      title: 'Développement avec FastAPI',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '09:30',
      endTime: '15:30',
      date: new Date('2026-10-11'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 15000,
      level: 'Avancé',
      description: 'Créez des applications web robustes avec FastAPI.',
      longDescription: `
        Cette formation vous apprend à développer des API performantes avec FastAPI, un framework Python moderne. Vous explorerez la création de routes, la gestion des bases de données et l’authentification pour des applications web.
      `,
      modules: [
        'Introduction à FastAPI',
        'Création de routes et endpoints',
        'Connexion à une base de données',
        'Mise en place de l’authentification',
        'Projet pratique : API avec FastAPI'
      ],
      prerequisites: [
        'Connaissances de base en Python',
        'Notions de développement backend'
      ],
      objectives: [
        'Maîtriser les bases de FastAPI',
        'Créer des API performantes',
        'Gérer les bases de données dans une API',
        'Implémenter l’authentification'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '48',
      title: 'Introduction à la Réalité Virtuelle',
      type: 'Entreprise',
      status: 'places-dispo',
      startTime: '10:00',
      endTime: '16:00',
      date: new Date('2026-10-18'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 3,
      maxParticipants: 90,
      price: 21000,
      level: 'Avancé',
      description: 'Découvrez les bases de la réalité virtuelle et ses applications.',
      longDescription: `
        Cette formation explore les bases de la réalité virtuelle (VR) et ses applications dans divers domaines comme le jeu, l’éducation et la simulation. Vous apprendrez à créer des expériences VR simples avec des outils comme Unity.
      `,
      modules: [
        'Introduction à la réalité virtuelle',
        'Découverte des outils VR (Unity)',
        'Création d’environnements VR',
        'Interaction dans la VR',
        'Projet pratique : expérience VR'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Familiarité avec Unity (facultatif)'
      ],
      objectives: [
        'Comprendre les bases de la réalité virtuelle',
        'Créer des environnements VR avec Unity',
        'Ajouter des interactions dans la VR',
        'Développer une expérience VR simple'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '49',
      title: 'Excel pour la Finance',
      type: 'Vacances',
      status: 'a-venir',
      startTime: '09:00',
      endTime: '15:00',
      date: new Date('2026-10-25'),
      location: 'Yaoundé - Centre GTA',
      instructor: 'GTA ACADEMY',
      participants: 2,
      maxParticipants: 150,
      price: 8000,
      level: 'Intermédiaire',
      description: 'Utilisez Excel pour analyser des données financières.',
      longDescription: `
        Cette formation vous apprend à utiliser Excel pour l’analyse financière. Vous explorerez les formules avancées, les tableaux croisés dynamiques et les outils d’analyse pour gérer des données financières.
      `,
      modules: [
        'Introduction à Excel pour la finance',
        'Formules financières avancées',
        'Tableaux croisés dynamiques',
        'Analyse de données financières',
        'Projet pratique : rapport financier'
      ],
      prerequisites: [
        'Connaissances de base en Excel',
        'Notions de finance (facultatif)'
      ],
      objectives: [
        'Maîtriser les formules financières dans Excel',
        'Utiliser les tableaux croisés dynamiques',
        'Analyser des données financières',
        'Produire un rapport financier'
      ],
      certification: "Diplôme GTA",
      instructorBio: "GTA ACADEMY mets a disposition de ses apprenants les meilleurs formateurs, expert dans leur domaines pour accompagner chaque apprenant dans la réussite de son apprentissage",
      reviews: []
    },
    {
      id: '50',
      title: 'Développement de Jeux avec Unity',
      type: 'Attestation',
      status: 'ouvert',
      startTime: '10:30',
      endTime: '16:30',
      date: new Date('2026-11-01'),
      location: 'En ligne',
      instructor: 'GTA-ACADEMY',
      participants: 1,
      maxParticipants: 100,
      price: 18000,
      level: 'Avancé',
      description: 'Créez des jeux vidéo 2D et 3D avec Unity et C#.',
      longDescription: `
        Cette formation vous apprend à développer des jeux vidéo 2D et 3D avec Unity et C#. Vous explorerez la création d’environnements, la programmation des mécaniques de jeu et l’optimisation pour différentes plateformes.
      `,
      modules: [
        'Introduction à Unity',
        'Programmation en C# pour Unity',
        'Création d’environnements 2D et 3D',
        'Mécaniques de jeu',
        'Projet pratique : jeu Unity'
      ],
      prerequisites: [
        'Connaissances de base en programmation',
        'Familiarité avec C# (facultatif)'
      ],
      objectives: [
        'Maîtriser les bases de Unity',
        'Programmer des mécaniques de jeu en C#',
        'Créer des environnements 2D et 3D',
        'Développer un jeu vidéo complet'
      ]
    }
];