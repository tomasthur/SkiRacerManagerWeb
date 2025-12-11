"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const isEnglish = !pathname.startsWith('/sk');
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'cta'];
      const scrollPosition = window.scrollY + 200; // Increased offset for navbar
      let currentSection = 'home';

      // Check each section to find which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="container-max py-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href={isEnglish ? "/" : "/sk"} className="flex items-center ml-2">
            <img src="/images/logo.png" alt="Ski Racer Manager" className="h-12 w-12 object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-lightBlue/90">
            <a 
              href="#" 
              className={`hover:text-white transition-colors ${
                activeSection === 'home' ? 'text-orange font-semibold' : ''
              }`}
            >
              {isEnglish ? "Home" : "Domov"}
            </a>
            <a 
              href="#features" 
              className={`hover:text-white transition-colors ${
                activeSection === 'features' ? 'text-orange font-semibold' : ''
              }`}
            >
              {isEnglish ? "Features" : "Funkcie"}
            </a>
            <a 
              href="#cta" 
              className={`hover:text-white transition-colors ${
                activeSection === 'cta' ? 'text-orange font-semibold' : ''
              }`}
            >
              {isEnglish ? "Download" : "Stiahni"}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link 
              href={isEnglish ? "/sk" : "/"} 
              className="text-sm px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              {isEnglish ? "SK" : "EN"}
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-lightBlue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 glass rounded-2xl mx-4 p-4"
          >
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className={`text-lightBlue/90 hover:text-white transition-colors py-2 ${
                  activeSection === 'home' ? 'text-orange font-semibold' : ''
                }`}
              >
                {isEnglish ? "Home" : "Domov"}
              </a>
              <a 
                href="#features" 
                onClick={closeMobileMenu}
                className={`text-lightBlue/90 hover:text-white transition-colors py-2 ${
                  activeSection === 'features' ? 'text-orange font-semibold' : ''
                }`}
              >
                {isEnglish ? "Features" : "Funkcie"}
              </a>
              <a 
                href="#cta" 
                onClick={closeMobileMenu}
                className={`text-lightBlue/90 hover:text-white transition-colors py-2 ${
                  activeSection === 'cta' ? 'text-orange font-semibold' : ''
                }`}
              >
                {isEnglish ? "Download" : "Stiahni"}
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
}

