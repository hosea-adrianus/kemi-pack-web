# Product Requirements Document (PRD)
## Company Profile Website — Kemi Pack (Primary Packaging Solutions)

---

### 1. Executive Summary & Project Overview

* **Company Name:** PT Kemilau Gema Indopack (Kemi Pack) — Part of KGI Group (PT Kinas Global Indonusa, Est. 2007)
* **Founded:** 2025
* **Category:** B2B Company Profile & Primary Packaging Catalog
* **Tagline / Value Proposition:** *"Reliable solutions partner of primary packaging for pharmaceutical, biotechnology, cosmetic, veterinary, food, and beverages."*
* **Group Heritage:** Backed by over 19 years (since 2007) of experience from Kinas Global Indonusa as a premier raw materials supplier for the Indonesian market.
* **Our Vision:**
  Become reliable partner supplier of primary packaging for pharmaceutical, biotechnology, veterinary, and cosmetic industry in Indonesia, with professional and satisfaction service.
* **Our Mission:**
  1. Supply with best quality of primary packaging, sustainable, and competitive price.
  2. Service customer with the best lead time and stocking in the local Indonesia.
  3. Continuous improvement to satisfy customers.

---

### 2. Brand Identity & Design Guidelines

* **Karakter Visual:** Profesional, higienis, presisi, modern, dan tepercaya (*clean, technical, and trustworthy*).
* **Palet Warna:**
  * **Warna Utama (Base/Dominan):** Putih Bersih (`#FFFFFF`) dan Light Technical Gray (`#F8FAFC`, `#F1F5F9`) untuk mencerminkan standar higienis laboratorium & ruang steril (*cleanroom*).
  * **Warna Aksen (Brand/Navy):**
    * Deep Navy Blue (`#0B192C` / `#1E3A8A`): Melambangkan stabilitas, reliabilitas industri, dan profesionalisme.
    * High-Tech Accent (`#2563EB` / `#38BDF8`): Digunakan untuk tombol CTA, highlight, badge sertifikasi, dan interaktivitas.
  * **Warna Netral & Teks:** Dark Slate (`#0F172A`) untuk body teks kontras tinggi, Muted Slate (`#64748B`) untuk metadata dan subtitle.
* **Tipografi:**
  * Font Modern Sans-serif (seperti *Plus Jakarta Sans* / *Inter*): Memberikan keterbacaan teknis tinggi pada tabel spesifikasi dan teks presentasi.
* **Prinsip UI/UX:**
  * Clean whitespace, kartu produk presisi, micro-interaction halus saat hover, navigasi cepat tanpa reload berlebih.

---

### 3. Target Audience & Personas

1. **Procurement & Sourcing Managers:** Mencari kepastian kapasitas produksi, sertifikasi mutu (ISO, GMP, FDA compliance), minimum order quantity (MOQ), dan lead time pengiriman.
2. **R&D & Packaging Specialists / Formulators:** Membutuhkan data teknis (bahan kemasan: USP Type I/II/III Glass, HDPE, PET, Amber glass, toleransi sterilisasi autoklaf/gamma ray).
3. **Business Owners & Brand Managers (Cosmetics, F&B, Vet):** Membutuhkan kemasan estetis dengan opsi custom finishing (frosting, silk screen printing, pump varieties).

---

### 4. Struktur Menu & Arsitektur Informasi (Sitemap)

Situs terdiri dari 4 navigasi utama dengan komponen pendukung:

```
[Header Navigation]
  ├── Home
  ├── About Us
  ├── Products (Filterable by Industry & Material)
  └── Contact Us (With RFQ & Sample Request Form)

[Floating Quick Actions]
  └── WhatsApp Direct Chat & Quick Quote Modal

[Footer]
  └── Industry links, Compliance badging, Head office, Legal & Copyright
```

---

### 5. Detail Fitur & Spesifikasi Halaman

#### 5.1. Header & Global Navigation
* **Sticky Navigation Bar:** Tetap terlihat saat scroll dengan latar putih semi-transparan (*glassmorphism*).
* **Logo Brand:** Kemi Pack dengan identitas visual navy & clean.
* **Menu Items:** Home, About Us, Products, Contact Us.
* **Header CTA Button:** Tombol `"Request Quote"` atau `"Minta Penawaran"`.
* **Mobile Responsive Drawer:** Hamburger menu yang intuitif dan halus saat dibuka di smartphone/tablet.

#### 5.2. Halaman Home (Beranda)
* **Hero Section:**
  * Headline kuat yang merepresentasikan kapabilitas kemasan primer.
  * Sub-headline menjelaskan sektor industri yang didukung.
  * Dual Call to Action: `"Jelajahi Produk"` dan `"Konsultasi Spesifikasi"`.
  * Visual banner modern bertema laboratorium steril dan kemasan presisi tinggi.
* **Trust & Quality Metrics / Badges:**
  * Metrik utama (e.g., *100% Medical-grade Quality, Cleanroom Ready, Global Certification Standards, On-Time Delivery Reliability*).
* **Target Industry Segments (Interactive Grid):**
  * Kartu interaktif untuk 6 sektor utama:
    1. *Pharmaceutical* (Vials, Ampoules, Infusion Bottles, Blister packs)
    2. *Biotechnology* (Cryo vials, Serum bottles, Sterile dropper systems)
    3. *Cosmetics & Personal Care* (Dropper bottles, Acrylic jars, Treatment pumps, Tubes)
    4. *Veterinary Medicine* (Large dose containers, oral dosers, vaccine bottles)
    5. *Food & Beverages* (Aseptic containers, beverage bottles, tamper-evident jars)
    6. *Specialty Chemicals / Diagnostics*
* **Featured Products Carousel / Grid:**
  * Menampilkan produk-produk unggulan terpopuler dengan badge material (USP Type I Glass, Borosilicate, Medical-grade PP).
* **Why Choose Us (Core Value Pillars):**
  * Kepatuhan Mutu (Quality Compliance & GMP Compatibility)
  * Rantai Pasok Terjamin & Efisiensi Biaya
  * Kustomisasi & Technical Support Spesifikasi Kemasan
* **Bottom CTA Banner:**
  * Ajakan untuk meminta katalog PDF lengkap dan konsultasi kebutuhan batch packaging.

#### 5.3. Halaman About Us (Tentang Kami)
* **Company Profile & Story:** Latar belakang perusahaan sebagai mitra strategis pengadaan primary packaging.
* **Visi & Misi:**
  * Visi: Menjadi mitra solusi primary packaging terdepan dan paling terpercaya di kawasan regional.
  * Misi: Memberikan keamanan formulasi produk klien melalui material kemasan berstandar regulasi internasional.
* **Quality & Manufacturing Standards:**
  * Penjelasan standar ruang bersih (*Cleanroom Class 100k/10k*).
  * Pengujian kualitas (Compatibility test, leak test, autoclaving resilience, chemical inertness).
* **Our Process / Workflow:**
  * 4 langkah kerja: *Consultation & Formulation Needs* $\rightarrow$ *Sampling & Testing* $\rightarrow$ *Batch Production & QC* $\rightarrow$ *Safe Delivery*.

#### 5.4. Halaman Products (Katalog Interaktif)
* **Category Filter System:**
  * Filter berdasarkan **Industri**: All, Pharmaceutical, Biotechnology, Cosmetic, Veterinary, Food & Beverage.
  * Filter berdasarkan **Material**: Glass (Clear / Amber / USP I, II, III), Plastic (PET, HDPE, PP, Acrylic), Aluminium & Closures (Rubber stoppers, Flip-off caps, Dispenser pumps).
* **Product Card Content:**
  * Gambar produk beresolusi tinggi dengan latar bersih (*clean isolated backdrop*).
  * Nama Produk, Kode Referensi, dan Material.
  * Kapasitas Ukuran (e.g., *5ml, 10ml, 30ml, 100ml, 500ml*).
  * Standar Penutupan (*Neck size: 18/410, 20mm crimp, 24/410*, dll).
* **Product Detail Modal / Quick View:**
  * Pop-up detail menampilkan spesifikasi teknis lengkap, toleransi suhu, kompatibilitas sterilisasi, dan tombol direct `"Minta Sampel Produk Ini"`.

#### 5.5. Halaman Contact Us & RFQ (Request for Quotation)
* **Interactive RFQ & Sample Request Form:**
  * Field Nama Lengkap & Perusahaan.
  * Field Email Bisnis & Nomor Telepon/WhatsApp.
  * Pilihan Industri (Dropdown: Pharma, Biotech, Cosmetic, dll).
  * Tipe Kebutuhan (Pilihan: Minta Penawaran Harga, Permintaan Sampel Uji Laboratorium, Kustomisasi Kemasan).
  * Estimasi Volume / Kuantitas Pesanan.
  * Pesan / Kebutuhan Spesifik.
* **Direct Contact Information:**
  * Alamat kantor & fasilitas pergudangan.
  * Email resmi (Sales, Inquiries).
  * Jam operasional & direct WhatsApp B2B link.
* **Interactive Map / Location Embed.**

#### 5.6. Footer
* Informasi ringkasan perusahaan, link cepat ke setiap kategori industri, pernyataan kepatuhan/legalitas, dan tombol subscribe/download company brochure.

---

### 6. Non-Functional & Technical Requirements

| Aspek | Spesifikasi |
| :--- | :--- |
| **Responsivitas** | 100% Mobile-first responsive (diuji pada Mobile 375px–430px, Tablet 768px–1024px, Desktop 1280px–1920px+). |
| **Performa & Kecepatan** | Fast loading time (< 2 detik), optimasi gambar format WebP / SVG icons, zero layout shift (CLS < 0.1). |
| **Teknologi** | Clean Semantic HTML5, Vanilla CSS dengan custom design tokens (CSS variables) untuk kemudahan maintenance, Vanilla JS modular tanpa dependensi berat yang memperlambat situs. |
| **SEO & Meta Tags** | Struktur heading `h1`–`h4` semantik, OpenGraph meta tags untuk WhatsApp/LinkedIn sharing, schema markup B2B Company. |
| **Aksesibilitas (a11y)** | Kontras warna teks memenuhi standar WCAG AA, navigasi ramah keyboard, alt text pada seluruh gambar produk. |

---

### 7. Rencana Tahap Implementasi (Next Steps)

1. **Fase 1:** Setup arsitektur website, design system tokens (`tokens.css`), typography, dan tata letak responsif.
2. **Fase 2:** Pembuatan komponen antarmuka (Header sticky, Footer, Kartu Industri, Filter Katalog Produk, Form RFQ).
3. **Fase 3:** Integrasi halaman lengkap (Home, About Us, Products dengan filter interaktif, Contact Us dengan validasi form).
4. **Fase 4:** Pengujian responsivitas multi-device (Mobile, Tablet, Desktop) dan verifikasi fungsionalitas tombol & filter.
