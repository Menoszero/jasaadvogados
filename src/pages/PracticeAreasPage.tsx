import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase, Scale, FileText, Gavel, Landmark, Building } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreasPage = () => {
  useEffect(() => {
    document.title = 'Áreas de Atuação | JASA Advogados';
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="h-12 w-12 text-accent" />;
      case 'scale':
        return <Scale className="h-12 w-12 text-accent" />;
      case 'file-text':
        return <FileText className="h-12 w-12 text-accent" />;
      case 'gavel':
        return <Gavel className="h-12 w-12 text-accent" />;
      case 'landmark':
        return <Landmark className="h-12 w-12 text-accent" />;
      case 'building':
        return <Building className="h-12 w-12 text-accent" />;
      default:
        return <Briefcase className="h-12 w-12 text-accent" />;
    }
  };

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
        backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Áreas de <span className="text-accent">Atuação</span></h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-90">
            Oferecemos soluções jurídicas especializadas em diversas áreas do direito, sempre com foco 
            na excelência e nos resultados.
          </p>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium">Nossos Serviços</span>
            <h2 className="section-title mx-auto after:mx-auto mb-6">Especialidades Jurídicas</h2>
            <p className="section-subtitle">
              Conheça as áreas em que atuamos e como podemos auxiliar você ou sua empresa a enfrentar 
              os desafios jurídicos do mercado atual.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {practiceAreas.map((area, index) => (
              <motion.div 
                key={area.id}
                variants={itemVariants}
                className={`p-8 rounded-lg shadow-custom ${index % 2 === 0 ? 'bg-primary' : 'bg-white border border-gray-100'}`}
              >
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 flex flex-col items-center md:items-start">
                    {getIcon(area.icon)}
                    <h3 className="text-2xl font-semibold mt-4 mb-2 text-center md:text-left">{area.title}</h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-tertiary mb-6">
                      {area.longDescription}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Nossos Serviços:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {area.services.map((service, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-tertiary">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/areas-de-atuacao/${area.slug}`}
                      className="btn btn-primary"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
            Precisa de Assistência Jurídica Especializada?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Nossa equipe de advogados está pronta para analisar seu caso e oferecer as melhores soluções 
            jurídicas para suas necessidades.
          </p>
          <Link to="/contato" className="btn bg-accent hover:bg-accent/90 text-white">
            Agende uma Consulta
          </Link>
        </div>
      </section>
    </>
  );
};

export default PracticeAreasPage;