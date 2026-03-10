import FadeInUp from "./FadeInUp";
import salon1 from "../imgs/salon1.jpg";
import salon2 from "../imgs/salon2.jpg";
import salon3 from "../imgs/salon3.jpg";

function SalonDrop({ img, style, className }) {
  return (
    <div
      className={`overflow-hidden border-2 border-white/50 transition-transform duration-500 hover:-translate-y-3 ${className}`}
      style={style}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-[#cdb4db]/40 blur-xl animate-pulse" />
        <div className="absolute bottom-4 right-2 w-20 h-20 rounded-full bg-[#bde0fe]/35 blur-lg animate-pulse" />
        <div className="absolute top-3 left-5 w-16 h-6 rounded-full bg-white/30 blur-md -rotate-12" />
      </div>
    </div>
  );
}

const marqueeWords = [
  "Blush & Bloom",
  "Nail Artistry",
  "Elegance",
  "Creativity",
  "Natural Beauty",
  "Pure Craft",
  "Confidence",
  "Blush & Bloom",
  "Nail Artistry",
  "Elegance",
  "Creativity",
  "Natural Beauty",
  "Pure Craft",
  "Confidence",
];

const values = [
  {
    label: "Our Mission",
    text: "To bring salon-quality nail artistry to every client, in a space that feels as beautiful as the results we create.",
  },
  {
    label: "Our Craft",
    text: "Every detail matters. From the first stroke to the finishing shine, we treat each nail as a canvas for self-expression.",
  },
  {
    label: "Our Promise",
    text: "A relaxing, clean, and welcoming environment where you leave feeling polished, pampered, and completely confident.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="overflow-hidden">

      {/* ── Hero heading ── */}
      <div className="relative py-24 px-8 md:px-16 max-w-7xl mx-auto">

        {/* Background water blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#cdb4db]/25 blur-3xl animate-pulse" />
          <div className="absolute top-10 left-1/3 w-64 h-64 rounded-full bg-[#bde0fe]/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#a2d2ff]/15 blur-3xl animate-pulse" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-16 md:gap-24">

          {/* Left — big heading */}
          <div className="md:w-1/2">
            <FadeInUp delay={1}>
              <p
                className="text-sm tracking-[0.28em] uppercase text-[#4a7fa5] font-medium mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Who We Are
              </p>
            </FadeInUp>
            <FadeInUp delay={2}>
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#6b4c7a] leading-none mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our<br />
                <span className="text-[#cdb4db]">Story</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={3}>
              <p
                className="text-[#7a5c8a]/80 leading-relaxed text-base max-w-sm"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Born from a love of beauty and a passion for precision, Blush & Bloom
                is more than a nail studio — it is a sanctuary where elegance is crafted
                with intention, and every visit leaves you feeling like the best version of yourself.
              </p>
            </FadeInUp>
          </div>

          {/* Right — two water-drop images stacked with glow */}
          <div className="md:w-1/2 relative flex justify-center items-center" style={{ minHeight: 480 }}>

            {/* Back glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-[#cdb4db]/30 blur-3xl" />
            </div>

            {/* Salon 1 — large, left */}
            <SalonDrop
              img={salon1}
              className="absolute left-0 top-8 w-52 h-64"
              style={{
                borderRadius: "60% 40% 55% 45% / 50% 60% 45% 55%",
                boxShadow: "0 20px 50px rgba(107,76,122,0.3), 0 8px 20px rgba(162,210,255,0.2), inset 0 2px 0 rgba(255,255,255,0.6)",
              }}
            />

            {/* Salon 2 — large, center-right */}
            <SalonDrop
              img={salon2}
              className="absolute right-4 top-0 w-60 h-72 z-10"
              style={{
                borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%",
                boxShadow: "0 25px 60px rgba(107,76,122,0.35), 0 10px 25px rgba(189,224,254,0.25), inset 0 2px 0 rgba(255,255,255,0.6)",
              }}
            />

            {/* Salon 3 — small teardrop, bottom center */}
            <SalonDrop
              img={salon3}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-44 z-20"
              style={{
                borderRadius: "50% 50% 45% 55% / 45% 45% 60% 60%",
                boxShadow: "0 20px 45px rgba(162,210,255,0.35), 0 8px 20px rgba(107,76,122,0.2), inset 0 2px 0 rgba(255,255,255,0.6)",
              }}
            />

          </div>
        </div>
      </div>

      {/* ── Scrolling marquee ── */}
      <div className="relative py-5 overflow-hidden bg-[#ffafcc]/25 border-y border-[#ffafcc]/40 backdrop-blur-sm my-8">
        <div className="flex gap-10 animate-[marquee_18s_linear_infinite] whitespace-nowrap w-max">
          {marqueeWords.map((word, i) => (
            <span
              key={i}
              className="text-sm tracking-[0.2em] uppercase text-[#6b4c7a] font-medium flex items-center gap-10"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {word}
              <span className="w-1.5 h-1.5 rounded-full bg-[#cdb4db] inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Mission statement ── */}
      <div className="relative py-20 px-8 md:px-16 text-center max-w-4xl mx-auto">
        <FadeInUp delay={1}>
          <p
            className="text-xs tracking-[0.28em] uppercase text-[#4a7fa5] font-medium mb-6"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our Philosophy
          </p>
        </FadeInUp>
        <FadeInUp delay={2}>
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6b4c7a] leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We are committed to the{" "}
            <span className="text-[#7a5c8a]/60">beauty of every detail</span>
            {" "}and the confidence that comes from feeling{" "}
            <span className="text-[#cdb4db]">truly cared for.</span>
          </p>
        </FadeInUp>
        <div className="mt-8 mx-auto w-16 h-px bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]" />
      </div>

      {/* ── Values row ── */}
      <div className="relative pb-28 px-8 md:px-16 max-w-7xl mx-auto">

        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#bde0fe]/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-[#cdb4db]/15 blur-2xl animate-pulse" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <FadeInUp key={i} delay={i + 1}>
              <div
                className="p-8 relative"
              >
                {/* card water blob */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#cdb4db]/30 blur-xl animate-pulse" />

                <p
                  className="text-xs tracking-[0.2em] uppercase text-[#4a7fa5] font-medium mb-4"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {v.label}
                </p>
                <p
                  className="text-[#7a5c8a]/85 leading-relaxed text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {v.text}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

    </section>
  );
}
