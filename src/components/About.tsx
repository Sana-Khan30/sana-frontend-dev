import { motion } from "motion/react";
import Section from "./ui/Section";
import { Code2, Database, Layout, Palette, Terminal, Zap } from "lucide-react";

const skills = [
  { name: "React.js", icon: Code2, color: "text-[#64FFDA]" },
  { name: "HTML5", icon: Layout, color: "text-orange-400" },
  { name: "CSS3", icon: Palette, color: "text-blue-400" },
  { name: "JavaScript", icon: Terminal, color: "text-yellow-400" },
  { name: "Firebase", icon: Database, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: Zap, color: "text-[#64FFDA]" },
  { name: "Figma", icon: Palette, color: "text-[#CCD6F6]" },
];

export default function About() {
  return (
    <Section id="about" className="bg-[#112240]/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            About Me
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed font-light">
            <p>
              I am a <span className="text-[#64FFDA] font-medium">Frontend Developer</span> specializing in building high-performance, growth-oriented SaaS landing pages. My mission is to bridge the gap between complex code and seamless user experiences by engineering scalable UI architectures.
            </p>
            <p>
              With a solid technical foundation from SMIT and a background in Pre-Engineering, I have evolved from an aspiring enthusiast into a result-driven developer. I don't just write code; I build digital assets that help products scale.
            </p>
            <p>
              Currently based in <span className="text-white font-medium">Karachi Division, Sindh, Pakistan</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-display">
            <span className="w-8 h-1 bg-[#64FFDA] rounded-full" />
            Tech Stack
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl glass-panel hover:border-[#64FFDA]/30 hover:bg-[#233554] transition-all group"
              >
                <skill.icon className={`w-8 h-8 mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                <p className="font-medium text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
