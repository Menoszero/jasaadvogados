import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { getPracticeAreaBySlug } from '../data/practiceAreas';
import { Briefcase, Scale, FileText, Gavel, Landmark, Building, ArrowLeft } from 'lucide-react';

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const practiceArea = getPracticeAreaBySlug(slug || '');

  useEffect(() => {
    if (practiceArea) {
      document.title = `${practiceArea.title} | JASA Advogados`;
    } else {
      document.title = 'Área de Atuação | JASA Advogados';
    }
  }, [practiceArea]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="h-16 w-16 text-accent" />;
      case 'scale':
        return <Scale className="h-16 w-16 text-accent" />;
      case 'file-text':
        return <FileText className="h-16 w-16 text-accent" />;
      case 'gavel':
        return <Gavel className="h-16 w-16 text-accent" />;
      case 'landmark':
        return <Landmark className="h-16 w-16 text-accent" />;
      case 'building':
        return <Building className="h-16 w-16 text-accent" />;
      default:
        return <Briefcase className="h-16 w-16 text-accent" />;
    }
  };

  if (!practiceArea) {
    return (
      <div className="py-32 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-6">Área de atuação não encontrada</h2>
          <p className="mb-8">A área de atuação que você está procurando não foi encontrada.</p>
          <Link to="/areas-de-atuacao" className="btn btn-primary">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Áreas de Atuação
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">{practiceArea.title}</h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-90">
            {practiceArea.shortDescription}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/areas-de-atuacao" className="flex items-center text-accent hover:underline mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para Áreas de Atuação
            </Link>

            <div className="flex justify-center mb-12">
              {getIcon(practiceArea.icon)}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6">Sobre {practiceArea.title}</h2>
                <p className="text-tertiary mb-8">
                  {practiceArea.longDescription}
                </p>

                <h3 className="text-2xl font-semibold mb-4">Nossos Serviços</h3>
                <p className="text-tertiary mb-6">
                  Oferecemos um amplo leque de serviços jurídicos especializados em {practiceArea.title}:
                </p>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                  {practiceArea.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-primary p-2 rounded-full mr-3 flex-shrink-0">
                        <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-secondary font-medium">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">Nossa Abordagem</h3>
                <p className="text-tertiary mb-4">
                  No JASA Advogados, acreditamos que cada caso é único e merece uma abordagem personalizada. 
                  Nossa equipe especializada em {practiceArea.title} trabalha em estreita colaboração com os clientes 
                  para compreender profundamente suas necessidades e objetivos.
                </p>
                <p className="text-tertiary mb-8">
                  Combinamos conhecimento técnico aprofundado, experiência prática e uma visão estratégica 
                  para oferecer soluções jurídicas eficientes e alinhadas aos interesses de nossos clientes, 
                  seja na prevenção de problemas ou na resolução de litígios.
                </p>

                <div className="bg-primary p-8 rounded-lg shadow-sm mb-12">
                  <h3 className="text-2xl font-semibold mb-4">Por que escolher o JASA Advogados?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Equipe altamente especializada e com vasta experiência em {practiceArea.title}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Abordagem personalizada, focada nas necessidades específicas de cada cliente</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Constante atualização sobre mudanças legislativas e jurisprudenciais</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Visão estratégica e soluções criativas para os desafios jurídicos mais complexos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Comunicação clara e transparente durante todo o processo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Precisa de assistência em {practiceArea.title}?</h3>
                <p className="text-tertiary mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco para agendar uma consulta com nossos especialistas e descobrir 
                  como podemos ajudar você ou sua empresa.
                </p>
                <Link to="/contato" className="btn btn-primary">
                  Agendar uma Consulta
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreaDetail;