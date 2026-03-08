import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
      
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#ffc8dd] text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <Features />
      <AboutUs />
      <Testimonials />
      <Pricing />
      </div>
    </>
  );
}

export default App
