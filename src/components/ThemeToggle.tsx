
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Determine if dark mode is active (either explicitly set to dark or system preference is dark)
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="flex items-center space-x-3 bg-muted/30 backdrop-blur-sm rounded-full p-2 border border-border/40 shadow-lg">
      <Sun className={`h-4 w-4 transition-all duration-300 ${
        !isDarkMode ? 'text-yellow-500 scale-110' : 'text-muted-foreground scale-100'
      }`} />
      
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-800 data-[state=unchecked]:bg-yellow-100 border-2 border-muted-foreground/20"
        aria-label="Basculer entre mode clair et sombre"
      />
      
      <Moon className={`h-4 w-4 transition-all duration-300 ${
        isDarkMode ? 'text-blue-400 scale-110' : 'text-muted-foreground scale-100'
      }`} />
    </div>
  );
}
