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
                src="/src/assets/images/recepcao1.jpg" 
                alt="JASA Advogados - Recepção" 
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
            <h2 className="section-title mb-6">Uma Visão Integrada do Direito</h2>
            <p className="mb-6">
              Da ideia de formar uma estrutura e organização que pudesse atender de forma mais completa 
              às diversas demandas da clientela de hoje, cujo pleno atendimento depende do conhecimento 
              e prática das mais diferentes esferas de Direito, é que surgiu a Jaeger Amarante Sociedade de Advocacia.
            </p>
            <p className="mb-6">
              Fundada em 2009, inicialmente como Jaeger & Alves da Costa Advogados Associados, 
              posteriormente denominada Jaeger Amarante & Mattos Pontual Advogados Associados, 
              até receber a nomenclatura atual, nossa sociedade uniu a experiência de seus sócios 
              em atuações profissionais anteriores em alguns dos mais renomados escritórios do país.
            </p>
            <p className="mb-6">
              Oferecemos uma solução única no mercado: a possibilidade de nossos clientes concentrarem 
              suas demandas jurídicas em um único estabelecimento advocatício, evitando a pulverização 
              de causas e garantindo maior eficiência na governança corporativa.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">15+</span>
                <span className="text-sm text-tertiary">Anos de Experiência</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">500+</span>
                <span className="text-sm text-tertiary">Clientes Satisfeitos</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">10+</span>
                <span className="text-sm text-tertiary">Áreas de Atuação</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                <span className="text-4xl font-playfair font-bold text-accent">3</span>
                <span className="text-sm text-tertiary">Modalidades de Contratação</span>
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