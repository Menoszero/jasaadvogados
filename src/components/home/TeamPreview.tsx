import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const TeamPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium">Liderança</span>
          <h2 className="section-title mx-auto after:mx-auto mb-6">Nosso Sócio Fundador</h2>
          <p className="section-subtitle">
            Conheça o profissional que lidera nossa equipe com excelência, experiência e dedicação 
            aos mais altos padrões da advocacia brasileira.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/src/assets/images/Dr-Jorge-2020.jpeg"
                  alt="Dr. Jorge Jaeger Amarante"
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full z-0"></div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-playfair font-bold mb-2">Dr. Jorge Jaeger Amarante</h3>
                <p className="text-accent text-xl font-medium mb-1">Sócio Fundador e Gestor</p>
                <p className="text-tertiary">OAB/DF</p>
              </div>

              <div className="prose prose-lg">
                <p className="text-tertiary leading-relaxed">
                  O sócio Jorge Jaeger Amarante, gestor da sociedade, iniciou suas atividades advocatícias 
                  no renomado escritório Lacombe & Neves da Silva Advogados Associados, onde lidou frequentemente 
                  com Direito Constitucional, Civil e Autoral, bem como laborou com diversas causas de foco 
                  Eleitoral, vez que tal escritório fora constituído por dois ex-Ministros do Tribunal Superior Eleitoral.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary p-4 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-secondary mb-1">Formação Acadêmica</h4>
                  <p className="text-sm text-tertiary">MBA em Direito da Economia e da Empresa - FGV</p>
                </div>
                <div className="bg-primary p-4 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-secondary mb-1">Especialização</h4>
                  <p className="text-sm text-tertiary">Pós-graduação em Direito Tributário</p>
                </div>
                <div className="bg-primary p-4 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-secondary mb-1">Experiência</h4>
                  <p className="text-sm text-tertiary">Azevedo Sette Advogados - América Latina</p>
                </div>
                <div className="bg-primary p-4 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-secondary mb-1">Publicações</h4>
                  <p className="text-sm text-tertiary">Artigos no Valor Econômico</p>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h4 className="font-semibold text-lg mb-3">Principais Áreas de Atuação</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Direito Constitucional',
                    'Direito Civil',
                    'Direito Tributário',
                    'Direito Empresarial',
                    'Direito Administrativo',
                    'Direito Arbitral'
                  ].map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link to="/equipe" className="btn btn-primary">
                  Conheça Mais Sobre Nossa Equipe
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 bg-secondary text-white p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-playfair font-bold text-accent mb-2">20+</div>
                <div className="text-gray-300">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-accent mb-2">500+</div>
                <div className="text-gray-300">Clientes Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-accent mb-2">10+</div>
                <div className="text-gray-300">Áreas de Especialização</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;