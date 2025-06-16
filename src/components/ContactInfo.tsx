
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+237 690 419 336", "+237 670 456 700"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["academy@gta-it.com"]
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Nkolfoulou base SATOM", "Yaoundé, Cameroun"]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 8h-16h", "Sam: 8h-14h"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;
        return (
          <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gta-red rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">{info.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm mb-1">{detail}</p>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactInfo;
