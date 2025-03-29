import CardService from '@/components/ui/CardService';
import { serviciosCategorias } from '@/data/servicios';

export default function Servicios() {
  return (
    <main className='min-h-screen'>
      <div className='h-[144px] flex items-center px-[40px]'>
        <span>Inicio</span> <span> / </span> <span>Servicios</span>
      </div>
      <div className='h-[144px] py-[40px] text-center bg-neutral-extra-light flex items-center justify-center'>
        <h1 className='text-primary-regular text-h2'>Nuestros Servicios</h1>
      </div>

      <section className='py-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[40px] justify-items-center'>
        {serviciosCategorias.map((service) => (
          <CardService
            key={service.id}
            imgSrc={service.imagen}
            alt={service.nombre}
            title={service.nombre}
          />
        ))}
      </section>
      <section className='py-[80px]'>
        <div className='mb-[48px] text-center'>
          <h2 className='text-primary-regular text-h2'>
            Testimonios de nuestros clientes
          </h2>
        </div>
      </section>
    </main>
  );
}
