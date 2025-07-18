
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSubscriptionStore } from '@/store/subscriptionStore';
import { useAuthStore } from '@/store/authStore';
import AuthModal from '@/components/AuthModal';
import PaymentModal from '@/components/PaymentModal';
import { Clock, Users, Award, CheckCircle, ArrowLeft, Star, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { GiCheckMark } from 'react-icons/gi';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const { isAuthenticated, user } = useAuthStore();
  const { getCourseById, fetchCourses, isLoading } = useSubscriptionStore();

  const course = getCourseById(courseId || '');

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleEnrollClick = () => {
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
      description: "Bienvenue dans votre nouvelle formation !",
    });
    navigate('/dashboard');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gta-red"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cours introuvable</h1>
          <Button onClick={() => navigate('/training/certified')}>
            Retour aux formations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Button
          variant="ghost"
          onClick={() => navigate('/training/certified')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux formations
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* En-tête du cours */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {course.featured && (
                  <Badge className="bg-gta-red text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Populaire
                  </Badge>
                )}
                <Badge variant="outline">{course.level}</Badge>
              </div>

              <h1 className="text-4xl font-bold text-foreground">{course.title}</h1>
              <p className="text-xl text-muted-foreground">{course.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gta-red" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gta-red" />
                  <span>Places limitées</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-gta-red" />
                  <span>Certification incluse</span>
                </div>
              </div>
            </div>

            {/* Image du cours */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Modules de formation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-gta-red" />
                  <span>Programme de formation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-gta-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-gta-red" />
                  <span>Certification</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{course.certification}</h4>
                    <p className="text-muted-foreground">
                      À la fin de cette formation, vous recevrez une certification officielle
                      de GTA Academy, reconnue par nos partenaires entreprises.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prix et inscription */}
            <Card className="sticky top-6">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gta-red mb-2">
                    {course.price.toLocaleString()} FCFA
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Paiement en plusieurs fois possible
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleEnrollClick}
                  className="w-full bg-gta-red hover:bg-gta-red-light text-white py-3 text-lg"
                  size="lg"
                >
                  {isAuthenticated ? "S'inscrire maintenant" : "Se connecter et s'inscrire"}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><GiCheckMark /> <span>Accès immédiat après paiement</span></p>
                  <p className="flex items-center gap-2"><GiCheckMark /> <span> Support technique inclus</span></p>
                  <p className="flex items-center gap-2"><GiCheckMark /> <span>Certificat de fin de formation</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Informations supplémentaires */}
            <Card>
              <CardHeader>
                <CardTitle>Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">Durée</h4>
                  <p className="text-sm text-muted-foreground">{course.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Niveau requis</h4>
                  <p className="text-sm text-muted-foreground">{course.level}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Format</h4>
                  <p className="text-sm text-muted-foreground">Formation mixte (présentiel + en ligne)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Support</h4>
                  <p className="text-sm text-muted-foreground">Accompagnement personnalisé</p>
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
        course={course}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CourseDetailPage;
