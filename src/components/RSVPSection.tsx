import { useState } from "react";
import { Send, Users, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Terkirim!",
      description: "Terima kasih atas konfirmasi kehadiran Anda.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      attendance: "",
      guests: "1",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="wedding-section bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title slide-up">
          RSVP
        </h2>
        <p className="section-subtitle slide-up">
          Mohon konfirmasi kehadiran Anda sebelum tanggal 1 Juni 2024
        </p>

        <div className="wedding-card slide-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Kehadiran Anda Sangat Berarti
            </h3>
            <p className="text-muted-foreground">
              Silakan isi form di bawah ini untuk mengkonfirmasi kehadiran Anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="attendance" className="block text-sm font-medium text-foreground mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <select
                  id="attendance"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Pilih konfirmasi</option>
                  <option value="yes">Ya, saya akan hadir</option>
                  <option value="no">Maaf, saya tidak dapat hadir</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                  Jumlah Tamu
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="1">1 orang</option>
                  <option value="2">2 orang</option>
                  <option value="3">3 orang</option>
                  <option value="4">4 orang</option>
                  <option value="5+">5+ orang</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Pesan & Ucapan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tuliskan pesan atau ucapan untuk mempelai..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn-romantic inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Kirim RSVP
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="wedding-card slide-up text-center">
            <Users className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Dress Code</h3>
            <p className="text-muted-foreground">
              Formal - Warna earth tone atau pastel
            </p>
          </div>
          
          <div className="wedding-card slide-up text-center">
            <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Gift Registry</h3>
            <p className="text-muted-foreground">
              Kehadiran dan doa Anda adalah hadiah terbaik
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};