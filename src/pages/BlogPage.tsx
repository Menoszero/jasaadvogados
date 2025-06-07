import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { Search } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Publicações | JASA Advogados';
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
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
        backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Nossas <span className="text-accent">Publicações</span></h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-90">
            Artigos, análises e novidades sobre o mundo jurídico para manter você informado.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute top-3 left-3 h-5 w-5 text-tertiary" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent md:w-64"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Todas as categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-primary rounded-lg shadow-custom overflow-hidden group"
                >
                  <Link to={`/publicacoes/${post.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-tertiary mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <Link to={`/publicacoes/${post.slug}`}>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-tertiary mb-4 line-clamp-3">
                      {post.summary}
                    </p>
                    <Link
                      to={`/publicacoes/${post.slug}`}
                      className="text-accent font-medium hover:underline flex items-center"
                    >
                      Ler mais
                      <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-4">Nenhum artigo encontrado</h3>
              <p className="text-tertiary mb-6">
                Não encontramos nenhum artigo correspondente aos seus critérios de busca.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('');
                }}
                className="btn btn-primary"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-white font-semibold mb-4">Fique por dentro</h2>
            <p className="text-gray-300 mb-8">
              Assine nossa newsletter e receba as atualizações mais recentes sobre o mundo jurídico 
              diretamente em seu e-mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="btn bg-accent hover:bg-accent/90 text-white whitespace-nowrap"
              >
                Assinar Newsletter
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              Respeitamos sua privacidade. Você pode cancelar a assinatura a qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;