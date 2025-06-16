
import { useToast } from '@/hooks/use-toast';

export const usePhoneCall = () => {
  const { toast } = useToast();

  const makeCall = (phoneNumber: string = "+225 XX XX XX XX") => {
    // Vérifier si le dispositif supporte les appels téléphoniques
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      // Sur mobile, ouvrir l'application téléphone
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Sur desktop, afficher les informations de contact
      toast({
        title: "Contactez-nous directement",
        description: `Appelez-nous au ${phoneNumber} ou utilisez Skype/WhatsApp`,
      });
      
      // Copier le numéro dans le presse-papiers si possible
      if (navigator.clipboard) {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          setTimeout(() => {
            toast({
              title: "Numéro copié !",
              description: "Le numéro de téléphone a été copié dans votre presse-papiers.",
            });
          }, 1000);
        }).catch(() => {
          // Silently fail if clipboard access is not available
        });
      }
    }
  };

  const openWhatsApp = (phoneNumber: string = "+225XXXXXXXX", message: string = "Bonjour, je souhaite en savoir plus sur vos formations personnalisées.") => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const openSkype = (skypeId: string = "academy.gta-it") => {
    window.open(`skype:${skypeId}?call`, '_blank');
  };

  return {
    makeCall,
    openWhatsApp,
    openSkype
  };
};
