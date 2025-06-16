
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Send, User, Mail, Phone, Building, Target, Clock, Users, Calendar } from 'lucide-react';

interface PersonalizedQuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  experience: string;
  objectives: string;
  duration: string;
  format: string;
  participants: string;
  timeline: string;
  budget: string;
  technologies: string;
  specificNeeds: string;
}

const PersonalizedQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PersonalizedQuoteFormData>();

  const onSubmit = async (data: PersonalizedQuoteFormData) => {
    setIsSubmitting(true);
    console.log('Demande de devis personnalisé soumise:', data);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Votre demande de devis a été envoyée avec succès ! Nous vous contacterons sous 24h.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <Card className="shadow-lg border-border/50 dark:border-border">
      <CardHeader className="bg-gradient-to-r from-gta-red/5 via-gta-red/3 to-transparent dark:from-gta-red/10 dark:via-gta-red/5 dark:to-transparent border-b border-border/50 dark:border-border">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center">
          <Target className="w-6 h-6 text-gta-red mr-3" />
          Formulaire de Devis Personnalisé
        </CardTitle>
        <p className="text-muted-foreground">
          Décrivez précisément vos besoins pour recevoir une proposition sur mesure
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center mb-4">
              <User className="w-5 h-5 text-gta-red mr-2" />
              Informations personnelles
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-foreground">Prénom *</Label>
                <Input
                  id="firstName"
                  {...register('firstName', { required: 'Le prénom est requis' })}
                  className={`bg-background border-input dark:bg-card ${errors.firstName ? 'border-red-500 dark:border-red-400' : ''}`}
                />
                {errors.firstName && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="lastName" className="text-foreground">Nom *</Label>
                <Input
                  id="lastName"
                  {...register('lastName', { required: 'Le nom est requis' })}
                  className={`bg-background border-input dark:bg-card ${errors.lastName ? 'border-red-500 dark:border-red-400' : ''}`}
                />
                {errors.lastName && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-foreground">Email professionnel *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    className={`pl-10 bg-background border-input dark:bg-card ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
                    {...register('email', {
                      required: 'L\'email est requis',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Format email invalide'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">Téléphone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    className={`pl-10 bg-background border-input dark:bg-card ${errors.phone ? 'border-red-500 dark:border-red-400' : ''}`}
                    {...register('phone', { required: 'Le téléphone est requis' })}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-foreground">Entreprise *</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="company"
                    className={`pl-10 bg-background border-input dark:bg-card ${errors.company ? 'border-red-500 dark:border-red-400' : ''}`}
                    {...register('company', { required: 'L\'entreprise est requise' })}
                  />
                </div>
                {errors.company && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="position" className="text-foreground">Poste actuel</Label>
                <Input
                  id="position"
                  className="bg-background border-input dark:bg-card"
                  {...register('position')}
                />
              </div>
            </div>
          </div>

          {/* Niveau d'expérience */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Niveau d'expérience</h3>
            <RadioGroup defaultValue="" className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debutant" id="debutant" {...register('experience')} />
                <Label htmlFor="debutant" className="text-foreground cursor-pointer">Débutant (0-1 an)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediaire" id="intermediaire" {...register('experience')} />
                <Label htmlFor="intermediaire" className="text-foreground cursor-pointer">Intermédiaire (2-5 ans)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="avance" id="avance" {...register('experience')} />
                <Label htmlFor="avance" className="text-foreground cursor-pointer">Avancé (5+ ans)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Détails de la formation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center mb-4">
              <Target className="w-5 h-5 text-gta-red mr-2" />
              Détails de la formation souhaitée
            </h3>
            
            <div>
              <Label htmlFor="objectives" className="text-foreground">Objectifs de formation *</Label>
              <textarea
                id="objectives"
                rows={4}
                className={`w-full px-3 py-2 border rounded-md resize-none bg-background dark:bg-card text-foreground placeholder-muted-foreground ${errors.objectives ? 'border-red-500 dark:border-red-400' : 'border-input'}`}
                placeholder="Décrivez précisément vos objectifs et ce que vous souhaitez apprendre..."
                {...register('objectives', { required: 'Les objectifs sont requis' })}
              />
              {errors.objectives && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.objectives.message}</p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="duration" className="text-foreground">Durée souhaitée</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <select
                    id="duration"
                    className="w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background dark:bg-card text-foreground"
                    {...register('duration')}
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-semaine">1 semaine intensive</option>
                    <option value="2-semaines">2 semaines</option>
                    <option value="1-mois">1 mois (temps partiel)</option>
                    <option value="3-mois">3 mois (temps partiel)</option>
                    <option value="6-mois">6 mois (temps partiel)</option>
                    <option value="autre">Autre durée</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="format" className="text-foreground">Format de formation</Label>
                <select
                  id="format"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background dark:bg-card text-foreground"
                  {...register('format')}
                >
                  <option value="">Sélectionner</option>
                  <option value="presentiel">100% Présentiel</option>
                  <option value="distanciel">100% Distanciel</option>
                  <option value="hybride">Hybride (Présentiel + Distanciel)</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="participants" className="text-foreground">Nombre de participants</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <select
                    id="participants"
                    className="w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background dark:bg-card text-foreground"
                    {...register('participants')}
                  >
                    <option value="">Sélectionner</option>
                    <option value="1">Formation individuelle (1 personne)</option>
                    <option value="2-5">Petit groupe (2-5 personnes)</option>
                    <option value="6-10">Groupe moyen (6-10 personnes)</option>
                    <option value="10+">Grand groupe (10+ personnes)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="timeline" className="text-foreground">Délai souhaité</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <select
                    id="timeline"
                    className="w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background dark:bg-card text-foreground"
                    {...register('timeline')}
                  >
                    <option value="">Sélectionner</option>
                    <option value="asap">Dès que possible</option>
                    <option value="1-mois">Dans le mois</option>
                    <option value="3-mois">Dans les 3 mois</option>
                    <option value="6-mois">Dans les 6 mois</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Informations complémentaires</h3>
            
            <div>
              <Label htmlFor="budget" className="text-foreground">Budget approximatif</Label>
              <select
                id="budget"
                className="w-full px-3 py-2 border border-input rounded-md bg-background dark:bg-card text-foreground"
                {...register('budget')}
              >
                <option value="">Sélectionner une fourchette</option>
                <option value="moins-2000">Moins de 2 000€</option>
                <option value="2000-5000">2 000€ - 5 000€</option>
                <option value="5000-10000">5 000€ - 10 000€</option>
                <option value="10000-20000">10 000€ - 20 000€</option>
                <option value="plus-20000">Plus de 20 000€</option>
                <option value="non-defini">Non défini</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="technologies" className="text-foreground">Technologies/Domaines spécifiques</Label>
              <Input
                id="technologies"
                placeholder="Ex: React, Python, Cybersécurité, Data Science..."
                className="bg-background border-input dark:bg-card"
                {...register('technologies')}
              />
            </div>
            
            <div>
              <Label htmlFor="specificNeeds" className="text-foreground">Besoins spécifiques ou contraintes</Label>
              <textarea
                id="specificNeeds"
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-md resize-none bg-background dark:bg-card text-foreground placeholder-muted-foreground"
                placeholder="Horaires particuliers, accessibilité, équipements requis..."
                {...register('specificNeeds')}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gta-red hover:bg-gta-red-light text-white py-3 text-lg font-semibold transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma demande de devis
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PersonalizedQuoteForm;
