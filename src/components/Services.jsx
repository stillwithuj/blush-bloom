import { useState, useEffect, useRef } from "react";
import FadeInUp from "./FadeInUp";

import normal1 from "../imgs/normal1.jpg";
import normal2 from "../imgs/normal2.jpg";
import normal3 from "../imgs/normal3.jpg";
import normal4 from "../imgs/normal4.jpg";

import gel1 from "../imgs/gel1.jpg";
import gel2 from "../imgs/gel2.webp";
import gel3 from "../imgs/gel3.webp";
import gel4 from "../imgs/gel4.webp";

import kit1 from "../imgs/kit1.jpg";
import kit2 from "../imgs/kit2.jpg";
import kit3 from "../imgs/kit3.jpg";

import spa1 from "../imgs/spa1.jpg";
import spa2 from "../imgs/spa2.jpg";
import spa3 from "../imgs/spa3.jpg";

const services = [
  {
    images: [normal1, normal2, normal3, normal4],
    title: "Classic Manicure",
    description:
      "A timeless treatment that shapes, buffs, and polishes your nails to perfection. Our classic manicure leaves your hands feeling soft, clean, and beautifully finished.",
    align: "left",
    shape: "60% 40% 50% 50% / 55% 45% 60% 50%",
  },
  {
    images: [gel1, gel2, gel3, gel4],
    title: "Gel Nails",
    description:
      "Long-lasting, chip-free colour that stays flawless for up to three weeks. Our gel treatments combine strength with a mirror-shine finish that elevates every look.",
    align: "right",
    shape: "50% 50% 40% 60% / 60% 50% 55% 45%",
  },
  {
    images: [kit1, kit2, kit3],
    title: "Order Your Kit",
    description:
      "Bring the salon experience home. Our curated nail kits include everything you need for a professional finish — delivered straight to your door, ready whenever you are.",
    align: "left",
    shape: "45% 55% 60% 40% / 50% 60% 45% 55%",
  },
  {
    images: [spa1, spa2, spa3],
    title: "Hand & Foot Spa",
    description:
      "Indulge in a deeply relaxing cleansing ritual for your hands and feet. We soften, exfoliate, and nourish every inch, leaving you feeling refreshed and completely pampered.",
    align: "right",
    shape: "55% 45% 50% 60% / 45% 55% 60% 50%",
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
      className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
    >
      {/* Water drop image frame */}
      <div className="relative shrink-0" style={{ width: 360, height: 360 }}>

        {/* Floating shadow underneath */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-56 h-10 bg-[#6b4c7a]/25 blur-2xl"
          style={{ borderRadius: "50%", transform: "translateX(-50%) translateY(18px) scaleY(0.4)" }}
        />

        {/* Water drop container */}
        <div
          className="relative w-full h-full overflow-hidden border-2 border-white/50 cursor-pointer transition-transform duration-500 hover:-translate-y-3"
          style={{
            borderRadius: service.shape,
            boxShadow:
              "0 25px 50px rgba(107,76,122,0.3), 0 10px 25px rgba(162,210,255,0.25), inset 0 2px 0 rgba(255,255,255,0.65)",
          }}
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

          {/* Glass water overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#cdb4db]/45 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 right-2 w-32 h-32 rounded-full bg-[#bde0fe]/40 blur-xl animate-pulse" />
            <div className="absolute top-1/3 -right-6 w-24 h-24 rounded-full bg-[#a2d2ff]/35 blur-lg animate-pulse" />
            {/* shine arc highlight */}
            <div className="absolute top-5 left-8 w-24 h-8 rounded-full bg-white/35 blur-md -rotate-12" />
            {/* rim */}
            <div className="absolute inset-0 border border-white/20" style={{ borderRadius: service.shape }} />
          </div>
        </div>

        {/* Dot indicators on hover */}
        {hovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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
        <FadeInUp delay={1}>
          <p
            className="text-sm tracking-[0.22em] uppercase text-[#4a7fa5] font-medium mb-3"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Service 0{index + 1}
          </p>
        </FadeInUp>
        <FadeInUp delay={2}>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#6b4c7a] leading-tight mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {service.title}
          </h2>
        </FadeInUp>
        <FadeInUp delay={3}>
          <p
            className="text-[#7a5c8a]/80 leading-relaxed text-base"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            {service.description}
          </p>
        </FadeInUp>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-[#6b4c7a] border-b border-[#cdb4db] pb-1 hover:text-[#4a7fa5] hover:border-[#a2d2ff] transition-colors duration-300"
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

export default function Services() {
  return (
    <section id="services" className="py-28 px-8 md:px-16 max-w-7xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-24">
        <p
          className="text-sm tracking-[0.28em] uppercase text-[#4a7fa5] font-medium mb-4"
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
      <div className="flex flex-col gap-32">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
