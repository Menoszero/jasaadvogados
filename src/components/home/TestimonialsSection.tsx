import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Roberto Mendes",
    company: "CEO, TechSolutions",
    content: "O JASA Advogados foi fundamental para a reestruturação tributária da nossa empresa. A equipe demonstrou um conhecimento técnico excepcional e uma visão estratégica que nos permitiu economizar recursos significativos. Recomendo fortemente seus serviços.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Carla Soares",
    company: "Diretora Financeira, Grupo Horizonte",
    content: "Trabalhar com a equipe do JASA Advogados tem sido uma experiência extraordinária. Eles não apenas resolveram nossas questões jurídicas de forma eficiente, mas também se tornaram parceiros estratégicos do nosso negócio, sempre antecipando potenciais riscos.",
    image: "https://images.pexels.com/photos/3799788/pexels-photo-3799788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "André Campos",
    company: "Proprietário, Rede de Farmácias Saúde",
    content: "Em um momento crítico de expansão do nosso negócio, contamos com o JASA Advogados para estruturar juridicamente nossas operações. O resultado superou todas as expectativas, com soluções criativas e seguras que viabilizaram nosso crescimento.",
    image: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium">Depoimentos</span>
          <h2 className="section-title text-white mx-auto after:mx-auto mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-300 text-lg">
            A opinião de nossos clientes é o melhor testemunho da qualidade dos nossos serviços e do nosso compromisso com a excelência jurídica.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-custom p-8 md:p-12 relative">
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/20" />
                    <div className="text-center">
                      <p className="text-lg text-tertiary mb-8 relative z-10">"{testimonial.content}"</p>
                      <div className="flex flex-col items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-accent/20 mb-4"
                        />
                        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        <p className="text-accent">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-accent/20 hover:bg-accent text-white p-2 rounded-full transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-accent/30'
                }`}
                aria-label={`Depoimento ${index + 1}`}
              ></button>
            ))}
            <button 
              onClick={nextTestimonial}
              className="bg-accent/20 hover:bg-accent text-white p-2 rounded-full transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;