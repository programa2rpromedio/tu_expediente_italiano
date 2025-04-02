import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import type { Metadata } from 'next';
import { Amaranth, DM_Sans } from 'next/font/google';
import Script from 'next/script';
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
    <html lang="es">
      <head>
        {/* Metaetiqueta de Dominio */}
        <meta name="facebook-domain-verification" content="w6evhv5ij1tk3iwuuky6sho138i5nm" />
        {/* Carga de Scripts */}
        <Script id="facebook-pixel" strategy="beforeInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '1247233122785089');
          fbq('track', 'PageView');
        `}
        </Script>
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BQE835MNHY"
        />
        <Script id="google-analytics-config" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BQE835MNHY');
        `}
        </Script>
      </head>

      <body className={`${amaranth.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
