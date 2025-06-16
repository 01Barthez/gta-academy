
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Votre vie privée est importante pour nous. Découvrez comment nous collectons, utilisons et protégeons vos données.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            
            {/* Introduction */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Notre Engagement
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>GTA Academy s'engage à protéger votre vie privée et à respecter la confidentialité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles.</p>
                <p>En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.</p>
                <p><strong className="text-foreground">Dernière mise à jour :</strong> Janvier 2025</p>
              </div>
            </div>

            {/* Collecte des données */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Données que Nous Collectons
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Informations personnelles :</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Informations de facturation</li>
                  <li>Niveau d'éducation et expérience professionnelle</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Données techniques :</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adresse IP et informations de connexion</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et temps passé sur le site</li>
                  <li>Données de cookies et technologies similaires</li>
                </ul>
              </div>
            </div>

            {/* Utilisation des données */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Utilisation de Vos Données
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fournir nos services de formation et d'accompagnement</li>
                  <li>Traiter vos inscriptions et gérer votre compte</li>
                  <li>Communiquer avec vous concernant nos services</li>
                  <li>Personnaliser votre expérience sur notre site</li>
                  <li>Vous envoyer des informations sur nos formations et événements</li>
                  <li>Améliorer nos services et développer de nouvelles offres</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Prévenir la fraude et assurer la sécurité de nos services</li>
                </ul>
              </div>
            </div>

            {/* Partage des données */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Partage de Vos Données
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations dans les cas suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Avec nos partenaires de formation certifiés pour délivrer les formations</li>
                  <li>Avec nos prestataires de services (hébergement, paiement, email marketing)</li>
                  <li>Si requis par la loi ou les autorités compétentes</li>
                  <li>En cas de fusion, acquisition ou cession d'activité (avec votre consentement)</li>
                </ul>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Sécurité de Vos Données
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chiffrement des données sensibles (SSL/TLS)</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Systèmes de sauvegarde sécurisés</li>
                  <li>Formation régulière de notre personnel</li>
                  <li>Audits de sécurité périodiques</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                </ul>
              </div>
            </div>

            {/* Droits des utilisateurs */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Vos Droits
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
                  <li><strong className="text-foreground">Droit de rectification :</strong> Vous pouvez corriger vos données inexactes</li>
                  <li><strong className="text-foreground">Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                  <li><strong className="text-foreground">Droit de limitation :</strong> Vous pouvez limiter le traitement de vos données</li>
                  <li><strong className="text-foreground">Droit de portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
                  <li><strong className="text-foreground">Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                </ul>
                <p className="mt-4">Pour exercer ces droits, contactez-nous à : <a href="mailto:academy@gta-it.com" className="text-gta-red hover:text-gta-red-light hover:underline transition-colors">academy@gta-it.com</a></p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Cookies et Technologies Similaires
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong className="text-foreground">Cookies de performance :</strong> Pour analyser l'utilisation du site</li>
                  <li><strong className="text-foreground">Cookies de fonctionnalité :</strong> Pour mémoriser vos préférences</li>
                  <li><strong className="text-foreground">Cookies marketing :</strong> Pour personnaliser les publicités (avec votre consentement)</li>
                </ul>
                <p>Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-gta-red to-gta-red-light text-white rounded-lg p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">
                  Questions ou Préoccupations ?
                </h2>
              </div>
              <div className="space-y-4">
                <p>Si vous avez des questions concernant cette politique de confidentialité ou le traitement de vos données personnelles, n'hésitez pas à nous contacter :</p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p><strong>Email :</strong> academy@gta-it.com</p>
                  <p><strong>Téléphone :</strong> +237 690 419 336</p>
                  <p><strong>Adresse :</strong> Nkolfoulou base SATOM, Yaoundé, Cameroun</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
