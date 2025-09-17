import { useState } from "react";
import { useParams } from "react-router-dom";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { WeddingNavigation } from "@/components/WeddingNavigation";
import { WeddingHero } from "@/components/WeddingHero";
import { CoupleStory } from "@/components/CoupleStory";
import { WeddingDetails } from "@/components/WeddingDetails";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RSVPSection } from "@/components/RSVPSection";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const { guestName } = useParams();

  // format nama: default kalau kosong
  const formattedGuest =
    guestName
      ? decodeURIComponent(guestName)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : "Bapak/Ibu/Saudara/i";

  if (showWelcome) {
    return (
      <WelcomeScreen
        guestName={formattedGuest}
        onEnter={() => setShowWelcome(false)}
      />
    );
  }

  return (
    <main className="min-h-screen">
      <WeddingNavigation />
      <section id="hero">
        <WeddingHero />
      </section>
      <section id="story">
        <CoupleStory />
      </section>
      <section id="details">
        <WeddingDetails />
      </section>
      <section id="gallery">
        <PhotoGallery />
      </section>
      <section id="rsvp">
        <RSVPSection />
      </section>

      <footer className="bg-muted py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
            Oca Rosita Anwari & Nurul Zaman
          </h3>
          <div className="bg-muted/50 rounded-2xl p-6 mb-6 border border-border/50">
            <p className="text-foreground/90 mb-4 italic font-medium">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang."
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              QS. Ar-Rum: 21
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Oca & Arul Wedding. Dibuat dengan ❤️
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
