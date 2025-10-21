# 🚀 İtimat Ahşap Merdiven - Plesk Deployment Rehberi

## 📋 İçindekiler
1. [Lokalinizde Yapılacak İşlemler](#1-lokalinizde-yapılacak-i̇şlemler)
2. [Plesk Panel'de Yapılacak İşlemler](#2-plesk-panelde-yapılacak-i̇şlemler)
3. [Test ve Kontrol](#3-test-ve-kontrol)
4. [Sorun Giderme](#4-sorun-giderme)

---

## 1. Lokalinizde Yapılacak İşlemler

### Adım 1.1: Projeyi İndirin
İki seçeneğiniz var:

**Seçenek A: ZIP Dosyasını Kullanın**
- `merdivenmarketi.zip` dosyasını indirin
- Bir klasöre extract edin (örn: `C:\projeler\merdivenmarketi`)

**Seçenek B: Manus'tan Direkt İndirin**
- Manus UI'dan projeyi export edin

### Adım 1.2: Node.js ve pnpm Kurulumu
Eğer sisteminizde yoksa:

1. **Node.js İndirin ve Kurun**
   - https://nodejs.org adresinden LTS versiyonunu indirin
   - Kurulum sırasında "Add to PATH" seçeneğini işaretleyin

2. **pnpm Kurun**
   ```bash
   npm install -g pnpm
   ```

3. **Kurulumu Kontrol Edin**
   ```bash
   node --version
   pnpm --version
   ```

### Adım 1.3: Proje Bağımlılıklarını Yükleyin

Komut satırını (CMD veya PowerShell) açın ve proje klasörüne gidin:

```bash
cd C:\projeler\merdivenmarketi
pnpm install
```

**Beklenen Süre:** 2-5 dakika (internet hızınıza bağlı)

### Adım 1.4: Production Build Oluşturun

```bash
pnpm build
```

**Beklenen Süre:** 30-60 saniye

**Başarılı Build Çıktısı:**
```
✓ built in 8.12s
dist/public/index.html
dist/public/assets/...
```

### Adım 1.5: Build Dosyalarını Kontrol Edin

Build tamamlandıktan sonra şu klasör oluşmuş olmalı:
```
merdivenmarketi/
  └── dist/
      └── public/
          ├── index.html
          ├── robots.txt
          ├── assets/
          │   ├── index-xxxxx.css
          │   └── index-xxxxx.js
          ├── data/
          │   └── products.json
          └── images/
              ├── logo.jpg
              └── products/
                  └── (tüm ürün fotoğrafları)
```

### Adım 1.6: Deployment Paketi Oluşturun

**Windows için:**
1. `dist/public` klasörüne gidin
2. İçindeki **TÜM** dosya ve klasörleri seçin (Ctrl+A)
3. Sağ tıklayın → "Sıkıştır" veya "Send to" → "Compressed (zipped) folder"
4. Dosyayı `merdivenmarketi-deploy.zip` olarak adlandırın

**Mac/Linux için:**
```bash
cd merdivenmarketi/dist/public
zip -r ../../../merdivenmarketi-deploy.zip .
```

**ÖNEMLİ:** ZIP dosyası `dist/public` klasörünü içermemeli, doğrudan `index.html`, `assets/`, `images/` vb. dosyaları içermeli!

---

## 2. Plesk Panel'de Yapılacak İşlemler

### Adım 2.1: Plesk Panel'e Giriş

1. Tarayıcınızda Plesk adresinize gidin (örn: `https://sunucuadresi:8443`)
2. Kullanıcı adı ve şifrenizle giriş yapın

### Adım 2.2: Domain'i Seçin

1. Sol menüden **"Websites & Domains"** seçeneğine tıklayın
2. **merdivenmarketi.com** domain'ini bulun ve tıklayın

### Adım 2.3: Mevcut Dosyaları Yedekleyin (ÖNEMLİ!)

1. **"Files"** → **"File Manager"** seçeneğine tıklayın
2. `httpdocs` veya `public_html` klasörüne gidin
3. İçindeki **TÜM** dosyaları seçin (Ctrl+A veya checkbox ile)
4. Üstteki **"Move"** butonuna tıklayın
5. Yeni bir klasör oluşturun: `backup_eski_site_2024`
6. Dosyaları bu klasöre taşıyın

**Alternatif:** ZIP olarak yedekleyin
- Tüm dosyaları seçin → **"Archive"** → `backup.zip` olarak kaydedin
- İndirin ve bilgisayarınıza kaydedin

### Adım 2.4: ZIP Dosyasını Yükleyin

1. `httpdocs` klasöründe olduğunuzdan emin olun
2. Üstteki **"Upload"** butonuna tıklayın
3. `merdivenmarketi-deploy.zip` dosyasını seçin ve yükleyin
4. Yükleme tamamlanana kadar bekleyin (dosya boyutuna göre 2-10 dakika)

### Adım 2.5: ZIP Dosyasını Extract Edin

1. Yüklenen `merdivenmarketi-deploy.zip` dosyasını bulun
2. Dosyaya **sağ tıklayın** (veya checkbox ile seçip üstteki menüden)
3. **"Extract Files"** veya **"Unpack"** seçeneğine tıklayın
4. Extract işlemi tamamlanana kadar bekleyin

### Adım 2.6: Dosya Yapısını Kontrol Edin

Extract sonrası `httpdocs` klasörü şöyle görünmeli:

```
httpdocs/
  ├── index.html
  ├── robots.txt
  ├── assets/
  │   ├── index-xxxxx.css
  │   └── index-xxxxx.js
  ├── data/
  │   └── products.json
  └── images/
      ├── logo.jpg
      └── products/
          └── (ürün fotoğrafları)
```

**EĞER** `httpdocs/dist/public/index.html` şeklinde görüyorsanız:
1. `dist/public/` içindeki tüm dosyaları seçin
2. **"Move"** → `httpdocs` (üst klasör) seçin
3. `dist` klasörünü silin

### Adım 2.7: .htaccess Dosyası Oluşturun

**ÇOK ÖNEMLİ:** Bu dosya olmadan sayfa yönlendirmeleri çalışmaz!

1. `httpdocs` klasöründeyken üstteki **"+ (Add New)"** butonuna tıklayın
2. **"Create File"** seçeneğini seçin
3. Dosya adı: `.htaccess` (nokta ile başlamalı!)
4. **"OK"** tıklayın
5. Oluşan dosyaya **sağ tıklayın** → **"Edit in Text Editor"** veya **"Edit in Code Editor"**
6. Aşağıdaki kodu yapıştırın:

```apache
# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# SPA Routing (React Router)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Mevcut dosya veya klasörse dokunma
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Hepsini index.html'e yönlendir
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

7. **"Save"** veya **"OK"** butonuna tıklayın

### Adım 2.8: Dosya İzinlerini Kontrol Edin

1. `httpdocs` klasöründeki tüm dosyaları seçin
2. **"Change Permissions"** veya **"Permissions"** butonuna tıklayın
3. Şu izinleri verin:
   - **Klasörler:** 755
   - **Dosyalar:** 644
4. **"Apply to subdirectories"** seçeneğini işaretleyin
5. **"OK"** tıklayın

### Adım 2.9: ZIP Dosyasını Silin (Opsiyonel)

1. `merdivenmarketi-deploy.zip` dosyasını seçin
2. **"Remove"** veya **"Delete"** butonuna tıklayın

---

## 3. Test ve Kontrol

### Adım 3.1: Ana Sayfayı Test Edin

1. Tarayıcınızda `https://merdivenmarketi.com` adresine gidin
2. Ana sayfa yüklenmeli
3. Logo, fotoğraflar ve butonlar görünmeli

### Adım 3.2: Navigasyonu Test Edin

Şu sayfaları tek tek ziyaret edin:
- ✅ Ana Sayfa: `https://merdivenmarketi.com/`
- ✅ Ürünler: `https://merdivenmarketi.com/products`
- ✅ Hakkımızda: `https://merdivenmarketi.com/about`
- ✅ İletişim: `https://merdivenmarketi.com/contact`

### Adım 3.3: Ürün Detay Sayfalarını Test Edin

1. Ürünler sayfasına gidin
2. Herhangi bir ürüne tıklayın
3. Ürün detay sayfası açılmalı
4. Fotoğraflar ve bilgiler görünmeli

### Adım 3.4: İletişim Formunu Test Edin

1. İletişim sayfasına gidin
2. Formu doldurun
3. "Gönder" butonuna tıklayın
4. Başarı mesajı görünmeli

### Adım 3.5: Mobil Görünümü Test Edin

1. Tarayıcıda F12 tuşuna basın (Developer Tools)
2. Mobil görünüm simgesine tıklayın (📱)
3. Farklı cihaz boyutlarını test edin:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)

### Adım 3.6: Sayfa Hızını Test Edin

1. https://pagespeed.web.dev adresine gidin
2. `merdivenmarketi.com` adresini girin
3. "Analyze" butonuna tıklayın
4. **Hedef:** 80+ puan (yeşil)

---

## 4. Sorun Giderme

### Sorun 1: "404 Not Found" Hatası (Sayfa Bulunamadı)

**Belirtiler:**
- Ana sayfa açılıyor ama diğer sayfalar 404 hatası veriyor
- URL'yi direkt yazınca hata alıyorsunuz

**Çözüm:**
1. `.htaccess` dosyasının doğru oluşturulduğundan emin olun
2. Dosya adının tam olarak `.htaccess` olduğunu kontrol edin (nokta ile başlamalı)
3. Plesk'te "Apache & nginx Settings" → "Additional Apache directives" bölümüne şunu ekleyin:
   ```apache
   RewriteEngine On
   ```

### Sorun 2: Fotoğraflar Görünmüyor

**Belirtiler:**
- Sayfa açılıyor ama ürün fotoğrafları yüklenmiyor
- Kırık resim ikonları görünüyor

**Çözüm:**
1. `httpdocs/images/products/` klasörünün var olduğunu kontrol edin
2. Fotoğrafların doğru yüklendiğini kontrol edin
3. Tarayıcıda F12 → Console sekmesine bakın, hangi dosyalar 404 hatası veriyor?
4. Dosya adlarının büyük/küçük harf duyarlı olduğunu unutmayın!

### Sorun 3: Sayfa Tamamen Boş

**Belirtiler:**
- Beyaz ekran
- Hiçbir içerik görünmüyor

**Çözüm:**
1. Tarayıcıda F12 → Console sekmesine bakın
2. Kırmızı hatalar varsa not edin
3. `httpdocs/assets/` klasörünün var olduğunu kontrol edin
4. `index.html` dosyasını açın ve `<script>` ve `<link>` etiketlerinin doğru olduğunu kontrol edin

### Sorun 4: CSS Yüklenmiyor (Stil Yok)

**Belirtiler:**
- Sayfa açılıyor ama düz metin görünüyor
- Renkler, fontlar yok

**Çözüm:**
1. `httpdocs/assets/` klasöründe `.css` dosyasının olduğunu kontrol edin
2. Tarayıcıda F12 → Network sekmesine bakın
3. CSS dosyası 404 hatası veriyorsa dosya yolunu kontrol edin

### Sorun 5: "500 Internal Server Error"

**Belirtiler:**
- Sunucu hatası mesajı

**Çözüm:**
1. `.htaccess` dosyasında yazım hatası olabilir
2. Plesk → "Logs" → "Error Log" bölümüne bakın
3. `.htaccess` dosyasını geçici olarak silin ve test edin
4. Eğer çalışırsa, `.htaccess` dosyasını satır satır ekleyerek hatayı bulun

### Sorun 6: HTTPS Çalışmıyor (Güvenli Değil Uyarısı)

**Çözüm:**
1. Plesk → "SSL/TLS Certificates" bölümüne gidin
2. "Install a free basic certificate provided by Let's Encrypt" seçeneğini seçin
3. E-posta adresinizi girin
4. "Install" butonuna tıklayın
5. "Redirect from HTTP to HTTPS" seçeneğini aktif edin

---

## 5. Bakım ve Güncelleme

### Ürün Fotoğraflarını Güncelleme

1. Plesk File Manager → `httpdocs/images/products/` klasörüne gidin
2. Yeni fotoğrafı yükleyin
3. `httpdocs/data/products.json` dosyasını düzenleyin
4. İlgili ürünün `images` dizisine yeni fotoğraf yolunu ekleyin

### Ürün Bilgilerini Güncelleme

1. Plesk File Manager → `httpdocs/data/products.json` dosyasını açın
2. "Edit in Code Editor" seçeneğini seçin
3. JSON formatında düzenleme yapın
4. **DİKKAT:** JSON syntax'ına uygun olmalı (virgüller, tırnaklar)
5. Save edin

### İletişim Bilgilerini Güncelleme

1. Lokalinizde projeyi açın
2. `client/src/components/Header.tsx` ve `Footer.tsx` dosyalarını düzenleyin
3. `pnpm build` komutu ile yeniden build edin
4. Sadece `dist/public/assets/` klasörünü Plesk'e yükleyin

---

## 6. Performans Optimizasyonu

### Görsel Optimizasyonu

Fotoğraflar çok büyükse (>500KB):

1. https://tinypng.com veya https://squoosh.app kullanın
2. Fotoğrafları sıkıştırın
3. Plesk'te güncelleyin

### Önbellekleme Kontrolü

1. Tarayıcıda F12 → Network sekmesini açın
2. Sayfayı yenileyin
3. "Size" sütununda "disk cache" veya "memory cache" görmelisiniz
4. Görmüyorsanız `.htaccess` dosyasındaki cache ayarlarını kontrol edin

---

## 7. Yedekleme Stratejisi

### Otomatik Yedekleme (Plesk)

1. Plesk → "Backup Manager" bölümüne gidin
2. "Schedule" sekmesine tıklayın
3. Haftalık otomatik yedekleme ayarlayın
4. Yedekleme konumu: FTP veya cloud storage

### Manuel Yedekleme

**Her güncelleme öncesi:**
1. Plesk File Manager → `httpdocs` klasörü
2. Tüm dosyaları seçin → "Archive" → ZIP oluşturun
3. ZIP'i indirin ve bilgisayarınıza kaydedin
4. Tarih ile adlandırın: `yedek_2024-10-21.zip`

---

## 8. Destek ve Kaynaklar

### Yararlı Linkler

- **Plesk Dokümantasyonu:** https://docs.plesk.com
- **React Dokümantasyonu:** https://react.dev
- **Vite Dokümantasyonu:** https://vitejs.dev

### Sık Kullanılan Plesk Komutları

**SSH Erişimi Varsa:**

```bash
# Site klasörüne git
cd /var/www/vhosts/merdivenmarketi.com/httpdocs

# Dosya izinlerini düzelt
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;

# Apache'yi yeniden başlat
service apache2 restart
```

---

## ✅ Deployment Checklist

Yayına almadan önce kontrol edin:

- [ ] Lokal build başarılı (`pnpm build`)
- [ ] Tüm fotoğraflar yüklendi
- [ ] `.htaccess` dosyası oluşturuldu
- [ ] Dosya izinleri ayarlandı (755/644)
- [ ] Ana sayfa açılıyor
- [ ] Tüm sayfalar çalışıyor (Ana Sayfa, Ürünler, Hakkımızda, İletişim)
- [ ] Ürün detay sayfaları açılıyor
- [ ] Fotoğraflar görünüyor
- [ ] Mobil görünüm test edildi
- [ ] HTTPS aktif
- [ ] Yedek alındı

---

**Son Güncelleme:** 21 Ekim 2024  
**Versiyon:** 1.0  
**Hazırlayan:** Manus AI

---

## 📞 Acil Durum Kurtarma

Eğer bir şeyler ters giderse:

1. **Panik yapmayın!** 😊
2. Plesk File Manager'a gidin
3. `backup_eski_site_2024` klasöründeki dosyaları geri yükleyin
4. Veya daha önce indirdiğiniz `backup.zip` dosyasını yükleyin ve extract edin
5. Her şey eski haline döner

**Hatırlayın:** Yedek almadan güncelleme yapmayın! 🔒

