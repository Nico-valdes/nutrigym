'use client'

import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MainChatBot from "./chatbot/components/MainChat";
import { SessionProvider } from 'next-auth/react';
import { StateProvider } from "@/components/stateContext";
import { MetaDataProvider } from "@/components/layout/metaDataContext";


const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children, session }) {

  return (
    <MetaDataProvider>
      <SessionProvider session={session}>
        <html lang="es">
          <body
            className={twMerge(dm_sans.className, "antialiased bg-white")}
          >
            <StateProvider>
              <Header/>
              {children}
            </StateProvider>
            
            <MainChatBot />
            <Footer />
          </body>
        </html>
      </SessionProvider>
    </MetaDataProvider>
  );
}
