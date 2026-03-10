import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none atmosphere" />

      {/* Controls */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center relative z-10">
        <Link to="/" className="text-[#64FFDA] hover:text-white flex items-center gap-2 font-medium transition-colors uppercase tracking-wider text-sm">
          ← Back to Portfolio
        </Link>
      </div>

      {/* Resume Paper */}
      <div className="max-w-[210mm] mx-auto bg-white text-slate-900 shadow-2xl overflow-hidden relative z-10">
        {/* Header */}
        <header className="bg-[#112240] text-white p-8 md:p-12 border-b-4 border-[#64FFDA]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-display">Sana Samad</h1>
              <p className="text-xl text-[#64FFDA] font-medium tracking-wide">Frontend Developer (React.js)</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-300 font-light">
              <a href="mailto:sanasamad592@gmail.com" className="flex items-center gap-2 hover:text-[#64FFDA] transition-colors">
                <Mail className="w-4 h-4 text-[#64FFDA]" /> sanasamad592@gmail.com
              </a>
              <a href="tel:03226350189" className="flex items-center gap-2 hover:text-[#64FFDA] transition-colors">
                <Phone className="w-4 h-4 text-[#64FFDA]" /> 0322 6350189
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#64FFDA]" /> Karachi Division, Sindh, Pakistan
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://github.com/Sana-Khan30" className="hover:text-[#64FFDA] transition-colors"><Github className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/sana-khan30" className="hover:text-[#64FFDA] transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Profile */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Profile</h2>
              <p className="text-slate-600 leading-relaxed text-sm text-justify">
                Motivated Frontend Developer with a solid foundation in HTML5, CSS3, JavaScript, and React.js. Currently pursuing graduation and refining full-stack skills through a MERN Stack program at SMIT. Hands-on experience in building responsive web applications using Tailwind CSS, Bootstrap, and Firebase. I bring a unique blend of technical expertise and professional discipline from a 1-year tenure as a Sales Officer at HBL, making me a collaborative and result-oriented team player.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800 text-lg">Banca Sales Officer</h3>
                  <span className="text-sm font-medium text-[#64FFDA] bg-[#64FFDA]/10 px-2 py-0.5 rounded border border-[#64FFDA]/20">2024 - 2025</span>
                </div>
                <div className="text-slate-700 font-medium mb-2">HBL (Habib Bank Limited)</div>
                <p className="text-sm text-slate-600">
                  Experienced in professional corporate environments through a 1-year role at HBL. Developed strong communication, client management, and problem-solving skills essential for collaborative technical roles.
                </p>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Key Projects</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-800">Resume Builder App</h3>
                    <a href="https://cv-master-kappa.vercel.app/" className="text-xs text-[#CCD6F6] hover:underline font-medium">cv-master-kappa.vercel.app</a>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">
                    A modern, professional resume builder application that helps job seekers create stunning resumes in minutes.
                  </p>
                  <p className="text-xs font-mono text-slate-500">
                    <span className="font-bold text-slate-700">Tech:</span> React, Tailwind CSS, Firebase
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-800">Sushi Restaurant Website</h3>
                    <a href="https://react-luxury-sushi-web.vercel.app/" className="text-xs text-[#CCD6F6] hover:underline font-medium">react-luxury-sushi-web.vercel.app</a>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">
                    A premium React-based Luxury Sushi Restaurant Landing Page with advanced scroll navigation and cart logic.
                  </p>
                  <p className="text-xs font-mono text-slate-500">
                    <span className="font-bold text-slate-700">Tech:</span> React.js, Hooks, Context API, Tailwind CSS
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-800">Firebase ChatApp</h3>
                    <a href="https://firebase-chatpp.netlify.app/" className="text-xs text-[#CCD6F6] hover:underline font-medium">firebase-chatpp.netlify.app</a>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">
                    Real-time chat application with user authentication, instant messaging, and cloud storage.
                  </p>
                  <p className="text-xs font-mono text-slate-500">
                    <span className="font-bold text-slate-700">Tech:</span> HTML, CSS, JavaScript, Firebase (Firestore, Auth)
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Skills</h2>
              <div className="space-y-2">
                {["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Firebase", "Git & GitHub"].map((skill) => (
                  <div key={skill} className="bg-slate-50 px-3 py-2 rounded text-sm font-medium text-slate-700 border-l-4 border-[#64FFDA] shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Education</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Graduation (In Process)</h3>
                  <p className="text-xs text-slate-500">Pre-Engineering</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Intermediate</h3>
                  <p className="text-xs text-slate-600">Board of Intermediate Education Karachi</p>
                  <p className="text-xs text-slate-500">Pre-Engineering • 2022</p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Matriculation</h3>
                  <p className="text-xs text-slate-600">Board of Secondary Education Karachi</p>
                  <p className="text-xs text-slate-500">Computer Science • 2020</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Certifications</h2>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Diploma in Information Technology</h3>
                <p className="text-xs text-slate-600">VTC</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-2 mb-4 font-display">Languages</h2>
              <div className="flex gap-2">
                <span className="bg-[#112240] text-white px-3 py-1 rounded text-xs font-medium">English</span>
                <span className="bg-[#112240] text-white px-3 py-1 rounded text-xs font-medium">Urdu</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
