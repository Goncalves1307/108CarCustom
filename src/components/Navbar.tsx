import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Car, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setServicesDropdown(false);
    }
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setServicesDropdown(false);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdown(!servicesDropdown);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-slate-900 text-white shadow-lg py-3"
      : "bg-transparent text-white py-5"
  }`;

  const isActive = (path: string) => location.pathname === path;

  const activeClasses = "text-blue-500 font-semibold";
  const inactiveClasses = "hover:text-blue-500 transition-colors duration-300";

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={closeMenus}
          >
            <Car size={28} className="text-blue-500" />
            <span>108Customs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={isActive("/") ? activeClasses : inactiveClasses}
            >
              Início
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center gap-1 ${
                  isActive("/services") ? activeClasses : inactiveClasses
                }`}
                onClick={toggleServicesDropdown}
              >
                Serviços <ChevronDown size={16} />
              </button>
              <div
                className={`absolute bg-white text-slate-900 rounded-md shadow-lg py-2 mt-2 w-56 transition-all duration-200 ${
                  servicesDropdown
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="py-1 px-4 hover:bg-slate-100">
                  <Link
                    to="/services#interior"
                    className="block py-2"
                    onClick={closeMenus}
                  >
                    Iluminação Interior Personalizada
                  </Link>
                </div>
                <div className="py-1 px-4 hover:bg-slate-100">
                  <Link
                    to="/services#audio"
                    className="block py-2"
                    onClick={closeMenus}
                  >
                    Sistemas de Áudio para Carros
                  </Link>
                </div>
                <div className="py-1 px-4 hover:bg-slate-100">
                  <Link
                    to="/services#infotainment"
                    className="block py-2"
                    onClick={closeMenus}
                  >
                    CarPlay e Android Auto
                  </Link>
                </div>
                <div className="py-1 px-4 hover:bg-slate-100">
                  <Link
                    to="/services#import"
                    className="block py-2"
                    onClick={closeMenus}
                  >
                    Importação de Veículos
                  </Link>
                </div>
                <div className="py-1 px-4 hover:bg-slate-100">
                  <Link
                    to="/services#maintenance"
                    className="block py-2"
                    onClick={closeMenus}
                  >
                    Manutenção de Veículos
                  </Link>
                </div>
                <div className="py-1 px-4 hover:bg-slate-100">
                  <Link
                    to="/services#dsg"
                    className="block py-2"
                    onClick={closeMenus}
                  >
                    Serviço de Transmissão DSG
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/portfolio"
              className={
                isActive("/portfolio") ? activeClasses : inactiveClasses
              }
            >
              Portefólio
            </Link>

            <Link
              to="/contact"
              className={isActive("/contact") ? activeClasses : inactiveClasses}
            >
              Contacto
            </Link>

            <Link to="/contact" className="btn-primary ml-4">
              Pedir Orçamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`py-2 ${isActive("/") ? activeClasses : ""}`}
              onClick={closeMenus}
            >
              Início
            </Link>

            <div>
              <button
                onClick={toggleServicesDropdown}
                className={`flex items-center justify-between w-full py-2 ${
                  isActive("/services") ? activeClasses : ""
                }`}
              >
                <span>Serviços</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 pl-4 space-y-2 overflow-hidden ${
                  servicesDropdown
                    ? "max-h-screen opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  to="/services#interior"
                  className="block py-1"
                  onClick={closeMenus}
                >
                  Iluminação Interior Personalizada
                </Link>
                <Link
                  to="/services#audio"
                  className="block py-1"
                  onClick={closeMenus}
                >
                  Sistemas de Áudio para Carros
                </Link>
                <Link
                  to="/services#infotainment"
                  className="block py-1"
                  onClick={closeMenus}
                >
                  CarPlay e Android Auto
                </Link>
                <Link
                  to="/services#import"
                  className="block py-1"
                  onClick={closeMenus}
                >
                  Importação de Veículos
                </Link>
                <Link
                  to="/services#maintenance"
                  className="block py-1"
                  onClick={closeMenus}
                >
                  Manutenção de Veículos
                </Link>
                <Link
                  to="/services#dsg"
                  className="block py-1"
                  onClick={closeMenus}
                >
                  Serviço de Transmissão DSG
                </Link>
              </div>
            </div>

            <Link
              to="/portfolio"
              className={`py-2 ${isActive("/portfolio") ? activeClasses : ""}`}
              onClick={closeMenus}
            >
              Portefólio
            </Link>

            <Link
              to="/contact"
              className={`py-2 ${isActive("/contact") ? activeClasses : ""}`}
              onClick={closeMenus}
            >
              Contacto
            </Link>

            <Link
              to="/contact"
              className="btn-primary text-center mt-2"
              onClick={closeMenus}
            >
              Pedir Orçamento
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
