
import React, { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useSubscriptionStore } from '@/store/subscriptionStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  BookOpen, 
  Calendar, 
  Award, 
  LogOut, 
  Settings,
  Play,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuthStore();
  const { courses, subscriptions, fetchCourses, getUserSubscriptions } = useSubscriptionStore();

  const userSubscriptions = user ? getUserSubscriptions(user.id) : [];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
    fetchCourses();
  }, [isAuthenticated, navigate, fetchCourses]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getSubscribedCourses = () => {
    return userSubscriptions.map(sub => {
      const course = courses.find(c => c.id === sub.courseId);
      return course ? { ...course, subscription: sub } : null;
    }).filter(Boolean);
  };

  const subscribedCourses = getSubscribedCourses();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* En-tête du dashboard */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback className="bg-gta-red text-white text-lg">
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">
                Bonjour, {user.firstName} {user.lastName}
              </h1>
              <p className="text-muted-foreground">
                Bienvenue sur votre espace personnel GTA Academy
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-gta-red" />
                <div>
                  <p className="text-2xl font-bold">{subscribedCourses.length}</p>
                  <p className="text-sm text-muted-foreground">Formations actives</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {subscribedCourses.filter(c => c?.subscription?.progress === 100).length}
                  </p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {subscribedCourses.reduce((acc, c) => acc + (c?.subscription?.progress || 0), 0) / subscribedCourses.length || 0}%
                  </p>
                  <p className="text-sm text-muted-foreground">Progression moyenne</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {new Date(user.createdAt).toLocaleDateString('fr-FR', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-muted-foreground">Membre depuis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mes formations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mes formations</h2>
              <Button 
                onClick={() => navigate('/training/certified')}
                variant="outline"
              >
                Découvrir plus de formations
              </Button>
            </div>

            {subscribedCourses.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Aucune formation active</h3>
                  <p className="text-muted-foreground mb-4">
                    Commencez votre parcours d'apprentissage dès aujourd'hui
                  </p>
                  <Button 
                    onClick={() => navigate('/training/certified')}
                    className="bg-gta-red hover:bg-gta-red-light"
                  >
                    Explorer les formations
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {subscribedCourses.map((course) => (
                  <Card key={course?.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={course?.image}
                          alt={course?.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">{course?.title}</h3>
                            <Badge 
                              className={
                                course?.subscription?.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }
                            >
                              {course?.subscription?.status === 'active' ? 'Actif' : 'En attente'}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {course?.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="text-sm text-muted-foreground">
                              Progression: {course?.subscription?.progress || 0}%
                            </span>
                            <Progress 
                              value={course?.subscription?.progress || 0} 
                              className="flex-1 max-w-48"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Début: {new Date(course?.subscription?.startDate || '').toLocaleDateString('fr-FR')}</span>
                              <span>•</span>
                              <span>{course?.duration}</span>
                            </div>
                            
                            <Button size="sm" className="bg-gta-red hover:bg-gta-red-light">
                              <Play className="w-4 h-4 mr-2" />
                              Continuer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prochains événements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gta-red" />
                  <span>Prochains événements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-sm">Webinaire - Tendances Tech 2025</p>
                  <p className="text-xs text-muted-foreground">20 Janvier 2025 - 14h00</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-sm">Session Q&A - Développement Web</p>
                  <p className="text-xs text-muted-foreground">25 Janvier 2025 - 16h00</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-sm">Salon des métiers du numérique</p>
                  <p className="text-xs text-muted-foreground">30 Janvier 2025 - 09h00</p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-gta-red" />
                  <span>Mes certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {subscribedCourses.filter(c => c?.subscription?.progress === 100).length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Aucune certification obtenue pour le moment
                  </p>
                ) : (
                  <div className="space-y-3">
                    {subscribedCourses
                      .filter(c => c?.subscription?.progress === 100)
                      .map((course) => (
                        <div key={course?.id} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <div>
                            <p className="font-medium text-sm">{course?.certification}</p>
                            <p className="text-xs text-muted-foreground">
                              Obtenue le {new Date(course?.subscription?.endDate || '').toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Contacter le support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Centre d'aide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
