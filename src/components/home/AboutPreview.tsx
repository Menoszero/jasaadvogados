import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg shadow-custom">
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="JASA Advogados Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-accent rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 border-2 border-accent w-full h-full rounded-lg z-0"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-accent font-medium">Sobre Nós</span>
            <h2 className="section-title mb-6">Tradição e Inovação a Serviço dos Seus Direitos</h2>
            <p className="mb-6">
              Fundado em 2005, o JASA Advogados construiu sua reputação com base na excelência jurídica, 
              atendimento personalizado e resultados consistentes. Nosso escritório reúne profissionais 
              altamente qualificados e comprometidos com a defesa dos interesses de nossos clientes.
            </p>
            <p className="mb-6">
              Combinamos a tradição da advocacia com uma visão moderna e estratégica do Direito, 
              oferecendo soluções inovadoras para os desafios jurídicos mais complexos do cenário atual.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">20+</span>
                <span className="text-sm text-tertiary">Anos de Experiência</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">500+</span>
                <span className="text-sm text-tertiary">Clientes Satisfeitos</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">15+</span>
                <span className="text-sm text-tertiary">Advogados Especialistas</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">6</span>
                <span className="text-sm text-tertiary">Áreas de Atuação</span>
              </div>
            </div>
            <Link to="/sobre" className="btn btn-primary">
              Conheça Nossa História
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;