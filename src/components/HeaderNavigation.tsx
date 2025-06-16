
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface HeaderNavigationProps {
  navigation: NavigationItem[];
}

const HeaderNavigation = ({ navigation }: HeaderNavigationProps) => {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    return location.pathname === href ||
      (href === '/training' && location.pathname.startsWith('/training'));
  };

  const isActiveSubLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger className={`transition-all duration-500 font-medium px-4 py-2 rounded-lg hover:bg-muted/80 ${isActiveLink(item.href)
                    ? 'text-gta-red bg-gta-red/10'
                    : 'text-muted-foreground hover:text-gta-red'
                  }`}>
                  {item.name}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="p-6 w-80 bg-background/95 backdrop-blur-md border border-border/50 shadow-xl rounded-xl">
                    <div className="grid gap-3">
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gta-red/10 hover:text-gta-red hover:scale-105"
                      >
                        <div className="text-sm font-medium leading-none">Toutes les formations</div>
                      </Link>

                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gta-red/10 hover:text-gta-red hover:scale-105 ${isActiveSubLink(subItem.href) ? 'bg-gta-red/10 text-gta-red' : ''
                            }`}
                        >
                          <div className="text-sm font-medium leading-none">{subItem.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={item.href} className="relative group">
                <NavigationMenuLink
                  className={`transition-all duration-500 font-medium px-4 py-2 rounded-lg hover:bg-muted/80 block ${isActiveLink(item.href)
                      ? 'text-gta-red bg-gta-red/10'
                      : 'text-muted-foreground hover:text-gta-red'
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-gta-red to-gta-red-light transition-transform duration-500 origin-left ${isActiveLink(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigation;
