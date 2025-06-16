
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface HeaderMobileMenuProps {
  navigation: NavigationItem[];
  isActiveLink: (href: string) => boolean;
  isActiveSubLink: (href: string) => boolean;
  onLinkClick: () => void;
  onRegisterClick: () => void;
}

const HeaderMobileMenu = ({ 
  navigation, 
  isActiveLink, 
  isActiveSubLink, 
  onLinkClick, 
  onRegisterClick 
}: HeaderMobileMenuProps) => {
  return (
    <div className="lg:hidden mt-4 pb-4 animate-fade-in">
      <div className="flex flex-col space-y-4 bg-muted/30 rounded-xl p-4 backdrop-blur-sm">
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              to={item.href}
              className={`transition-all duration-300 font-medium py-3 px-4 rounded-lg flex items-center justify-between hover:bg-gta-red/10 hover:text-gta-red ${
                isActiveLink(item.href) 
                  ? 'text-gta-red bg-gta-red/10' 
                  : 'text-muted-foreground'
              }`}
              onClick={onLinkClick}
            >
              {item.name}
              {item.subItems && <ChevronDown className="w-4 h-4" />}
            </Link>
            {item.subItems && (
              <div className="ml-4 space-y-2 mt-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className={`block py-2 px-4 text-sm rounded-lg transition-all duration-300 hover:bg-gta-red/10 hover:text-gta-red ${
                      isActiveSubLink(subItem.href) 
                        ? 'text-gta-red bg-gta-red/10' 
                        : 'text-muted-foreground'
                    }`}
                    onClick={onLinkClick}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Button 
          className="bg-gradient-to-r from-gta-red to-gta-red-light hover:from-gta-red-light hover:to-gta-red text-white w-full mt-4 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
          onClick={onRegisterClick}
        >
          S'inscrire
        </Button>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
