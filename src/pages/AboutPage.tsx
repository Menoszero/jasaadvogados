import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Target, UserCheck, Scale } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Sobre Nós | JASA Advogados';
  }, []);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('/src/assets/images/recepcao1.jpg')" 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Sobre a <span className="text-accent">Jaeger Amarante</span></h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-90">
            Uma sociedade de advocacia criada para oferecer soluções jurídicas integradas e de excelência.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white" ref={ref1}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium">Nossa História</span>
              <h2 className="section-title mb-6">A Origem da Jaeger Amarante</h2>
              <p className="mb-4">
                Da ideia de formar uma estrutura e organização que pudesse atender de forma mais completa 
                às diversas demandas da clientela de hoje, cujo pleno atendimento depende do conhecimento 
                e prática das mais diferentes esferas de Direito, é que surgiu a Jaeger Amarante Sociedade de Advocacia.
              </p>
              <p className="mb-4">
                Inicialmente denominada de Jaeger & Alves da Costa Advogados Associados, quando constituída 
                no ano de 2009, posteriormente denominada Jaeger Amarante & Mattos Pontual Advogados Associados, 
                até receber a nomenclatura atual, a sociedade uniu a experiência de seus sócios em atuações 
                profissionais anteriores, como advogados de alguns dos mais renomados escritórios do país e 
                como integrantes da gestão jurídica de grandes empresas regionais, nacionais e internacionais.
              </p>
              <p>
                Nossa trajetória é marcada pela busca constante da excelência e pela inovação na prestação 
                de serviços jurídicos, sempre com foco nas necessidades específicas de cada cliente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-lg shadow-custom">
                <img 
                  src="/src/assets/images/recepcao1.jpg" 
                  alt="Jaeger Amarante - Escritório" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-accent rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section className="py-20 bg-primary" ref={ref2}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-accent font-medium">Nosso Diferencial</span>
            <h2 className="section-title mx-auto after:mx-auto mb-6">Uma Abordagem Integrada</h2>
            <p className="section-subtitle">
              Quase inexiste no mercado escritórios que detenham a condição e assumam a responsabilidade 
              por uma atuação ampla e que permita aos seus clientes concentrarem ao máximo suas demandas 
              em um único estabelecimento advocatício.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">O Problema do Mercado</h3>
              <p className="mb-4">
                Para empresas em franco crescimento, a pulverização de causas em diversos profissionais 
                da advocacia acabava por dificultar, ou mesmo obstar, um melhor acompanhamento ou controle 
                da situação real existente em dado momento.
              </p>
              <p className="mb-6">
                Isso consequentemente complica uma atividade mais conjunta das diversas áreas existentes 
                na gestão corporativa ou institucional, causando perda da eficiência esperada de uma boa 
                governança, pragmaticamente levando a imbróglios que tornam mais difíceis a obtenção de 
                soluções, investimentos e financiamentos por parte da clientela.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6">Nossa Solução</h3>
              <p>
                A Jaeger Amarante foi criada para patrocinar, em suas áreas de atuação, quaisquer tipos 
                de entidades, sejam pessoas físicas ou jurídicas, de qualquer natureza (públicas ou privadas, 
                com ou sem fins lucrativos), inclusive empresas de micro, pequeno, médio ou grande porte, 
                de atividade regional, nacional ou internacional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <h4 className="text-xl font-semibold mb-6">Modalidades de Contratação</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Por Hora</h5>
                    <p className="text-tertiary text-sm">Cobrança baseada no tempo efetivamente dedicado ao caso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Por Demanda</h5>
                    <p className="text-tertiary text-sm">Valor fixo estabelecido para cada projeto específico</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">De Partido</h5>
                    <p className="text-tertiary text-sm">Assessoria jurídica contínua e abrangente</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure and Values */}
      <section className="py-20 bg-white" ref={ref3}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium">Infraestrutura</span>
              <h2 className="section-title mb-6">Estrutura Moderna e Tecnológica</h2>
              <p className="mb-6">
                Para melhor atender, contamos com uma estrutura ampla e moderna, calcada nos avanços 
                tecnológicos, com capacidade para crescimento e que busca estar em contínuo contato 
                com seus clientes, de forma a dar pleno suporte às suas demandas.
              </p>
              <p className="mb-8">
                Possuímos profissionais experientes e atuamos em diversas áreas de interesse jurídico, 
                sempre com foco na qualidade e expertise necessárias ao excelente atendimento dos 
                pleitos requeridos pela clientela dos dias atuais.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary rounded-lg">
                  <span className="text-3xl font-playfair font-bold text-accent block">15+</span>
                  <span className="text-sm text-tertiary">Anos de Experiência</span>
                </div>
                <div className="text-center p-4 bg-primary rounded-lg">
                  <span className="text-3xl font-playfair font-bold text-accent block">10+</span>
                  <span className="text-sm text-tertiary">Áreas de Atuação</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent font-medium">Nossos Valores</span>
              <h2 className="section-title mb-6">Compromisso com a Excelência</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Atendimento Integrado</h4>
                    <p className="text-tertiary">Concentração de demandas jurídicas em um único escritório para maior eficiência.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Qualidade e Expertise</h4>
                    <p className="text-tertiary">Serviços jurídicos com a qualidade necessária ao excelente atendimento.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <UserCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Experiência Comprovada</h4>
                    <p className="text-tertiary">Sócios com experiência em renomados escritórios e grandes empresas.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Scale className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Flexibilidade</h4>
                    <p className="text-tertiary">Múltiplas modalidades de contratação para atender diferentes necessidades.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;