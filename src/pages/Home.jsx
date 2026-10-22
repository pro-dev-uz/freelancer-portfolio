import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import MarqueeDivider from '../components/MarqueeDivider';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <SEOHead />
      <Hero />
      <MarqueeDivider />
      <About />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
