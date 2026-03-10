import { motion } from "motion/react";
import Section from "./ui/Section";
import { ArrowRight, FileText, Terminal, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-32 md:pt-0 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none atmosphere" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
            </span>
            <span className="text-xs font-bold text-[#64FFDA] tracking-widest uppercase">
              Available for Work
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#CCD6F6] text-glow">
              Next-Gen
            </span>{" "}
            <br />
            Experiences
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-light">
            I engineer scalable UI architectures that bridge the gap between complex code and seamless user experiences. Specializing in React.js and high-performance web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-[#64FFDA] text-[#0A192F] font-bold hover:bg-[#64FFDA]/90 transition-all shadow-[0_0_20px_-5px_rgba(100,255,218,0.5)] hover:shadow-[0_0_30px_-5px_rgba(100,255,218,0.6)] flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/resume"
              className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto mt-10">
            {/* Main Image Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl overflow-hidden border border-[#64FFDA]/20 shadow-[0_0_40px_rgba(100,255,218,0.15)] z-20 bg-[#112240]"
            >
              <img 
                src="https://picsum.photos/seed/developer/800/800?blur=1" 
                alt="Developer" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="font-mono text-sm text-[#64FFDA] mb-2">{"<Developer />"}</div>
                <div className="text-2xl font-display font-bold text-white">Sana Samad</div>
                <div className="text-slate-400 mt-1">Frontend Engineer</div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-30 glass-panel p-4 rounded-2xl flex items-center gap-3 shadow-xl border border-[#64FFDA]/20"
            >
              <div className="w-10 h-10 rounded-full bg-[#64FFDA]/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Clean Code</p>
                <p className="text-xs text-slate-400">Architecture</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-30 glass-panel p-4 rounded-2xl flex items-center gap-3 shadow-xl border border-[#CCD6F6]/20"
            >
              <div className="w-10 h-10 rounded-full bg-[#CCD6F6]/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#CCD6F6]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">React.js</p>
                <p className="text-xs text-slate-400">Ecosystem</p>
              </div>
            </motion.div>

            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#64FFDA] rounded-full opacity-10 blur-[80px] animate-pulse z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CCD6F6] rounded-full opacity-10 blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
