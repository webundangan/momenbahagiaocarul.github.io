import { Heart } from "lucide-react";
import heroImage from "@/assets/wedding-hero.jpg";

export const WeddingHero = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(240, 171, 171, 0.9) 0%, rgba(244, 129, 107, 0.8) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content fade-in">
        <div className="mb-6 flex justify-center">
          <Heart className="w-12 h-12 text-white/80 fill-white/20 float-animation" />
        </div>
        
        <h1 className="hero-title">
          Oca Rosita Anwari, S.Pd & Nurul Zaman, S.Pd
        </h1>
        
        <p className="hero-subtitle">
          Kami mengundang Anda untuk merayakan cinta kami
        </p>
        
        <div className="hero-date">
          19 September 2024
        </div>
        
        <div className="mt-8">
          <button className="btn-romantic">
            RSVP Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};