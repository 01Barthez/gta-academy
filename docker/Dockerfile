# ----------- Stage 1: Build the application ----------- #
FROM oven/bun:1.2.13-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json bun.lockb ./

# Installer les dépendances
RUN bun install

# Copier le reste de l'application
COPY . .

# Compiler l'application (suppose que `build` produit un dossier `dist`)
RUN bun run build

# ----------- Stage 2: Serve the built app with NGINX ----------- #
FROM nginx:1.27.5-alpine3.21 AS production

# Copier les fichiers construits depuis le build précédent
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer les ports nécessaires (80 par défaut)
EXPOSE 80

# Démarrer nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]
