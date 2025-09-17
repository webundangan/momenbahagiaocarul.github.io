import { useState, useEffect } from "react";
import { Heart, Users, Calendar, Camera, Mail, Menu, X } from "lucide-react";

const navigationItems = [
  { id: "hero", label: "Beranda", icon: Heart },
  { id: "story", label: "Kisah Kami", icon: Users },
  { id: "details", label: "Acara", icon: Calendar },
  { id: "gallery", label: "Galeri", icon: Camera },
  { id: "rsvp", label: "RSVP", icon: Mail },
];

export const WeddingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`fixed right-0 top-0 h-full z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}>
        <div className="h-5 w-5 lg:w-24 bg-white/10 backdrop-blur-md border-l border-white/20 flex flex-col items-center justify-center gap-6 p-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
                  isActive 
                    ? 'bg-white/30 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
                title={item.label}
              >
                <Icon className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                <span className="text-xs font-medium hidden lg:block">{item.label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};