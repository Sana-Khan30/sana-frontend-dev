import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
