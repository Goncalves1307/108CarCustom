import {
  Lightbulb,
  Radio,
  Smartphone,
  Truck,
  Wrench,
  Cog,
  Check,
} from "lucide-react";
import AnimateOnScroll from "../utils/AnimateOnScroll";
import CallToAction from "../components/CallToAction";

const ServicesPage = () => {
  return (
    <>
      {/* Secção Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(108Customs/R.jpeg)",
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Os Nossos Serviços
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Serviços premium de personalização e manutenção automóvel,
              pensados para melhorar o desempenho, estética e funcionalidade do
              seu veículo.
            </p>
          </div>
        </div>
      </section>

      {/* Secção Serviços */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Iluminação Interior Personalizada */}
          <div id="interior" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <AnimateOnScroll>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-500">
                      <Lightbulb size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">
                      Iluminação Interior Personalizada
                    </h2>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Transforme o interior do seu veículo com as nossas soluções
                    de iluminação personalizadas. Desde iluminação ambiente
                    subtil a sistemas reativos à música, criamos experiências
                    visuais únicas ao seu estilo.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Sistemas LED de iluminação ambiente",
                      "Iluminação personalizada na zona dos pés",
                      "Iluminação nos painéis das portas e acabamentos",
                      "Sistemas de luzes reativos à música",
                      "Opções RGB totalmente personalizáveis",
                      "Controlo por smartphone",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          size={20}
                          className="text-blue-500 mt-1 shrink-0"
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay="delay-200">
                <img
                  src="/108Customs/footwell.jpeg"
                  alt="Iluminação Interior Personalizada"
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-center"
                />
              </AnimateOnScroll>
            </div>
          </div>

          {/* Sistemas de Áudio */}
          <div id="audio" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <AnimateOnScroll className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1619459292840-2fd39e8bef26?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sistemas de Áudio"
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-center"
                />
              </AnimateOnScroll>

              <AnimateOnScroll delay="delay-200" className="order-1 md:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-500">
                      <Radio size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">Sistemas de Áudio</h2>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Descubra uma experiência sonora de alta qualidade com as
                    nossas instalações de áudio personalizadas. Desde graves
                    poderosos a som cristalino, adaptamos o sistema às suas
                    preferências.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Atualizações de colunas premium",
                      "Instalação de subwoofers",
                      "Sistemas de amplificação",
                      "Soluções de isolamento acústico",
                      "Integrações e caixas personalizadas",
                      "Processadores de sinal digital (DSP)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          size={20}
                          className="text-blue-500 mt-1 shrink-0"
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* CarPlay & Android Auto */}
          <div id="infotainment" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <AnimateOnScroll>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-500">
                      <Smartphone size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">
                      CarPlay & Android Auto
                    </h2>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Mantenha-se conectado enquanto conduz com integração total
                    do seu smartphone. Instalamos CarPlay e Android Auto em
                    qualquer viatura, mesmo sem suporte de fábrica.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Instalações com e sem fios de CarPlay",
                      "Integração de Android Auto",
                      "Atualização de unidades com ecrã tátil",
                      "Integração com aparência OEM",
                      "Instalação de câmaras de marcha-atrás",
                      "Adaptação de controlos no volante",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          size={20}
                          className="text-blue-500 mt-1 shrink-0"
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay="delay-200">
                <img
                  src="/108Customs/carplay.jpeg"
                  alt="CarPlay e Android Auto"
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-center"
                />
              </AnimateOnScroll>
            </div>
          </div>

          {/* Importação de Viaturas */}
          <div id="import" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <AnimateOnScroll className="order-2 md:order-1">
                <img
                  src="/108Customs/scirocco.jpeg"
                  alt="Importação de Viaturas"
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-center"
                />
              </AnimateOnScroll>

              <AnimateOnScroll delay="delay-200" className="order-1 md:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-500">
                      <Truck size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">
                      Importação de Viaturas
                    </h2>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Tratamos de todo o processo de importação da sua viatura
                    para Portugal. Desde a pesquisa ao transporte, alfândega e
                    legalização, garantimos um processo simples e sem
                    complicações.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Pesquisa e inspeção do veículo",
                      "Gestão de envio internacional",
                      "Desalfandegamento e documentação",
                      "Modificações para conformidade legal",
                      "Registo e legalização",
                      "Cálculo de impostos e apoio legal",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          size={20}
                          className="text-blue-500 mt-1 shrink-0"
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Manutenção de Viaturas */}
          <div id="maintenance" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <AnimateOnScroll>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-500">
                      <Wrench size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">
                      Manutenção de Viaturas
                    </h2>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Mantenha o seu carro em perfeitas condições com os nossos
                    serviços completos de manutenção. Diagnósticos precisos e
                    peças de qualidade garantem segurança e desempenho.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Revisões regulares",
                      "Diagnóstico e resolução de problemas",
                      "Serviço e reparação do sistema de travagem",
                      "Otimização do desempenho do motor",
                      "Manutenção da suspensão e direção",
                      "Diagnóstico e reparo de sistemas elétricos",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          size={20}
                          className="text-blue-500 mt-1 shrink-0"
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay="delay-200">
                <img
                  src="/108Customs/tsi.jpg"
                  alt="Manutenção de Viaturas"
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-center"
                />
              </AnimateOnScroll>
            </div>
          </div>

          {/* Serviço de Transmissão DSG */}
          <div id="dsg" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll className="order-2 md:order-1">
                <img
                  src="/108Customs/dsg.jpg"
                  alt="Serviço de Transmissão DSG"
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-center"
                />
              </AnimateOnScroll>

              <AnimateOnScroll delay="delay-200" className="order-1 md:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-500">
                      <Cog size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">
                      Serviço de Transmissão DSG
                    </h2>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Somos especialistas na manutenção e reparação de
                    transmissões DSG. Os nossos técnicos garantem desempenho
                    eficiente e prolongam a vida útil do sistema de embraiagem
                    automática.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Troca de óleo e filtro DSG",
                      "Diagnóstico e reparação da unidade mecatrónica",
                      "Inspeção e substituição do conjunto de embraiagem",
                      "Reposição de aprendizagem adaptativa",
                      "Atualizações de software e calibração",
                      "Revisões completas da transmissão DSG",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          size={20}
                          className="text-blue-500 mt-1 shrink-0"
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Secção Processo */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Nosso Processo
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto">
              Seguimos um processo estruturado para garantir que cada projeto
              cumpre os nossos padrões de qualidade e supera as suas
              expectativas.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consulta",
                desc: "Iniciamos com uma consulta detalhada para compreender as suas necessidades, preferências e orçamento.",
              },
              {
                title: "Planeamento e Design",
                desc: "Criamos um plano detalhado, escolhendo os componentes e técnicas ideais para o seu veículo.",
              },
              {
                title: "Implementação",
                desc: "Executamos o projeto com precisão, cuidado e qualidade.",
              },
              {
                title: "Controlo de Qualidade",
                desc: "Cada projeto passa por testes rigorosos antes da entrega final, garantindo a perfeição.",
              },
            ].map((step, idx) => (
              <AnimateOnScroll key={idx} delay={`delay-${(idx + 1) * 100}`}>
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-6 left-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-3">{step.title}</h3>
                  <p className="text-slate-700">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Secção CTA */}
      <CallToAction />
    </>
  );
};

export default ServicesPage;
