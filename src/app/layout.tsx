import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import type { Metadata } from 'next';
import { Amaranth, DM_Sans } from 'next/font/google';
import './globals.css';

const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-amaranth',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tu expediente italiano',
  description:
    'Somos un equipo de profesionales (Ingenieros, licenciados, abogados, traductores y gestores) especializados en la transmisión de la ciudadanía italiana.',
  openGraph: {
    title: 'Tu expediente italiano',
    description:
      'Somos un equipo de profesionales (Ingenieros, licenciados, abogados, traductores y gestores) especializados en la transmisión de la ciudadanía italiana.',
    url: 'https://tuexpedienteitaliano.com',
    siteName: 'Tu expediente italiano',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Tu expediente italiano',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu expediente italiano',
    description:
      'Somos un equipo de profesionales (Ingenieros, licenciados, abogados, traductores y gestores) especializados en la transmisión de la ciudadanía italiana.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${amaranth.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
