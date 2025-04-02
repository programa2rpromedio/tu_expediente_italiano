'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ArrowDown from '../icon/ArrowDown';

export default function Navbar() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleShowNav = () => setShowNavMobile(!showNavMobile);

  return (
    <header className="bg-neutral-extra-light sm:shadow-lg py-4 overflow-y-visible fixed w-full z-100">
      <div className="max-w-screen-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="text-h2 text-foreground flex items-center gap-5" href="/">
              <span className="sr-only">Home</span>
              <Image
                src={'/logo.svg'}
                alt="Logo Tu expediente italiano"
                width={79}
                height={79}
                className="h-[42px] w-[42px] lg:h-[79px] lg:w-[79px]"
              />
              <h2 className="text-[16px] lg:text-[24px]">Tu Expediente Italiano</h2>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block z-100">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <Link
                    className="text-neutral-dark hover:text-neutral-dark/75 transition "
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>

                <li className="relative group ">
                  <Link
                    className="text-neutral-dark  transition hover:text-primary-dark flex items-center gap-2"
                    href="/servicios"
                  >
                    Servicios
                    <ArrowDown />
                  </Link>
                  <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-64 ">
                    <li className="hover:bg-neutral-100">
                      <Link href="/servicios/servicio/asesoria" className="block px-4 py-2">
                        Asesoría
                      </Link>
                    </li>
                    <li className="hover:bg-neutral-100">
                      <Link
                        href="/servicios/servicio/busqueda-genealogica"
                        className="block px-4 py-2"
                      >
                        Búsqueda genealógica
                      </Link>
                    </li>
                    <li className="hover:bg-neutral-100">
                      <Link
                        href="/servicios/servicio/ciudadania-en-argentina"
                        className="block px-4 py-2"
                      >
                        Ciudadanía en Argentina
                      </Link>
                    </li>
                    <li className="hover:bg-neutral-100">
                      <Link
                        href="/servicios/servicio/ciudadania-en-italia"
                        className="block px-4 py-2"
                      >
                        Ciudadanía en Italia
                      </Link>
                    </li>
                    <li className="hover:bg-neutral-100">
                      <Link href="/servicios/servicio/legales" className="block px-4 py-2">
                        Legales
                      </Link>
                    </li>
                    <li className="hover:bg-neutral-100">
                      <Link
                        href="/servicios/servicio/Juicio por falta de turno"
                        className="block px-4 py-2"
                      >
                        Juicio por falta de turno
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    className="text-neutral-dark hover:text-neutral-dark/75 transition "
                    href="/nosotros"
                  >
                    Nosotros
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-neutral-dark hover:text-neutral-dark/75 transition "
                    href="/contacto"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  className="text-neutral-dark-600 hover:text-neutral-dark-600/75 rounded-sm sm:bg-gray-100 p-2 transition hover:cursor-pointer"
                  onClick={handleShowNav}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`transition-all  ${showNavMobile ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-start gap-6 text-lg">
            <li>
              <Link
                className="text-neutral-dark hover:text-neutral-dark/75 transition "
                href="/"
                onClick={handleShowNav}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                className="text-neutral-dark hover:text-neutral-dark/75 transition "
                href="/servicios"
                onClick={handleShowNav}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-dark hover:text-neutral-dark/75 transition "
                href="/nosotros"
                onClick={handleShowNav}
              >
                Nosotros
              </Link>
            </li>

            <li>
              <Link
                className="text-neutral-dark hover:text-neutral-dark/75 transition "
                href="/contacto"
                onClick={handleShowNav}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
