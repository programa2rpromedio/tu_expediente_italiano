export default function BannerHome() {
  return (
    <section className='relative bg-[url(/banner.png)] bg-no-repeat bg-cover bg-center   h-[70vh]  '>
      <div className='absolute inset-0 bg-black/35 '></div>
      <div className='flex flex-col h-full justify-center items-center text-white relative  z-10'>
        <h1 className='text-h1'>Tu Expediente Italiano</h1>
        <strong className='text-h2'>La llave de tu ciudadanía</strong>
      </div>
    </section>
  );
}
