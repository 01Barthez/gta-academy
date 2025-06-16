
# Déploiement/Développement Docker GTA Academy

## Pré-requis
- [Docker](https://docs.docker.com/get-docker/) v20+
- [Docker Compose](https://docs.docker.com/compose/) v2+

## Commandes principales

```bash
# Lancer en mode prod
docker-compose up --build -d

# Accéder à l’app (par défaut : http://localhost:8080)

# Arrêter et nettoyer
docker-compose down
```

## Architecture

- **Dockerfile** : build production avec Node.js, Vite, et serve le build.
- **docker-compose.yml** : pour le multi-service (web, db si besoin…)
- **.dockerignore** : ignore les fichiers inutiles à la prod.

## Bonnes pratiques

- Utilisez les volumes pour le hot reload en dev.
- Passez par les vars d’environnement pour les secrets.

---

*Pour toute question : academy@gta-it.com*

