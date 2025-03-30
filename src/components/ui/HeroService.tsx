'use client';
import { serviciosCategorias } from '@/data/servicios';

export default function HeroService({ slug }: { slug: string }) {
  const service = serviciosCategorias.find((service) => service.slug === slug);

  const image = service?.banner ?? (service?.imagen as string);

  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className="flex h-[104px] w-full items-center justify-center bg-black/30 bg-cover bg-center bg-blend-overlay lg:h-[233px] lg:bg-[0px_500px]"
    >
      <h1 className="text-neutral-extra-light xs:text-[16px] lg:text-[63px]">{service?.nombre}</h1>
    </div>
  );
}
