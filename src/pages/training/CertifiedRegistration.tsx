
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, Briefcase, CreditCard, Clock, Users, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CertifiedRegistrationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Cameroun',

    // Informations académiques/professionnelles
    education: '',
    experience: '',
    currentJob: '',
    company: '',
    motivation: '',

    // Informations de formation
    paymentMethod: '',
    hasLaptop: false,
    specialRequests: '',

    // Consentements
    agreeTerms: false,
    agreeMarketing: false
  });

  const formations = {
    'certified-web-dev': {
      title: "Développement Web Full-Stack",
      duration: "6 mois",
      price: "450,000 FCFA",
      nextStart: "15 Février 2025"
    },
    'certified-cybersec': {
      title: "Cybersécurité Avancée",
      duration: "4 mois",
      price: "500,000 FCFA",
      nextStart: "15 Mars 2025"
    },
    'certified-data-science': {
      title: "Data Science & Machine Learning",
      duration: "5 mois",
      price: "550,000 FCFA",
      nextStart: "1er Mars 2025"
    }
  };

  const formation = formations[id as keyof typeof formations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      toast({
        title: "Erreur",
        description: "Vous devez accepter les conditions générales pour continuer.",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    console.log('Données d\'inscription:', formData);

    toast({
      title: "Inscription envoyée !",
      description: "Votre demande d'inscription a été transmise. Nous vous contacterons sous 24h.",
    });

    setTimeout(() => {
      navigate('/training/certified');
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!formation) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Formation non trouvée</h1>
            <Link to="/training/certified">
              <Button variant="outline">Retour aux formations</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/training" className="hover:text-gta-red">Formations</Link>
          <span>/</span>
          <Link to="/training/certified" className="hover:text-gta-red">Certifiantes</Link>
          <span>/</span>
          <Link to={`/training/certified/${id}`} className="hover:text-gta-red">{formation.title}</Link>
          <span>/</span>
          <span className="text-foreground">Inscription</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Inscription à la formation
            </h1>
            <h2 className="text-xl text-gta-red font-semibold mb-2">{formation.title}</h2>
            <p className="text-muted-foreground">
              Remplissez ce formulaire pour vous inscrire à cette formation certifiante
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informations personnelles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gta-red" />
                    <span>Informations personnelles</span>
                  </CardTitle>
                  <CardDescription>
                    Vos informations de contact et d'identité
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Adresse complète</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Ville</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Pays</Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Cameroun">Cameroun</SelectItem>
                          <SelectItem value="Côte d'Ivoire">Côte d'Ivoire</SelectItem>
                          <SelectItem value="Ghana">Ghana</SelectItem>
                          <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
                          <SelectItem value="Mali">Mali</SelectItem>
                          <SelectItem value="Sénégal">Sénégal</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informations académiques/professionnelles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-gta-red" />
                    <span>Parcours académique et professionnel</span>
                  </CardTitle>
                  <CardDescription>
                    Votre niveau d'études et votre expérience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="education">Niveau d'études *</Label>
                    <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CEP">CEP</SelectItem>
                        <SelectItem value="Probatoire">Probatoire</SelectItem>
                        <SelectItem value="bac">Baccalauréat</SelectItem>
                        <SelectItem value="bac+2">Bac+2 (BTS, DUT)</SelectItem>
                        <SelectItem value="bac+3">Bac+3 (Licence)</SelectItem>
                        <SelectItem value="bac+5">Bac+5 (Master)</SelectItem>
                        <SelectItem value="doctorat">Doctorat</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Expérience professionnelle dans le domaine</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Votre niveau d'expérience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant (0-1 an)</SelectItem>
                        <SelectItem value="junior">Junior (1-3 ans)</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire (3-5 ans)</SelectItem>
                        <SelectItem value="senior">Senior (5+ ans)</SelectItem>
                        <SelectItem value="reconversion">En reconversion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currentJob">Poste actuel</Label>
                    <Input
                      id="currentJob"
                      value={formData.currentJob}
                      onChange={(e) => handleInputChange('currentJob', e.target.value)}
                      placeholder="Ex: Développeur Junior, Étudiant, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Entreprise actuelle (si applicable)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Motivation pour cette formation *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Expliquez vos objectifs et ce que vous attendez de cette formation..."
                      rows={4}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Informations pratiques */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-gta-red" />
                    <span>Informations pratiques</span>
                  </CardTitle>
                  <CardDescription>
                    Modalités de paiement et équipement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="paymentMethod">Mode de paiement souhaité *</Label>
                    <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un mode de paiement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash-full">Paiement comptant intégral</SelectItem>
                        <SelectItem value="installments-3">Paiement en 3 fois</SelectItem>
                        <SelectItem value="monthly">Paiement mensuel</SelectItem>
                        <SelectItem value="company">Prise en charge entreprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasLaptop"
                      checked={formData.hasLaptop}
                      onCheckedChange={(checked) => handleInputChange('hasLaptop', checked as boolean)}
                    />
                    <Label htmlFor="hasLaptop">
                      Je possède un ordinateur portable pour suivre la formation
                    </Label>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Demandes particulières</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Accessibilité, contraintes horaires, besoins spécifiques..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Consentements */}
              <Card>
                <CardHeader>
                  <CardTitle>Consentements et validation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      J'accepte les{' '}
                      <Link to="/legal" className="text-gta-red hover:underline">
                        conditions générales de vente
                      </Link>{' '}
                      et le{' '}
                      <Link to="/legal" className="text-gta-red hover:underline">
                        règlement intérieur
                      </Link>{' '}
                      de GTA Formations *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) => handleInputChange('agreeMarketing', checked as boolean)}
                    />
                    <Label htmlFor="agreeMarketing" className="text-sm">
                      J'accepte de recevoir des informations sur les formations et événements GTA par email
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" className="w-full bg-gta-red hover:bg-gta-red-light text-white text-lg py-3">
                Envoyer ma demande d'inscription
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-2 border-gta-red/20">
              <CardHeader>
                <CardTitle className="text-gta-red">Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{formation.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gta-red" />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-gta-red" />
                      <span className="font-semibold text-gta-red">{formation.price}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gta-red" />
                      <span>Prochaine session : {formation.nextStart}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Award className="w-4 h-4" />
                    <span>Formation certifiante</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Notre équipe est à votre disposition pour répondre à vos questions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gta-red" />
                    <span>+237 690 419 336</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gta-red" />
                    <span>academy@gta-it.com</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full">
                    Nous contacter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CertifiedRegistrationPage;
