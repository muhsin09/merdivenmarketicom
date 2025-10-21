import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.jpg" 
                alt="İtimat Ahşap Merdiven" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">İtimat Ahşap Merdiven</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              20+ yıllık tecrübemiz ile kaliteli çift çıkışlı ahşap merdiven çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/itimat_ahsap_merdiven/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    Ana Sayfa
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    Ürünler
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    Hakkımızda
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    İletişim
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ürünlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">
                  <a className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    Çift Çıkışlı Merdivenler
                  </a>
                </Link>
              </li>
              <li>
                <a href="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  3+3 Model
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  4+4 Model
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  5+5 ve Üstü Modeller
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+905368104278" className="text-sm text-secondary-foreground/80 hover:underline">
                  +90 536 810 42 78
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Önder Mah. Ulubat Sk. No:69 Kat:2<br />Siteler 06360 Altındağ/Ankara
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  itimatahsapmerdiven@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} İtimat Ahşap Merdiven. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

