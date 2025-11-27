import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleWhatsAppSend = () => {
    const phoneNumber = "905368104278"; // Country code + phone number without leading +
    const lines = [
      t("contact.whatsappMessage"),
      formData.name ? `${t("contact.whatsappName")}: ${formData.name}` : undefined,
      formData.email ? `${t("contact.whatsappEmail")}: ${formData.email}` : undefined,
      formData.subject ? `${t("contact.whatsappSubject")}: ${formData.subject}` : undefined,
      formData.message ? `${t("contact.whatsappMessageLabel")}: ${formData.message}` : undefined,
    ].filter(Boolean) as string[];
    const text = lines.join("\n");
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-accent via-background to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("contact.pageTitle")}</h1>
              <p className="text-lg text-muted-foreground">
                {t("contact.pageDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-12 sm:py-16">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Contact Information */}
              <div className="space-y-4 lg:space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                        <a
                          href="tel:+905368104278"
                          className="text-sm text-muted-foreground hover:underline"
                        >
                          +90 536 810 42 78
                        </a>
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
                        <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                        <p className="text-sm text-muted-foreground">
                          itimatahsapmerdiven@gmail.com
                        </p>
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
                        <h3 className="font-semibold mb-1">{t("contact.address")}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t("contact.addressLine1")}
                          <br />
                          {t("contact.addressLine2")}
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
                        <h3 className="font-semibold mb-1">{t("contact.workingHours")}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t("contact.workingHoursWeekday")}
                          <br />
                          {t("contact.workingHoursSaturday")}
                          <br />
                          {t("contact.workingHoursSunday")}
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
                    <form className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t("contact.formName")}</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t("contact.formNamePlaceholder")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{t("contact.formEmail")}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("contact.formEmailPlaceholder")}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">{t("contact.formSubject")}</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t("contact.formSubjectPlaceholder")}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t("contact.formMessage")}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contact.formMessagePlaceholder")}
                          rows={8}
                        />
                      </div>

                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="w-full md:w-auto gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                        onClick={handleWhatsAppSend}
                      >
                        <MessageCircle className="h-5 w-5" />
                        {t("contact.sendWhatsApp")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">{t("contact.locationTitle")}</h2>
                <p className="text-muted-foreground">
                  {t("contact.locationDescription")}
                </p>
              </div>

              <Card className="overflow-hidden border-2 relative">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps?q=XV7W%2B27%20Alt%C4%B1nda%C4%9F%2C%20Ankara&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("contact.mapTitle")}
                    className="w-full h-full"
                  />
                </div>
              </Card>

              <div className="mt-6 text-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=XV7W%2B27%20Alt%C4%B1nda%C4%9F%2C%20Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-5 w-5" />
                    {t("contact.getDirections")}
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("contact.getDirectionsDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
