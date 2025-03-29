import AdviseService from '@/components/AdviseService';
import { serviciosCategorias } from '@/data/servicios';

export async function generateStaticParams() {
  return serviciosCategorias.map((servicio) => ({
    slug: servicio.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="min-h-screen">
      <AdviseService />
    </div>
  );
}
