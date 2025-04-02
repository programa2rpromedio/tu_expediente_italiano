'use client';

import Script from 'next/script';
import React from 'react';

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
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
    window.fbq('init', '1247233122785089');
    window.fbq('track', 'Lead');

        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1247233122785089&ev=PageView&noscript=1"
          />
        </noscript>
        <Script id="google-tag-lead" strategy="beforeInteractive">
          {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16887742620/6QtsCPaDsrIaEJyB2vQ-'
          });
        `}
        </Script>
      </head>
      {children}
    </>
  );
}
