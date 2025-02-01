'use client'
import React from 'react';
import NutriGymLogo from "../../public/NutriGym Logo.png"
import Image from 'next/image'
import { Mail, Instagram } from 'lucide-react'
import Link from 'next/link'


const Footer = () => {
  return (
    <>
      <footer className="flex shadow-lg flex-col justify-center items-center bg-[#222222] border-t-2 border-white shadow-black p-2.5 sm:px-12 text-[#edf2efbb]">
        <div className="mt-5 w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col items-center text-center">
            <div className="w-24">
              <Link href="/">
                <Image
                  className="w-full"
                    src={NutriGymLogo}
                    alt="NutriGym Logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start text-center">
            <h3 className="text-xl mb-2">COMPAÑÍA</h3>
            <nav>
              <ul className="list-none p-0">
                <li className="mb-1">
                  <Link href="/sobre-nosotros" className="text-[#edf2ef88] py-1 font-medium relative group hover:text-[#edf2ef]">
                    Acerca de NutriGym
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#edf2ef] scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col justify-start text-center">
            <h3 className="text-xl mb-2">LEGAL</h3>
            <nav>
              <ul className="list-none p-0">
                <li className="mb-1">
                <Link href="terminos-y-condiciones-de-uso" className="text-[#edf2ef88] py-1 font-medium relative group hover:text-[#edf2ef]">
                  Términos y condiciones de uso
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#edf2ef] scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
                </li>
                <li className="mb-1">
                <Link href="politicas-de-privacidad" className="text-[#edf2ef88] py-1 font-medium relative group hover:text-[#edf2ef]">
                  Políticas de Privacidad
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#edf2ef] scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col justify-start text-center">
            <h3 className="text-xl mb-2">CONTACTO</h3>
            <nav>
              <ul className="list-none p-0 grid grid-cols-2 gap-2 md:grid-cols-1 w-[40%] m-auto">
                <li className="mb-1 flex justify-center">
                  <Link href="mailto:nutrigym.official@gmail.com" target="_blank" className="text-[#edf2ef88] hover:text-[#edf2ef] text-2xl">
                    <Mail size={26}/>
                  </Link>
                </li>
                <li className="mb-1 flex justify-center">
                  <Link href="https://www.instagram.com/nutrigym/" target="_blank" className="text-[#edf2ef88] hover:text-[#edf2ef] text-2xl">
                    <Instagram size={26}/>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-4 w-full text-center text-[#edf2ef88]">
          <p className="text-gray-300 my-2">Copyright © 2025 NutriGym</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;