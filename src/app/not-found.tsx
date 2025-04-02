'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="h-[467px]  bg-[#DCF7D3] relative overflow-hidden">
      <div className="absolute top-[40px] right-0">
        <Image
          src="/franjas.svg"
          alt="franjas italia"
          width={350}
          height={20}
          style={{ transform: 'rotate(180deg)' }}
          className=" mt-[-10px] sm:w-[350px] w-[194px]"
        />
      </div>

      {/* CENTRAL CONTENT */}
      <div className="flex flex-col text-center sm:pt-[120px] pt-[150px]">
        <h1 className="sm:text-[80px] text-[56px] font-semibold text-text-green  leading-none">
          404
        </h1>
        <h2 className="sm:text-[32px] text-[20px] text-text-green sm:pt-[15px] pt-[8px]  leading-none">
          Página no encontrada
        </h2>
        <div className="m-auto sm:pt-[50px] pt-[30px]">
          <Button
            className="bg-text-green text-white w-[150px] sm:w-[222px] h-[37px] text-[16px] sm:text-[24px] whitespace-nowrap cursor-pointer"
            onClick={() => router.push('/')}
          >
            Volver al inicio
          </Button>
        </div>
      </div>

      <div className="absolute bottom-[51px] left-0">
        <Image
          src="/franjas.svg"
          alt="franjas italia"
          width={350}
          height={20}
          className="mb-[-10px] sm:w-[350px] w-[194px]"
        />
      </div>
    </div>
  );
};

export default Custom404;
