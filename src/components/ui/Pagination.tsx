import Link from 'next/link';

export default function Pagination({ link }: { link: string[] }) {
  const formatLink = (text: string) => {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="max-w-screen-[1440px] mx-auto hidden h-[80px] items-center gap-2 px-4 text-xl sm:px-6 lg:flex lg:px-8">
      <span>
        <Link href="/" className="hover:text-primary-dark">
          Inicio
        </Link>
      </span>
      {link.map((link) => {
        if (link === 'servicios' || link === 'inicio') {
          return (
            <div key={link}>
              <span> / </span>
              <span key={link}>
                <Link href={`/${link}`} className="hover:text-primary-dark">
                  {formatLink(link)}
                </Link>
              </span>
            </div>
          );
        }
        if (link !== 'servicios' && link !== 'inicio' && link !== 'servicio') {
          return (
            <div key={link}>
              <span> / </span>
              <span key={link}>
                <Link href={`#`} className="hover:text-primary-dark">
                  {formatLink(link)}
                </Link>
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
