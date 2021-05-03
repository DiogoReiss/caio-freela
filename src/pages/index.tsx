import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="its the landing page caio malaco">
    <section
      id="home"
      className="font-standard flex flex-col text-center w-full"
    >
      <div className="mt-12">
        <h1 className="text-azulEscuro font-bold text-6xl">
          AULA AO <strong className="text-laranja">VIVO</strong>
        </h1>
        <p className="text-laranja font-thin text-lg">toda segunda 20:30</p>
      </div>
      <p className="text-laranja text-2xl font-medium w-4/12 self-center mt-12">
        Toda semana uma aula ao vivo sobre Empreendedorismo com uma Loja
        Virtual.
      </p>
      <p className="text-azulEscuro text-2xl font-medium w-4/12 self-center mt-12">
        Cadastre-se gratuitamente para receber a notificação da próxima aula.
      </p>
      <input
        type="text"
        placeholder="DIGITE O SEU MELHOR EMAIL"
        className="w-4/12 h-14 border-2 rounded-md border-laranja font-medium text-lg italic text-cinzento text-center self-center mt-8"
      />
      <div className="flex w-4/12 h-20 rounded-md text-branco bg-azulEscuro text-center self-center justify-center mt-6 hover:bg-azulClaro transition duration-150 ease-in-out cursor-pointer">
        <a href="" className="font-bold text-4xl place-self-center">
          ME INSCREVER
        </a>
      </div>
      <p className="flex place-self-center text-cinzento font-standard italic w-auto">
        <img src="images/lock.svg" alt="cadeado" className="mr-2" />
        suas informações estão seguras
      </p>
    </section>
    <section className="font-standard flex flex-col text-center w-full mt-14">
      <h2 className="text-azulEscuro font-bold text-6xl">
        NOSSA <strong className="text-laranja">LIVES</strong>
      </h2>
      <p className="text-laranja font-medium text-3xl w-7/12 place-self-center mt-10">
        Toda Segunda-feira o Caiomull faz uma live no{" "}
        <a
          href="https://www.youtube.com/channel/UCDPA_dbPPP2iVdk4KdobWWA"
          className="text-azulEscuro font-bold hover:text-azulClaro transition duration-150 ease-in-out"
        >
          canal dele no Youtube
        </a>{" "}
        com temas desde a escolha do melhor produto para vender em sua loja
        virtual, sempre focando em gerar valor, engajamento e vendas, tudo isso
        de forma simplificada. A live fica no ar por 7 dias - sai do ar todo
        Domingo, 20:30h.
      </p>
    </section>
    <section
      id="about"
      className="font-standard flex flex-row mt-20 mb-14 place-content-around"
    >
      <div className="flex w-6/12 flex-col">
        <h3 className="text-azulEscuro font-bold text-6xl">
          SOBRE <strong className="text-laranja">MIM</strong>
        </h3>
        <h4 className="text-azulEscuro font-bold text-4xl mt-10">
          Caio Murilo
        </h4>
        <p className="text-laranja font-medium text-2xl w-11/12 mt-6">
          Depois de produzir <strong>mais de 1.000 bonés personalizados</strong>
          , montei uma loja virtual e criei <strong></strong>, hoje tenho uma
          loja física e sigo ampliando minhas vendas através do virtual, essa
          estratégia me trouxe <strong>mais de 6 dígitos de faturamento</strong>
          . Em Abril de 2021, eu decidi levar minha estratégia para mais pessoas
          e <strong>revelar todo o meu processo de vendas</strong>, geração de
          valor e reconhecimento de marca que transforma seguidores em clientes.
        </p>
        <div className="inline-flex">
          <a href="https://www.instagram.com/caiomull/" className="w-12">
            <img src="images/instagram1.png" alt="meu instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCDPA_dbPPP2iVdk4KdobWWA"
            className="w-12 ml-4"
          >
            <img src="images/youtube2.png" alt="meu youtube" />
          </a>
        </div>
      </div>
      <img src="images/profile.svg" alt="Caio Murilo" className="w-4/12" />
    </section>
  </Layout>
);

export default IndexPage;
