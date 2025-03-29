import Facebook from '@/components/icon/Facebook';
import Instagram from '@/components/icon/Instagram';
import LinkeIn from '@/components/icon/LinkeIn';
import Oficina from '@/components/icon/Oficina';
import Telefono from '@/components/icon/Telefono';
import Maps from '@/components/Maps';
import CardInfo from '@/components/ui/CardInfo';
import Form from '@/components/ui/Form';
const Contacto = () => {
  return (
    <div>
      <div className="h-auto bg-[#F6F6F6]">
        <h2 className="text-text-green pt-[62px] pb-[16px] text-center text-[28px] font-semibold">
          ¡Estás a un paso de tu Ciudadanía Italiana!
        </h2>
        <p className="text-text-green m-auto w-[350px] pb-[62px] text-center text-[24px]">
          Agendá una asesoría con nosotros y evaluamos tu caso
        </p>
      </div>

      <section className='-full relative flex items-center justify-center bg-[url("/bg_form.webp")] bg-cover bg-center lg:h-[648px]'>
        <div className="flex items-center justify-center gap-[195px] lg:h-[537px] lg:w-[1035px]">
          <Form />
        </div>
      </section>

      <div className="align-center flex flex-col justify-center gap-[24px] py-[80px] text-center">
        <h2 className="text-text-green text-[28px] font-bold">
          Seguinos en nuestras Redes Sociales
        </h2>

        <div className="flex justify-center gap-4">
          <Facebook color="#006C26" />
          <Instagram color="#006C26" />
          <LinkeIn color="#006C26" />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-[24px] pb-[80px]">
        <div className="w-[356px]">
          <CardInfo
            title="Nuestra oficina"
            description="Calle 48, Num 877. La Plata. 
          Buenos Aires, Argentina"
            icon={<Oficina className="text-primary-dark" />}
          />
        </div>
        <div className="w-[356px]">
          <CardInfo
            title="Contacto"
            description={`Teléfono: +54 9 1124084508 Mail: tuexpedienteitaliano@gmail.com`}
            icon={<Telefono className="text-primary-dark" />}
          />
        </div>
      </div>

      <Maps />
    </div>
  );
};
export default Contacto;
