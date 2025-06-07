import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase, Scale, FileText, Gavel, Landmark, Building } from 'lucide-react';
import { practiceAreas } from '../../data/practiceAreas';

const PracticeAreasPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="h-10 w-10 text-accent" />;
      case 'scale':
        return <Scale className="h-10 w-10 text-accent" />;
      case 'file-text':
        return <FileText className="h-10 w-10 text-accent" />;
      case 'gavel':
        return <Gavel className="h-10 w-10 text-accent" />;
      case 'landmark':
        return <Landmark className="h-10 w-10 text-accent" />;
      case 'building':
        return <Building className="h-10 w-10 text-accent" />;
      default:
        return <Briefcase className="h-10 w-10 text-accent" />;
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
    <section className="py-20 bg-primary" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium">Nossos Serviços</span>
          <h2 className="section-title mx-auto after:mx-auto mb-6">Áreas de Atuação</h2>
          <p className="section-subtitle">
            Oferecemos soluções jurídicas especializadas em diversas áreas do direito, com profissionais
            altamente capacitados e experiência comprovada.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area) => (
            <motion.div
              key={area.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-custom hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-accent group"
            >
              <div className="mb-6">
                {getIcon(area.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-tertiary mb-6">
                {area.shortDescription}
              </p>
              <Link
                to={`/areas-de-atuacao/${area.slug}`}
                className="text-accent font-medium hover:underline flex items-center"
              >
                Saiba mais
                <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/areas-de-atuacao" className="btn btn-primary">
            Todas as Áreas de Atuação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasPreview;