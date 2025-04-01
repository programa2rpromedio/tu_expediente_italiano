import AdviseService from '@/components/AdviseService';
import ArgentineCitizenship from '@/components/ArgentineCitizenship';
import GenealogicalSearch from '@/components/GenealogicalSearch';
import ItalianCitizenship from '@/components/ItalianCitizenship';
import LegalService from '@/components/LegalService';
import TurnJudgmentService from '@/components/TurnJudgmentService';
import { serviciosCategorias } from '@/data/servicios';

export async function generateStaticParams() {
  return await serviciosCategorias.map((servicio) => ({
    slug: servicio.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  switch (slug) {
    case 'asesoria':
      return (
        <div className="">
          <AdviseService />
        </div>
      );
    case 'busqueda-genealogica':
      return (
        <div className="">
          <GenealogicalSearch />
        </div>
      );
    case 'ciudadania-en-argentina':
      return (
        <div className="">
          <ArgentineCitizenship />
        </div>
      );
    case 'ciudadania-en-italia':
      return (
        <div className="">
          <ItalianCitizenship />
        </div>
      );
    case 'legales':
      return (
        <div className="">
          <LegalService />
        </div>
      );
    case 'juicio-por-falta-de-turno':
      return (
        <div className="">
          <TurnJudgmentService />
        </div>
      );
    default:
      return <div className="">Página no encontrada</div>;
  }
}
