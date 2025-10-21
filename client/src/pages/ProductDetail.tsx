import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft, CheckCircle, Package, Shield, Zap } from "lucide-react";
import { Link, useParams } from "wouter";
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((p) => p.slug === params.slug);
        setProduct(foundProduct || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading product:", error);
        setLoading(false);
      });
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Yükleniyor...</p>
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
            <h1 className="text-2xl font-bold">Ürün Bulunamadı</h1>
            <Link href="/products">
              <Button>Ürünlere Dön</Button>
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
                Ürünlere Dön
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center sticky top-24">
                  <div className="text-9xl">{product.images[0]}</div>
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
                  <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
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
                  <h2 className="text-2xl font-semibold mb-4">Teknik Özellikler</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <dl className="space-y-4">
                        <div className="flex justify-between py-3 border-b">
                          <dt className="font-medium">Malzeme</dt>
                          <dd className="text-muted-foreground">{product.specifications.material}</dd>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <dt className="font-medium">Kaplama</dt>
                          <dd className="text-muted-foreground">{product.specifications.finish}</dd>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <dt className="font-medium">Taşıma Kapasitesi</dt>
                          <dd className="text-muted-foreground">{product.specifications.loadCapacity}</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Teklif Al
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Bilgi İste
                    </Button>
                  </Link>
                </div>

                {/* Info Cards */}
                <div className="grid sm:grid-cols-3 gap-4 pt-8">
                  <Card className="border-2">
                    <CardContent className="pt-6 text-center space-y-2">
                      <Shield className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-sm font-medium">Garanti</div>
                      <div className="text-xs text-muted-foreground">Uzun Süreli</div>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="pt-6 text-center space-y-2">
                      <Package className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-sm font-medium">Montaj</div>
                      <div className="text-xs text-muted-foreground">Profesyonel</div>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="pt-6 text-center space-y-2">
                      <Zap className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-sm font-medium">Teslimat</div>
                      <div className="text-xs text-muted-foreground">Hızlı</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

