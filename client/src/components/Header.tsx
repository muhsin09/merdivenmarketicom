import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/images/logo.jpg"
                alt="İtimat Ahşap Merdiven"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  İtimat Ahşap Merdiven
                </span>
                <span className="text-xs text-muted-foreground">
                  20+ Yıllık Tecrübe
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Ana Sayfa
              </a>
            </Link>
            <Link href="/products">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Ürünler
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Hakkımızda
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                İletişim
              </a>
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+905368104278" className="hover:underline">
                +90 536 810 42 78
              </a>
            </div>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Teklif Al
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link href="/">
              <a className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Ana Sayfa
              </a>
            </Link>
            <Link href="/products">
              <a className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Ürünler
              </a>
            </Link>
            <Link href="/about">
              <a className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Hakkımızda
              </a>
            </Link>
            <Link href="/contact">
              <a className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                İletişim
              </a>
            </Link>
            <div className="pt-4 border-t space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+905368104278" className="hover:underline">
                  +90 536 810 42 78
                </a>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Teklif Al
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
