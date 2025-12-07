import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  MessageCircle,
  Package,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t("home.title")}
        description={t("home.description")}
        keywords={t("home.keywords")}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background -z-10" />
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Zap className="h-4 w-4 mr-2" />
                    {t("home.badge")}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: t("home.heroTitle") }} />
                <p className="text-lg text-muted-foreground">
                  {t("home.heroDescription")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-lg px-8"
                    >
                      {t("common.viewProducts")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 pt-8">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 md:p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-center text-white">
                      <Clock className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl md:text-4xl font-black mb-1">20+</div>
                      <div className="text-xs md:text-sm font-medium opacity-90">
                        {t("home.yearsExperience")}
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 md:p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-center text-white">
                      <Package className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl md:text-4xl font-black mb-1">8</div>
                      <div className="text-xs md:text-sm font-medium opacity-90">
                        {t("home.differentModels")}
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-4 md:p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-center text-white">
                      <CheckCircle className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl md:text-4xl font-black mb-1">%100</div>
                      <div className="text-xs md:text-sm font-medium opacity-90">
                        {t("home.woodQuality")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/products/TopluUrunlerDikey2.jpg"
                    alt={t("home.altImage")}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("home.whyTitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("home.whyDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("home.feature2Title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.feature2Description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("home.feature3Title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.feature3Description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("home.feature4Title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.feature4Description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("home.feature5Title")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.feature5Description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Discounts Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("home.discountsTitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("home.discountsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-gradient-to-br from-background to-primary/5">
                <CardContent className="pt-6 space-y-4 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("home.wholesaleTitle")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.wholesaleDescription")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full">
                        {t("common.contactUs")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                      onClick={() => {
                        const phoneNumber = "905368104278";
                        const text = t("home.whatsappWholesale");
                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
                        window.open(url, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {t("home.whatsapp")}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-gradient-to-br from-background to-primary/5">
                <CardContent className="pt-6 space-y-4 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("home.retailTitle")}</h3>
                  <p className="text-muted-foreground">
                    {t("home.retailDescription")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full">
                        {t("common.contactUs")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                      onClick={() => {
                        const phoneNumber = "905368104278";
                        const text = t("home.whatsappRetail");
                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
                        window.open(url, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {t("home.whatsapp")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
