export default function BannerHome() {
  return (
    <section className='relative h-[70vh]'>
      <video
        autoPlay
        muted
        loop
        className='absolute inset-0 w-full h-full object-cover object-top'
      >
        <source
          src='/video_banner.webm'
          type='video/mp4'
        />
      </video>
      <div className='absolute inset-0 bg-black/45 '></div>
      <div className='flex flex-col h-full justify-center items-center text-white relative  z-10'>
        <h1 className='text-2xl lg:text-h1'>Tu Expediente Italiano</h1>
        <strong className='text-2xl lg:text-h2'>
          La llave de tu ciudadanía
        </strong>
      </div>
    </section>
  );
}
