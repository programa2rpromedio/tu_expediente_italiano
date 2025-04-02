import Script from 'next/script';

export default function ThankYouGooglePixel() {
  return (
    <>
      <Script id="google-tag-lead" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16887742620/6QtsCPaDsrIaEJyB2vQ-'
          });
        `}
      </Script>
    </>
  );
}
