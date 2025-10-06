import { Link } from "react-router-dom";
import AnimateOnScroll from "../utils/AnimateOnScroll";

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-slate-900 opacity-90 z-0"></div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/108Customs/footwell.jpeg)",
          filter: "brightness(0.3)",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Transformar o Teu Veículo?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Quer estejas à procura de melhorar o sistema de som, adicionar
            iluminação personalizada ou necessites de manutenção especializada,
            estamos sempre prontos para superar as tuas expectativas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Solicita o Teu Orçamento Gratuito
            </Link>
            <Link to="/portfolio" className="btn-outline">
              Vê o Nosso Trabalho
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CallToAction;
