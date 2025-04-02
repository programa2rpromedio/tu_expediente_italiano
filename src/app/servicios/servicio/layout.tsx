'use client';

import AdviseCTA from '@/components/ui/AdviseCTA';
import HeroService from '@/components/ui/HeroService';
import Pagination from '@/components/ui/Pagination';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

export default function ServicioLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const params = useParams();

  console.log(pathname, params.slug);
  console.log(pathname.split('/'));

  return (
    <main className="min-h-screen pt-[96px]">
      <Pagination link={pathname.split('/').slice(1)} />
      <HeroService slug={params.slug as string} />
      {children}
      <AdviseCTA />
    </main>
  );
}
