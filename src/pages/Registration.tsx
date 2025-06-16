import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Upload, User, Phone, Mail, MapPin, Calendar, GraduationCap, Briefcase, MessageSquare, Laptop, FileText, Camera, CheckCircle, Star, CreditCard, DollarSign, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  module: z.string().min(1, "Veuillez sélectionner un module"),
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  gender: z.enum(["masculin", "feminin"], { required_error: "Veuillez sélectionner votre sexe" }),
  phone: z.string().min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres").regex(/^\d+$/, "Le numéro de téléphone ne doit contenir que des chiffres"),
  email: z.string().email("Email invalide"),
  tutorPhone: z.string().min(8, "Le numéro du tuteur/parent doit contenir au moins 8 chiffres").regex(/^\d+$/, "Le numéro de téléphone ne doit contenir que des chiffres"),
  city: z.string().min(2, "Veuillez préciser votre ville"),
  neighborhood: z.string().min(2, "Veuillez préciser votre quartier"),
  birthDate: z.string().min(1, "Date de naissance requise").refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    const sixYearsAgo = new Date(today.getFullYear() - 6, today.getMonth(), today.getDate());
    return birthDate <= sixYearsAgo;
  }, "L'âge minimum requis est de 6 ans"),
  session: z.enum(["session1", "session2"], { required_error: "Veuillez sélectionner une session" }),
  educationLevel: z.string().min(1, "Niveau d'étude requis"),
  profession: z.string().min(1, "Profession requise"),
  professionOther: z.string().optional(),
  motivations: z.string().min(10, "Veuillez décrire vos motivations (minimum 10 caractères)"),
  hasLaptop: z.string().min(1, "Veuillez préciser si vous possédez un ordinateur portable"),
  idDocument: z.any().optional(),
  photo: z.any().optional(),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const RegistrationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ageGroup, setAgeGroup] = useState<{ group: string; cost: string } | null>(null);

  const modules = [
    { value: "1", label: "Module 1 : Savoir utiliser un ordinateur et Initiation à Scratch" },
    { value: "2", label: "Module 2 : Initiation à l'Intelligence Artificielle & Word 2013" },
    { value: "3", label: "Module 3 : Initiation à l'utilisation d'Excel 2013" },
    { value: "4", label: "Module 4 : Initiation à Canva / PowerPoint 2013" }
  ];

  const educationLevels = [
    "CEP",
    "BEPC", 
    "GCE Ordinary Level",
    "PROBATOIRE",
    "BAC",
    "GCE Advanced Level",
    "BAC + 1",
    "BAC + 2", 
    "BAC + 3",
    "BAC + 4",
    "BAC + 5",
    "BAC + 6"
  ];

  const professions = [
    { value: "eleve", label: "Élève" },
    { value: "etudiant", label: "Étudiant" },
    { value: "enseignant", label: "Enseignant" },
    { value: "autre", label: "Autre (à préciser)" }
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      module: searchParams.get('module') || "",
      firstName: "",
      lastName: "",
      gender: undefined,
      phone: "",
      email: "",
      tutorPhone: "",
      city: "",
      neighborhood: "",
      birthDate: "",
      session: undefined,
      educationLevel: "",
      profession: "",
      professionOther: "",
      motivations: "",
      hasLaptop: "",
      message: ""
    }
  });

  const watchedProfession = form.watch("profession");
  const watchedBirthDate = form.watch("birthDate");

  // Calculate age group and cost based on birth date
  useEffect(() => {
    if (watchedBirthDate) {
      const birthDate = new Date(watchedBirthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      let group = "";
      let cost = "";

      if (age >= 7 && age <= 13) {
        group = "Groupe 1 (7 à 13 ans)";
        cost = "25 000 FCFA";
      } else if (age >= 14 && age <= 18) {
        group = "Groupe 2 (14 à 18 ans)";
        cost = "30 000 FCFA";
      } else if (age >= 19) {
        group = "Groupe 3 (19 ans et plus)";
        cost = "35 000 FCFA";
      }

      if (group && cost) {
        setAgeGroup({ group, cost });
      } else {
        setAgeGroup(null);
      }
    } else {
      setAgeGroup(null);
    }
  }, [watchedBirthDate]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Log des données en attendant le backend
      console.log("Données d'inscription:", { ...data, ageGroup });
      
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Inscription réussie !",
        description: "Votre demande d'inscription a été envoyée avec succès. Nous vous contacterons bientôt.",
      });
      
      // Redirection après succès
      navigate("/training/holidays?registered=true");
      
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      {/* Enhanced Breadcrumb */}
      <div className="bg-muted/40 py-6 border-b dark:border-border backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 text-sm">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(-1)}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour
            </Button>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gta-red" />
              <span className="font-medium text-foreground">Inscription Formation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero */}
      <section className="bg-gradient-to-br from-gta-red-dark via-gta-red to-red-600 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Formation Vacances 2025
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Formulaire d'
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-100">
                Inscription
              </span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
              Complétez ce formulaire pour finaliser votre inscription à nos formations technologiques d'excellence
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Main Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-gta-red/10 rounded-lg">
                      <User className="w-7 h-7 text-gta-red" />
                    </div>
                    Informations d'inscription
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Tous les champs marqués d'un astérisque (*) sont obligatoires pour finaliser votre inscription
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Module Selection - Enhanced */}
                      <div className="bg-gradient-to-br from-gta-red/5 to-transparent p-6 rounded-xl border border-gta-red/20">
                        <FormField
                          control={form.control}
                          name="module"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-3 text-lg font-semibold">
                                <div className="p-2 bg-gta-red/10 rounded-lg">
                                  <GraduationCap className="w-5 h-5 text-gta-red" />
                                </div>
                                Module de formation *
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base border-2 hover:border-gta-red/50 transition-colors">
                                    <SelectValue placeholder="Sélectionnez votre module de formation" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {modules.map((module) => (
                                    <SelectItem key={module.value} value={module.value} className="py-3">
                                      {module.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Personal Information Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Informations personnelles</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Prénom *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Votre prénom" 
                                    className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                    {...field} 
                                  />
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
                                <FormLabel className="text-base font-medium">Nom *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Votre nom" 
                                    className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Gender Field */}
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Sexe *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex gap-6 mt-2"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="masculin" id="masculin" />
                                    <label htmlFor="masculin" className="text-base cursor-pointer">Masculin</label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="feminin" id="feminin" />
                                    <label htmlFor="feminin" className="text-base cursor-pointer">Féminin</label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="birthDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Calendar className="w-4 h-4 text-green-600" />
                                Date de naissance *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  type="date" 
                                  className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Age Group Display */}
                        {ageGroup && (
                          <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-lg border border-green-200/50 dark:border-green-800/50">
                            <div className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="font-semibold text-green-800 dark:text-green-300">
                                  {ageGroup.group}
                                </p>
                                <p className="text-sm text-green-700 dark:text-green-400">
                                  Coût de formation : <span className="font-bold">{ageGroup.cost}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Session Selection */}
                        <FormField
                          control={form.control}
                          name="session"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Clock className="w-4 h-4 text-purple-600" />
                                Session de formation *
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-3 mt-2"
                                >
                                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                                    <RadioGroupItem value="session1" id="session1" />
                                    <label htmlFor="session1" className="text-base cursor-pointer flex-1">
                                      <span className="font-medium">1ère session :</span> 30 Juin - 31 Juillet 2025
                                    </label>
                                  </div>
                                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                                    <RadioGroupItem value="session2" id="session2" />
                                    <label htmlFor="session2" className="text-base cursor-pointer flex-1">
                                      <span className="font-medium">2ème session :</span> 04 Août - 04 Septembre 2025
                                    </label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Contact Information Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                          <div className="p-2 bg-green-500/10 rounded-lg">
                            <Phone className="w-5 h-5 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Coordonnées de contact</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Phone className="w-4 h-4 text-green-600" />
                                Numéro de téléphone (WhatsApp de préférence) *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+237 6XX XXX XXX" 
                                  className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="tutorPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Phone className="w-4 h-4 text-orange-600" />
                                Contact du tuteur/parent *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+237 6XX XXX XXX" 
                                  className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Mail className="w-4 h-4 text-blue-600" />
                                Adresse email *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="votre.email@exemple.com" 
                                  className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2 text-base font-medium">
                                  <MapPin className="w-4 h-4 text-purple-600" />
                                  Ville *
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Votre ville" 
                                    className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="neighborhood"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Quartier *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Votre quartier" 
                                    className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Academic & Professional Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                          <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Profil académique et professionnel</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="educationLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Niveau d'étude *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base border-2 hover:border-gta-red/50 transition-colors">
                                    <SelectValue placeholder="Sélectionnez votre niveau d'étude" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {educationLevels.map((level) => (
                                    <SelectItem key={level} value={level} className="py-2">
                                      {level}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="profession"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Briefcase className="w-4 h-4 text-purple-600" />
                                Profession *
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base border-2 hover:border-gta-red/50 transition-colors">
                                    <SelectValue placeholder="Sélectionnez votre profession" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {professions.map((prof) => (
                                    <SelectItem key={prof.value} value={prof.value} className="py-2">
                                      {prof.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {watchedProfession === "autre" && (
                          <FormField
                            control={form.control}
                            name="professionOther"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Précisez votre profession</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Décrivez votre profession" 
                                    className="h-12 text-base border-2 focus:border-gta-red/50 transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}

                        <FormField
                          control={form.control}
                          name="hasLaptop"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Laptop className="w-4 h-4 text-indigo-600" />
                                Matériel de travail *
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base border-2 hover:border-gta-red/50 transition-colors">
                                    <SelectValue placeholder="Possédez-vous un ordinateur portable ?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="oui" className="py-2">✅ Je possède un ordinateur portable</SelectItem>
                                  <SelectItem value="non" className="py-2">❌ Je ne possède pas un ordinateur portable</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Motivation Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            <MessageSquare className="w-5 h-5 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Motivation et objectifs</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="motivations"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <MessageSquare className="w-4 h-4 text-orange-600" />
                                Vos motivations pour cette formation *
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Décrivez brièvement vos motivations, vos objectifs et ce que vous espérez accomplir grâce à cette formation..."
                                  className="min-h-[120px] text-base border-2 focus:border-gta-red/50 transition-colors resize-none"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Documents Section */}
                      <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50 space-y-6">
                        <div className="flex items-center gap-3 pb-3 border-b border-blue-200/50 dark:border-blue-800/50">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Pièces justificatives</h3>
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="idDocument"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">
                                Photocopie de carte nationale d'identité ou carte d'élève/étudiant
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  type="file" 
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  className="h-12 text-base border-2 hover:border-blue-400 transition-colors cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                  onChange={(e) => field.onChange(e.target.files?.[0])}
                                />
                              </FormControl>
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Upload className="w-4 h-4" />
                                Formats acceptés : PDF, JPG, PNG (Max 5 Mo)
                              </p>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="photo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base font-medium">
                                <Camera className="w-4 h-4 text-indigo-600" />
                                Photo 4x4 (facultatif)
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  type="file" 
                                  accept=".jpg,.jpeg,.png"
                                  className="h-12 text-base border-2 hover:border-indigo-400 transition-colors cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                  onChange={(e) => field.onChange(e.target.files?.[0])}
                                />
                              </FormControl>
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Camera className="w-4 h-4" />
                                Formats acceptés : JPG, PNG (Max 5 Mo)
                              </p>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Optional Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Message ou remarques particulières (facultatif)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Avez-vous des questions spécifiques, des besoins particuliers ou des remarques que vous souhaitez partager ?"
                                className="min-h-[100px] text-base border-2 focus:border-gta-red/50 transition-colors resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Enhanced Submit Button */}
                      <div className="pt-6">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-gta-red via-gta-red-light to-gta-red hover:from-gta-red-dark hover:via-gta-red hover:to-gta-red-light text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Envoi en cours...
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5" />
                              Envoyer ma demande d'inscription
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-6">
                {/* Enhanced Other Modules */}
                <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      Autres modules disponibles
                    </CardTitle>
                    <CardDescription>
                      Découvrez nos autres formations d'excellence
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {modules.filter(m => m.value !== form.watch("module")).map((module) => (
                        <Button
                          key={module.value}
                          variant="outline"
                          className="w-full justify-start text-left h-auto p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50 transition-all duration-300 group"
                          onClick={() => navigate(`/training/holidays/modules/module${module.value}`)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                              <Star className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-foreground">Module {module.value}</div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {module.label.split(' : ')[1]}
                              </div>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Age Groups Information */}
                <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      Groupes par âge
                    </CardTitle>
                    <CardDescription>
                      Répartition et tarifs par tranche d'âge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50/50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200/50 dark:border-green-800/50">
                        <div className="font-semibold text-green-800 dark:text-green-300 text-sm">Groupe 1 (7-13 ans)</div>
                        <div className="text-green-700 dark:text-green-400 text-xl font-bold">25 000 FCFA</div>
                      </div>
                      <div className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                        <div className="font-semibold text-blue-800 dark:text-blue-300 text-sm">Groupe 2 (14-18 ans)</div>
                        <div className="text-blue-700 dark:text-blue-400 text-xl font-bold">30 000 FCFA</div>
                      </div>
                      <div className="bg-purple-50/50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200/50 dark:border-purple-800/50">
                        <div className="font-semibold text-purple-800 dark:text-purple-300 text-sm">Groupe 3 (19+ ans)</div>
                        <div className="text-purple-700 dark:text-purple-400 text-xl font-bold">35 000 FCFA</div>
                      </div>
                      <div className="bg-orange-50/50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200/50 dark:border-orange-800/50">
                        <div className="font-semibold text-orange-800 dark:text-orange-300 text-sm">Groupe 4 (19+ ans)</div>
                        <div className="text-orange-700 dark:text-orange-400 text-xl font-bold">45 000 FCFA</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Important Info */}
                <Card className="border-2 border-gta-red/30 bg-gradient-to-br from-gta-red/5 via-red-50/50 to-orange-50/50 dark:from-gta-red/10 dark:via-red-950/20 dark:to-orange-950/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-gta-red flex items-center gap-3">
                      <div className="p-2 bg-gta-red/10 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-gta-red" />
                      </div>
                      Informations importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6 text-sm">
                      <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg border border-gta-red/20">
                        <p className="font-bold text-gta-red-dark text-base mb-2">Frais d'inscription</p>
                        <p className="text-lg font-bold text-gta-red">5 000 FCFA</p>
                      </div>
                      
                      <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg border border-blue-200">
                        <p className="font-bold text-blue-700 dark:text-blue-400 mb-3">Sessions disponibles</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs"><strong>1ère session :</strong> 30 Juin - 31 Juillet 2025</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs"><strong>2ème session :</strong> 04 Août - 04 Septembre 2025</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-yellow-600 dark:text-yellow-400 mt-0.5"></div>
                          <div>
                            <p className="text-xs font-bold text-yellow-800 dark:text-yellow-300 mb-1">
                              Attention - Pénalité de retard
                            </p>
                            <p className="text-xs text-yellow-700 dark:text-yellow-400">
                              Pénalité de <strong>5 000 FCFA</strong> pour tout paiement après la date limite !
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-16 bg-gradient-to-br from-gta-red/5 via-red-50/50 to-orange-50/50 dark:from-gta-red/10 dark:via-red-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-gta-red/30 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-3 text-gta-red">
                <div className="p-3 bg-gta-red/10 rounded-lg">
                  <CreditCard className="w-8 h-8 text-gta-red" />
                </div>
                Informations de paiement
              </CardTitle>
              <CardDescription className="text-lg">
                Choisissez votre mode de paiement pour finaliser votre inscription
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Bank Transfer */}
                <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 transition-colors">
                  <CardHeader className="text-center">
                    <div className="p-3 bg-blue-500/10 rounded-lg mx-auto w-fit">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Virement bancaire</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Afriland First Bank - GTA</p>
                      <p className="text-lg font-mono bg-blue-50 dark:bg-blue-950/30 p-2 rounded">
                        10005-00038-08943631001-89
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Cash Payment */}
                <Card className="border-2 border-green-200 dark:border-green-800 hover:border-green-400 transition-colors">
                  <CardHeader className="text-center">
                    <div className="p-3 bg-green-500/10 rounded-lg mx-auto w-fit">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg text-green-700 dark:text-green-400">Paiement cash</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Secrétariat du centre</p>
                      <p className="text-sm text-muted-foreground">
                        Nkolfoulou base SATOM<br />
                        Entrée panneau 50
                      </p>
                      <p className="text-sm font-medium text-green-700 dark:text-green-400 mt-2">
                        De 11h à 16h
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile Money */}
                <Card className="border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 transition-colors">
                  <CardHeader className="text-center">
                    <div className="p-3 bg-orange-500/10 rounded-lg mx-auto w-fit">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg text-orange-700 dark:text-orange-400">OM/MOMO</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Mobile Money</p>
                      <div className="space-y-1">
                        <p className="text-sm font-mono bg-orange-50 dark:bg-orange-950/30 p-1 rounded">
                          +237 690 419 336
                        </p>
                        <p className="text-sm font-mono bg-orange-50 dark:bg-orange-950/30 p-1 rounded">
                          +237 670 456 700
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-300 dark:border-yellow-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-yellow-600 dark:text-yellow-400 mt-1">
                    
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                      Important - Confirmation de paiement
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                      Après avoir effectué votre paiement, veuillez envoyer une capture d'écran ou une photo du reçu 
                      par WhatsApp au <strong>+237 690 419 336</strong> pour confirmer votre inscription.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
