
# GTA Academy

**Centre de Formation Professionnelle et Conseil en Transformation Digitale au Cameroun**

---

## 📖 Présentation

GTA Academy propose des formations certifiantes en Data, IA, Développement, Cybersécurité, UX/UI, et bien plus. Notre mission : propulser votre carrière ou votre entreprise à l’ère digitale, avec des experts et des parcours pédagogiques adaptés à tous les niveaux.

---

## 🚀 Lancer le projet

### 1. Via Docker

Prérequis : Docker et Docker Compose installés

```bash
# Build et démarrage en mode prod
docker-compose up --build -d

# Arrêter le projet
docker-compose down
```

### 2. Via Node.js

```bash
npm install
npm run dev
```

---

## 🏗️ Structure des dossiers

- `/src` : cœur de l’application
  - `/pages` : routes/pages React
  - `/components` : composants UI, layouts, utilitaires (modulaire)
  - `/store` : stores Zustand pour la persistance
  - `/hooks` : hooks custom
  - `/assets` : images/icônes statiques
  - `/Routes` : gestion centralisée du router (voir src/Routes/react.tsx)
- `/public/50x.html` : page d’erreur serveurs personnalisée

---

## ⚙️ Outils & Technologies

- React 18 + Vite
- Zustand (persistance)
- React Router DOM
- TailwindCSS & shadcn/ui
- Framer Motion (animations)
- Docker pour déploiement et développement

---

## 🔒 SEO & bonnes pratiques

- Meta-tags riches (SEO/SMO)
- Lazy load images & code split
- Optimisation responsive/mobile
- Accessibilité renforcée
- Animations Framer Motion

---

## 🐳 Déploiement avec Docker

Voir le dossier `/docker` et la doc `docker/README_DOCKER.md`.

---

## 🤝 Contact

Site : [https://academy.gta-it.com](#)  
Email : <academy@gta-it.com>

---

© 2025 GTA Academy – Tous droits réservés.
