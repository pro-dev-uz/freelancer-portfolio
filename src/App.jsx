import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeDivider from './components/MarqueeDivider';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Grain from './components/ui/Grain';
import Cursor from './components/ui/Cursor';
import LenisProvider from './components/ui/LenisProvider';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead />
        <LenisProvider />
        <Grain />
        <Cursor />
        <div className="min-h-screen bg-bg text-ink">
          <Navbar />
          <main>
            <Hero />
            <MarqueeDivider />
            <About />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
