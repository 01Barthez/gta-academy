
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSubscriptionStore, type Course, type PaymentMethod } from '@/store/subscriptionStore';
import { Loader, CheckCircle, CreditCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course;
  onSuccess?: () => void;
}

const PaymentModal = ({ open, onOpenChange, course, onSuccess }: PaymentModalProps) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [step, setStep] = useState<'payment' | 'processing' | 'success'>('payment');
  
  const { paymentMethods, subscribeToCourse, isLoading } = useSubscriptionStore();

  const selectedMethod = paymentMethods.find(pm => pm.id === selectedPaymentMethod);
  const totalAmount = course.price + (selectedMethod?.fees || 0);

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une méthode de paiement",
        variant: "destructive"
      });
      return;
    }

    setStep('processing');
    
    try {
      const success = await subscribeToCourse(course.id, selectedPaymentMethod);
      if (success) {
        setStep('success');
        setTimeout(() => {
          onOpenChange(false);
          onSuccess?.();
          // Reset modal state
          setStep('payment');
          setSelectedPaymentMethod('');
        }, 2000);
      } else {
        setStep('payment');
      }
    } catch (error) {
      setStep('payment');
    }
  };

  const getPaymentIcon = (method: PaymentMethod) => {
    return (
      <div className="text-2xl mr-3">
        {method.icon}
      </div>
    );
  };

  const getPaymentInstructions = (method: PaymentMethod) => {
    const instructions = {
      'orange-money': 'Composez #150*1*1*MONTANT*DESTINATAIRE# puis validez avec votre code PIN',
      'mtn-money': 'Composez *126# puis suivez les instructions pour effectuer le transfert',
      'afriland-bank': 'Effectuez un virement vers le compte : 10005-00038-08943631001-89',
      'cash': 'Rendez-vous au centre de formation à Nkolfoulou base SATOM avec le montant exact'
    };
    return instructions[method.id as keyof typeof instructions] || '';
  };

  if (step === 'processing') {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <Loader className="h-16 w-16 animate-spin text-gta-red mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Traitement du paiement...</h3>
            <p className="text-muted-foreground">
              Veuillez patienter pendant que nous traitons votre paiement
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (step === 'success') {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Paiement réussi !</h3>
            <p className="text-muted-foreground">
              Votre inscription à {course.title} a été confirmée
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-gta-red" />
            <span>Finaliser votre inscription</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Résumé de la commande */}
          <div className="space-y-4">
            <h3 className="font-semibold">Résumé de votre commande</h3>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                    <p className="text-lg font-bold text-gta-red mt-2">
                      {course.price.toLocaleString()} FCFA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedMethod && (
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Prix de la formation</span>
                      <span>{course.price.toLocaleString()} FCFA</span>
                    </div>
                    {selectedMethod.fees > 0 && (
                      <div className="flex justify-between">
                        <span>Frais de traitement</span>
                        <span>{selectedMethod.fees.toLocaleString()} FCFA</span>
                      </div>
                    )}
                    <hr />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-gta-red">{totalAmount.toLocaleString()} FCFA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Méthodes de paiement */}
          <div className="space-y-4">
            <h3 className="font-semibold">Choisissez votre méthode de paiement</h3>
            
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className={`cursor-pointer transition-all hover:border-gta-red ${
                    selectedPaymentMethod === method.id 
                      ? 'border-gta-red bg-gta-red/5' 
                      : 'border-border'
                  }`}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      {getPaymentIcon(method)}
                      <div className="flex-1">
                        <h4 className="font-medium">{method.name}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        {method.fees > 0 && (
                          <p className="text-xs text-orange-600">
                            + {method.fees.toLocaleString()} FCFA de frais
                          </p>
                        )}
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPaymentMethod === method.id 
                          ? 'border-gta-red bg-gta-red' 
                          : 'border-gray-300'
                      }`}>
                        {selectedPaymentMethod === method.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedMethod && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Instructions de paiement</h4>
                  <p className="text-sm text-blue-800">
                    {getPaymentInstructions(selectedMethod)}
                  </p>
                </CardContent>
              </Card>
            )}

            <Button
              onClick={handlePayment}
              disabled={!selectedPaymentMethod || isLoading}
              className="w-full bg-gta-red hover:bg-gta-red-light text-white py-3"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin mr-2" />
                  Traitement en cours...
                </>
              ) : (
                `Payer ${totalAmount.toLocaleString()} FCFA`
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
