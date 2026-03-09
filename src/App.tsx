import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-[#0A192F]">
        <p>Designed & Developed by Sana Samad</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <div className="bg-[#0A192F] min-h-screen text-slate-200 selection:bg-[#64FFDA]/30 selection:text-[#64FFDA]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}
