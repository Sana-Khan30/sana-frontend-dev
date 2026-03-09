import { motion } from "motion/react";
import Section from "./ui/Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Professional Experience</h2>
          <div className="h-1 w-20 bg-[#64FFDA] mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {/* Role 1 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-[#64FFDA] ring-4 ring-[#0A192F] shadow-[0_0_10px_rgba(100,255,218,0.5)]" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white font-display">Banca Sales Officer</h3>
              <span className="text-sm font-mono text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-[#64FFDA]/20">
                1 Year
              </span>
            </div>
            
            <div className="text-lg text-slate-400 font-medium mb-4">@ HBL (Habib Bank Limited)</div>
            
            <p className="text-slate-500 leading-relaxed font-light">
              Gained valuable experience in financial services and client relationship management, developing strong communication and problem-solving skills that I now apply to technical client requirements and project management.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
