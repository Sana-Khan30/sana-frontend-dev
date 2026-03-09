import { motion } from "motion/react";
import Section from "./ui/Section";
import { ExternalLink, Github, Search, Eye, Code, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Resume Builder App",
    description: "A modern, professional resume builder application that helps job seekers create stunning resumes in minutes.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://cv-master-kappa.vercel.app/",
    codeUrl: "#", // Placeholder
    category: "React",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sushi Restaurant Website",
    description: "A premium React-based Luxury Sushi Restaurant Landing Page with advanced scroll navigation and cart logic.",
    tags: ["React.js", "Context API", "Tailwind CSS"],
    liveUrl: "https://react-luxury-sushi-web.vercel.app/",
    codeUrl: "#", // Placeholder
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Firebase ChatApp",
    description: "Real-time chat application with user authentication, instant messaging, and cloud storage.",
    tags: ["JavaScript", "Firebase", "Auth"],
    liveUrl: "https://firebase-chatpp.netlify.app/",
    codeUrl: "#", // Placeholder
    category: "Firebase",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "DrivePro-X",
    description: "A sleek, interactive showcase of premium electric and luxury cars with smooth animations and 3D hover effects.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
    liveUrl: "https://drivepro-x.netlify.app/",
    codeUrl: "#", // Placeholder
    category: "HTML/CSS",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Health Website",
    description: "A clean and responsive healthcare landing page featuring modern design, doctor section, services, and smooth layout.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "SweetAlert2"],
    liveUrl: "https://health-website-from-tailwind.netlify.app/",
    codeUrl: "#", // Placeholder
    category: "HTML/CSS",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Eclat-Beauty",
    description: "A fully responsive, modern beauty and salon website showcasing services, products, and testimonials.",
    tags: ["React.js", "Tailwind CSS"],
    liveUrl: "https://eclat-beauty.vercel.app/",
    codeUrl: "#", // Placeholder
    category: "React",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Coffee Shop Landing Page",
    description: "A modern coffee shop website built with React and GSAP animations for an immersive user experience.",
    tags: ["React", "GSAP", "Animations"],
    liveUrl: "https://coffee-shop-landing-page-ikzzrlgf9-sanas-projects-7e9aff20.vercel.app/",
    codeUrl: "#", // Placeholder
    category: "React",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Image Gallery",
    description: "A responsive image gallery showcasing a collection of images with a clean and intuitive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://sana-khan30.github.io/ImageGallery/",
    codeUrl: "#", // Placeholder
    category: "HTML/CSS",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All Projects", "React", "Firebase", "E-commerce", "HTML/CSS"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All Projects" || 
      (activeCategory === "React" && (project.category === "React" || project.tags.some(t => t.includes("React")))) ||
      (activeCategory === "Firebase" && (project.category === "Firebase" || project.tags.includes("Firebase"))) ||
      (activeCategory === "E-commerce" && project.category === "E-commerce") ||
      (activeCategory === "HTML/CSS" && (project.category === "HTML/CSS" || project.tags.includes("HTML5")));
    
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Section id="projects" className="bg-[#0A192F]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-display">
              Project Gallery
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              A curated selection of my latest frontend engineering projects, from high-performance e-commerce platforms to interactive data visualization dashboards.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500 group-focus-within:text-[#64FFDA] transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full md:w-64 pl-10 pr-3 py-2.5 border border-white/10 rounded-lg leading-5 bg-[#112240] text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-[#233554] focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] sm:text-sm transition-all"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium justify-end">
              <Info className="w-4 h-4" />
              <span>Showing {filteredProjects.length} projects</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 text-sm font-semibold transition-all uppercase tracking-wider ${
                activeCategory === category
                  ? "bg-[#64FFDA] text-black shadow-lg shadow-[#64FFDA]/20"
                  : "bg-[#112240] text-slate-400 hover:bg-[#233554] hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col glass-panel rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#64FFDA]/10 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#112240]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#64FFDA] transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-0.5 rounded-md bg-[#64FFDA]/10 text-[#64FFDA] text-xs font-semibold border border-[#64FFDA]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black text-sm font-bold h-11 rounded-lg hover:bg-[#64FFDA] transition-colors uppercase tracking-wider"
                  >
                    <Eye className="w-4 h-4" />
                    View Live
                  </a>
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-11 h-11 bg-[#112240] text-slate-400 rounded-lg hover:text-white hover:bg-[#233554] transition-colors border border-white/10"
                    title="View Code"
                  >
                    <Code className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination (Visual Only for now) */}
        <div className="flex items-center justify-center gap-2 mt-16">
          <button className="flex size-10 items-center justify-center text-slate-500 hover:text-[#64FFDA] transition-colors disabled:opacity-50">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="text-sm font-bold flex size-10 items-center justify-center text-black rounded-lg bg-[#64FFDA] shadow-lg shadow-[#64FFDA]/30">
            1
          </button>
          <button className="flex size-10 items-center justify-center text-slate-500 hover:text-[#64FFDA] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
