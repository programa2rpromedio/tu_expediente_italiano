import Image from 'next/image';

export default function AdviseService() {
  return (
    <section className="bg-neutral-extra-light flex flex-col justify-center px-[24px] py-[32px] lg:flex-row lg:p-[80] 2xl:gap-[150px]">
      <div>
        <div className="max-w-[630px] text-base lg:text-2xl">
          <p>
            <strong>¿Dudas sobre tu proceso?</strong> De acuerdo a nuestra experiencia, uno de los
            errores más grandes en el proceso de la obtención de la ciudadanía italiana es no
            tomarse el tiempo necesario en una asesoría profesional.
          </p>
          <p>
            Nuestro procedimiento interno es iniciar por la asesoría previa en cualquier caso, ya
            que cada caso es particular. Muchas veces nos preguntan para qué sirve.
          </p>
          <p className="mt-[20px]">Es una instancia de suma importancia para:</p>
        </div>
        <div className="mt-[16px] flex flex-col gap-[26px] lg:mt-[27px]">
          <div className="bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] text-base min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] lg:text-2xl">
            <p>Definir el árbol genealógico y su antepasado italiano</p>
          </div>
          <div className="bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] text-base min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] lg:text-2xl">
            <p>Ver la viabilidad de la ciudadanía.</p>
          </div>
          <div className="bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] text-base min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] lg:text-2xl">
            <p>Estudiar los documentos o información que se tiene.</p>
          </div>
          <div className="bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] text-base min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] lg:text-2xl">
            <p>
              Descartar las posibles naturalizaciones, juicios por vía materna o rectificaciones.
            </p>
          </div>
          <div className="bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] text-base min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] lg:text-2xl">
            <p>Responder dudas respecto a la ciudadanía.</p>
          </div>
          <div className="bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] text-base min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] lg:text-2xl">
            <p>
              Organizar un paso a paso detallado para que la ciudadanía se obtenga lo más rápido
              posible.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[32] min-[400px]:mx-auto lg:mt-0">
        <Image
          src="/images/asesoria_service.webp"
          alt="Servicio Asesoria"
          width={382}
          height={554}
          className="h-[250px] w-[312px] rounded-[20px] object-cover lg:h-[554px] lg:w-[382px]"
        />
      </div>
    </section>
  );
}
