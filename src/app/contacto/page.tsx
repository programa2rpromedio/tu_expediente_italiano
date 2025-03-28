import CardInfo from "@/components/CardInfo";
import Form from "@/components/Form";
import Facebook from "@/components/icon/Facebook";
import Instagram from "@/components/icon/Instagram";
import LinkeIn from "@/components/icon/LinkeIn";
import Oficina from "@/components/icon/Oficina";
import Telefono from "@/components/icon/Telefono";
import Maps from "@/components/Maps";
import React from "react";

const Contacto = () => {
  return (
    <div>
      <div className="bg-[#F6F6F6] h-auto">

      <h2 className="text-text-green text-[28px] font-semibold text-center pt-[62px] pb-[16px]">¡Estás a un paso de tu Ciudadanía Italiana!</h2>
      <p className="text-[24px] text-text-green text-center m-auto w-[350px] pb-[62px]">Agendá una asesoría con nosotros y evaluamos tu caso</p>

      </div>

      <section className='relative -full lg:h-[648px] bg-[url("/bg_form.webp")] bg-cover bg-center flex justify-center items-center'>
        <div className="lg:w-[1035px] lg:h-[537px] flex items-center justify-center gap-[195px]">
          <Form />
        </div>
      </section>

      <div className="flex flex-col justify-center align-center text-center gap-[24px] py-[80px]">
        <h2 className="text-[28px] text-text-green font-bold">
          Seguinos en nuestras Redes Sociales
        </h2>

        <div className="flex justify-center gap-4">
          <Facebook color="#006C26" />
          <Instagram color="#006C26" />
          <LinkeIn color="#006C26" />
        </div>
      </div>

      <div className="  gap-[24px]  flex flex-row justify-center pb-[80px]">
        <div className=" w-[356px] ">
          <CardInfo
            title="Nuestra oficina"
            description="Calle 48, Num 877. La Plata. 
          Buenos Aires, Argentina"
            icon={<Oficina className="text-primary-dark" />}
          />
        </div>
        <div className=" w-[356px] ">
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
