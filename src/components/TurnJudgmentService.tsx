import Image from 'next/image';

export default function TurnJudgmentService() {
  return (
    <section className="bg-neutral-extra-light flex flex-col justify-center px-[24px] py-[32px] lg:flex-row lg:gap-[150px] lg:p-[80]">
      <div className="flex max-w-[631px] flex-col gap-4 text-base lg:text-2xl">
        <p>
          En T.E.I ofrecemos el servicio de <strong>Juicios en Italia</strong> por imposibilidad de
          obtener el turno 
        </p>
        <p>
          Este servicio está apuntado a dar una solución a la problemática de la obtención de turnos
          en los consulados italianos para el trámite de ciudadanía.
        </p>
        <p>
          Nos encargamos de todo el proceso judicial en Italia y del armado del expediente en
          Argentina.
        </p>
        <p>
          La sentencia en estos procesos no es para que el consulado te asigne un turno sino que el
          Juez ordena el reconocimiento de la ciudadanía italiana.
        </p>
        <p>
          Estos procesos pueden abarcar a todo el núcleo familiar y tienen un plazo de resolución de
          8 a 18 meses
        </p>
      </div>
      <div className="mt-[20px] flex justify-center lg:mt-0">
        <Image
          src="/images/juicio_falta_turno_service.webp"
          alt="Ciudadanía en Italia"
          width={382}
          height={465}
          className="h-[250px] w-[312px] rounded-[20px] object-cover lg:h-[465px] lg:w-[382px]"
        />
      </div>
    </section>
  );
}
