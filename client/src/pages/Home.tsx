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
  Star,
  TrendingUp,
  Shield,
  Truck,
  Award,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  price: string;
  featured: boolean;
  images: string[];
  specifications: {
    stepCount: string;
    openHeight: string;
    baseWidth: string;
  };
}

// Counter Animation Hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const yearsCount = useCountUp(20, 2000, statsVisible);
  const modelsCount = useCountUp(8, 2000, statsVisible);

  useEffect(() => {
    // Load products based on current language
    const loadProducts = async () => {
      try {
        const lang = i18n.language;
        const response = await fetch(`/data/products-${lang}.json`);
        const data = await response.json();
        setFeaturedProducts(data.filter((p: Product) => p.featured));
      } catch (error) {
        console.error("Error loading products:", error);
        // Fallback to Turkish
        try {
          const response = await fetch("/data/products-tr.json");
          const data = await response.json();
          setFeaturedProducts(data.filter((p: Product) => p.featured));
        } catch (err) {
          console.error("Error loading fallback products:", err);
        }
      }
    };

    loadProducts();
  }, [i18n.language]);

  // Carousel auto-rotation
  useEffect(() => {
    if (featuredProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
          {/* Animated background elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block animate-fade-in-up">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
                    <Zap className="h-4 w-4 mr-2" />
                    {t("home.badge")}
                  </span>
                </div>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                  dangerouslySetInnerHTML={{ __html: t("home.heroTitle") }}
                />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up max-w-xl" style={{ animationDelay: "0.2s" }}>
                  {t("home.heroDescription")}
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="font-medium text-muted-foreground">2 Yıl Garanti</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-muted-foreground">Hızlı Teslimat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <Award className="h-4 w-4 text-amber-600" />
                    </div>
                    <span className="font-medium text-muted-foreground">%100 Kayın Ağacı</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <Link href="/products">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      {t("common.viewProducts")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Stats Cards with Counter Animation */}
                <div ref={statsRef} className="grid grid-cols-3 gap-3 md:gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 md:p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-center text-white">
                      <Clock className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl md:text-4xl font-black mb-1">
                        {yearsCount}+
                      </div>
                      <div className="text-xs md:text-sm font-medium opacity-90">
                        {t("home.yearsExperience")}
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 md:p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-center text-white">
                      <Package className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl md:text-4xl font-black mb-1">
                        {modelsCount}
                      </div>
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

              {/* Product Carousel */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative bg-white">
                  {featuredProducts.length > 0 && (
                    <>
                      {/* Main Carousel Image */}
                      <div className="relative w-full h-full p-6 md:p-8">
                        <img
                          src={featuredProducts[currentImageIndex]?.images[0]}
                          alt={featuredProducts[currentImageIndex]?.name}
                          className="w-full h-full object-contain transition-opacity duration-700"
                          key={currentImageIndex}
                        />
                        {/* Overlay with product info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wide">
                              {featuredProducts[currentImageIndex]?.category}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold">
                              {featuredProducts[currentImageIndex]?.specifications.stepCount}
                            </h3>
                            <p className="text-sm md:text-base text-white/90">
                              {featuredProducts[currentImageIndex]?.shortDescription}
                            </p>
                            <div className="flex items-center justify-between pt-2">
                              <div className="text-2xl font-black text-primary">
                                {featuredProducts[currentImageIndex]?.price}
                              </div>
                              <Link href={`/products/${featuredProducts[currentImageIndex]?.slug}`}>
                                <Button size="sm" variant="secondary" className="shadow-lg">
                                  Detaylar
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Carousel Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {featuredProducts.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentImageIndex
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/50 hover:bg-white/75'
                              }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Fallback if no featured products */}
                  {featuredProducts.length === 0 && (
                    <img
                      src="/images/products/TopluUrunlerDikey2.jpg"
                      alt={t("home.altImage")}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        {featuredProducts.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{t("home.featuredBadge")}</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  {t("home.featuredTitle")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("home.featuredDescription")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl h-full">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {product.price}
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">
                            {product.category}
                          </div>
                          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {product.shortDescription}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground border-t pt-3">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{product.specifications.openHeight}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Package className="h-3 w-3" />
                            <span>{product.specifications.stepCount}</span>
                          </div>
                        </div>

                        <Link href={`/products/${product.slug}`}>
                          <Button
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                            variant="outline"
                          >
                            {t("common.viewDetails") || "Detayları Gör"}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/products">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    {t("common.viewAllProducts")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
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
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold">{t("home.feature2Title")}</h3>
                      <p className="text-muted-foreground">
                        {t("home.feature2Description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold">{t("home.feature3Title")}</h3>
                      <p className="text-muted-foreground">
                        {t("home.feature3Description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold">{t("home.feature4Title")}</h3>
                      <p className="text-muted-foreground">
                        {t("home.feature4Description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold">{t("home.feature5Title")}</h3>
                      <p className="text-muted-foreground">
                        {t("home.feature5Description")}
                      </p>
                    </div>
                  </div>
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
