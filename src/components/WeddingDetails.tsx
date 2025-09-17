import { Calendar, Clock, MapPin, Church, Utensils } from "lucide-react";

export const WeddingDetails = () => {
  return (
    <section className="wedding-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title slide-up">
          Detail Acara
        </h2>
        <p className="section-subtitle slide-up">
          Bergabunglah bersama kami dalam merayakan hari istimewa ini
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Akad Nikah */}
          <div className="wedding-card slide-up">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                <Church className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Akad Nikah</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Kamis, 19 September 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">08:00 - 10:00 WIB</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Kediaman Mempelai Wanita</p>
                    <p className="text-muted-foreground text-sm">
                      Kp. Cibojong Kec. Kalapanunggal<br />
                      Sukabumi Jawa Barat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div className="wedding-card slide-up">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Resepsi</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Kamis, 19 September 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">10:00 - 21:00 WIB</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Kediaman Mempelai Wanita</p>
                    <p className="text-muted-foreground text-sm">
                      Kp Cibojong<br />
                      Kecamatan Kalapanunggal<br />
                      Sukabumi Jawa Barat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="wedding-card slide-up">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">Lokasi</h3>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Peta lokasi akan ditampilkan di sini</p>
              <p className="text-sm">Google Maps integration</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 justify-center">
            <button className="btn-elegant">
              Buka di Google Maps
            </button>
            <button className="btn-elegant">
              Petunjuk Arah
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};