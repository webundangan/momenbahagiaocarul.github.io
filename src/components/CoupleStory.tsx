import { Heart, Calendar, MapPin } from "lucide-react";

export const CoupleStory = () => {
  return (
    <section className="wedding-section bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title slide-up">
          Kisah Cinta Kami
        </h2>
        <p className="section-subtitle slide-up">
          Perjalanan indah yang membawa kami ke momen bahagia ini
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="wedding-card slide-up">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 romantic-glow">
                <Heart className="w-12 h-12 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Oca Rosita Anwari, S.Pd</h3>
              <p className="text-muted-foreground">
                Seorang Guru yang mengajar dengan ketekunan dan penuh kasih sayang
              </p>
            </div>
          </div>

          <div className="wedding-card slide-up">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4 romantic-glow">
                <Heart className="w-12 h-12 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Nurul Zaman, S.Pd</h3>
              <p className="text-muted-foreground">
                Seorang guru dengan yang mengabdikan diri sehingga bertemu cinta sejati 
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 wedding-card slide-up">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Bagaimana Kami Bertemu
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Pertemuan Pertama</h4>
                  <p className="text-muted-foreground">
                    Kami bertemu di sebuah acara haflah yang diadakan oleh SMP Baet El Anshar kami sama sama 
                    menjadi pembawa acara pada kegiatan tersebut, 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Jatuh Cinta</h4>
                  <p className="text-muted-foreground">
                    Setelah berbincang tentang kehidupan masing-masing, kami merasa ada koneksi istimewa. 
                    Pertemuan itu menjadi awal dari petualangan cinta yang indah.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Lamaran</h4>
                  <p className="text-muted-foreground">
                    Arul melamar Oca di tempat pertama kali mereka bertemu,  walaupun jauh kami tetap percaya cinta sejati akan bertemu di satu tempat 
                    bahagisa dan iu kami buktikan hari ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};