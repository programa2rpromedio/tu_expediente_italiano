import Image from 'next/image';
import ItemListService from './ui/ItemListService';

export default function GenealogicalSearch() {
  return (
    <section className="bg-neutral-extra-light flex flex-col justify-center px-[24px] py-[32px] lg:flex-row lg:gap-[150px] lg:p-[80]">
      <div>
        <div className="flex flex-col gap-[26px] text-base lg:mt-[27px] lg:text-2xl">
          <strong className="">En el universo de la Ciudadanía Italiana puede ser que:</strong>
          <ItemListService text="a) No sepas quién es el italiano" />
          <ItemListService text="b) Sepas quién es, pero no dónde nació exactamente en Italia" />
          <ItemListService text="c) No sepas dónde falleció o si se casó en Argentina o en Italia" />
        </div>
        <div className="mt-[27px] max-w-[630px] text-base lg:text-2xl">
          <p>
            Para todos estos casos y cualquiera en el que no tengas documentación o información,
            existe la <strong> búsqueda genealógica.</strong>
          </p>
          <p className="mt-[27px]">
            ¿Qué es? Es investigar en nuestra historia familiar para llegar a los datos que nos
            faltan.  Desde T.E.I contamos con un equipo de búsqueda capacitado. Es necesario iniciar
            con una asesoría previa para evaluar el caso en particular.
          </p>
          <p className="mt-[27px]">
            <strong>¡Iniciá tu búsqueda! ¡El momento es ahora!</strong>
          </p>
        </div>
      </div>
      <div className="mt-[32] min-[400px]:mx-auto lg:mt-0">
        <Image
          src="/images/busqueda_genealogica.webp"
          alt="Servicio Asesoria"
          width={382}
          height={554}
          className="h-[250px] w-[312px] rounded-[20px] object-cover lg:h-[554px] lg:w-[382px]"
        />
      </div>
    </section>
  );
}
