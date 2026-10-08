import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? darkMode
          ? "text-white font-semibold underline underline-offset-8"
          : "text-black font-semibold underline underline-offset-8"
        : darkMode
        ? "text-zinc-400 hover:text-white"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition border-b ${
        darkMode
          ? "bg-black/90 backdrop-blur border-zinc-800 text-white"
          : "bg-white/90 backdrop-blur border-gray-100 text-black shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="font-bold text-xl tracking-tight hover:opacity-80 transition"
        >
          Pasula Shloka
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-lg border transition text-sm ${
              darkMode
                ? "border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-yellow-400"
                : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-lg border text-sm"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 py-4 border-t flex flex-col gap-4 ${
            darkMode ? "bg-zinc-900 border-zinc-800" : "bg-gray-50 border-gray-200"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;