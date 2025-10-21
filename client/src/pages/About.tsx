import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-accent via-background to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hakkımızda
              </h1>
              <p className="text-lg text-muted-foreground">
                15 yılı aşkın deneyimimizle sektörün öncü firmalarından biriyiz
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Hikayemiz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  İtimat Ahşap Merdiven olarak 20+ yıldır çift çıkışlı ahşap merdiven üretimi 
                  konusunda uzmanlaştık. Ankara Siteler'de bulunan atölyemizde, kaliteli fırınlanmış 
                  kayın ağacı ve titiz işçilikle üretilen merdivenlerimiz, müşterilerimizin güvenini 
                  kazanmıştır.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  3+3'ten 10+10'a kadar geniş model yelpazemiz ile ev, işyeri ve endüstriyel 
                  kullanım için uygun çözümler sunuyoruz. Çift çıkışlı sistemimiz sayesinde 
                  merdivenlerimiz hem pratik hem de güvenlidir.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Yıllık Tecrübe</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">8</div>
                    <div className="text-sm text-muted-foreground">Farklı Model</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/products/TopluUrunlerDikey2.jpg" 
                    alt="İtimat Ahşap Merdiven Ürünleri" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Misyonumuz</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Müşterilerimize en kaliteli çift çıkışlı ahşap merdiven çözümlerini sunarak 
                    güvenli ve pratik kullanım sağlamak. Titiz işçilik ve fırınlanmış kayın ağacı ile 
                    uzun ömürlü ürünler üretmek.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Vizyonumuz</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Çift çıkışlı ahşap merdiven üretiminde Türkiye'nin en güvenilir markası olmak. 
                    Kalite standartlarımızı yüksek tutarak müşteri memnuniyetini her zaman ön planda 
                    tutmak ve sektörün öncü firmalarından biri olmak.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Değerlerimiz
              </h2>
              <p className="text-lg text-muted-foreground">
                İş yapış şeklimizi belirleyen temel ilkelerimiz
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Kalite</h3>
                  <p className="text-sm text-muted-foreground">
                    Her üründe en yüksek kalite standartlarını uyguluyoruz
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Müşteri Odaklılık</h3>
                  <p className="text-sm text-muted-foreground">
                    Müşteri memnuniyeti bizim için her şeyden önce gelir
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Güvenilirlik</h3>
                  <p className="text-sm text-muted-foreground">
                    Sözümüzde durur, taahhütlerimizi eksiksiz yerine getiririz
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Yenilikçilik</h3>
                  <p className="text-sm text-muted-foreground">
                    Sürekli gelişim ve yenilikçi çözümler üretmeyi hedefliyoruz
                  </p>
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

