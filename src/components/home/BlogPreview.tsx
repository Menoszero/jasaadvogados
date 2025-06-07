import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { getRecentPosts } from '../../data/blogPosts';

const BlogPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const recentPosts = getRecentPosts();

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
          <span className="text-accent font-medium">Blog</span>
          <h2 className="section-title mx-auto after:mx-auto mb-6">Publicações Recentes</h2>
          <p className="section-subtitle">
            Compartilhamos conhecimento e análises sobre temas jurídicos relevantes, mantendo você
            informado sobre as principais novidades do direito.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-custom overflow-hidden group"
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

        <div className="text-center mt-12">
          <Link to="/publicacoes" className="btn btn-primary">
            Todas as Publicações
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;