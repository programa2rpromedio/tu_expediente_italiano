import Image from "next/image";

export default function ThanksForContacting() {
  return (
    <div className="sm:h-[365px] h-[223.0977783203125px] bg-[#F6F6F6] text-text-green text-center ">
      <div>
      <Image
          src={"/contact.png"}
          alt="Liston bandera italiana"
          width={462}
          height={97}
          className="w-[172px] md:w-[462px] m-auto sm:pt-[62px] pt-[40px] sm:pb-[32px] sm:pb-[40px] pb-[10px]" 
        />
        <p className="sm:text-[28px] text-[20px] sm:pb-[16px] pb-[10px]">¡Gracias por elegirnos!</p>
        <p className="sm:text-[24px] text-[16px]">
          Somos la llave de tu ciudadanía. <br />
          Si querés, podemos y lo hacemos.
        </p>
      </div>
    </div>
  );
}
