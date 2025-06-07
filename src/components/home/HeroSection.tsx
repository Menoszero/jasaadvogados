import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

const slides = [
  {
    image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Excelência Jurídica e Resultados Efetivos",
    subtitle: "Soluções jurídicas personalizadas para os desafios mais complexos."
  },
  {
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tradição e Inovação em Advocacia",
    subtitle: "Combinando experiência com uma visão moderna do Direito."
  },
  {
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Compromisso com Seus Direitos",
    subtitle: "Uma equipe dedicada a defender seus interesses com excelência."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    duration: 1000,
    mode: "snap"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide relative">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500" 
              style={{ 
                backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.7)), url('${slide.image}')` 
              }}
            />

            {/* Content */}
            <div className="container-custom relative z-10 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-white mb-6">
                  {slide.title.split(' ').map((word, i) => 
                    i === 1 ? <span key={i} className="text-accent"> {word}</span> : ` ${word} `
                  )}
                </h1>
                <p className="text-white text-xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/areas-de-atuacao" className="btn btn-primary">
                    Áreas de Atuação
                  </Link>
                  <Link to="/contato" className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary">
                    Agende uma Consulta
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {[...Array(slides.length)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;