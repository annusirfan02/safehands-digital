import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact — Safe Hands Digital',
  description: "Let's build something great. Start your project or chat with Maya, our AI marketing strategist.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
