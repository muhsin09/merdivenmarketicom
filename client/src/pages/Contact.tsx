import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in production, this would be an API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Log form data (in production, send to backend)
      console.log("Form submitted:", formData);
      
      toast.success("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-accent via-background to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                İletişim
              </h1>
              <p className="text-lg text-muted-foreground">
                Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefon</h3>
                        <p className="text-sm text-muted-foreground">+90 536 810 42 78</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-posta</h3>
                        <p className="text-sm text-muted-foreground">itimatahsapmerdiven@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adres</h3>
                        <p className="text-sm text-muted-foreground">
                          Önder Mah. Ulubat Sk. No:69 Kat:2<br />
                          Siteler 06360 Altındağ/Ankara
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                        <p className="text-sm text-muted-foreground">
                          Pazartesi - Cuma: 09:00 - 18:00<br />
                          Cumartesi: 09:00 - 14:00<br />
                          Pazar: Kapalı
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ad Soyad *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Adınız ve soyadınız"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-posta *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ornek@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+90 XXX XXX XX XX"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Konu *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Mesajınızın konusu"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mesajınız *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Mesajınızı buraya yazın..."
                          rows={8}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                      </Button>

                      <p className="text-sm text-muted-foreground">
                        * işaretli alanlar zorunludur
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Konumumuz</h2>
                <p className="text-muted-foreground">
                  Önder Mah. Ulubat Sk. No:69 Kat:2, Siteler 06360 Altındağ/Ankara
                </p>
              </div>
              
              <Card className="overflow-hidden border-2">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps?q=XV7W%2B27%20Alt%C4%B1nda%C4%9F%2C%20Ankara&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BEREKET AHŞAP KAPI MUTFAK ORMAN ÜRÜNLERİ LTD. ŞTİ. Konumu"
                    className="w-full h-full"
                  />
                </div>
              </Card>
              
              <div className="mt-6 text-center">
                <Button 
                  asChild
                  variant="outline"
                  className="gap-2"
                >
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=XV7W%2B27%20Alt%C4%B1nda%C4%9F%2C%20Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4" />
                    Yol Tarifi Al
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

