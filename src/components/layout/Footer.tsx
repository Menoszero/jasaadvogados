import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              <span className="text-white">JASA</span>
              <span className="text-accent">Advogados</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Soluções jurídicas personalizadas e estratégicas para empresas e pessoas físicas desde 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-accent transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao" className="text-gray-300 hover:text-accent transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-300 hover:text-accent transition-colors">Nosso Time</Link>
              </li>
              <li>
                <Link to="/publicacoes" className="text-gray-300 hover:text-accent transition-colors">Publicações</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-accent transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/areas-de-atuacao/direito-tributario" className="text-gray-300 hover:text-accent transition-colors">Direito Tributário</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/direito-empresarial" className="text-gray-300 hover:text-accent transition-colors">Direito Empresarial</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/direito-civil" className="text-gray-300 hover:text-accent transition-colors">Direito Civil</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/direito-trabalhista" className="text-gray-300 hover:text-accent transition-colors">Direito Trabalhista</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/contencioso-estrategico" className="text-gray-300 hover:text-accent transition-colors">Contencioso Estratégico</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/direito-administrativo" className="text-gray-300 hover:text-accent transition-colors">Direito Administrativo</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Av. Paulista, 1000, 15º andar<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-accent" />
                <span className="text-gray-300">(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-accent" />
                <a href="mailto:contato@jasaadvogados.com" className="text-gray-300 hover:text-accent transition-colors">
                  contato@jasaadvogados.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado e Domingo: Fechado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} JASA Advogados. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-gray-400 hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;