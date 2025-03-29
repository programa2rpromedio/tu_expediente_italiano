'use client';
import TestimonialsSection from '@/components/TestimonialsSection';
import CardService from '@/components/ui/CardService';
import OurServicesCTA from '@/components/ui/OurServicesCTA';
import { serviciosCategorias } from '@/data/servicios';

export default function Servicios() {
  return (
    <main className="min-h-screen">
      <div className="flex h-[80px] items-center px-[40px]">
        <span>Inicio</span> <span> / </span> <span>Servicios</span>
      </div>
      <div className="bg-neutral-extra-light flex h-[144px] items-center justify-center py-[40px] text-center">
        <h1 className="text-primary-regular text-h2">Nuestros Servicios</h1>
      </div>

      <section className="grid grid-cols-1 justify-items-center gap-[20px] gap-y-[40px] py-[80px] md:grid-cols-2 lg:grid-cols-3">
        {serviciosCategorias.map((service) => (
          <CardService
            key={service.id}
            imgSrc={service.imagen}
            alt={service.nombre}
            title={service.nombre}
          />
        ))}
      </section>
      <section className="hidden py-[80px] md:block">
        <div className="mb-[48px] text-center">
          <h2 className="text-primary-regular text-h2">Testimonios de nuestros clientes</h2>
        </div>
        <TestimonialsSection className="pt-[0px]! pb-[80px]!" />
      </section>
      <section>
        <OurServicesCTA />
      </section>
    </main>
  );
}
