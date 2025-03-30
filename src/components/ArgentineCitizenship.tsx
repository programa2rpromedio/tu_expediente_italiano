'use client';
import Image from 'next/image';
import DropdownService from './DropdownService';
import ItemListService from './ui/ItemListService';

export default function ArgentineCitizenship() {
  return (
    <>
      <div>
        <DropdownService
          titulo="Para los que quieren solicitar el reconocimiento de su ciudadanía: "
          open
        >
          <div className="flex flex-col justify-center gap-[20px] px-[24px] py-[32px] lg:flex-row lg:px-[78px] lg:py-[60px]">
            <div className="flex max-w-[500px] flex-col gap-[20px] text-base lg:text-2xl">
              <p>
                Desde T.E.I nos encargamos de armar expedientes integrales o anexos para todos los
                consulados del país tanto de ciudadanía ius sanguinis como ciudadanía por
                matrimonio. Los expedientes son el conjunto de documentos que se utilizan para la
                solicitud de la ciudadanía italiana. 
              </p>
              <p>
                Los expedientes completos son desde cero, desde el AVO hasta la persona que
                solicita. Los expedientes anexos, aparecen en caso que exista un expediente familiar
                dentro de un consulado italiano. 
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base lg:text-2xl">
              <p>Además, podemos gestionar documentación específica:</p>
              <ItemListService
                text="Buscamos actas en todas las comunas y parroquias de Italia."
                className="rounded-[10px]!"
              />
              <ItemListService
                text="Buscamos actas en todas las  parroquias y registros civiles de las provincias argentinas. "
                className="rounded-[10px]!"
              />
              <ItemListService
                text="Contamos con un equipo de traductores públicos, para la traducción de actas, sentencias, títulos universitarios, unión convivencial, entre otros."
                className="rounded-[10px]!"
              />
              <ItemListService
                text="Gestionamos el Certificado de No Naturalización. "
                className="rounded-[10px]!"
              />
              <ItemListService
                text="Gestionamos la Apostilla de La Haya.  "
                className="rounded-[10px]!"
              />
              <ItemListService
                text="Gestionamos legalizaciones de cualquier documento. "
                className="rounded-[10px]!"
              />
            </div>
          </div>
        </DropdownService>
        <DropdownService titulo="Para los ciudadanos italianos ">
          <div className="flex flex-col justify-center gap-[20px] px-[24px] py-[32px] lg:flex-row lg:px-[78px] lg:py-[60px]">
            <div className="flex max-w-[727px] flex-col gap-[20px] text-base lg:text-2xl">
              <p>
                Desde T.E.I nos encargamos de resolver los trámites de inscripción en el A.I.R.E
                (Registro de los Italianos Residentes en el Exterior) e igualmente de la
                actualización del anagrafe, en relación a cambios de domicilio, estado civil e
                incorporación de hijos menores de edad. 
              </p>
              <p>Gestionamos la solicitud o renovación del pasaporte italiano.</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/ciudadania_en_argentina.webp"
                alt="Ciudadania en Argentina"
                width={391}
                height={300}
                className="h-[250px] w-[312px] rounded-[10px] object-cover lg:h-[300px] lg:w-[391px]"
              />
            </div>
          </div>
        </DropdownService>
        <DropdownService titulo="Turnos consulares">
          <div className="flex flex-col justify-center gap-[20px] px-[24px] py-[32px] lg:flex-row lg:px-[78px] lg:py-[60px]">
            <div className="flex max-w-[727px] flex-col gap-[20px] text-base lg:text-2xl">
              <p>
                Intentamos el turno consular por vos, en los distintos consulados del país. Todos
                los consulados en Argentina tienen un sistema de turnos para presentarse a solicitar
                la ciudadanía o pasaporte. Los turnos se solicitan por el portal Prenotami.
                Necesitás un turno por persona mayor de edad.
              </p>
              <p>
                Actualmente, los turnos son la llave de tu ciudadanía italiana. Pregúntanos por los
                consulados activos, podemos intentarlo por vos. 
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/ciudadania_en_argentina_banner.webp"
                alt="Ciudadania en Argentina"
                width={391}
                height={300}
                className="h-[250px] w-[312px] rounded-[10px] object-cover object-top lg:h-[300px] lg:w-[391px]"
              />
            </div>
          </div>
        </DropdownService>
      </div>
    </>
  );
}
