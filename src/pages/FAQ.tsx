
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HelpCircle, ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: "Informations Générales",
      questions: [
        {
          question: "Qu'est-ce que GTA Academy ?",
          answer: "GTA Academy est un centre de formation technologique spécialisé dans les formations en développement web, cybersécurité, intelligence artificielle et marketing digital. Nous proposons des programmes certifiants, des formations vacances, des formations entreprise et des parcours personnalisés."
        },
        {
          question: "Où êtes-vous situés ?",
          answer: "Nous sommes situés à Nkolfoulou base SATOM, Yaoundé, Cameroun. Nous proposons également des formations en ligne pour les apprenants qui ne peuvent pas se déplacer."
        },
        {
          question: "Quels sont vos horaires d'ouverture ?",
          answer: "Nos bureaux sont ouverts du lundi au vendredi de 8h00 à 18h00 et le samedi de 9h00 à 15h00. Pour les formations, les horaires peuvent varier selon le programme choisi."
        },
        {
          question: "Comment puis-je vous contacter ?",
          answer: "Vous pouvez nous contacter par téléphone au +237 690 419 336, par email à academy@gta-it.com, ou via WhatsApp. Vous pouvez également remplir le formulaire de contact sur notre site web."
        }
      ]
    },
    {
      title: "Formations et Programmes",
      questions: [
        {
          question: "Quels types de formations proposez-vous ?",
          answer: "Nous proposons 4 types de formations : Formations Certifiantes (diplômantes), Formations Vacances (intensives), Formations Entreprise (sur mesure pour les entreprises), et Formations Personnalisées (adaptées aux besoins individuels)."
        },
        {
          question: "Combien de temps durent les formations ?",
          answer: "La durée varie selon le type de formation : les formations vacances durent 1 à 2 mois, les formations certifiantes de 3 à 12 mois, les formations entreprise selon les besoins (1 jour à plusieurs semaines), et les formations personnalisées sont flexibles."
        },
        {
          question: "Faut-il avoir des prérequis pour s'inscrire ?",
          answer: "Les prérequis varient selon la formation. Pour les formations d'initiation, aucun prérequis n'est nécessaire. Pour les formations avancées, une connaissance de base peut être requise. Nous évaluons chaque candidat individuellement."
        },
        {
          question: "Proposez-vous des formations en ligne ?",
          answer: "Oui, nous proposons des formations en présentiel, en ligne et en format hybride. Nos formations en ligne incluent des cours interactifs, des projets pratiques et un suivi personnalisé."
        },
        {
          question: "Délivrez-vous des certificats ?",
          answer: "Oui, nous délivrons des certificats de formation pour tous nos programmes. Les formations certifiantes délivrent des diplômes reconnus, tandis que les autres formations délivrent des certificats de participation et de compétences."
        }
      ]
    },
    {
      title: "Inscription et Paiement",
      questions: [
        {
          question: "Comment s'inscrire à une formation ?",
          answer: "Vous pouvez vous inscrire en ligne via notre site web, par téléphone, ou en vous rendant directement dans nos locaux. Le processus inclut le choix de la formation, le remplissage du formulaire d'inscription et le paiement."
        },
        {
          question: "Quels sont les modes de paiement acceptés ?",
          answer: "Nous acceptons les paiements par virement bancaire, Mobile Money (Orange Money, MTN Money), espèces, et cartes bancaires. Des facilités de paiement peuvent être accordées selon les cas."
        },
        {
          question: "Proposez-vous des facilités de paiement ?",
          answer: "Oui, nous proposons des facilités de paiement pour certaines formations. Vous pouvez payer en plusieurs fois selon un échéancier convenu. Contactez-nous pour discuter des options disponibles."
        },
        {
          question: "Y a-t-il des réductions ou bourses disponibles ?",
          answer: "Nous offrons des réductions pour les étudiants, les groupes, et les inscriptions anticipées. Des bourses partielles peuvent être accordées selon les critères sociaux. Contactez-nous pour plus d'informations."
        },
        {
          question: "Puis-je annuler mon inscription ?",
          answer: "Oui, vous pouvez annuler votre inscription jusqu'à 7 jours avant le début de la formation pour un remboursement complet. Après ce délai, des frais d'annulation peuvent s'appliquer selon nos conditions générales."
        }
      ]
    },
    {
      title: "Déroulement des Formations",
      questions: [
        {
          question: "Comment se déroulent les formations ?",
          answer: "Nos formations combinent théorie et pratique avec des projets concrets. Elles incluent des cours magistraux, des ateliers pratiques, des projets de groupe, et un suivi individuel. Chaque apprenant dispose d'un ordinateur et des outils nécessaires."
        },
        {
          question: "Quel est le nombre d'apprenants par session ?",
          answer: "Nous limitons nos sessions à 15 apprenants maximum pour assurer un suivi personnalisé et une interaction optimale. Pour les formations personnalisées, les sessions peuvent être individuelles ou en très petits groupes."
        },
        {
          question: "Les formateurs sont-ils qualifiés ?",
          answer: "Tous nos formateurs sont des experts dans leur domaine avec une expérience professionnelle significative. Ils sont certifiés et suivent régulièrement des formations pour rester à jour avec les dernières technologies."
        },
        {
          question: "Y a-t-il un suivi après la formation ?",
          answer: "Oui, nous offrons un suivi post-formation de 3 mois incluant un support technique, des conseils pour l'insertion professionnelle, et l'accès à notre communauté d'anciens apprenants."
        }
      ]
    },
    {
      title: "Carrière et Emploi",
      questions: [
        {
          question: "Aidez-vous à trouver un emploi après la formation ?",
          answer: "Nous avons un service d'accompagnement à l'insertion professionnelle qui inclut la préparation du CV, la simulation d'entretiens, et la mise en relation avec notre réseau d'entreprises partenaires."
        },
        {
          question: "Avez-vous des partenaires entreprises ?",
          answer: "Oui, nous travaillons avec de nombreuses entreprises locales et internationales qui recrutent régulièrement nos apprenants. Nous organisons également des job dating et des événements de networking."
        },
        {
          question: "Puis-je créer mon entreprise avec les compétences acquises ?",
          answer: "Absolument ! Nous encourageons l'entrepreneuriat et proposons des modules d'accompagnement à la création d'entreprise, incluant l'élaboration du business plan et les démarches administratives."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Questions Fréquemment Posées
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos formations et services
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les questions..."
                className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background text-foreground focus:border-gta-red focus:ring-2 focus:ring-gta-red/20 outline-none text-lg shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-gta-red to-gta-red-light text-white p-6">
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <div className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-border rounded-lg px-6 bg-background hover:bg-muted/30 transition-colors"
                        >
                          <AccordionTrigger className="text-left hover:text-gta-red font-semibold text-foreground">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucune question trouvée
              </h3>
              <p className="text-muted-foreground">
                Essayez avec d'autres mots-clés ou contactez-nous directement.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. Contactez-nous par le moyen qui vous convient le mieux.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="tel:+237690419336"
              className="bg-card border border-border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 text-gta-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
              <p className="text-muted-foreground">+237 690 419 336</p>
            </a>
            <a 
              href="mailto:academy@gta-it.com"
              className="bg-card border border-border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-gta-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">academy@gta-it.com</p>
            </a>
            <a 
              href="https://wa.me/237690419336"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="w-8 h-8 text-gta-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">Chattez avec nous</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
