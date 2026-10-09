import { pageMeta } from '@/lib/site';
import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Contact Us',
  description: "Let's build something great. Start an engineering or AI automation project, or chat with Maya, our AI solutions advisor. Based in Riyadh, Saudi Arabia.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
