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
        backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Sobre o <span className="text-accent">JASA Advogados</span></h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-90">
            Conheça nossa história, missão, valores e o que nos torna um escritório de advocacia diferenciado no mercado jurídico brasileiro.
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
              <h2 className="section-title mb-6">Uma Trajetória de Excelência e Dedicação</h2>
              <p className="mb-4">
                Fundado em 2005 pelos sócios Dr. João Almeida e Dra. Ana Silva, o JASA Advogados 
                nasceu com o propósito de oferecer serviços jurídicos de excelência, combinando conhecimento 
                técnico aprofundado e uma abordagem personalizada para cada cliente.
              </p>
              <p className="mb-4">
                Ao longo dos anos, expandimos nossa atuação para diversas áreas do Direito e construímos 
                uma equipe multidisciplinar de profissionais altamente qualificados, sempre mantendo o 
                compromisso com a ética, a transparência e a busca pelos melhores resultados.
              </p>
              <p>
                Hoje, somos reconhecidos como uma referência no mercado jurídico brasileiro, atendendo 
                clientes de diversos portes e setores, desde grandes corporações até pessoas físicas 
                que buscam uma assessoria jurídica de confiança.
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
                  src="https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="JASA Advogados History" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-accent rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-primary" ref={ref2}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium">Nossos Princípios</span>
            <h2 className="section-title mx-auto after:mx-auto mb-6">Missão, Visão e Valores</h2>
            <p className="section-subtitle">
              Nossos princípios fundamentais guiam todas as nossas ações e decisões, definindo quem somos e como trabalhamos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="bg-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Missão</h3>
              <p className="text-tertiary">
                Oferecer soluções jurídicas personalizadas e estratégicas, com excelência técnica e compromisso ético, 
                contribuindo para o sucesso e a tranquilidade de nossos clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="bg-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Scale className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visão</h3>
              <p className="text-tertiary">
                Ser reconhecido como um escritório de advocacia de referência nacional, destacando-se pela excelência 
                técnica, inovação, resultados efetivos e relacionamento de longo prazo com os clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-custom text-center"
            >
              <div className="bg-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Valores</h3>
              <ul className="text-tertiary text-left space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Ética e transparência em todas as relações</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Excelência técnica e atualização constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Comprometimento com os resultados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Responsabilidade social e ambiental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Valorização das pessoas e da diversidade</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-white" ref={ref3}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium">Por que nos escolher</span>
            <h2 className="section-title mx-auto after:mx-auto mb-6">Nossos Diferenciais</h2>
            <p className="section-subtitle">
              O que nos diferencia no mercado jurídico e por que somos a escolha ideal para cuidar dos seus assuntos legais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="border-b-2 border-accent p-6 hover:bg-primary transition-colors duration-300"
            >
              <UserCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atendimento Personalizado</h3>
              <p className="text-tertiary">
                Cada cliente recebe atenção exclusiva, com soluções jurídicas desenhadas especificamente para suas necessidades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-b-2 border-accent p-6 hover:bg-primary transition-colors duration-300"
            >
              <svg className="h-12 w-12 text-accent mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3">Equipe Multidisciplinar</h3>
              <p className="text-tertiary">
                Profissionais especializados em diversas áreas do Direito, oferecendo uma abordagem completa e integrada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-b-2 border-accent p-6 hover:bg-primary transition-colors duration-300"
            >
              <svg className="h-12 w-12 text-accent mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3">Tecnologia e Inovação</h3>
              <p className="text-tertiary">
                Utilizamos ferramentas tecnológicas avançadas para otimizar processos e oferecer um serviço mais eficiente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-b-2 border-accent p-6 hover:bg-primary transition-colors duration-300"
            >
              <svg className="h-12 w-12 text-accent mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3">Transparência Total</h3>
              <p className="text-tertiary">
                Comunicação clara sobre estratégias, custos e expectativas, mantendo o cliente sempre informado.
              </p>
            </motion.div>
          </div>

          {/* Social Responsibility */}
          <div className="mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-accent font-medium">Responsabilidade Social</span>
                <h2 className="section-title mb-6">Nosso Compromisso com a Sociedade</h2>
                <p className="mb-4">
                  Acreditamos que temos um papel importante a desempenhar na construção de uma sociedade mais justa e igualitária. 
                  Por isso, desenvolvemos diversas iniciativas de responsabilidade social:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Programa de advocacia pro bono para pessoas em situação de vulnerabilidade</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Parcerias com ONGs para promoção do acesso à justiça</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Palestras e workshops educativos sobre direitos básicos em comunidades</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Políticas internas de sustentabilidade e redução de impacto ambiental</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img 
                  src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Social Responsibility" 
                  className="rounded-lg shadow-custom"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;