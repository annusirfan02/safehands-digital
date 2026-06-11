import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Safe Hands Digital — AI-First Marketing',
  description: 'We bring results to brands. AI strategies, licensed experts, real results.',
};

// Set the saved theme BEFORE hydration to avoid any flash of the wrong theme.
const themeInit = `
  try {
    var t = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
