
import React from 'react';
import { CreditCard, Phone, Mail, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VacationTrainingPayment = () => {
  return (
    <div className="animate-fade-in">
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center space-x-3">
            <CreditCard className="w-8 h-8" />
            <span>MODE DE PAIEMENTS</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 md:p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold">Sur le compte bancaire Afriland First Bank - GTA</h4>
                  <p className="text-gray-600">10005-00038-08943631001-89</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold">En cash au secrétariat du centre de formation</h4>
                  <p className="text-gray-600">Sis à Nkolfoulou base SATOM, entrée panneau 50</p>
                  <p className="text-gray-600">De 11h à 16h</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold">Paiement possible par OM/MOMO</h4>
                </div>
              </div>
            </div>

            <div className="bg-gta-red text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Phone className="w-6 h-6" />
                <span>Nos contacts</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Tél : 690 419 336 / 670 456 700 / 679 790 400</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>Email : academy@gta-it.com</span>
                </div>
              </div>

              <Button
                className="w-full mt-6 bg-white text-gta-red hover:bg-gray-100"
                size="lg"
                onClick={() => window.location.href = `/registration`}
              >
                S'inscrire maintenant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VacationTrainingPayment;
