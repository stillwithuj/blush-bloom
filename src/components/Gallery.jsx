import { useState } from "react";
import FadeInUp from "./FadeInUp";

import nail1  from "../imgs/nail1.jpg";
import nail2  from "../imgs/nail2.jpg";
import nail3  from "../imgs/nail3.jpg";
import nail4  from "../imgs/nail4.jpg";
import nail5  from "../imgs/nail5.jpg";
import nail6  from "../imgs/nail6.jpg";
import nail7  from "../imgs/nail7.jpg";
import nail8  from "../imgs/nail8.jpg";
import nail9  from "../imgs/nail9.jpg";
import nail10 from "../imgs/nail10.jpg";

const images = [nail1, nail2, nail3, nail4, nail5, nail6, nail7, nail8, nail9, nail10];

/* Per-offset visual config */
const CONFIG = {
  "-2": { x: -340, scale: 0.62, rotate: -14, z: 1, opacity: 0.6 },
  "-1": { x: -195, scale: 0.80, rotate:  -7, z: 2, opacity: 0.85 },
   "0": { x:    0, scale: 1.00, rotate:   0, z: 5, opacity: 1    },
   "1": { x:  195, scale: 0.80, rotate:   7, z: 2, opacity: 0.85 },
   "2": { x:  340, scale: 0.62, rotate:  14, z: 1, opacity: 0.6  },
};

function getConfig(offset) {
  const key = String(Math.max(-2, Math.min(2, offset)));
  return CONFIG[key];
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (step) => {
    setDir(step);
    setActive((prev) => (prev + step + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-28 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute pointer-events-none overflow-hidden inset-0">
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#cdb4db]/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#bde0fe]/15 blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <FadeInUp delay={1}>
          <p
            className="text-sm tracking-[0.28em] uppercase text-[#4a7fa5] font-medium mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our Work
          </p>
        </FadeInUp>
        <FadeInUp delay={2}>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#6b4c7a]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Gallery
          </h2>
        </FadeInUp>
        <FadeInUp delay={3}>
          <div className="mt-5 mx-auto w-16 h-px bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]" />
        </FadeInUp>
      </div>

      {/* Card stack */}
      <div className="relative flex items-center justify-center" style={{ height: 520 }}>

        {images.map((img, i) => {
          const offset = ((i - active + images.length) % images.length);
          const wrapped = offset > images.length / 2 ? offset - images.length : offset;

          if (Math.abs(wrapped) > 2) return null;

          const cfg = getConfig(wrapped);

          return (
            <div
              key={i}
              onClick={() => wrapped !== 0 && go(wrapped < 0 ? -1 : 1)}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${cfg.x}px) scale(${cfg.scale}) rotate(${cfg.rotate}deg)`,
                zIndex: cfg.z,
                opacity: cfg.opacity,
                cursor: wrapped === 0 ? "default" : "pointer",
              }}
            >
              {/* Floating shadow */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#6b4c7a]/20 blur-2xl rounded-full"
              />

              {/* Card */}
              <div
                className="relative overflow-hidden border-2 border-white/50"
                style={{
                  width: 280,
                  height: 380,
                  borderRadius: "28px",
                  boxShadow: wrapped === 0
                    ? "0 30px 70px rgba(107,76,122,0.35), 0 12px 30px rgba(162,210,255,0.25), inset 0 2px 0 rgba(255,255,255,0.7)"
                    : "0 15px 40px rgba(107,76,122,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                {/* Image */}
                <img
                  src={img}
                  alt={`nail ${i + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Glass water overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#cdb4db]/35 blur-2xl animate-pulse" />
                  <div className="absolute -bottom-6 right-4 w-24 h-24 rounded-full bg-[#bde0fe]/30 blur-xl animate-pulse" />
                  <div className="absolute top-4 left-6 w-20 h-6 rounded-full bg-white/25 blur-md -rotate-12" />
                  <div className="absolute inset-0 border border-white/15 rounded-[26px]" />
                </div>

                {/* Active card label */}
                {wrapped === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-linear-to-t from-[#6b4c7a]/60 to-transparent">
                    <p
                      className="text-white/90 text-sm tracking-widest uppercase"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      Nail Art {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-8 mt-16 relative z-10">

        {/* Prev */}
        <button
          onClick={() => go(-1)}
          className="w-12 h-12 rounded-full border border-[#cdb4db] flex items-center justify-center text-[#6b4c7a] hover:bg-[#cdb4db]/30 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-6 h-2 bg-[#6b4c7a]" : "w-2 h-2 bg-[#cdb4db]/60"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => go(1)}
          className="w-12 h-12 rounded-full border border-[#cdb4db] flex items-center justify-center text-[#6b4c7a] hover:bg-[#cdb4db]/30 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}
