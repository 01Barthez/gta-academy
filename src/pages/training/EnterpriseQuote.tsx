
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, Users, Calendar, CreditCard, Shield, Award, Phone, Mail, MessageSquare, Building, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const quoteSchema = z.object({
  // Informations entreprise
  companyName: z.string().min(2, 'Le nom de l\'entreprise est requis'),
  industry: z.string().min(1, 'Le secteur d\'activité est requis'),
  companySize: z.string().min(1, 'La taille de l\'entreprise est requise'),
  
  // Contact principal
  firstName: z.string().min(2, 'Le prénom est requis'),
  lastName: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(9, 'Numéro de téléphone invalide'),
  position: z.string().min(2, 'Le poste est requis'),
  
  // Besoins formation
  trainingType: z.string().min(1, 'Le type de formation est requis'),
  participantCount: z.string().min(1, 'Le nombre de participants est requis'),
  trainingLevel: z.string().min(1, 'Le niveau est requis'),
  preferredDates: z.string().optional(),
  trainingLocation: z.string().min(1, 'Le lieu de formation est requis'),
  
  // Besoins spécifiques
  specificNeeds: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().min(1, 'Le délai souhaité est requis'),
  
  // Conditions
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine(val => val === true, 'Vous devez accepter les conditions'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const EnterpriseQuotePage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      newsletter: false,
      terms: false,
    }
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('=== DEMANDE DE DEVIS ENTREPRISE ===');
    console.log('Informations entreprise:', {
      companyName: data.companyName,
      industry: data.industry,
      companySize: data.companySize
    });
    console.log('Contact principal:', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      position: data.position
    });
    console.log('Besoins formation:', {
      trainingType: data.trainingType,
      participantCount: data.participantCount,
      trainingLevel: data.trainingLevel,
      preferredDates: data.preferredDates,
      trainingLocation: data.trainingLocation
    });
    console.log('Besoins spécifiques:', {
      specificNeeds: data.specificNeeds,
      budget: data.budget,
      timeline: data.timeline
    });
    console.log('Préférences:', {
      newsletter: data.newsletter,
      terms: data.terms
    });
    
    setIsSubmitting(false);
    
    toast({
      title: "Demande envoyée avec succès !",
      description: "Notre équipe vous contactera sous 24h pour établir votre devis personnalisé.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gta-red to-gta-red-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Building className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Demande de Devis Entreprise
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Obtenez un devis personnalisé pour vos formations d'entreprise
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Formulaire principal */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Informations pour votre devis</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour recevoir un devis personnalisé adapté à vos besoins
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      
                      {/* Informations entreprise */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                          <Building className="w-5 h-5 text-gta-red" />
                          <span>Informations entreprise</span>
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom de l'entreprise *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ex: ACME Corporation" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Secteur d'activité *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Sélectionnez un secteur" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="technology">Technologie</SelectItem>
                                    <SelectItem value="finance">Finance/Banque</SelectItem>
                                    <SelectItem value="healthcare">Santé</SelectItem>
                                    <SelectItem value="education">Éducation</SelectItem>
                                    <SelectItem value="manufacturing">Industrie</SelectItem>
                                    <SelectItem value="retail">Commerce</SelectItem>
                                    <SelectItem value="consulting">Conseil</SelectItem>
                                    <SelectItem value="government">Administration</SelectItem>
                                    <SelectItem value="other">Autre</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Taille de l'entreprise *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Nombre d'employés" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">1-10 employés</SelectItem>
                                  <SelectItem value="11-50">11-50 employés</SelectItem>
                                  <SelectItem value="51-200">51-200 employés</SelectItem>
                                  <SelectItem value="201-500">201-500 employés</SelectItem>
                                  <SelectItem value="500+">500+ employés</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Contact principal */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                          <Users className="w-5 h-5 text-gta-red" />
                          <span>Contact principal</span>
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Prénom *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Jean" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Dupont" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email professionnel *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="jean.dupont@entreprise.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Téléphone *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+237 690 123 456" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="position"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Poste/Fonction *</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: Directeur RH, Responsable Formation" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Besoins formation */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                          <Target className="w-5 h-5 text-gta-red" />
                          <span>Besoins de formation</span>
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="trainingType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Type de formation *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Sélectionnez une formation" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="azure">Microsoft Azure</SelectItem>
                                    <SelectItem value="aws">Amazon Web Services</SelectItem>
                                    <SelectItem value="cybersecurity">Cybersécurité</SelectItem>
                                    <SelectItem value="data-analytics">Data & Analytics</SelectItem>
                                    <SelectItem value="project-management">Gestion de Projet</SelectItem>
                                    <SelectItem value="custom">Formation personnalisée</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="participantCount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre de participants *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Nombre de participants" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1-5">1-5 participants</SelectItem>
                                    <SelectItem value="6-10">6-10 participants</SelectItem>
                                    <SelectItem value="11-15">11-15 participants</SelectItem>
                                    <SelectItem value="16-20">16-20 participants</SelectItem>
                                    <SelectItem value="20+">Plus de 20 participants</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="trainingLevel"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Niveau requis *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Niveau de compétence" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="beginner">Débutant</SelectItem>
                                    <SelectItem value="intermediate">Intermédiaire</SelectItem>
                                    <SelectItem value="advanced">Avancé</SelectItem>
                                    <SelectItem value="mixed">Niveau mixte</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="trainingLocation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Lieu de formation *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Lieu souhaité" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="gta-center">Centre GTA Academy</SelectItem>
                                    <SelectItem value="client-site">Dans nos locaux</SelectItem>
                                    <SelectItem value="online">Formation en ligne</SelectItem>
                                    <SelectItem value="hybrid">Formation hybride</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="preferredDates"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dates préférées (optionnel)</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: Mars 2025, Flexible" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Besoins spécifiques */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Besoins spécifiques</h3>
                        
                        <FormField
                          control={form.control}
                          name="specificNeeds"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Besoins particuliers (optionnel)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Décrivez vos besoins spécifiques, objectifs particuliers, contraintes..." 
                                  className="h-24"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget approximatif (optionnel)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Fourchette budgétaire" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="100-500k">100k - 500k FCFA</SelectItem>
                                    <SelectItem value="500k-1m">500k - 1M FCFA</SelectItem>
                                    <SelectItem value="1m-2m">1M - 2M FCFA</SelectItem>
                                    <SelectItem value="2m+">Plus de 2M FCFA</SelectItem>
                                    <SelectItem value="to-discuss">À discuter</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Délai souhaité *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Quand souhaitez-vous commencer ?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="asap">Dès que possible</SelectItem>
                                    <SelectItem value="1-month">Dans le mois</SelectItem>
                                    <SelectItem value="1-3-months">1-3 mois</SelectItem>
                                    <SelectItem value="3-6-months">3-6 mois</SelectItem>
                                    <SelectItem value="6-months+">Plus de 6 mois</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Conditions */}
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Je souhaite recevoir les actualités formation de GTA Academy
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  J'accepte les conditions générales et la politique de confidentialité *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gta-red hover:bg-gta-red-light" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Pourquoi choisir GTA Academy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-gta-red" />
                    <span>Pourquoi GTA Academy ?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Formateurs certifiés experts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Programmes sur mesure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Suivi post-formation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Certifications reconnues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Nos garanties */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-gta-red" />
                    <span>Nos garanties</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">24h</Badge>
                      <span className="text-sm">Réponse sous 24h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">100%</Badge>
                      <span className="text-sm">Satisfaction garantie</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Gratuit</Badge>
                      <span className="text-sm">Devis gratuit et sans engagement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact direct */}
              <Card>
                <CardHeader>
                  <CardTitle>Besoin d'aide ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      +237 690 419 336
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      academy@gta-it.com
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat en direct
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Informations de paiement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-gta-red" />
                    <span>Modalités de paiement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>• Paiement en plusieurs fois possible</p>
                    <p>• Facturation après validation du devis</p>
                    <p>• Prise en charge OPCO possible</p>
                    <p>• Tarifs dégressifs selon le nombre de participants</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseQuotePage;
