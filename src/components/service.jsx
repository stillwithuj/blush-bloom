import { useState, useEffect, useRef } from "react";

import normal1 from "../imgs/normal1.jpg";
import normal2 from "../imgs/normal2.jpg";
import normal3 from "../imgs/normal3.jpg";
import normal4 from "../imgs/normal4.jpg";

import gel1 from "../imgs/gel1.jpg";
import gel2 from "../imgs/gel2.webp";
import gel3 from "../imgs/gel3.webp";

import gel1b from "../imgs/gel1.jpg";
import gel2b from "../imgs/gel2.webp";
import gel3b from "../imgs/gel3.webp";
import gel4b from "../imgs/gel4.webp";

const services = [
  {
    images: [normal1, normal2, normal3, normal4],
    title: "Classic Manicure",
    description:
      "A timeless treatment that shapes, buffs, and polishes your nails to perfection. Our classic manicure leaves your hands feeling soft, clean, and beautifully finished.",
    align: "left",
  },
  {
    images: [gel1, gel2, gel3],
    title: "Gel Nails",
    description:
      "Long-lasting, chip-free colour that stays flawless for up to three weeks. Our gel treatments combine strength with a mirror-shine finish that elevates every look.",
    align: "right",
  },
  {
    images: [gel1b, gel2b, gel3b, gel4b],
    title: "Gel Extensions",
    description:
      "Add length and elegance with our custom gel extensions. Sculpted to your desired shape and finished with your choice of colour, they feel as natural as they look.",
    align: "left",
  },
];

function ServiceCard({ service, index }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % service.images.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
      setCurrent(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered, service.images.length]);

  const isLeft = service.align === "left";

  return (
    <div
      className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20`}
    >
      {/* Water drop image circle */}
      <div className="relative shrink-0 group" style={{ width: 340, height: 340 }}>

        {/* Floating glow shadow */}
        <div className="absolute inset-4 rounded-full bg-[#cdb4db]/40 blur-2xl -z-10 translate-y-6" />

        {/* Circle container */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/40 cursor-pointer"
          style={{ boxShadow: "0 20px 60px rgba(205,180,219,0.45), 0 8px 24px rgba(162,210,255,0.3), inset 0 1px 0 rgba(255,255,255,0.6)" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Images */}
          {service.images.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{
                backgroundImage: `url(${img})`,
                opacity: i === current ? 1 : 0,
              }}
            />
          ))}

          {/* Glass water overlay on top of image */}
          <div className="absolute inset-0 pointer-events-none">
            {/* water blobs */}
            <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-[#cdb4db]/40 blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 right-4 w-28 h-28 rounded-full bg-[#bde0fe]/35 blur-xl animate-pulse" />
            <div className="absolute top-1/3 -right-4 w-20 h-20 rounded-full bg-[#a2d2ff]/30 blur-lg animate-pulse" />
            {/* shine arc */}
            <div className="absolute top-4 left-6 w-20 h-8 rounded-full bg-white/30 blur-md rotate-[-30deg]" />
            {/* rim light */}
            <div className="absolute inset-0 rounded-full border border-white/25" />
          </div>
        </div>

        {/* Dot indicators — show only on hover */}
        {hovered && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {service.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-5 h-2 bg-[#cdb4db]" : "w-2 h-2 bg-[#cdb4db]/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text */}
      <div className={`max-w-md ${isLeft ? "text-left" : "text-left md:text-right"}`}>
        <p
          className="text-xs tracking-[0.2em] uppercase text-[#a2d2ff] mb-3"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Service 0{index + 1}
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#6b4c7a] leading-tight mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {service.title}
        </h2>
        <p
          className="text-[#7a5c8a]/80 leading-relaxed text-base"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          {service.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-[#6b4c7a] border-b border-[#cdb4db] pb-1 hover:text-[#a2d2ff] hover:border-[#a2d2ff] transition-colors duration-300"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Book Now
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="services" className="py-28 px-8 md:px-16 max-w-7xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-24">
        <p
          className="text-xs tracking-[0.25em] uppercase text-[#a2d2ff] mb-4"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          What We Offer
        </p>
        <h2
          className="text-5xl md:text-6xl font-bold text-[#6b4c7a]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our Services
        </h2>
        <div className="mt-5 mx-auto w-16 h-px bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]" />
      </div>

      {/* Service cards */}
      <div className="flex flex-col gap-28">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
