import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from 'lucide-react';
import { getBlogPostBySlug, getRecentPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | JASA Advogados`;
    } else {
      document.title = 'Artigo | JASA Advogados';
    }
  }, [post]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!post) {
    return (
      <div className="py-32 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-6">Artigo não encontrado</h2>
          <p className="mb-8">O artigo que você está procurando não foi encontrado.</p>
          <Link to="/publicacoes" className="btn btn-primary">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Publicações
          </Link>
        </div>
      </div>
    );
  }

  // Format the Markdown content
  const formatMarkdownContent = (content: string) => {
    return { __html: content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-semibold mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-3 mt-5">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
    };
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ 
        backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url(${post.image})` 
      }}>
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">{post.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-white opacity-90">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>10 min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/publicacoes" className="flex items-center text-accent hover:underline mb-8">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Voltar para Publicações
              </Link>

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={formatMarkdownContent(post.content)} />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">Compartilhe este artigo</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-secondary hover:text-accent transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                        </svg>
                      </a>
                      <a href="#" className="text-secondary hover:text-accent transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                        </svg>
                      </a>
                      <a href="#" className="text-secondary hover:text-accent transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.582 6.186c-.273-.047-.553-.063-.823-.088-.273-.023-.553-.035-.823-.035-2.242 0-4.093.793-5.552 2.372-1.462 1.575-2.192 3.564-2.192 5.952v.503h-2.97V19h2.97v9.5h6v-9.5h3.92l.5-4.11h-4.42v-.5c0-1.15.34-2.064 1.02-2.742.68-.677 1.542-1.017 2.58-1.017.463 0 .935.047 1.41.14.475.094.935.15 1.38.172v-3.74z" />
                        </svg>
                      </a>
                      <a href="#" className="text-secondary hover:text-accent transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="#" className="text-secondary hover:text-accent transition-colors">
                        <Share2 className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-primary hover:bg-gray-200 rounded-md text-secondary transition-colors">
                      Imprimir Artigo
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-12 bg-primary p-6 rounded-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img
                    src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt={post.author}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{post.author}</h4>
                    <p className="text-accent mb-3">{post.authorPosition}</p>
                    <p className="text-tertiary mb-4">
                      Advogado especialista com vasta experiência na área de {post.category}. 
                      Palestrante e autor de diversos artigos em publicações especializadas.
                    </p>
                    <a href="#" className="text-accent hover:underline">Ver perfil completo</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Recent Posts */}
              <div className="bg-primary p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-6">Artigos Recentes</h3>
                <div className="space-y-6">
                  {recentPosts.map((recentPost) => (
                    <div key={recentPost.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={recentPost.image}
                          alt={recentPost.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <Link 
                          to={`/publicacoes/${recentPost.slug}`}
                          className="font-medium hover:text-accent transition-colors line-clamp-2"
                        >
                          {recentPost.title}
                        </Link>
                        <p className="text-sm text-tertiary mt-1">{recentPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-primary p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-6">Categorias</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/publicacoes?category=Direito Tributário" className="flex justify-between items-center hover:text-accent transition-colors">
                      <span>Direito Tributário</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">3</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/publicacoes?category=Direito Empresarial" className="flex justify-between items-center hover:text-accent transition-colors">
                      <span>Direito Empresarial</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/publicacoes?category=Contencioso Estratégico" className="flex justify-between items-center hover:text-accent transition-colors">
                      <span>Contencioso Estratégico</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">2</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/publicacoes?category=Direito Civil" className="flex justify-between items-center hover:text-accent transition-colors">
                      <span>Direito Civil</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">4</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-secondary p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">Precisa de Assistência Jurídica?</h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe está pronta para analisar seu caso e oferecer as melhores soluções jurídicas.
                </p>
                <Link to="/contato" className="btn bg-accent hover:bg-accent/90 text-white w-full text-center">
                  Agendar Consulta
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;