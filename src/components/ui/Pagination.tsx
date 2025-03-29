import Link from 'next/link';

export default function Pagination({ link }: { link: string[] }) {
  return (
    <div className="max-w-screen-[1440px] mx-auto hidden h-[80px] items-center gap-2 px-4 text-xl sm:px-6 lg:flex lg:px-8">
      <span>
        <Link href="/">Inicio</Link>
      </span>
      {link.map((link) => (
        <div key={link}>
          <span> / </span>
          <span key={link}>
            <Link href={`/${link}`}>{link}</Link>
          </span>
        </div>
      ))}
    </div>
  );
}
