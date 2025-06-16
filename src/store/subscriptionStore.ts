
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  certification: string;
  modules: string[];
  image: string;
  featured: boolean;
  category: 'web-dev' | 'cybersec' | 'data-science' | 'mobile-dev';
}

export interface Subscription {
  id: string;
  courseId: string;
  userId: string;
  status: 'active' | 'pending' | 'cancelled' | 'expired';
  startDate: string;
  endDate: string;
  paymentMethod: string;
  amount: number;
  progress: number;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  fees: number;
}

interface SubscriptionState {
  courses: Course[];
  subscriptions: Subscription[];
  paymentMethods: PaymentMethod[];
  isLoading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  subscribeToCourse: (courseId: string, paymentMethodId: string) => Promise<boolean>;
  getUserSubscriptions: (userId: string) => Subscription[];
  getCourseById: (courseId: string) => Course | undefined;
  clearError: () => void;
}

// Données de simulation
const DEMO_COURSES: Course[] = [
  {
    id: 'certified-web-dev',
    title: 'Développement Web Fullstack',
    description: 'Formation complète en développement web moderne avec React, Node.js et bases de données',
    price: 350000,
    duration: '6 mois',
    level: 'Intermédiaire',
    certification: 'Certificat GTA - Développeur Web Fullstack',
    modules: ['HTML/CSS/JS', 'React.js', 'Node.js', 'Bases de données', 'Déploiement'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
    featured: true,
    category: 'web-dev'
  },
  {
    id: 'certified-cybersec',
    title: 'Cybersécurité et Ethical Hacking',
    description: 'Formation avancée en sécurité informatique et tests de pénétration',
    price: 400000,
    duration: '8 mois',
    level: 'Avancé',
    certification: 'Certificat GTA - Expert Cybersécurité',
    modules: ['Réseaux', 'Cryptographie', 'Audit sécurité', 'Pentesting', 'Forensics'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
    featured: true,
    category: 'cybersec'
  },
  {
    id: 'certified-data-science',
    title: 'Data Science et Intelligence Artificielle',
    description: 'Formation en science des données et machine learning avec Python',
    price: 375000,
    duration: '7 mois',
    level: 'Intermédiaire',
    certification: 'Certificat GTA - Data Scientist',
    modules: ['Python', 'Machine Learning', 'Deep Learning', 'Big Data', 'Visualisation'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    featured: false,
    category: 'data-science'
  }
];

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'orange-money',
    name: 'Orange Money',
    icon: '🟠',
    description: 'Paiement sécurisé via Orange Money',
    fees: 0
  },
  {
    id: 'mtn-money',
    name: 'MTN Mobile Money',
    icon: '💛',
    description: 'Paiement rapide avec MTN Mobile Money',
    fees: 0
  },
  {
    id: 'afriland-bank',
    name: 'Afriland First Bank',
    icon: '🏦',
    description: 'Virement bancaire Afriland First Bank',
    fees: 1000
  },
  {
    id: 'cash',
    name: 'Espèces',
    icon: '💵',
    description: 'Paiement en espèces au centre de formation',
    fees: 0
  }
];

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set, get) => ({
      courses: [],
      subscriptions: [],
      paymentMethods: PAYMENT_METHODS,
      isLoading: false,
      error: null,

      fetchCourses: async () => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulation d'appel API
          await new Promise(resolve => setTimeout(resolve, 800));
          set({ 
            courses: DEMO_COURSES, 
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: 'Erreur lors du chargement des cours',
            isLoading: false 
          });
        }
      },

      subscribeToCourse: async (courseId: string, paymentMethodId: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulation de traitement de paiement
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const course = DEMO_COURSES.find(c => c.id === courseId);
          const paymentMethod = PAYMENT_METHODS.find(pm => pm.id === paymentMethodId);
          
          if (!course || !paymentMethod) {
            throw new Error('Cours ou méthode de paiement introuvable');
          }
          
          const newSubscription: Subscription = {
            id: Math.random().toString(36).substr(2, 9),
            courseId,
            userId: 'current-user', // Sera remplacé par l'ID utilisateur réel
            status: 'active',
            startDate: new Date().toISOString(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 an
            paymentMethod: paymentMethod.name,
            amount: course.price + paymentMethod.fees,
            progress: 0
          };
          
          set(state => ({ 
            subscriptions: [...state.subscriptions, newSubscription],
            isLoading: false 
          }));
          
          return true;
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Erreur lors de l\'abonnement',
            isLoading: false 
          });
          return false;
        }
      },

      getUserSubscriptions: (userId: string) => {
        return get().subscriptions.filter(sub => sub.userId === userId);
      },

      getCourseById: (courseId: string) => {
        return get().courses.find(course => course.id === courseId);
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'gta-subscription-storage',
      partialize: (state) => ({
        subscriptions: state.subscriptions
      })
    }
  )
);
