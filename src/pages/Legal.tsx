
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, Building, Users, FileText } from 'lucide-react';

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Informations légales et conditions d'utilisation de GTA Academy
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            
            {/* Identification */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Identification de l'Organisme
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">Dénomination :</strong> GTA Academy (Global Technology & Associates)</p>
                <p><strong className="text-foreground">Forme juridique :</strong> Centre de Formation Professionnelle</p>
                <p><strong className="text-foreground">Siège social :</strong> Nkolfoulou base SATOM, Yaoundé, Cameroun</p>
                <p><strong className="text-foreground">Téléphone :</strong> +237 690 419 336</p>
                <p><strong className="text-foreground">Email :</strong> academy@gta-it.com</p>
                <p><strong className="text-foreground">Site web :</strong> www.gta-it.com</p>
                <p><strong className="text-foreground">Directeur de publication :</strong> Direction GTA Academy</p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Hébergement du Site
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Le site web de GTA Academy est hébergé par des services cloud sécurisés.</p>
                <p>Pour toute question technique relative à l'hébergement, veuillez contacter notre équipe technique à l'adresse : <a href="mailto:academy@gta-it.com" className="text-gta-red hover:text-gta-red-light hover:underline transition-colors">academy@gta-it.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-gta-red mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Propriété Intellectuelle
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par les droits de propriété intellectuelle et appartient à GTA Academy ou à ses partenaires.</p>
                <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de GTA Academy.</p>
                <p>Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions légales en vigueur.</p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Limitation de Responsabilité
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>GTA Academy s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                <p>Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs.</p>
                <p>GTA Academy ne pourra être tenue responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</p>
              </div>
            </div>

            {/* Données personnelles */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Protection des Données Personnelles
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>En conformité avec la réglementation applicable, GTA Academy s'engage à protéger la vie privée des utilisateurs de son site et à respecter la confidentialité des données personnelles collectées.</p>
                <p>Pour plus d'informations sur la collecte et le traitement de vos données personnelles, nous vous invitons à consulter notre <a href="/privacy" className="text-gta-red hover:text-gta-red-light hover:underline transition-colors">Politique de Confidentialité</a>.</p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Droit Applicable et Juridiction
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Les présentes mentions légales sont régies par le droit camerounais. En cas de litige, et à défaut de résolution amiable, les tribunaux camerounais seront seuls compétents.</p>
                <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse : <a href="mailto:academy@gta-it.com" className="text-gta-red hover:text-gta-red-light hover:underline transition-colors">academy@gta-it.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
