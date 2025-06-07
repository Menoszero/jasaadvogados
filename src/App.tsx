import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import FloatingContact from './components/common/FloatingContact';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/areas-de-atuacao" element={<PracticeAreasPage />} />
            <Route path="/areas-de-atuacao/:slug" element={<PracticeAreaDetail />} />
            <Route path="/publicacoes" element={<BlogPage />} />
            <Route path="/publicacoes/:slug" element={<BlogPostPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;