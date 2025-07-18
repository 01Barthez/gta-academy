import React, { useReducer } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';
import { phoneNumber, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID_CONTACT } from '@/store/const/constante';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: 'Demande d\'information sur les formations',
  message: ''
};

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const ContactForm = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID_CONTACT, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log("Message envoyé avec succès !");
      }, (error) => {
        console.error(error);
      }
      );

    const message =
      `*Nouveau message de Contact : IFP GTA-ACADEMY* %0A` +
      `*Nom* : ${formData.firstName} ${formData.lastName} %0A` +
      `*Email* : ${formData.email} %0A` +
      `*Téléphone* : ${formData.phone} %0A` +
      `*Sujet* : ${formData.subject} %0A` +
      `*Message* : ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div id="form-writting" className="bg-card p-8 rounded-xl shadow-lg border w-full">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Envoyez-nous un message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Nom</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
            placeholder="+237 6XX XXX XXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Sujet</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
          >
            <option>Demande d'information sur les formations</option>
            <option>Inscription à une formation</option>
            <option>Partenariat entreprise</option>
            <option>Support technique</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-gta-red focus:border-transparent"
            placeholder="Décrivez votre demande en détail..."
          ></textarea>
        </div>

        <Button type="submit" className="w-full bg-gta-red hover:bg-gta-red-light text-white">
          <Send className="w-4 h-4 mr-2" />
          Envoyer via WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
