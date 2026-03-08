import { useState } from "react";
import FadeInUp from "./FadeInUp";

const contactDetails = [
  {
    label: "Visit Us",
    value: "123 Blossom Lane, Amman, Jordan",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+962 79 123 4567",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "hello@blushandbloom.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Opening Hours",
    value: "Mon – Sat: 10:00 – 20:00\nSun: 12:00 – 18:00",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const inputClass = `
  w-full px-5 py-3 rounded-2xl
  bg-white/30 backdrop-blur-sm
  border border-[#cdb4db]/50
  text-[#6b4c7a] placeholder-[#7a5c8a]/50
  text-sm outline-none
  focus:border-[#a2d2ff] focus:bg-white/40
  transition-all duration-300
`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-8 md:px-16 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#cdb4db]/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#bde0fe]/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#a2d2ff]/15 blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <FadeInUp delay={1}>
            <p
              className="text-sm tracking-[0.28em] uppercase text-[#4a7fa5] font-medium mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Get In Touch
            </p>
          </FadeInUp>
          <FadeInUp delay={2}>
            <h2
              className="text-5xl md:text-6xl font-bold text-[#6b4c7a]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Book Your Appointment
            </h2>
          </FadeInUp>
          <FadeInUp delay={3}>
            <div className="mt-5 mx-auto w-16 h-px bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]" />
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — contact info */}
          <FadeInUp delay={1}>
            <div className="space-y-8">
              <div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-[#6b4c7a] leading-snug mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  We would love to<br />
                  <span className="text-[#cdb4db]">hear from you.</span>
                </h3>
                <p
                  className="text-[#7a5c8a]/80 leading-relaxed text-base max-w-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  Book your next appointment with us and experience nail artistry
                  in a space designed for elegance, comfort, and beauty.
                </p>
              </div>

              <div className="space-y-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {/* Icon bubble */}
                    <div
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[#6b4c7a] border border-[#cdb4db]/50 bg-white/30 backdrop-blur-sm"
                      style={{ boxShadow: "0 4px 15px rgba(205,180,219,0.25)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-[0.18em] uppercase text-[#4a7fa5] font-medium mb-1"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-[#6b4c7a] text-sm leading-relaxed whitespace-pre-line"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Right — booking form */}
          <FadeInUp delay={2}>
            <div
              className="relative rounded-3xl border border-white/40 bg-white/20 backdrop-blur-xl p-8 overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(205,180,219,0.25), 0 8px 25px rgba(162,210,255,0.15), inset 0 2px 0 rgba(255,255,255,0.6)" }}
            >
              {/* Card water blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#cdb4db]/30 blur-2xl animate-pulse pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#bde0fe]/25 blur-xl animate-pulse pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#cdb4db]/30 flex items-center justify-center border border-[#cdb4db]/50">
                    <svg className="w-8 h-8 text-[#6b4c7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#6b4c7a]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Appointment Requested!
                  </h3>
                  <p
                    className="text-[#7a5c8a]/80 text-sm max-w-xs"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Thank you, {form.name}. We will confirm your booking shortly via email or phone.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "", message: "" }); }}
                    className="mt-4 text-xs tracking-widest uppercase text-[#4a7fa5] border-b border-[#a2d2ff] pb-0.5 hover:text-[#6b4c7a] transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-4">
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#4a7fa5] font-medium mb-6"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Fill in your details
                  </p>

                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                  </div>

                  {/* Date */}
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Any special requests or notes... (optional)"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-sm font-semibold text-white tracking-widest uppercase
                      bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]
                      shadow-lg shadow-[#cdb4db]/40
                      hover:scale-[1.02] hover:shadow-[#a2d2ff]/50
                      transition-all duration-300 mt-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Confirm Appointment
                  </button>
                </form>
              )}
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* Footer line */}
      <div className="mt-12 pt-5 border-t border-[#cdb4db]/30 text-center">
        <p
          className="text-xs text-[#7a5c8a]/60 tracking-widest"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          © 2026 Blush & Bloom. All rights reserved.
        </p>
      </div>

    </section>
  );
}
