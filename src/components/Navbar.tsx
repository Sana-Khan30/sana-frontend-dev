import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Github, Linkedin, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling for hash links if on the home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(2);
      const element = document.getElementById(hash);
      
      if (location.pathname === "/") {
        e.preventDefault();
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      // If not on home page, let the link navigate to /#hash normally
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-[#0A192F]/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-[#64FFDA]/10 border border-[#64FFDA]/20 group-hover:border-[#64FFDA]/50 transition-colors">
            <Terminal className="w-5 h-5 text-[#64FFDA]" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white font-display">
            Sana<span className="text-[#64FFDA]">.Dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-[#64FFDA] transition-colors relative group uppercase tracking-widest"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#64FFDA] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Sana-Khan30"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sana-khan30"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <Link
            to="/resume"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#64FFDA]/10 text-[#64FFDA] font-medium hover:bg-[#64FFDA] hover:text-black transition-all border border-[#64FFDA]/20 text-sm uppercase tracking-wider"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A192F] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-[#64FFDA] font-display uppercase tracking-widest"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/resume"
                className="flex items-center gap-2 text-[#64FFDA] font-medium uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="w-5 h-5" />
                View Resume
              </Link>
              <div className="flex gap-6 pt-4 border-t border-white/5">
                <a href="https://github.com/Sana-Khan30" className="text-slate-400 hover:text-white">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/sana-khan30" className="text-slate-400 hover:text-white">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
