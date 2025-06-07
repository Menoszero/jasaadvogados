import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import PracticeAreasPreview from '../components/home/PracticeAreasPreview';
import TeamPreview from '../components/home/TeamPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';

const HomePage = () => {
  useEffect(() => {
    document.title = 'JASA Advogados | Excelência Jurídica e Resultados Efetivos';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <PracticeAreasPreview />
      <TeamPreview />
      <TestimonialsSection />
      <BlogPreview />
      <ContactCTA />
      
      {/* Map Section */}
      <section className="py-8 bg-primary">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-custom h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976468974584!2d-46.65565902414201!3d-23.56400726668936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690245600000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;