import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Car,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold mb-4"
            >
              <Car size={28} className="text-blue-500" />
              <span>108Customs</span>
            </Link>
            <p className="text-slate-300 mb-6">
              Especialistas em personalização automóvel premium e serviços de
              manutenção. Qualidade garantida e satisfação do cliente
              assegurada.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/108carcustom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ligações Rápidas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Pedir Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Os Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#interior"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Iluminação Interior Personalizada
                </Link>
              </li>
              <li>
                <Link
                  to="/services#audio"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Sistemas de Áudio para Carros
                </Link>
              </li>
              <li>
                <Link
                  to="/services#infotainment"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  CarPlay & Android Auto
                </Link>
              </li>
              <li>
                <Link
                  to="/services#import"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Importação de Veículos
                </Link>
              </li>
              <li>
                <Link
                  to="/services#maintenance"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Manutenção de Veículos
                </Link>
              </li>
              <li>
                <Link
                  to="/services#dsg"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Serviço de Transmissão DSG
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacta-nos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 mt-1 shrink-0" />
                <span className="text-slate-300">
                  Terrinha do caralho mais velho
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <a
                  href="tel:+351912345678"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  +351 912 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <a
                  href="mailto:108customs@gmail.com"
                  className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
                >
                  108customs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-slate-400">
          <p>&copy; {currentYear} 108Customs. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
