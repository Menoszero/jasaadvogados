import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navbarClass = isScrolled
    ? 'fixed w-full bg-white shadow-md transition-all duration-300 z-50'
    : 'fixed w-full bg-transparent transition-all duration-300 z-50';

  const linkClass = isScrolled
    ? 'text-secondary hover:text-accent transition-colors duration-200'
    : 'text-white hover:text-accent transition-colors duration-200';

  const mobileMenuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Equipe', path: '/equipe' },
    { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
    { name: 'Publicações', path: '/publicacoes' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={navbarClass}>
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold">
            <span className={isScrolled ? 'text-secondary' : 'text-white'}>JASA</span>
            <span className="text-accent">Advogados</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`${linkClass} font-medium`}>Home</Link>
          <Link to="/sobre" className={`${linkClass} font-medium`}>Sobre Nós</Link>
          <Link to="/equipe" className={`${linkClass} font-medium`}>Equipe</Link>
          
          {/* Dropdown for Practice Areas */}
          <div className="relative">
            <button 
              className={`${linkClass} font-medium flex items-center`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Áreas de Atuação <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1">
                    <Link to="/areas-de-atuacao" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-accent">
                      Todas as Áreas
                    </Link>
                    <Link to="/areas-de-atuacao/direito-tributario" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-accent">
                      Direito Tributário
                    </Link>
                    <Link to="/areas-de-atuacao/direito-empresarial" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-accent">
                      Direito Empresarial
                    </Link>
                    <Link to="/areas-de-atuacao/direito-civil" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-accent">
                      Direito Civil
                    </Link>
                    <Link to="/areas-de-atuacao/direito-trabalhista" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-accent">
                      Direito Trabalhista
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link to="/publicacoes" className={`${linkClass} font-medium`}>Publicações</Link>
          <Link to="/contato" className={`${linkClass} font-medium`}>Contato</Link>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${linkClass}`}
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {mobileMenuLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-secondary hover:text-accent py-2 font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-accent"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary flex items-center gap-2 w-full justify-center"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;