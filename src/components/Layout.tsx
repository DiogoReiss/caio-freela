import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "CaioMull" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <nav className="bg-blue-500">
      <a href="https://www.youtube.com/channel/UCDPA_dbPPP2iVdk4KdobWWA">
        <img
          src="/images/logo-do-youtube.png"
          alt="logomarca do youtube"
          className="w-12"
        />
      </a>
      <a href="https://www.instagram.com/caiomull/">
        <img
          src="/images/simbolo-do-instagram.png"
          alt="logomarca do instagram"
          className="w-12"
        />
      </a>
      <a href="#home">INICIO</a>
      <a href="#about-me">SOBRE MIM</a>
    </nav>
    {children}
    <footer>
      <p>Copyright © 2021 Caiomull - Todos os direitos reservados.</p>
    </footer>
  </div>
);

export default Layout;
