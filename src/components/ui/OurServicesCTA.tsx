import Button from './Button';

export default function OurServicesCTA() {
  return (
    <div className="pb-[62px] text-center">
      <h2 className="text-text-green mx-auto w-[250px] pb-[24px] text-[24px] font-bold sm:w-[390px] sm:text-[40px]">
        Nuestros servicios, garantizados.
      </h2>
      <p className="mx-auto w-[250px] text-center text-[18px] font-bold text-[#191919] sm:w-[390px] sm:text-[28px]">
        La llave de tu ciudadanía
      </p>
      <p className="w-auto pb-[24px] text-center text-[18px] font-bold text-[#191919] sm:text-[28px]">
        Si querés, podemos y lo hacemos
      </p>

      <Button
        style="primary"
        className="mx-auto w-[257px]! cursor-pointer"
        onClick={() => window.open('https://wa.me/5491124084508')}
      >
        Contactanos ahora
      </Button>
    </div>
  );
}
