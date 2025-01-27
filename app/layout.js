"use client"
import BarraNavegacion from "../src/components/navbar"
import "./globals.css";
// 1. import `NextUIProvider` component
import { Providers } from "./providers";


export default function RootLayout({ children }) {

  return (
    <html className='dark'>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body>
        <Providers>
          <BarraNavegacion />
          {children}
        </Providers>
      </body>
    </html>
  );
}
