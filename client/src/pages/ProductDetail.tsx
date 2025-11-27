import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft, CheckCircle, Package, Zap, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Link, useParams } from "wouter";
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export default function ProductDetail() {
  const { t } = useTranslation();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    if (product && product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product && product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const currentLanguage = i18n.language || "tr";
    const productsFile = currentLanguage === "en" ? "/data/products-en.json" : "/data/products-tr.json";
    
    fetch(productsFile)
      .then((res) => res.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((p) => p.slug === params.slug);
        setProduct(foundProduct || null);
        setCurrentImageIndex(0); // Reset image index when product changes
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading product:", error);
        setLoading(false);
      });
  }, [params.slug, i18n.language]);

  // ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">{t("common.loading")}</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">{t("common.notFound")}</h1>
            <Link href="/products">
              <Button>{t("common.backToProducts")}</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${product.name} - Merdiven Marketi`}
        description={product.shortDescription}
        keywords={`${product.name}, ${product.category} merdiven, merdiven fiyatları, ${product.specifications.material}`}
      />
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 border-b">
          <div className="container">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t("common.backToProducts")}
              </Button>
            </Link>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div>
                <div className="sticky top-24">
                  {/* Main Image */}
                  <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-white group cursor-pointer" onClick={openModal}>
                    {product.images && product.images.length > 0 ? (
                      <>
                        <img
                          src={product.images[currentImageIndex]}
                          alt={`${product.name} - ${t("common.photo")} ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain transition-transform group-hover:scale-105"
                        />
                        
                        {/* Zoom Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                          </div>
                        </div>
                        
                        {/* Navigation Buttons */}
                        {product.images.length > 1 && (
                          <>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white shadow-xl border-2 border-white/20"
                              onClick={prevImage}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white shadow-xl border-2 border-white/20"
                              onClick={nextImage}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        
                        {/* Image Counter */}
                        {product.images.length > 1 && (
                          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium border border-white/20">
                            {currentImageIndex + 1} / {product.images.length}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                          <Package className="h-16 w-16 mx-auto mb-4 opacity-50" />
                          <p>{t("common.noImage")}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  {product.images && product.images.length > 1 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex
                              ? 'border-primary'
                              : 'border-transparent hover:border-muted-foreground/50'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} - ${t("common.thumbnail")} ${index + 1}`}
                            // className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                </div>

                {/* Price */}
                <div className="py-6 border-y">
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t("productDetail.features")}</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t("productDetail.specifications")}</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <dl className="space-y-4">
                        <div className="flex justify-between py-3 border-b">
                          <dt className="font-medium">{t("productDetail.material")}</dt>
                          <dd className="text-muted-foreground">{product.specifications.material}</dd>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <dt className="font-medium">{t("productDetail.finish")}</dt>
                          <dd className="text-muted-foreground">{product.specifications.finish}</dd>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <dt className="font-medium">{t("productDetail.loadCapacity")}</dt>
                          <dd className="text-muted-foreground">{product.specifications.loadCapacity}</dd>
                        </div>
                        {product.specifications.stepCount && (
                          <div className="flex justify-between py-3 border-b">
                            <dt className="font-medium">{t("productDetail.stepCount")}</dt>
                            <dd className="text-muted-foreground">{product.specifications.stepCount}</dd>
                          </div>
                        )}
                        {product.specifications.closedHeight && (
                          <div className="flex justify-between py-3 border-b">
                            <dt className="font-medium">{t("productDetail.closedHeight")}</dt>
                            <dd className="text-muted-foreground">{product.specifications.closedHeight}</dd>
                          </div>
                        )}
                        {product.specifications.openHeight && (
                          <div className="flex justify-between py-3 border-b">
                            <dt className="font-medium">{t("productDetail.openHeight")}</dt>
                            <dd className="text-muted-foreground">{product.specifications.openHeight}</dd>
                          </div>
                        )}
                        {product.specifications.baseWidth && (
                          <div className="flex justify-between py-3 border-b">
                            <dt className="font-medium">{t("productDetail.baseWidth")}</dt>
                            <dd className="text-muted-foreground">{product.specifications.baseWidth}</dd>
                          </div>
                        )}
                        {product.specifications.electricInsulation && (
                          <div className="flex justify-between py-3 border-b">
                            <dt className="font-medium">{t("productDetail.electricInsulation")}</dt>
                            <dd className="text-muted-foreground">{product.specifications.electricInsulation}</dd>
                          </div>
                        )}
                        {product.specifications.warranty && (
                          <div className="flex justify-between py-3">
                            <dt className="font-medium">{t("productDetail.warranty")}</dt>
                            <dd className="text-muted-foreground">{product.specifications.warranty}</dd>
                          </div>
                        )}
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal/Lightbox */}
      {isModalOpen && product && product.images && product.images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-black"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Main Image */}
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} - ${t("common.largeView")} ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Navigation Buttons */}
            {product.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
            
            {/* Image Counter */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-black px-4 py-2 rounded-lg text-sm font-medium">
                {currentImageIndex + 1} / {product.images.length}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

