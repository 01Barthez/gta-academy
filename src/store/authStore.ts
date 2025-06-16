
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  createdAt: string;
  subscriptions: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  socialLogin: (provider: 'google' | 'facebook' | 'twitter') => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  clearError: () => void;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Simulation d'utilisateurs demo
const DEMO_USERS: User[] = [
  {
    id: '1',
    email: 'demo@academy.gta-it.com',
    firstName: 'Jean',
    lastName: 'Dupont',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-01-01',
    subscriptions: ['certified-web-dev', 'certified-cybersec']
  },
  {
    id: '2', 
    email: 'user@example.com',
    firstName: 'Marie',
    lastName: 'Martin',
    createdAt: '2024-02-01',
    subscriptions: []
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulation d'appel API
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const user = DEMO_USERS.find(u => u.email === email);
          
          if (user && password === 'demo123') {
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false 
            });
            return true;
          } else {
            throw new Error('Email ou mot de passe incorrect');
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Erreur de connexion',
            isLoading: false 
          });
          return false;
        }
      },

      register: async (userData: RegisterData) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulation d'appel API
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Vérifier si l'utilisateur existe déjà
          const existingUser = DEMO_USERS.find(u => u.email === userData.email);
          if (existingUser) {
            throw new Error('Un compte avec cet email existe déjà');
          }
          
          const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            createdAt: new Date().toISOString(),
            subscriptions: []
          };
          
          // Ajouter à la liste demo (simulation)
          DEMO_USERS.push(newUser);
          
          set({ 
            user: newUser, 
            isAuthenticated: true, 
            isLoading: false 
          });
          return true;
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Erreur lors de l\'inscription',
            isLoading: false 
          });
          return false;
        }
      },

      socialLogin: async (provider: 'google' | 'facebook' | 'twitter') => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulation d'OAuth
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const socialUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            email: `user@${provider}.com`,
            firstName: `Utilisateur`,
            lastName: provider.charAt(0).toUpperCase() + provider.slice(1),
            avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face`,
            createdAt: new Date().toISOString(),
            subscriptions: []
          };
          
          set({ 
            user: socialUser, 
            isAuthenticated: true, 
            isLoading: false 
          });
          return true;
        } catch (error) {
          set({ 
            error: `Erreur de connexion ${provider}`,
            isLoading: false 
          });
          return false;
        }
      },

      resetPassword: async (email: string) => {
        set({ isLoading: true, error: null });
        
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const user = DEMO_USERS.find(u => u.email === email);
          if (!user) {
            throw new Error('Aucun compte trouvé avec cet email');
          }
          
          set({ isLoading: false });
          return true;
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Erreur lors de la réinitialisation',
            isLoading: false 
          });
          return false;
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false, 
          error: null 
        });
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'gta-auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
