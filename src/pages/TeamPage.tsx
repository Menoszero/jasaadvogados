import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamMembers';
import { Mail, BookOpen, Briefcase, Globe } from 'lucide-react';

const TeamPage = () => {
  useEffect(() => {
    document.title = 'Nossa Equipe | JASA Advogados';
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('https://images.pexels.com/photos/8112726/pexels-photo-8112726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Nossa <span className="text-accent">Equipe</span></h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-90">
            Conheça os profissionais que fazem do JASA Advogados um escritório de excelência, 
            comprometido com a qualidade e os resultados.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium">Nossos Profissionais</span>
            <h2 className="section-title mx-auto after:mx-auto mb-6">Advogados Especialistas</h2>
            <p className="section-subtitle">
              Nossa equipe é formada por profissionais altamente qualificados e especializados em 
              diversas áreas do Direito, prontos para oferecer as melhores soluções jurídicas para você.
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                variants={itemVariants}
                className="bg-primary p-8 rounded-lg shadow-custom"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="relative overflow-hidden rounded-lg shadow-md h-80">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold">{member.name}</h3>
                        <p className="text-accent">{member.position}</p>
                      </div>
                      <p className="text-tertiary mt-2 md:mt-0">{member.oab}</p>
                    </div>

                    <p className="text-tertiary mb-6">
                      {member.bio}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-5 w-5 text-accent mr-2" />
                          <h4 className="font-semibold">Formação</h4>
                        </div>
                        <ul className="space-y-1 text-tertiary">
                          {member.education.map((edu, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Briefcase className="h-5 w-5 text-accent mr-2" />
                          <h4 className="font-semibold">Áreas de Atuação</h4>
                        </div>
                        <ul className="space-y-1 text-tertiary">
                          {member.specializations.map((spec, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Globe className="h-5 w-5 text-accent mr-2" />
                          <h4 className="font-semibold">Idiomas</h4>
                        </div>
                        <p className="text-tertiary">
                          {member.languages.join(', ')}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Mail className="h-5 w-5 text-accent mr-2" />
                          <h4 className="font-semibold">Contato</h4>
                        </div>
                        <a 
                          href={`mailto:${member.email}`} 
                          className="text-accent hover:underline"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium">Nossa Cultura</span>
            <h2 className="section-title text-white mx-auto after:mx-auto mb-6">O Que Nos Une</h2>
            <p className="text-gray-300 text-lg">
              Nossa equipe compartilha valores e princípios que norteiam nossa atuação profissional 
              e nos permitem oferecer um serviço jurídico de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Colaboração</h3>
              <p className="text-tertiary">
                Trabalhamos em equipe, compartilhando conhecimentos e experiências para alcançar os melhores resultados.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excelência</h3>
              <p className="text-tertiary">
                Buscamos constantemente o aprimoramento técnico e profissional para oferecer serviços de alta qualidade.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empatia</h3>
              <p className="text-tertiary">
                Compreendemos as necessidades e preocupações de nossos clientes, oferecendo um atendimento humanizado.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsabilidade</h3>
              <p className="text-tertiary">
                Assumimos compromissos com seriedade e dedicação, sempre buscando os melhores resultados para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;