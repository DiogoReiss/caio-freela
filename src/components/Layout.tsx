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
      <meta
        name="description"
        content="Depois de produzir mais de 1.000 bonés 
personalizados, montei uma loja virtual e criei 
minha própria marca, hoje tenho uma loja física e sigo ampliando minhas vendas através do virtual, essa estratégia me trouxe mais de 6 dígitos de faturamento. Em Abril de 2021, eu decidi levar minha estratégia para mais pessoas e revelar todo o meu processo de vendas, geração de valor e reconhecimento de marca que transforma seguidores em clientes."
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <nav className="bg-azulEscuro flex h-14">
      <section
        id="social icons"
        className="inline-flex w-3/12 self-center ml-4"
      >
        <a href="https://www.youtube.com/channel/UCDPA_dbPPP2iVdk4KdobWWA">
          <img
            src="/images/logo-do-youtube.png"
            alt="logomarca do youtube"
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.instagram.com/caiomull/">
          <img
            src="/images/simbolo-do-instagram.png"
            alt="logomarca do instagram"
            className="w-8 h-8 ml-4"
          />
        </a>
      </section>
      <section
        id="page references"
        className="flex justify-end self-center text-standard w-full mr-4 text-branco font-bold text-lg"
      >
        <a href="#home" className="mr-4 hover:text-laranja">
          INICIO
        </a>
        <a href="#about" className="hover:text-laranja">
          SOBRE MIM
        </a>
      </section>
    </nav>
    {children}
    <footer className="bg-azulEscuro flex justify-items-center justify-center text-center h-12">
      <p className="place-self-center font-standard italic font-light text-branco">
        Copyright © 2021 Caiomull - Todos os direitos reservados.
      </p>
    </footer>
  </div>
);

export default Layout;
