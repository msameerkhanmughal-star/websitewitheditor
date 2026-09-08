import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Background from '@/components/layout/Background';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ScrollToTopOnNavigate from '@/components/layout/ScrollToTopOnNavigate';
import PageTransition from '@/components/layout/PageTransition';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import ProjectDetails from '@/pages/ProjectDetails';
import HireMe from '@/pages/HireMe';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />
      <ScrollToTopOnNavigate />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
