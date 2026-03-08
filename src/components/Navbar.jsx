import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={`w-full max-w-7xl rounded-2xl border border-white/30 transition-all duration-700 ease-in-out overflow-hidden
          ${scrolled
            ? "bg-white/15 backdrop-blur-3xl shadow-2xl shadow-[#cdb4db]/40 opacity-90"
            : "bg-white/20 backdrop-blur-2xl shadow-xl shadow-[#bde0fe]/30"
          }
        `}
      >
        {/* Water blob decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
          <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-[#cdb4db]/60 blur-2xl animate-pulse" />
          <div className="absolute -top-6 left-1/4 w-44 h-44 rounded-full bg-[#bde0fe]/70 blur-2xl animate-pulse" />
          <div className="absolute -top-8 left-1/2 w-36 h-36 rounded-full bg-[#a2d2ff]/60 blur-xl animate-pulse" />
          <div className="absolute -top-10 right-8 w-48 h-48 rounded-full bg-[#cdb4db]/55 blur-2xl animate-pulse" />
          <div className="absolute top-1 right-1/3 w-28 h-28 rounded-full bg-[#bde0fe]/50 blur-lg animate-pulse" />
          {/* shine line on top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
        </div>

        <div className="relative px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#home">
            <span className="text-lg font-bold tracking-wide bg-linear-to-r from-[#6b4c7a] via-[#4a6fa5] to-[#3a8fc1] bg-clip-text text-transparent">
              Blush & Bloom
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#4a3560]/80 hover:text-[#4a3560] text-sm font-medium tracking-wide transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-[#cdb4db] to-[#a2d2ff] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Book Now button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]
              shadow-lg shadow-[#cdb4db]/50
              hover:scale-105 hover:shadow-[#a2d2ff]/60
              transition-all duration-300"
          >
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#4a3560]/80 hover:text-[#4a3560] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4 border-t border-white/20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#4a3560]/80 hover:text-[#4a3560] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#cdb4db] to-[#a2d2ff]"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
