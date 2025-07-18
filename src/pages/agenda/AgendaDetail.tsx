import { TbMoodEmpty } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthModal from '@/components/AuthModal';
import PaymentModal from '@/components/PaymentModal';
import ShareModal from '@/components/ShareModal';
import { useAuthStore } from '@/store/authStore';
import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    User,
    Users,
    BookOpen,
    Award,
    CheckCircle,
    Star,
    MessageSquare,
    Share2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { mockAgenda } from "@/mock/agenda.mock";

const AgendaDetail = () => {
    const { sessionId } = useParams<{ sessionId: string }>();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const { isAuthenticated } = useAuthStore();
    

  // Trouver l'offre d'emploi correspondante
  const sessionData = mockAgenda.find(agenda => agenda.id === sessionId);

  useEffect(() => {
  const timer = setTimeout(() => {    
    // Vérifier si on est sur la route correcte avant de rediriger
    const currentPath = window.location.pathname;
    if (!sessionData && currentPath.includes(`/agenda/${sessionId}`) ) {
      console.log('Agenda not found:', sessionData);
      navigate("/not-found", { replace: true });
    }
  }, 500);
  
  return () => clearTimeout(timer);
}, [sessionData, navigate, sessionId]);

    useEffect(() => {
        // Auto-ouvrir le modal d'inscription si l'action est dans l'URL
        if (searchParams.get('action') === 'register') {
            handleRegisterClick();
        }
    }, [searchParams, isAuthenticated]);

    const handleRegisterClick = () => {
        if (!isAuthenticated) {
            setAuthModalOpen(true);
        } else {
            setPaymentModalOpen(true);
        }
    };

    const handleAuthSuccess = () => {
        setPaymentModalOpen(true);
    };

    const handlePaymentSuccess = () => {
        toast({
            title: "Inscription réussie !",
            description: "Vous êtes maintenant inscrit à cette formation.",
        });
        navigate('/dashboard');
    };

    const handleShare = () => {
        if (navigator.share && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            navigator.share({
                title: sessionData.title,
                text: sessionData.description,
                url: window.location.href,
            });
        } else {
            setShareModalOpen(true);
        }
    };

    const progressPercentage = (sessionData.participants / sessionData.maxParticipants) * 100;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                {/* Navigation */}
                <Button
                    variant="ghost"
                    onClick={() => navigate('/agenda')}
                    className="mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour à l'agenda
                </Button>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contenu principal */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* En-tête */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                À venir
                                            </Badge>
                                            <Badge variant="outline">{sessionData.type}</Badge>
                                            <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                                {sessionData.level}
                                            </Badge>
                                        </div>

                                        <CardTitle className="text-3xl text-foreground mb-3">
                                            {sessionData.title}
                                        </CardTitle>

                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {sessionData.description}
                                        </p>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleShare}
                                        className="ml-4"
                                    >
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-5 h-5 text-gta-red" />
                                        <div>
                                            <div className="text-sm text-muted-foreground">Date</div>
                                            <div className="font-medium">
                                                {sessionData.date.toLocaleDateString('fr-FR')}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-5 h-5 text-gta-red" />
                                        <div>
                                            <div className="text-sm text-muted-foreground">Horaire</div>
                                            <div className="font-medium">
                                                {sessionData.startTime} - {sessionData.endTime}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-5 h-5 text-gta-red" />
                                        <div>
                                            <div className="text-sm text-muted-foreground">Lieu</div>
                                            <div className="font-medium">{sessionData.location}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <User className="w-5 h-5 text-gta-red" />
                                        <div>
                                            <div className="text-sm text-muted-foreground">Formateur</div>
                                            <div className="font-medium">{sessionData.instructor}</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contenu détaillé avec onglets */}
                        <Tabs defaultValue="overview" className="space-y-6">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                                <TabsTrigger value="program">Programme</TabsTrigger>
                                <TabsTrigger value="instructor">Formateur</TabsTrigger>
                                <TabsTrigger value="reviews">Avis</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Description détaillée</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {sessionData.longDescription}
                                        </p>
                                    </CardContent>
                                </Card>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center space-x-2">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <span>Objectifs</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {sessionData.objectives.map((objective, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm">{objective}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center space-x-2">
                                                <BookOpen className="w-5 h-5 text-blue-600" />
                                                <span>Prérequis</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {sessionData.prerequisites.map((prereq, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm">{prereq}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="program">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Programme de formation</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {sessionData.modules.map((module, index) => (
                                                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                                                    <div className="w-8 h-8 bg-gta-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-foreground">{module}</h4>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Award className="w-5 h-5 text-green-600" />
                                                <h4 className="font-semibold text-green-800 dark:text-green-200">
                                                    Certification
                                                </h4>
                                            </div>
                                            <p className="text-sm text-green-700 dark:text-green-300">
                                                {sessionData.certification}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="instructor">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-2">
                                            <User className="w-5 h-5" />
                                            <span>{sessionData.instructor}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {sessionData.instructorBio}
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="reviews">
                                <div className="space-y-4">
                                    {
                                        sessionData.reviews.length > 0 ?
                                            sessionData.reviews.map(
                                                (review) => (
                                                    <Card key={review.id}>
                                                        <CardContent className="p-4">
                                                            <div className="flex items-start justify-between mb-2">
                                                                <div>
                                                                    <div className="font-medium">{review.author}</div>
                                                                    <div className="flex items-center space-x-1 mt-1">
                                                                        {[...Array(review.rating)].map((_, i) => (
                                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="text-sm text-muted-foreground">
                                                                    {review.date.toLocaleDateString('fr-FR')}
                                                                </div>
                                                            </div>
                                                            <p className="text-muted-foreground">{review.comment}</p>
                                                        </CardContent>
                                                    </Card>
                                                ))
                                            :
                                            <>
                                                <div className="flex items-center justify-center text-5xl flex-col gap-3">
                                                    <TbMoodEmpty className="text-red-300" />
                                                    <p className="text-2xl text-foreground/75">Pas encore de rêvue</p>
                                                </div>
                                            </>}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Inscription */}
                        <Card className="sticky top-6">
                            <CardHeader>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gta-red mb-2">
                                        {sessionData.price.toLocaleString()} FCFA
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Paiement en plusieurs fois possible
                                    </p>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <Button
                                    onClick={handleRegisterClick}
                                    className="w-full bg-gta-red hover:bg-gta-red-light text-white py-3 text-lg"
                                    size="lg"
                                >
                                    S'inscrire maintenant
                                </Button>

                                {/* Barre de progression */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium">Inscriptions</span>
                                        <span className="text-sm text-muted-foreground">
                                            {sessionData.participants}/{sessionData.maxParticipants}
                                        </span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="bg-gta-red h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${progressPercentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        {sessionData.maxParticipants - sessionData.participants} places restantes
                                    </div>
                                </div>

                                <div className="text-center text-sm text-muted-foreground space-y-1">
                                    <p className="flex items-center gap-2"><GiCheckMark /> <span>Accès immédiat après paiement</span></p>
                                    <p className="flex items-center gap-2"><GiCheckMark /> <span> Support technique inclus</span></p>
                                    <p className="flex items-center gap-2"><GiCheckMark /> <span>Certificat de fin de formation</span></p>
                                    <p className="flex items-center gap-2"><GiCheckMark /> <span>Garantie satisfait ou remboursé</span></p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Informations pratiques */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Informations pratiques</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold flex items-center space-x-2 mb-2">
                                        <Users className="w-4 h-4" />
                                        <span>Participants</span>
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Groupe de {sessionData.maxParticipants} personnes maximum pour un apprentissage optimal
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold flex items-center space-x-2 mb-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Durée</span>
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        8 heures de formation intensive avec pauses
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold flex items-center space-x-2 mb-2">
                                        <BookOpen className="w-4 h-4" />
                                        <span>Matériel</span>
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Support de cours et exercices pratiques fournis
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <AuthModal
                open={authModalOpen}
                onOpenChange={setAuthModalOpen}
                onSuccess={handleAuthSuccess}
            />

            <PaymentModal
                open={paymentModalOpen}
                onOpenChange={setPaymentModalOpen}
                course={{
                    id: sessionData.id!,
                    title: sessionData.title,
                    description: sessionData.description,
                    price: sessionData.price,
                    duration: '8 heures',
                    level: sessionData.level,
                    certification: sessionData.certification,
                    modules: sessionData.modules,
                    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
                    featured: false,
                    category: 'web-dev' as const
                }}
                onSuccess={handlePaymentSuccess}
            />

            <ShareModal
                isOpen={shareModalOpen}
                onClose={() => setShareModalOpen(false)}
                title={sessionData.title}
                description={sessionData.description}
                url={window.location.href}
            />

            <Footer />
        </div>
    );
};

export default AgendaDetail;
