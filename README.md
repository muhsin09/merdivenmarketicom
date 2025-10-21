# Merdiven Marketi - Modern Web Sitesi

Modern, hızlı ve SEO uyumlu e-ticaret tarzı katalog web sitesi.

## 🚀 Özellikler

- ✅ Modern ve responsive tasarım
- ✅ React 19 + Vite ile ultra hızlı performans
- ✅ Tailwind CSS 4 ile özelleştirilebilir stil sistemi
- ✅ shadcn/ui komponentleri ile profesyonel UI
- ✅ JSON tabanlı ürün yönetimi
- ✅ SEO optimizasyonu (meta tags, robots.txt)
- ✅ İletişim formu
- ✅ Türkçe içerik desteği
- ✅ Mobil uyumlu tasarım

## 📦 Teknoloji Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter
- **Language:** TypeScript
- **Icons:** Lucide React

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat
pnpm dev

# Production build
pnpm build

# Build önizleme
pnpm preview
```

## 📁 Proje Yapısı

```
client/
├── public/
│   ├── data/
│   │   └── products.json      # Ürün verileri
│   └── robots.txt             # SEO robots dosyası
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui komponentleri
│   │   ├── Header.tsx         # Site başlığı
│   │   ├── Footer.tsx         # Site alt bilgisi
│   │   └── SEO.tsx            # SEO meta tag yönetimi
│   ├── pages/
│   │   ├── Home.tsx           # Ana sayfa
│   │   ├── Products.tsx       # Ürünler listesi
│   │   ├── ProductDetail.tsx  # Ürün detay sayfası
│   │   ├── About.tsx          # Hakkımızda
│   │   ├── Contact.tsx        # İletişim formu
│   │   └── NotFound.tsx       # 404 sayfası
│   ├── types/
│   │   └── product.ts         # Ürün tip tanımları
│   ├── App.tsx                # Ana uygulama ve routing
│   ├── main.tsx               # React giriş noktası
│   └── index.css              # Global stiller ve tema
└── index.html                 # HTML şablonu
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary:** Turuncu (#f97316) - Vurgu ve CTA butonları
- **Secondary:** Lacivert (#1e293b) - Başlıklar ve footer
- **Background:** Beyaz (#fafafa) - Ana arka plan
- **Foreground:** Koyu gri - Metin rengi

### Tipografi
- **Font Family:** Inter
- **Başlıklar:** Semi-bold (600)
- **Gövde Metni:** Regular (400)

## 📝 Ürün Yönetimi

Ürünler `client/public/data/products.json` dosyasında JSON formatında saklanır.

### Ürün Yapısı

```json
{
  "id": 1,
  "name": "Ürün Adı",
  "slug": "urun-adi",
  "category": "Kategori",
  "shortDescription": "Kısa açıklama",
  "description": "Detaylı açıklama",
  "features": ["Özellik 1", "Özellik 2"],
  "specifications": {
    "material": "Malzeme",
    "finish": "Kaplama",
    "loadCapacity": "Taşıma kapasitesi",
    "warranty": "Garanti süresi"
  },
  "price": "Fiyat bilgisi",
  "featured": true,
  "images": ["🪜"]
}
```

## 🔍 SEO Optimizasyonu

- ✅ Meta tags (description, keywords, author)
- ✅ Open Graph tags (Facebook paylaşımları için)
- ✅ Twitter Card tags
- ✅ Robots.txt dosyası
- ✅ Semantic HTML yapısı
- ✅ Dinamik sayfa başlıkları
- ✅ Türkçe dil desteği (lang="tr")

## 📱 Responsive Tasarım

Site tüm cihazlarda mükemmel görünüm sağlar:
- 📱 Mobil (< 640px)
- 📱 Tablet (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🚀 Dağıtım

Proje statik bir site olduğu için herhangi bir statik hosting servisinde barındırılabilir:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Build Komutu
```bash
pnpm build
```

Build çıktısı `client/dist` klasöründe oluşturulur.

## 📞 İletişim Formu

İletişim formu şu alanları içerir:
- Ad Soyad (zorunlu)
- E-posta (zorunlu)
- Telefon
- Konu (zorunlu)
- Mesaj (zorunlu)

Form validasyonu ve gönderim durumu yönetimi dahildir.

## 🔄 Gelecek Geliştirmeler

- [ ] Gerçek ürün görselleri ekleme
- [ ] Backend API entegrasyonu
- [ ] E-posta gönderimi için backend servis
- [ ] Ürün arama ve filtreleme
- [ ] Çoklu dil desteği (EN/TR)
- [ ] Admin paneli
- [ ] Ürün karşılaştırma özelliği
- [ ] Müşteri yorumları
- [ ] Blog/Haberler bölümü

## 📄 Lisans

Bu proje Merdiven Marketi için özel olarak geliştirilmiştir.

## 👨‍💻 Geliştirici Notları

### Yeni Sayfa Ekleme

1. `client/src/pages/` altında yeni sayfa komponenti oluştur
2. `client/src/App.tsx` içinde route ekle
3. Header ve Footer komponentlerini dahil et
4. SEO komponentini ekle

### Yeni Ürün Ekleme

`client/public/data/products.json` dosyasını düzenle ve yeni ürün objesini ekle.

### Stil Değişiklikleri

Global stiller için `client/src/index.css` dosyasını düzenle.
Renk paleti CSS değişkenleri ile yönetilir.

