import { pageMeta } from '@/lib/site';
import LegalPage from '@/components/Legal/LegalPage';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How Safe Hands Digital collects, uses, and protects your personal information.',
  path: '/privacy',
});

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: [
      'When you contact us, request a proposal, subscribe to our newsletter, or use our tools (such as our AI assistant Maya), we may collect information you provide directly, including your name, email address, phone number, company name, and any details you share about your project.',
      'We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, device information, pages visited, and referring URLs, through cookies and similar technologies.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'We use the information we collect to respond to your enquiries, provide and improve our services, send you proposals and project updates, operate our website, and, where you have opted in, send you marketing communications.',
      'We may also use aggregated, non-identifying data to analyse website performance and improve the experience we offer.',
    ],
  },
  {
    heading: 'Cookies',
    body: [
      'Our website uses cookies to remember your preferences (such as your light or dark theme choice), keep the site secure, and understand how visitors use our pages. You can control or disable cookies through your browser settings, though some features may not function correctly if you do.',
    ],
  },
  {
    heading: 'Sharing Your Information',
    body: [
      'We do not sell your personal information. We may share it with trusted third-party service providers who help us operate our business, such as hosting, analytics, email, and communication platforms, and only to the extent necessary to provide their services to us.',
      'We may also disclose information where required by law or to protect our legal rights.',
    ],
  },
  {
    heading: 'Data Retention & Security',
    body: [
      'We retain your personal information only for as long as necessary to fulfil the purposes described in this policy or as required by applicable law. We apply reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'You may request access to, correction of, or deletion of your personal information, and you may withdraw your consent to marketing communications at any time. To exercise any of these rights, contact us at <a href="mailto:contact@safehandsksa.com">contact@safehandsksa.com</a>.',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'Our website and communications may contain links to third-party sites, including our social media profiles. We are not responsible for the privacy practices of those sites and encourage you to review their policies.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website after changes are posted constitutes acceptance of the revised policy.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'This Privacy Policy is governed by the laws of the Kingdom of Saudi Arabia.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="6 July 2026"
      intro="Safe Hands Digital (“we”, “us”, “our”) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have."
      sections={SECTIONS}
    />
  );
}
