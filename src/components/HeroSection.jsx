import { useState, useEffect } from "react";
import FadeInUp from "./FadeInUp";

import img1 from "../imgs/her01.jpg";
import img2 from "../imgs/hero02.jpg";
import img3 from "../imgs/hero03.jpg";
import img4 from "../imgs/hero04.jpg";
import img5 from "../imgs/hero05.jpg";
import img6 from "../imgs/hero6.jpg";
import img7 from "../imgs/hero7.jpg";
import img8 from "../imgs/hero08.jpg";
import img9 from "../imgs/hero09.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 600);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* Sliding background images */}
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === current ? (fading ? 0 : 1) : 0,
          }}
        />
      ))}

      {/* Overlay: left fade so text is readable */}
      <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
        <div className="max-w-lg">

          <FadeInUp delay={1}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#6b4c7a] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Beautiful Nails,<br />Confident You
            </h1>
          </FadeInUp>

          <FadeInUp delay={2}>
            <p
              className="text-base md:text-lg text-[#7a5c8a]/85 leading-relaxed max-w-sm"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Welcome to Blush & Bloom, where elegance meets creativity.
              We specialize in nail artistry that enhances your natural beauty.
            </p>
          </FadeInUp>

        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-[#cdb4db]"
                : "w-2 h-2 bg-[#cdb4db]/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
