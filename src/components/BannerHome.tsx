export default function BannerHome() {
  return (
    <section className="relative h-[70vh]">
      <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover object-top">
        <source src="/video_banner.webm" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center">
        <h1 className="lg:text-h1 text-2xl">Tu Expediente Italiano</h1>
        <strong className="lg:text-h2 text-2xl">La llave de tu ciudadanía</strong>
      </div>
    </section>
  );
}
