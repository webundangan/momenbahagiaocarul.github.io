import { useState } from "react";
import { Heart, Music } from "lucide-react";
import heroImage from "@/assets/wedding-hero.jpg";

interface WelcomeScreenProps {
  guestName: string;
  onEnter: () => void;
}

export const WelcomeScreen = ({ guestName, onEnter }: WelcomeScreenProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    // Play background music
    const audio = new Audio("/wedding-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(console.error);
    setIsPlaying(true);
    onEnter();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center px-6 max-w-md mx-auto">
        <div className="mb-8 flex justify-center">
          <Heart className="w-16 h-16 text-white/80 fill-white/20 float-animation" />
        </div>
        
        <h1 className="text-2xl font-playfair font-bold text-white mb-4">
          Undangan Pernikahan
        </h1>
        
        <h2 className="text-4xl font-playfair font-bold text-white mb-6">
          Oca Rosita Anwari, S.Pd & Nurul Zaman, S.Pd
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <p className="text-white/90 mb-2">Kepada Yth.</p>
          <p className="text-2xl font-playfair font-bold text-white mb-4">{guestName}</p>
          <p className="text-white/80 text-sm">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir 
            di acara pernikahan kami
          </p>
        </div>

        <div className="mb-6">
          <p className="text-white/70 text-sm italic mb-2">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
            isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa 
            tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
          </p>
          <p className="text-white/60 text-xs">QS. Ar-Rum: 21</p>
        </div>
        
        <button
          onClick={handleEnter}
          className="btn-romantic flex items-center gap-2 mx-auto"
        >
          <Music className="w-4 h-4" />
          Buka Undangan
        </button>
      </div>
    </div>
  );
};