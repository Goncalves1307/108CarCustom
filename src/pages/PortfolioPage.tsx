import { useState } from "react";
import AnimateOnScroll from "../utils/AnimateOnScroll";
import PortfolioItem from "../components/PortfolioItem";
import CallToAction from "../components/CallToAction";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Dados dos projetos do portfólio
  const portfolioItems = [
    {
      id: "golfR_manutencao",
      title: "Golf R Manutenção e upgrades.",
      category: "Manutenção",
      description:
        "Manutenção completa e upgrades de performance em um Golf R, incluindo troca de pastilhas de freio, bobinas de ignição, velas, instalação de intake esportivo e turbo muffler delete para melhora no fluxo de ar e resposta do turbo.",
      imageUrl: "/108Customs/R/R_.jpg",
      beforeImage: "/108Customs/R/bobines_velas.jpg",
      afterImage: "/108Customs/R/motor.jpg",
      delay: "delay-100",
    },
    {
      id: "golf5gti",
      title: "Golf 5 GTI - Manutenção da Caixa DSG",
      category: "Transmissão",
      description:
        "Manutenção completa em um Golf 5 GTI, incluindo troca de óleo, filtros e serviço na caixa DSG.",

      imageUrl: "/108Customs/Gti/gti.jpg",
      beforeImage: "/108Customs/Gti/gti3.jpg",
      afterImage: "/108Customs/Gti/gti2.jpg",
      delay: "delay-100",
    },
    {
      id: "golf5gti_2",
      title:
        "Golf 5 GTI - Instalação de Rádio 2-DIN com CarPlay e Volante com Patilhas",
      category: "infotainment",
      description:
        "Instalação de um sistema multimédia 2-DIN com suporte a CarPlay, juntamente com a substituição do volante original por um modelo com patilhas de mudança, oferecendo maior conectividade e uma condução mais desportiva.",
      imageUrl: "/108Customs/Gti/volante2.jpg",
      beforeImage: "/108Customs/Gti/volante.jpg",
      afterImage: "/108Customs/Gti/radio.jpg",
      delay: "delay-100",
    },
  ];

  // Filtrar itens com base no filtro ativo
  const filteblueItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <>
      {/* Secção Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(/108Customs/R.jpeg)`,
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O Nosso Portfólio
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Explora os nossos projetos concluídos, que demonstram a nossa
              experiência e compromisso com a qualidade na personalização e
              manutenção automóvel.
            </p>
          </div>
        </div>
      </section>

      {/* Secção de Portfólio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Botões de Filtro */}
          <AnimateOnScroll className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todos os Projetos
            </button>
            <button
              onClick={() => setActiveFilter("interior")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "interior"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Iluminação Interior
            </button>
            <button
              onClick={() => setActiveFilter("audio")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "audio"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Sistemas de Áudio
            </button>
            <button
              onClick={() => setActiveFilter("infotainment")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "infotainment"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Infotainment
            </button>
            <button
              onClick={() => setActiveFilter("Transmissão")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "Transmissão"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Transmissão
            </button>
            <button
              onClick={() => setActiveFilter("Importação")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "Importação"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Importação de Veículos
            </button>
            <button
              onClick={() => setActiveFilter("Manutenção")}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === "Manutenção"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Manutenção
            </button>
          </AnimateOnScroll>

          {/* Grelha de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteblueItems.map((item) => (
              <PortfolioItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                imageUrl={item.imageUrl}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                delay={item.delay}
              />
            ))}
          </div>

          {/* Estado Vazio */}
          {filteblueItems.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-slate-700 mb-6">
                De momento não existem projetos nesta categoria. Por favor,
                volta mais tarde ou experimenta outro filtro.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="btn-primary"
              >
                Ver Todos os Projetos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Secção de Chamada para Ação */}
      <CallToAction />
    </>
  );
};

export default PortfolioPage;
