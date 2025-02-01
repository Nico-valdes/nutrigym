'use client'

import { useState, useEffect } from 'react'
import { Menu, X, User, UserCog, LogOut } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import NutriGymLogo from "../../public/NutriGym Logo.png"
import Image from 'next/image'
import { useRouter, usePathname } from "next/navigation"
import UserBanner from '../UserBanner'
import Options from '../account/adminPanel/Options'

const Header = () => {
  const { data: session, status } = useSession();
  
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {  
    const handleRouteChange = () => {
      const actualPath = pathname.split("/");
      const actualPage = actualPath[actualPath.length - 1];

      setPath(actualPage);
    };

    handleRouteChange();
  }, [pathname]);

  useEffect(() => {
    if (session?.user?.rol === 1) {
      setAdmin(true)
    }
  }, [session])

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (page) => {
    router.push(page);
  }

  return (
    <nav className="sticky w-[100%] top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <div onClick={() => handleClick("/")} className='cursor-pointer'>
              <Image
                className="w-[50px]"
                src={NutriGymLogo}
                alt="NutriGym Logo"
              />
            </div>
          </div>
          <div className="text-center hidden md:flex">
            <div className="flex items-baseline space-x-4 justify-center">
              <Link
                href="/rutinas"
                className="text-gray-600 px-3 py-1 text-sm font-medium relative group"
              >
                Rutinas
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F42F00] scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/dietas"
                className="text-gray-600 px-3 py-1 text-sm font-medium relative group"
              >
                Dietas
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F42F00] scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/crear-plan"
                className="text-gray-600 px-3 py-1 text-sm font-medium relative group"
              >
                Crear Plan
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F42F00] scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              {status === 'authenticated' && (
                <Link
                  href="/mi-plan"
                  className="text-gray-600 px-3 py-1 text-sm font-medium relative group"
                >
                  Mi Plan
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F42F00] scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-end">
              {status === 'authenticated' && (
                <>
                  <div className="flex items-center justify-end gap-2">
                    <div className="flex flex-col items-end">
                      <p className="text-gray-600 hover:text-[#F42F00] rounded-md text-sm font-medium transition-colors duration-300">
                        {session.user.nombre} {session.user.apellido}
                      </p>
                      <p className="text-gray-400 rounded-md text-xs font-small transition-colors">
                        { isAdmin ? 'Administrador' : 'Cliente'}
                      </p>
                    </div>

                    <div className="flex flex-col items-end space-y-1">
                      <>
                        {isAdmin && (
                          <Link
                            href= { "/cuenta/admin-panel" }
                            title="Cuenta"
                            className="text-[#F42F00] rounded-md text-[10px] font-medium hover:bg-[#EEE5] hover:shadow-md transition-all duration-300 px-1 py-0.5 w-full h-full flex items-center justify-center"
                          >
                            <User className="w-3 h-3" strokeWidth={2.5} />
                          </Link>

                        )}
                      </>
                      <button
                        onClick={() => signOut()}
                        title="Cerrar Sesión"
                        className="text-[#F42F00] rounded-md text-[10px] font-medium hover:bg-[#EEE5] hover:shadow-md transition-all duration-300 px-1 py-0.5 w-full h-full flex items-center justify-center"
                      >
                        <LogOut className={`${isAdmin ? "w-3 h-3" : "w-full h-full"}`} strokeWidth={2.5}/>
                      </button>
                    </div>

                  </div>
                </>
              )}
            {status === 'unauthenticated' && (
              <>
                <Link
                  href="/cuenta"
                  className="text-gray-600 hover:text-[#F42F00] rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  <User className="ml-2" size={18} />
                  <span className="ml-1">Cuenta</span>
                </Link>
              </>
            )}
          </div>
            
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#F42F00] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F42F00]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="space-y-1 pb-4 bg-white shadow-lg">
              {status === 'authenticated' && (
                <>
                  <UserBanner/>

                  <div className="w-[100%] py-2">
                    <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
                  </div>
                </>
              )}

              <div className='px-2 space-y-3 sm:px-3 flex flex-col justify-center items-center'>
                <Link
                  href="/rutinas"
                  className="block text-gray-600 hover:text-[#F42F00] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Rutinas
                </Link>
                <Link
                  href="/dietas"
                  className="text-gray-600 hover:text-[#F42F00] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Dietas
                </Link>
                <Link
                  href="/crear-plan"
                  className="text-gray-600 hover:text-[#F42F00] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Crear Plan
                </Link>
                {status === 'authenticated' && (
                  <Link
                    href="/mi-plan"
                    className="text-gray-600 hover:text-[#F42F00] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Mi Plan
                  </Link>
                )}
              </div>

              {path === "admin-panel" && (
                <div className="w-full">
                  <div className="w-[100%] py-2">
                    <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
                  </div>
                  
                  <Options/>
                </div>
              )}

                <div className="flex flex-col items-end space-y-2">
                  <div className="w-[100%] py-2">
                    <div className="w-[90%] justify-center h-[2px] bg-[#D2D2D255] mx-auto"></div>
                  </div>

                  {status === 'unauthenticated' && (
                    <Link
                      href="/cuenta"
                      className="text-gray-600 hover:text-[#F42F00] block px-3 py-2 rounded-md text-base font-medium transition-colors md:text-[#F42F00] md:rounded-md md:text-[10px] md:font-medium md:hover:bg-[#EEE5] md:hover:shadow-md md:transition-all duration-300 md:px-1 md:py-0.5 w-full h-full flex items-center justify-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="ml-2" size={24} />
                      <span className="ml-1">Cuenta</span>
                    </Link>
                  )}

                  {status === 'authenticated' && (
                    <>
                      <>
                        {isAdmin && (
                          <Link
                            href= { "/cuenta/admin-panel" }
                            title="Panel de administrador"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-[#F42F00] block px-3 py-2 rounded-md text-base font-medium transition-colors md:text-[#F42F00] md:rounded-md md:text-[10px] md:font-medium md:hover:bg-[#EEE5] md:hover:shadow-md md:transition-all duration-300 md:px-1 md:py-0.5 w-full h-full flex items-center justify-center gap-2"
                          >
                            <UserCog className="w-4 h-4 md:w-3 md:h-3" strokeWidth={2.5}/> Panel de administrador
                          </Link>
                        )}
                      </>
                      <button
                          onClick={() => signOut()}
                          title="Cerrar Sesión"
                          className="text-gray-600 hover:text-[#F42F00] block px-3 py-2 rounded-md text-base font-medium transition-colors md:text-[#F42F00] md:rounded-md md:text-[10px] md:font-medium md:hover:bg-[#EEE5] md:hover:shadow-md md:transition-all duration-300 md:px-1 md:py-0.5 w-full h-full flex items-center justify-center gap-2"
                        >
                          <LogOut className="w-4 h-4 md:w-3 md:h-3" strokeWidth={2.5}/> Cerrar sesión
                        </button>
                      </>
                  )}
                  

                  
                <div/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header;
