import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium">Contato</span>
            <h2 className="section-title mb-6">Fale com Nossos Especialistas</h2>
            <p className="mb-8">
              Estamos prontos para oferecer as melhores soluções jurídicas para você ou sua empresa.
              Entre em contato para agendar uma consulta e discutir como podemos ajudar.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <p className="text-tertiary">(11) 3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-tertiary">contato@jasaadvogados.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                  <p className="text-tertiary">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
            
            <Link to="/contato" className="btn btn-primary">
              Agendar Consulta
            </Link>
          </motion.div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-primary p-8 rounded-lg shadow-custom">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-tertiary mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tertiary mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Seu e-mail"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-tertiary mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tertiary mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;