import Script from 'next/script';

export default function GooglePixel() {
  return (
    <>
      <Script
        id="google-tag"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BQE835MNHY"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BQE835MNHY');
        `}
      </Script>
    </>
  );
}
