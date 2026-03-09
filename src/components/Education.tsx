import { motion } from "motion/react";
import Section from "./ui/Section";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Graduation (Pre-engineering)",
    institution: "Graduation in process",
    year: "Present",
    icon: GraduationCap,
    color: "text-[#64FFDA]"
  },
  {
    degree: "Intermediate (Pre-engineering)",
    institution: "Board of Intermediate Education Karachi",
    year: "2022",
    icon: BookOpen,
    color: "text-[#CCD6F6]"
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "Board of Secondary Education Karachi",
    year: "2020",
    icon: BookOpen,
    color: "text-blue-400"
  }
];

const certifications = [
  {
    title: "Diploma in Information Technology",
    institution: "VTC",
    year: "Completed",
    icon: Award,
    color: "text-yellow-400"
  }
];

export default function Education() {
  return (
    <Section id="education" className="bg-[#112240]/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 font-display">
            <GraduationCap className="w-8 h-8 text-[#64FFDA]" />
            Education
          </h2>
          
          <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <span className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#0A192F] border-2 ${item.color.replace('text-', 'border-')}`} />
                <h3 className="text-xl font-bold text-white mb-1 font-display">{item.degree}</h3>
                <p className="text-slate-400 font-medium mb-1">{item.institution}</p>
                <span className="text-sm text-[#64FFDA] font-mono bg-[#64FFDA]/10 px-2 py-0.5 rounded border border-[#64FFDA]/20">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 font-display">
            <Award className="w-8 h-8 text-[#CCD6F6]" />
            Certifications
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass-panel hover:border-[#CCD6F6]/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#0A192F] group-hover:bg-[#CCD6F6]/10 transition-colors">
                    <cert.icon className={`w-6 h-6 ${cert.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#CCD6F6] transition-colors font-display">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 font-light">{cert.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
