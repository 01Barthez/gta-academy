import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'

const HeroFAQ: React.FC = () => {
    const faqs = [
        {
            question: "Qu'est-ce que GTA Academy ?",
            answer: "GTA Academy est un centre de formation technologique spécialisé dans les formations en développement web, cybersécurité, intelligence artificielle et marketing digital. Nous proposons des programmes certifiants, des formations vacances, des formations entreprise et des parcours personnalisés."
        },
        {
            question: "Quels types de formations proposez-vous ?",
            answer: "Nous proposons 4 types de formations : Formations Certifiantes (diplômantes), Formations Vacances (intensives), Formations Entreprise (sur mesure pour les entreprises), et Formations Personnalisées (adaptées aux besoins individuels)."
        },
        {
            question: "Comment s'inscrire à une formation ?",
            answer: "Vous pouvez vous inscrire en ligne via notre site web, par téléphone, ou en vous rendant directement dans nos locaux. Le processus inclut le choix de la formation, le remplissage du formulaire d'inscription et le paiement."
        },
        {
            question: "Comment se déroulent les formations ?",
            answer: "Nos formations combinent théorie et pratique avec des projets concrets. Elles incluent des cours magistraux, des ateliers pratiques, des projets de groupe, et un suivi individuel. Chaque apprenant dispose d'un ordinateur et des outils nécessaires."
        }
    ]

    return (
        <section className="bg-gradient-to-r from-gta-red via-red-600/40 dark:via-black to-gta-red-light text-white py-16 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="flex items-center space-x-4">
                        <span className="bg-red-500 rounded-full p-2 text-white">
                            <FaQuestionCircle className="w-6 h-6" />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">FAQ Rapides</h2>
                    </div>
                    <Link
                        to="/faq"
                        className="hidden md:block text-red-900 border-red-900 hover:text-white transition-colors duration-200 border px-4 py-1 rounded"
                    >
                        Voir toutes les FAQ →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-red-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-red-200">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:text-right">
                    <Link
                        to="/faq"
                        className="md:hidden block text-red-900 border-red-900 hover:text-white transition-colors duration-200 border px-4 py-1 rounded"
                    >
                        Voir toutes les FAQ →
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroFAQ