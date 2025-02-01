'use client'

import { CircleUserRound } from "lucide-react";
import { useSession } from 'next-auth/react'
import { useState, useEffect } from "react";

export default function UserBanner() {
  const { data: session, status } = useSession();
  const [iconSize, setIconSize] = useState(72);

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth <= 640 ? 42 : 72);
    };

    updateIconSize(); // Ejecutar al inicio
    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []);

  return (
    <div className="md:h-28 py-4 md:py-0 space-y-3 md:space-y-0 md:bg-[linear-gradient(315deg,_rgba(253,119,49,1)_25%,_rgba(253,99,36,1)_50%,_rgba(253,87,31,1)_60%,_rgba(253,81,29,1)_62%,_rgba(253,67,29,1)_75%,_rgba(253,47,29,1)_87%,_rgba(253,29,29,1)_100%)] flex-shrink-0 flex flex-col justify-center md:flex-row justify-evenly  items-center md:shadow-sm">
      <div className="">
        <CircleUserRound className="md:text-white" size={iconSize} strokeWidth={1.4}/>
      </div>

      <div className="text-center md:text-left md:text-white md:w-3/5 space-y-1"> 
        {status === 'authenticated' && ( 
          <>
              { (( session.user.apellido.length + session.user.nombre.length ) >= 14 ) && (
                <div className="gap-0 text-lg font-bold truncate leading-5">
                <h4 className=""> {session.user.apellido}</h4>
                <h4 className=""> {session.user.nombre}</h4>
                </div>
              )}

              { (( session.user.apellido.length + session.user.nombre.length ) < 14 ) && (
                <h4 className="text-lg font-bold truncate"> {session.user.apellido} {session.user.nombre}</h4>
              )}
            <h5 className="text-sm truncate">{session.user.email}</h5>
          </>
        )}
      </div>
    </div>
  );
}