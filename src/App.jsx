import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

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
      <Services />
      <AboutUs />
      <Gallery />
      <Contact />
      </div>
    </>
  );
}

export default App
