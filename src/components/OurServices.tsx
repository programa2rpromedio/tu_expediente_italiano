import CardCarrousel from './CardCarrousel';

export default function OurServices() {
  return (
    <div className='flex flex-col items-center justify-center lg:py-[80px]'>
      <div className='lg:mb-[41px]'>
        <h2 className='text-primary-regular text-h2'>Nuestros servicios</h2>
      </div>
      <div className=''>
        <CardCarrousel
          alt='img'
          imgSrc='/images/asesoria.webp'
          title='Asesoria'
        />
      </div>
    </div>
  );
}
