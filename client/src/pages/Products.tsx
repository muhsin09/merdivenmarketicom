import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Filter } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ürünlerimiz - Merdiven Marketi"
        description="Geniş çift çıkışlı ahşap merdiven ürün yelpazemizi keşfedin. 3+3'ten 10+10'a kadar tüm modeller."
        keywords="çift çıkışlı merdiven, ahşap merdiven fiyatları, A tipi merdiven, 3+3 merdiven, 4+4 merdiven"
      />
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-accent via-background to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Ürünlerimiz
              </h1>
              <p className="text-lg text-muted-foreground">
                Geniş ürün yelpazemizden ihtiyacınıza uygun merdiven çözümünü keşfedin
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12">
          <div className="container">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{filteredProducts.length}</span>
                <span>ürün bulundu</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "Tümü" : category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Ürünler yükleniyor...</p>
              </div>
            )}

            {/* Products Grid */}
            {!loading && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                      <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                        {product.images[0]}
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {product.category}
                        </span>
                      </div>
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                            Öne Çıkan
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="pt-6 space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="pt-2">
                        <span className="text-lg font-semibold text-primary">
                          {product.price}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link href={`/products/${product.slug}`}>
                        <Button className="w-full group/btn">
                          Detayları İncele
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Bu kategoride ürün bulunamadı.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Aradığınız Ürünü Bulamadınız mı?
              </h2>
              <p className="text-lg text-muted-foreground">
                Özel tasarım ve ölçüye özel üretim hizmetlerimiz ile hayalinizdeki merdiveni gerçeğe dönüştürelim
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Özel Teklif İste
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

