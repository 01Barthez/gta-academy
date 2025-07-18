
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import RegistrationModal from '@/components/RegistrationModal';
import AuthModal from '@/components/AuthModal';
import HeaderTopBar from '@/components/HeaderTopBar';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderNavigation from '@/components/HeaderNavigation';
import HeaderMobileMenu from '@/components/HeaderMobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Agenda', href: '/agenda' },
    {
      name: 'Formations',
      href: '/training',
      subItems: [
        { name: 'Formations Certifiantes', href: '/training/certified' },
        { name: 'Formations Vacances', href: '/training/holidays' },
        { name: 'Formations Entreprise', href: '/training/enterprise' },
        { name: 'Formations Personnalisées', href: '/training/personalized' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href ||
      (href === '/training' && location.pathname.startsWith('/training'));
  };

  const isActiveSubLink = (href: string) => {
    return location.pathname === href;
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      setAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border/40">
      <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />

      {/* Top bar with contact info */}
      <HeaderTopBar />

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <HeaderNavigation navigation={navigation} />
            <ThemeToggle />

            <div className="hidden">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="border-gta-red text-gta-red hover:bg-gta-red hover:text-white"
                  >
                    Mon espace
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <Button
                  className="bg-gradient-to-r from-gta-red to-gta-red-light hover:from-gta-red-light hover:to-gta-red text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={handleRegisterClick}
                >
                  Se connecter
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-muted/80 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <HeaderMobileMenu
            navigation={navigation}
            isActiveLink={isActiveLink}
            isActiveSubLink={isActiveSubLink}
            onLinkClick={handleMobileLinkClick}
            onRegisterClick={handleRegisterClick}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
