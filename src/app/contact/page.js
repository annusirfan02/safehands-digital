import { pageMeta } from '@/lib/site';
import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Contact Us',
  description: "Let's build something great. Start your project or chat with Maya, our AI marketing strategist. Based in Riyadh, Saudi Arabia.",
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
