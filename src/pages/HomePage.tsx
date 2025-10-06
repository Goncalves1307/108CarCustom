import { Link } from "react-router-dom";
import {
  Lightbulb,
  Radio,
  Smartphone,
  Truck,
  Wrench,
  Cog,
  ChevronRight,
} from "lucide-react";
import AnimateOnScroll from "../utils/AnimateOnScroll";
import ServiceCard from "../components/ServiceCard";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  // Services data
  const services = [
    {
      id: "interior",
      title: "Iluminação Personalizada",
      description:
        "Transforma o  teu veículo com soluções de iluminação LED personalizadas ao teu estilo.",
      icon: <Lightbulb size={24} />,
      imageUrl: "/108Customs/gti.jpg",
      delay: "delay-100",
    },
    {
      id: "audio",
      title: "Sistemas de Áudio para Carros",
      description:
        "Desfruta de uma qualidade de som premium com instalações de sistemas de áudio personalizados – desde melhorias básicas até soluções para audiófilos.",
      icon: <Radio size={24} />,
      imageUrl:
        "https://images.unsplash.com/photo-1619459292840-2fd39e8bef26?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      delay: "delay-200",
    },
    {
      id: "infotainment",
      title: "CarPlay & Android Auto",
      description:
        "Mantém-te ligado na estrada com integração Apple CarPlay e Android Auto para uma experiência digital fluida.",
      icon: <Smartphone size={24} />,
      imageUrl: "/108Customs/carplay.jpeg",
      delay: "delay-300",
    },
    {
      id: "import",
      title: "Importação de Veículos",
      description:
        "Serviço de importação de veículos simplificado, com gestão de toda a documentação, regulamentos e logística de transporte.",
      icon: <Truck size={24} />,
      imageUrl: "/108Customs/scirocco.jpeg",
      delay: "delay-100",
    },
    {
      id: "maintenance",
      title: "Manutenção de Veículos",
      description:
        "Serviços de manutenção completos para garantir o melhor desempenho e fiabilidade do teu veículo.",
      icon: <Wrench size={24} />,
      imageUrl: "/108Customs/tsi.jpg",
      delay: "delay-200",
    },
    {
      id: "dsg",
      title: "Serviço de Transmissão DSG",
      description:
        "Manutenção e reparação especializada em transmissões DSG para mudanças suaves e maior longevidade da caixa de velocidades.",
      icon: <Cog size={24} />,
      imageUrl: "/108Customs/dsg.jpg",
      delay: "delay-300",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/108Customs/R.jpeg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              108Customs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Iluminação personalizada, áudio premium, upgrades de infotainment
              e serviços de manutenção especializados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="btn-primary">
                Explorar serviços
              </Link>
              <Link to="/contact" className="btn-outline">
                Pedir Orçamento
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <a
            href="#about"
            className="inline-block animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="section-title">Sobre Nós</h2>
                <p className="text-slate-700 mb-6">
                  Fundada com uma paixão pela excelência automóvel, a 108Customs
                  é especializada em personalizações premium e serviços de
                  manutenção para todas as marcas e modelos de veículos.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <ChevronRight
                      size={20}
                      className="text-blue-500 mt-1 shrink-0"
                    />
                    <p className="text-slate-700">Serviço especializado</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight
                      size={20}
                      className="text-blue-500 mt-1 shrink-0"
                    />
                    <p className="text-slate-700">Componentes premium</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight
                      size={20}
                      className="text-blue-500 mt-1 shrink-0"
                    />
                    <p className="text-slate-700">Soluções customizadas</p>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary">
                  Entre em contacto
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay="delay-200">
              <div className="relative flex justify-end">
                <div className="w-full md:w-3/5 relative">
                  <img
                    src="/108Customs/bm.jpeg"
                    alt="Automotive technician working"
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-blue-500 text-white p-4 md:p-5 rounded-lg shadow-lg">
                    <div className="text-xl md:text-3xl font-bold mb-1">
                      Bmw
                    </div>
                    <div className="text-xs md:text-sm uppercase">
                      Instalação luz cortesia
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto">
              Explore a nossa gama de serviços automóveis premium concebidos
              para melhorar o desempenho, a estética e a funcionalidade do seu
              veículo.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                delay={service.delay}
              />
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Ver todos os serviços
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default HomePage;
