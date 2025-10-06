import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";
import AnimateOnScroll from "../utils/AnimateOnScroll";
const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(/108Customs/R.jpeg)",
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contacte-nos
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Tem dúvidas sobre os nossos serviços? Pronto para transformar o
              seu veículo? Fale com a nossa equipa de especialistas automóvel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimateOnScroll>
                <h2 className="section-title mb-12">Entre em Contacto</h2>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white p-3 rounded-full shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                      <p className="text-slate-700 mb-1">
                        Ligue-nos diretamente
                      </p>
                      <a
                        href="tel:+351912345678"
                        className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                      >
                        +351 912 345 678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white p-3 rounded-full shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-slate-700 mb-1">Envie-nos um email</p>
                      <a
                        href="mailto:info@autoelite.pt"
                        className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                      >
                        108carcustom@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white p-3 rounded-full shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Localização
                      </h3>
                      <address className="not-italic text-slate-700">
                        terra do
                        <br />
                        caralho mais longe, 0000-000
                        <br />
                        Portugal
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white p-3 rounded-full shrink-0">
                      <Clock size={20} />
                    </div>
                    {/* <div>
                      <h3 className="text-lg font-semibold mb-1">Horário</h3>
                      <p className="text-slate-700 mb-1">
                        Horário de funcionamento
                      </p>
                      <div className="text-slate-700">
                        <p>Segunda - Sexta: 9am - 6pm</p>
                        <p>Sábado: 10am - 2pm</p>
                        <p>Domingo: Encerrado</p>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/108carcustom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-700"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visite a Nossa Oficina
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto">
              Localizada no caralho mais velho, a nossa oficina está equipada
              com tecnologia de ponta para prestar serviços e personalizações
              automóveis.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2676.8495678120885!2d-8.454935909745503!3d41.10399076297834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1745347463733!5m2!1spt-PT!2spt"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map to AutoElite workshop"
              ></iframe>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Branding */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Car size={36} className="text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-bold">108 CarCustom</h2>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              O seu parceiro de confiança em serviços e personalizações
              automóveis de excelência.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+351912345678" className="btn-primary">
                Ligue Agora
              </a>
              <a href="mailto:108carcustom@gmail.com" className="btn-outline">
                Envie Email
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
