
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Calendar,
  MapPin,
  Clock,
  Users,
  X
} from 'lucide-react';

const AgendaFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const filterOptions = [
    { value: 'en-cours', label: 'En cours', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { value: 'a-venir', label: 'À venir', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { value: 'places-dispo', label: 'Places disponibles', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
    { value: 'certifiante', label: 'Certifiante', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { value: 'presentiel', label: 'Présentiel', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
    { value: 'en-ligne', label: 'En ligne', color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' }
  ];

  const toggleFilter = (filterValue: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterValue) 
        ? prev.filter(f => f !== filterValue)
        : [...prev, filterValue]
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setSearchTerm('');
  };

  return (
    <Card className="mb-8 border-red-300 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Recherche principale */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Rechercher une formation, un formateur, un lieu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-12 h-12 text-lg"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Filtres rapides */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground">Filtres rapides</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-gta-red hover:text-gta-red-light"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtres avancés
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Badge
                  key={option.value}
                  variant={selectedFilters.includes(option.value) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedFilters.includes(option.value) 
                      ? 'bg-gta-red text-white hover:bg-gta-red-light' 
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => toggleFilter(option.value)}
                >
                  {option.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Filtres avancés */}
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
              <Select>
                <SelectTrigger>
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Aujourd'hui</SelectItem>
                  <SelectItem value="week">Cette semaine</SelectItem>
                  <SelectItem value="month">Ce mois</SelectItem>
                  <SelectItem value="next-month">Mois prochain</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Lieu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="douala">Douala</SelectItem>
                  <SelectItem value="yaounde">Yaoundé</SelectItem>
                  <SelectItem value="bafoussam">Bafoussam</SelectItem>
                  <SelectItem value="online">En ligne</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <Clock className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Horaire" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Matin (8h-12h)</SelectItem>
                  <SelectItem value="afternoon">Après-midi (14h-18h)</SelectItem>
                  <SelectItem value="evening">Soir (18h-22h)</SelectItem>
                  <SelectItem value="weekend">Weekend</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <Users className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Débutant</SelectItem>
                  <SelectItem value="intermediate">Intermédiaire</SelectItem>
                  <SelectItem value="advanced">Avancé</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Filtres actifs */}
          {(selectedFilters.length > 0 || searchTerm) && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {selectedFilters.length + (searchTerm ? 1 : 0)} filtre(s) actif(s)
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-gta-red hover:text-gta-red-light"
              >
                Effacer tout
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AgendaFilters;
