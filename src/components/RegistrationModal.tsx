
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { ArrowRight, Sparkles, CheckCircle, User, Mail } from "lucide-react";

type RegistrationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormData = {
  nom: string;
  email: string;
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({ open, onOpenChange }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Simulation d'une inscription réussie avec une notification améliorée
    setTimeout(() => {
      alert(
        " Félicitations ! Votre inscription à GTA Academy a été confirmée !\n\n" +
        ` Nom : ${data.nom}\n📧 Email : ${data.email}\n\n` +
        " Vous recevrez bientôt un email avec les détails de votre parcours de formation.\n" +
        " Préparez-vous à transformer votre carrière technologique !"
      );
      reset();
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full rounded-3xl bg-gradient-to-br from-background via-background to-background/95 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/95 border-2 border-gta-red/20 dark:border-gta-red-light/20 shadow-2xl">
        <DialogHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gta-red to-gta-red-light rounded-full flex items-center justify-center mb-4 shadow-xl animate-pulse">
            <Sparkles className="w-8 h-8 text-white animate-bounce" />
          </div>
          <DialogTitle className="text-3xl font-black bg-gradient-to-r from-gta-red via-gta-red-light to-rose-500 dark:from-gta-red-light dark:via-gta-red dark:to-rose-400 bg-clip-text text-transparent">
            Rejoignez GTA Academy
          </DialogTitle>
          <p className="text-muted-foreground mt-2 text-lg font-medium">
            Transformez votre passion tech en carrière réussie
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gta-red/60 dark:text-gta-red-light/60 group-focus-within:text-gta-red dark:group-focus-within:text-gta-red-light transition-colors" />
              </div>
              <input
                {...register("nom", { required: "Votre nom est requis pour personnaliser votre formation" })}
                type="text"
                placeholder="Votre nom complet"
                className={`w-full pl-12 pr-4 py-4 rounded-xl bg-muted/50 dark:bg-muted/30 border-2 outline-none focus:ring-4 focus:ring-gta-red/20 dark:focus:ring-gta-red-light/20 transition-all duration-300 text-lg font-medium placeholder:text-muted-foreground/60 ${
                  errors.nom 
                    ? 'border-destructive focus:border-destructive' 
                    : 'border-border focus:border-gta-red dark:focus:border-gta-red-light'
                }`}
              />
              {errors.nom && (
                <div className="flex items-center space-x-2 mt-2 text-destructive">
                  <span className="text-sm font-medium">{errors.nom.message}</span>
                </div>
              )}
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gta-red/60 dark:text-gta-red-light/60 group-focus-within:text-gta-red dark:group-focus-within:text-gta-red-light transition-colors" />
              </div>
              <input
                {...register("email", { 
                  required: "Votre email est nécessaire pour vous contacter", 
                  pattern: { 
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: "Veuillez entrer un email valide" 
                  }
                })}
                type="email"
                placeholder="votre@email.com"
                className={`w-full pl-12 pr-4 py-4 rounded-xl bg-muted/50 dark:bg-muted/30 border-2 outline-none focus:ring-4 focus:ring-gta-red/20 dark:focus:ring-gta-red-light/20 transition-all duration-300 text-lg font-medium placeholder:text-muted-foreground/60 ${
                  errors.email 
                    ? 'border-destructive focus:border-destructive' 
                    : 'border-border focus:border-gta-red dark:focus:border-gta-red-light'
                }`}
              />
              {errors.email && (
                <div className="flex items-center space-x-2 mt-2 text-destructive">
                  <span className="text-sm font-medium">{errors.email.message}</span>
                </div>
              )}
            </div>
          </div>

          {/* Benefits preview */}
          <div className="bg-gradient-to-r from-gta-red/5 to-gta-red-light/5 dark:from-gta-red/10 dark:to-gta-red-light/10 rounded-xl p-4 border border-gta-red/10 dark:border-gta-red-light/10">
            <h4 className="font-bold text-gta-red dark:text-gta-red-light mb-2 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Ce qui vous attend :
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gta-red rounded-full"></div>
                <span>Formations pratiques et certifiantes</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gta-red rounded-full"></div>
                <span>Accompagnement personnalisé</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gta-red rounded-full"></div>
                <span>Opportunités de carrière</span>
              </li>
            </ul>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full sm:w-auto border-2 hover:bg-muted/50 font-semibold py-3"
              >
                Plus tard
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              className="w-full sm:flex-1 bg-gradient-to-r from-gta-red to-gta-red-light hover:from-gta-red-dark hover:to-gta-red text-white font-black py-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Inscription en cours...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
                  Commencer mon parcours
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
