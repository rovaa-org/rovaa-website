import './App.css';
import HeroSection  from '@/components/home/HeroSection';
import Footer from '@/components/common/Footer';
import AboutSection from '@/components/home/AboutusSection';
import FloatingNav from '@/components/common/FloatingNav';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ShowCaseSection from '@/components/home/ShowCaseSection';
import CallToAction from '@/components/home/CallToAction';

function App() {


  return (
    <>
      <FloatingNav />
      <HeroSection />
      <ShowCaseSection />
      <AboutSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
