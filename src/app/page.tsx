import Contactanos from "@/components/Contactanos";
import Footer from "@/components/Footer";
import Inicio from "@/components/Inicio";
import Navbar from "@/components/Navbar";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
          <title>Cell Solutions</title>
          <meta name="description" content="Página principal de Cell Solutions"/>
      </Head>
      <main
        className="flex items-center flex-col min-h-screen h-fit w-full bg-dark text-white"
      >
        <Navbar/>
        <section id='inicio' className="">
          <Inicio />
        </section>
        <section id="servicios" className="">
          <Servicios />
        </section>
        <section id="nosotros" className="">
          <Nosotros />
        </section>
        <section id="contactanos" className="">
          <Contactanos />
        </section>
        <Footer/>
      </main>
    </>
  );
}
