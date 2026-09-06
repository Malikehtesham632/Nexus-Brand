import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatWidget from '@/components/ChatWidget';
import PageTransition from '@/components/PageTransition';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Profile from '@/pages/Profile';
import StaticPage from '@/pages/StaticPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-noir-950">
        <Navbar />
        <main>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/page/:slug" element={<StaticPage />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
