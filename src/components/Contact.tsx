import { motion } from "motion/react";
import Section from "./ui/Section";
import { Mail, MapPin, Github, Linkedin, Phone, Send, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Check if environment variables are set
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUB_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "YOUR_SERVICE_ID") {
      Swal.fire({
        title: "Configuration Missing",
        text: "Please set your EmailJS Service ID, Template ID, and Public Key in the .env file.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
        background: "#112240",
        color: "#fff"
      });
      return;
    }

    setIsSending(true);

    try {
      // Add a timeout to prevent hanging
      const sendPromise = emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Request timed out")), 10000)
      );

      await Promise.race([sendPromise, timeoutPromise]);
      
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully. I'll get back to you soon!",
        icon: "success",
        confirmButtonColor: "#64FFDA",
        background: "#112240",
        color: "#fff"
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      
      let errorMessage = "Failed to send message. Please try again later.";
      if (error instanceof Error && error.message === "Request timed out") {
        errorMessage = "Request timed out. Please check your internet connection.";
      } else if (typeof error === "object" && error !== null && "text" in error) {
        // Handle EmailJS specific error object
        errorMessage = (error as { text: string }).text;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Swal.fire({
        title: "Error!",
        text: `${errorMessage}\n(Key used: ${publicKey})`,
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "#112240",
        color: "#fff"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#64FFDA]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CCD6F6]/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center text-[#64FFDA] border border-[#64FFDA]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email me at</p>
                  <a href="mailto:sanasamad592@gmail.com" className="text-white font-medium hover:text-[#64FFDA] transition-colors">
                    sanasamad592@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center text-[#CCD6F6] border border-[#CCD6F6]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Based in</p>
                  <p className="text-white font-medium">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center text-blue-400 border border-blue-400/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Phone</p>
                  <a href="tel:03226350189" className="text-white font-medium hover:text-blue-400 transition-colors">
                    0322 6350189
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a 
                href="https://github.com/Sana-Khan30" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center text-slate-400 hover:bg-[#64FFDA] hover:text-black transition-all border border-white/5 hover:border-[#64FFDA]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sana-khan30" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center text-slate-400 hover:bg-[#64FFDA] hover:text-black transition-all border border-white/5 hover:border-[#64FFDA]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                name="user_name"
                id="user_name" 
                required
                className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] transition-all font-light"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                name="user_email"
                id="user_email" 
                required
                className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] transition-all font-light"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea 
                name="message"
                id="message" 
                required
                rows={4}
                className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] transition-all resize-none font-light"
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              type="submit"
              disabled={isSending}
              className="w-full bg-[#64FFDA] text-black font-bold py-4 rounded-xl hover:bg-[#64FFDA]/90 transition-all shadow-[0_0_20px_-5px_rgba(100,255,218,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest mt-2"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
