# 🛠️ CURSOR AI PROMPT — PICA CHOCOLATE BALI — BUG FIX + ENHANCEMENT v2.0

## CONTEXT
Kamu sedang bekerja pada proyek website **Pica Chocolate Bali** yang terdiri dari 3 file:
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

Semua gambar produk ada di folder `./gambar/` dengan nama file yang sudah benar.
Lakukan SEMUA perbaikan di bawah ini dalam satu sesi tanpa bertanya — langsung kerjakan.

---

## 🔴 BUG FIX #1 — GAMBAR PRODUK TIDAK TAMPIL (PRIORITAS UTAMA)

**Masalah:** Semua kartu produk menampilkan gambar kosong/hitam. Alt text muncul tapi gambar tidak render.

**Root cause yang harus diselidiki dan diperbaiki:**
1. Path gambar di `main.js` menggunakan `./gambar/` — pastikan path ini konsisten dengan struktur folder project
2. Tambahkan fallback error handler pada setiap `<img>` yang di-render via JavaScript:
```javascript
// Tambahkan onerror handler di fungsi renderProducts():
<img 
  src="${p.img}" 
  loading="lazy" 
  width="600" 
  height="900" 
  alt="${p.name} dari Pica Chocolate Bali"
  onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'placeholder\'><span>${p.cat}</span></div>'"
>
```
3. Di array `products` di `main.js`, verifikasi dan perbaiki semua path gambar. Format yang benar adalah `./gambar/NAMA_FILE.webp` atau `.jpg` — sesuaikan ekstensi file dengan yang ada di folder. Tambahkan fallback placeholder yang styled jika file tidak ada.
4. Tambahkan CSS pada `.media img` agar image error tidak menampilkan ikon broken:
```css
.media img { 
  min-height: 200px; 
  background: linear-gradient(140deg, #1a0f06, #2d1a0a);
}
```
5. Pastikan tag `<img>` selalu memiliki dimensi eksplisit agar tidak collapse ke 0px saat gagal load.

---

## 🔴 BUG FIX #2 — FOTO OWNER TERLALU BESAR & LAYOUT AWKWARD

**Masalah:** Foto owner di section "Tentang Kami" terlalu besar dan tidak proporsional (gambar portrait sangat tinggi).

**Perbaikan di `styles.css`:**
```css
/* Ganti/tambahkan rules ini untuk .about-img-wrap */
.about-img-wrap {
  position: relative;
  transform: rotate(-2deg);
  border: 1px solid var(--color-primary);
  padding: 6px;
  background: rgba(35, 21, 9, 0.65);
  max-width: 340px;          /* Batasi lebar maksimum */
  margin: 0 auto;            /* Center di mobile */
  transition: transform 0.3s ease;
}
.about-img-wrap:hover {
  transform: rotate(0deg) scale(1.01);
}
.about-img-wrap img {
  width: 100%;
  height: 380px;             /* Fixed height agar tidak terlalu panjang */
  object-fit: cover;
  object-position: center top; /* Fokus ke wajah/bagian atas */
  display: block;
  border-radius: 2px;
}

/* Di breakpoint tablet ke atas */
@media (min-width: 768px) {
  .about-img-wrap {
    max-width: 300px;
    margin: 0;
  }
  .about-img-wrap img {
    height: 360px;
  }
}
```

**Perbaikan di `index.html`** — tambahkan `style` inline pada `<figure class="about-img-wrap">` sebagai override sementara:
```html
<figure class="about-img-wrap" style="max-width:320px; margin:0 auto;">
  <img src="./gambar/owner.jpeg" loading="lazy" width="320" height="380" 
       style="height:380px; object-fit:cover; object-position:center top;"
       alt="I Wayan Rebawa — Pemilik Pica Chocolate Bali" />
</figure>
```

---

## 🎨 REDESIGN — COLOR THEME LEBIH LEMBUT & ENAK DI MATA

**Masalah:** Tema saat ini terlalu hijau gelap (`#061510`, `#4caf73`) yang terasa dingin dan tidak sesuai dengan brand cokelat premium yang hangat.

**Ganti SELURUH `:root` CSS variables di `styles.css` dengan palette berikut:**

```css
:root {
  /* Background — dark warm chocolate, bukan hijau */
  --color-bg:            #100B07;   /* Espresso gelap */
  --color-bg-alt:        #180E08;   /* Sedikit lebih terang */
  --color-surface:       #1E1108;   /* Surface card */

  /* Primary — warm amber gold, bukan hijau */
  --color-primary:       #C07A30;   /* Amber cokelat */
  --color-primary-light: #D4954A;   /* Gold hangat */
  --color-accent:        #8B3A0F;   /* Cacao merah tua */

  /* Text & UI */
  --color-cream:         #F5EDD8;   /* Parchment warm */
  --color-text:          #EDE0CC;   /* Teks utama lembut */
  --color-text-muted:    #9B8272;   /* Abu hangat */
  --color-border:        rgba(192, 122, 48, 0.18);  /* Border emas halus */
  --color-gold-glow:     rgba(192, 122, 48, 0.08);  /* Glow lembut */

  /* Typography */
  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'Jost', sans-serif;
  --font-accent:  'Playfair Display', serif;
  --container:    min(1180px, 92vw);
}
```

**Tambahkan juga perubahan ini di CSS:**

```css
/* Update body background gradient — hapus yang lama */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.06;
  background-image: radial-gradient(rgba(255,220,150,.1) 1px, transparent 1px);
  background-size: 3px 3px;
  mix-blend-mode: soft-light;
}

/* Update .hero-bg gradient — lebih warm */
.hero-bg {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(160deg, rgba(16,11,7,0.88) 0%, rgba(139,58,15,0.28) 60%, rgba(16,11,7,0.7) 100%),
    url('../../gambar/Chcolate.webp') center/cover no-repeat;
}

/* Update .btn-primary */
.btn-primary {
  background: linear-gradient(120deg, var(--color-primary), var(--color-primary-light));
  color: #1A0800;
  box-shadow: 0 0 0 0 rgba(192, 122, 48, 0);
}
.btn-primary:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 0 28px rgba(192, 122, 48, 0.4);
}

/* Update .chip.active */
.chip.active {
  background: var(--color-primary);
  color: #1A0800;
  border-color: var(--color-primary);
}

/* Update glass cards */
.glass {
  background: rgba(30, 17, 8, 0.82);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
}

/* Update nav top border */
header {
  border-top: 2px solid var(--color-primary);
}

/* Update stat numbers */
.stat-num {
  font: 600 clamp(2rem,6vw,3rem)/1 var(--font-display);
  color: var(--color-primary-light);
}

/* Update .card hover */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 48px rgba(192, 122, 48, 0.18);
}

/* Update placeholder background */
.placeholder {
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, #2A1506, #1A0D04);
  color: var(--color-primary-light);
  font-family: var(--font-accent);
  font-size: 0.85rem;
  text-align: center;
  padding: 1rem;
}

/* Update toast */
.toast {
  background: #2A1A0A;
  border: 1px solid var(--color-primary);
  color: var(--color-cream);
}

/* Update cursor dot */
.cursor-dot {
  border: 1px solid rgba(192, 122, 48, 0.5);
  background: rgba(192, 122, 48, 0.18);
}

/* Softer top progress bar */
.top-progress {
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
}

/* Update map filter — slightly warmer */
iframe {
  filter: invert(0.88) hue-rotate(165deg) saturate(0.7) brightness(0.9);
}

/* Update about section decorative pattern */
.about-img-wrap::after {
  background: repeating-linear-gradient(
    45deg, transparent 0 8px, 
    rgba(192, 122, 48, 0.06) 8px 16px
  );
}
```

**Update cursor hover colors di `main.js`:**
```javascript
// Ganti warna cursor hover
el.addEventListener("mouseenter", () => {
  cursorDot.style.width = "24px";
  cursorDot.style.height = "24px";
  cursorDot.style.background = "rgba(192,122,48,0.16)";
});
el.addEventListener("mouseleave", () => {
  cursorDot.style.width = "14px";
  cursorDot.style.height = "14px";
  cursorDot.style.background = "rgba(192,122,48,0.22)";
});
```

---

## 💰 FIX HARGA — SET SEMUA PRODUK KE IDR 150.000

Di `main.js`, pada array `products`, tambahkan field `price` ke setiap produk:
```javascript
// Tambahkan price: "IDR 150.000" ke setiap objek produk
{ name: "90% Dark Chocolate Couverture", cat: "Dark Couverture", price: "IDR 150.000", ... }
// Lakukan untuk semua produk
```

Di fungsi `renderProducts()`, ganti:
```javascript
// SEBELUM (hapus ini):
<div class="price">IDR -</div>

// SESUDAH (ganti dengan):
<div class="price">${p.price || "IDR 150.000"}</div>
```

Tambahkan CSS untuk price agar lebih menonjol:
```css
.price {
  color: var(--color-primary-light);
  font-weight: 600;
  font-size: 1.05rem;
  font-family: var(--font-accent);
  margin: 0.3rem 0;
}
```

---

## 🌐 FITUR BARU — TOMBOL SWITCH BAHASA (INDONESIA | ENGLISH)

### Implementasi Language Toggle

**LANGKAH 1 — Tambahkan tombol switch di Navbar (`index.html`)**

Sisipkan tombol ini di dalam `.nav-links` dan juga di `.mobile-menu nav`, sebelum tombol "Order Sekarang":
```html
<button class="lang-toggle" id="langToggle" aria-label="Switch language">
  <span class="lang-id active">🇮🇩 ID</span>
  <span class="lang-sep">|</span>
  <span class="lang-en">🇬🇧 EN</span>
</button>
```

**LANGKAH 2 — CSS untuk tombol bahasa (`styles.css`)**
```css
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(192, 122, 48, 0.08);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  color: var(--color-text-muted);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: border-color 0.2s, background 0.2s;
  min-height: 36px;
  white-space: nowrap;
}
.lang-toggle:hover {
  border-color: var(--color-primary);
  background: rgba(192, 122, 48, 0.12);
}
.lang-toggle .lang-id,
.lang-toggle .lang-en {
  transition: color 0.2s, font-weight 0.2s;
  color: var(--color-text-muted);
}
.lang-toggle .lang-id.active,
.lang-toggle .lang-en.active {
  color: var(--color-primary-light);
  font-weight: 600;
}
.lang-sep {
  color: var(--color-border);
  font-size: 0.75rem;
}
```

**LANGKAH 3 — Tambahkan atribut `data-id` dan `data-en` ke semua teks konten di `index.html`**

Berikan atribut `data-id` (Bahasa Indonesia) dan `data-en` (English) pada SETIAP elemen teks yang perlu diterjemahkan. Contoh:

```html
<!-- Navbar -->
<a href="#beranda" data-id="Beranda" data-en="Home">Beranda</a>
<a href="#tentang" data-id="Tentang Kami" data-en="About Us">Tentang Kami</a>
<a href="#produk" data-id="Produk" data-en="Products">Produk</a>
<a href="#lokasi" data-id="Lokasi" data-en="Location">Lokasi</a>
<a href="#kontak" data-id="Kontak" data-en="Contact">Kontak</a>
<a href="#faq" data-id="FAQ" data-en="FAQ">FAQ</a>
<a class="btn btn-primary" ... data-id="Order Sekarang" data-en="Order Now">Order Sekarang</a>

<!-- Hero -->
<div class="hero-eyebrow" data-id="Premium Artisan Chocolate" data-en="Premium Artisan Chocolate">Premium Artisan Chocolate</div>
<h1 class="hero-title" data-id="Nikmati Cokelat Premium Dari Bali" data-en="Enjoy Premium Chocolate From Bali">Nikmati Cokelat Premium Dari Bali</h1>
<p class="hero-sub" data-id="Dibuat dengan passion dari biji kakao pilihan Bali, untuk pengalaman rasa yang tak terlupakan." data-en="Crafted with passion from Bali's finest cacao beans, for an unforgettable taste experience.">Dibuat dengan passion...</p>
<a class="btn btn-primary" ... data-id="Pesan Sekarang" data-en="Order Now">Pesan Sekarang</a>
<a class="btn btn-ghost" ... data-id="Lihat Produk" data-en="View Products">Lihat Produk</a>

<!-- Stats -->
<div data-id="Natural" data-en="Natural">Natural</div>
<div data-id="Pelanggan" data-en="Customers">Pelanggan</div>
<div data-id="Varian Produk" data-en="Product Variants">Varian Produk</div>

<!-- About -->
<h2 class="section-title" data-id="Tentang Pica Chocolate" data-en="About Pica Chocolate">Tentang Pica Chocolate</h2>
<!-- Paragraf about — buat elemen <p> punya data-id dan data-en dengan teks lengkap -->

<!-- Features -->
<h3 data-id="100% Natural" data-en="100% Natural">100% Natural</h3>
<p data-id="Tanpa bahan pengawet, murni dari alam." data-en="No preservatives, purely from nature.">...</p>
<h3 data-id="Langsung dari Petani" data-en="Directly from Farmers">...</h3>
<p data-id="Kemitraan berkelanjutan dengan petani kakao Bali." data-en="Sustainable partnerships with Bali cacao farmers.">...</p>
<h3 data-id="Kemasan Premium" data-en="Premium Packaging">...</h3>
<p data-id="Packaging eksklusif, sempurna untuk hadiah." data-en="Exclusive packaging, perfect for gifting.">...</p>
<h3 data-id="Tradisi & Inovasi" data-en="Tradition & Innovation">...</h3>
<p data-id="Warisan rasa dipadukan teknologi modern." data-en="Timeless taste heritage meets modern craftsmanship.">...</p>

<!-- Testimonial section title -->
<h2 data-id="Apa Kata Mereka" data-en="What They Say">Apa Kata Mereka</h2>

<!-- Lokasi -->
<h2 data-id="Lokasi Kami" data-en="Our Location">Lokasi Kami</h2>
<a class="btn btn-primary" ... data-id="Buka di Google Maps" data-en="Open in Google Maps">Buka di Google Maps</a>

<!-- Kontak -->
<h2 data-id="Mari Berkenalan" data-en="Get in Touch">Mari Berkenalan</h2>
<!-- Form labels -->
<label for="nama" data-id="Nama Lengkap" data-en="Full Name">Nama Lengkap</label>
<label for="email" data-id="Email" data-en="Email">Email</label>
<label for="wa" data-id="Nomor WhatsApp" data-en="WhatsApp Number">Nomor WhatsApp</label>
<label for="alamat" data-id="Alamat" data-en="Address">Alamat</label>
<label for="pesan" data-id="Pesan" data-en="Message">Pesan</label>
<button type="submit" data-id="Kirim Pesan" data-en="Send Message">Kirim Pesan</button>

<!-- FAQ -->
<h2 data-id="FAQ" data-en="FAQ">FAQ</h2>
<!-- Setiap FAQ button dan panel — tambahkan data-id dan data-en dengan teks lengkap -->

<!-- Footer -->
<p data-id="Cokelat Artisan Premium dari Biji Kakao Pilihan Bali." data-en="Premium Artisan Chocolate from Bali's Finest Cacao Beans.">...</p>
<h3 data-id="Menu" data-en="Menu">Menu</h3>
<h3 data-id="Produk" data-en="Products">Produk</h3>
<h3 data-id="Kontak" data-en="Contact">Kontak</h3>
```

**LANGKAH 4 — JavaScript untuk Language Switch (`main.js`)**

Tambahkan kode berikut di bagian bawah `main.js`:

```javascript
// ============================
// LANGUAGE TOGGLE SYSTEM
// ============================
let currentLang = localStorage.getItem('picaLang') || 'id';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('picaLang', lang);

  // Update semua elemen dengan data-id / data-en
  document.querySelectorAll('[data-id][data-en]').forEach(el => {
    el.textContent = lang === 'id' ? el.dataset.id : el.dataset.en;
  });

  // Update toggle button visual
  const idSpan = document.querySelectorAll('.lang-id');
  const enSpan = document.querySelectorAll('.lang-en');
  idSpan.forEach(el => el.classList.toggle('active', lang === 'id'));
  enSpan.forEach(el => el.classList.toggle('active', lang === 'en'));

  // Update produk (re-render dengan bahasa baru)
  renderProducts(lang);

  // Update filter chips
  renderFilters(lang);

  // Update document lang attribute
  document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : 'en');
}

// Update renderFilters untuk support bilingual
const categoriesEN = ["All", "Dark Couverture", "Milk Couverture", "White Couverture", "Dark Compound", "Milk Compound", "Series 120g"];
const categoriesID = ["Semua", "Dark Couverture", "Milk Couverture", "White Couverture", "Dark Compound", "Milk Compound", "Series 120g"];

// Update array products untuk include desc_en dan full_en:
// Tambahkan field desc_en dan full_en ke setiap produk di array products:
// Contoh:
// { 
//   name: "90% Dark Chocolate Couverture", 
//   name_en: "90% Dark Chocolate Couverture",
//   cat: "Dark Couverture", 
//   price: "IDR 150.000",
//   img: "...", 
//   desc: "Rasa kuat, smooth, dan memorable.", 
//   desc_en: "Intense, smooth, and deeply memorable.",
//   full: "Dark chocolate dengan 90% kakao...", 
//   full_en: "A dark chocolate bar with 90% cacao...",
// }

// Modifikasi renderProducts() untuk terima parameter lang:
function renderProducts(lang = currentLang) {
  const catMap = { 'Semua': 'All' };
  const resolvedCat = catMap[activeCat] || activeCat;
  const list = (activeCat === 'All' || activeCat === 'Semua') 
    ? products 
    : products.filter(p => p.cat === resolvedCat);

  const btnDetail = lang === 'id' ? 'Detail' : 'Details';
  const btnOrder  = lang === 'id' ? 'Pesan via WA' : 'Order via WA';

  grid.innerHTML = list.map(p => `
    <article class="card glass animate-on-scroll">
      <div class="media">
        <span class="badge">${p.cat}</span>
        ${p.img 
          ? `<img src="${p.img}" loading="lazy" width="600" height="900"
               alt="${lang === 'id' ? p.name : (p.name_en || p.name)} dari Pica Chocolate Bali"
               onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'placeholder\\'><span>${p.cat}</span></div>'">`
          : `<div class="placeholder"><span>${p.cat}</span></div>`
        }
      </div>
      <div class="card-body">
        <h3 class="name">${lang === 'id' ? p.name : (p.name_en || p.name)}</h3>
        <p class="desc">${lang === 'id' ? p.desc : (p.desc_en || p.desc)}</p>
        <div class="price">${p.price || 'IDR 150.000'}</div>
        <div class="card-cta">
          <button class="btn btn-ghost" data-detail="${p.name}">${btnDetail}</button>
          <button class="btn btn-primary" data-order="${p.name}">${btnOrder}</button>
        </div>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Event listener untuk tombol toggle (handle SEMUA tombol .lang-toggle di halaman)
document.querySelectorAll('#langToggle, .lang-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(currentLang === 'id' ? 'en' : 'id');
  });
});

// Apply bahasa saat halaman pertama load
applyLanguage(currentLang);
```

**LANGKAH 5 — Tambahkan terjemahan lengkap ke products array di `main.js`**

Update setiap item di array `products` dengan field bilingual berikut:
```javascript
const products = [
  {
    name: "90% Dark Chocolate Couverture",
    name_en: "90% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    price: "IDR 150.000",
    img: "./gambar/90% Dark Chocolate Couverture.webp",
    desc: "Rasa kuat, smooth, dan memorable.",
    desc_en: "Intense, smooth, and deeply memorable.",
    full: "Dark chocolate dengan 90% kakao untuk rasa yang kuat, smooth, dan memorable. Cocok untuk penikmat dark chocolate premium.",
    full_en: "A premium dark chocolate bar with 90% cacao content. Intensely smooth with deep, complex cocoa notes. Perfect for the true dark chocolate connoisseur."
  },
  {
    name: "80% Dark Chocolate Couverture",
    name_en: "80% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    price: "IDR 150.000",
    img: "./gambar/80% Dark Chocolate Couverture.webp",
    desc: "Bold namun tetap smooth.",
    desc_en: "Bold character, yet beautifully smooth.",
    full: "Dengan 80% kakao, karakter bold tetap seimbang, nikmat untuk konsumsi langsung dan kreasi bakery.",
    full_en: "With 80% cacao, this bar delivers a bold yet balanced profile — ideal for direct enjoyment or premium baking creations."
  },
  {
    name: "60% Dark Chocolate Couverture",
    name_en: "60% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    price: "IDR 150.000",
    img: "./gambar/60% Dark Chocolate Couverture.webp",
    desc: "Seimbang, lembut, dan kaya kakao.",
    desc_en: "Balanced, silky, and full of cacao character.",
    full: "Dengan 60% kakao, menghadirkan profil rasa yang ramah untuk banyak palet dengan karakter kakao khas.",
    full_en: "60% cacao delivers a universally approachable flavor profile — rich cocoa character with a gentle sweetness that pleases every palate."
  },
  {
    name: "56% Dark Chocolate Couverture",
    name_en: "56% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    price: "IDR 150.000",
    img: "./gambar/56% Dark Chocolate Couverture.webp",
    desc: "Lebih creamy dan sedikit manis.",
    desc_en: "Creamy texture with a gentle sweetness.",
    full: "56% kakao dengan tekstur lebih creamy. Cocok dinikmati kapan saja.",
    full_en: "A 56% cacao bar with a noticeably creamier mouthfeel and delicate sweetness. A wonderful everyday indulgence."
  },
  {
    name: "Jackfruit Milk Chocolate Couverture",
    name_en: "Jackfruit Milk Chocolate Couverture",
    cat: "Milk Couverture",
    price: "IDR 150.000",
    img: "./gambar/Jackfruit Milk Chocolate Couverture.webp",
    desc: "Milk chocolate dengan sentuhan nangka tropis.",
    desc_en: "Milk chocolate with a tropical jackfruit twist.",
    full: "Perpaduan milk chocolate premium dengan karakter buah tropis nangka yang unik — sebuah cita rasa khas Bali.",
    full_en: "A unique fusion of premium milk chocolate with the tropical character of jackfruit — an exclusively Balinese flavor experience."
  },
  {
    name: "Cashew Milk Chocolate Couverture",
    name_en: "Cashew Milk Chocolate Couverture",
    cat: "Milk Couverture",
    price: "IDR 150.000",
    img: "./gambar/Cashew Milk Chocolate Couverture.webp",
    desc: "Milk chocolate dengan rasa kacang mete.",
    desc_en: "Milk chocolate infused with rich cashew flavor.",
    full: "Milk chocolate dengan nuansa kacang mete yang lembut dan premium. Tekstur mulus, rasa yang memanjakan.",
    full_en: "Premium milk chocolate enriched with subtle cashew notes. Silky smooth texture, indulgently satisfying."
  },
  {
    name: "50% Milk Chocolate Couverture",
    name_en: "50% Milk Chocolate Couverture",
    cat: "Milk Couverture",
    price: "IDR 150.000",
    img: "./gambar/50% Milk Chocolate Couverture.webp",
    desc: "Milk couverture klasik yang seimbang.",
    desc_en: "A perfectly balanced classic milk couverture.",
    full: "Komposisi 50% kakao untuk rasa manis-gurih seimbang, cocok untuk konsumsi langsung maupun hadiah premium.",
    full_en: "A 50% cacao milk couverture with a beautifully balanced sweet-savory profile. Perfect for gifting or everyday indulgence."
  },
  {
    name: "Mint Dark Chocolate Compound",
    name_en: "Mint Dark Chocolate Compound",
    cat: "Dark Compound",
    price: "IDR 150.000",
    img: "./gambar/Mint Chocolate Compound.webp",
    desc: "Dark compound segar dengan mint.",
    desc_en: "Refreshing dark compound with cool mint.",
    full: "Dark compound dengan sensasi mint menyegarkan, ideal untuk aplikasi dekorasi dan snack sehari-hari.",
    full_en: "A cooling mint-infused dark compound — ideal for decoration, dipping, and refreshing everyday snacking."
  }
];
```

---

## ✅ TOAST MESSAGE — BILINGUAL

Update toast message di `main.js` pada event submit form:
```javascript
// Ganti pesan toast agar sesuai bahasa:
const toastMsg = currentLang === 'id' 
  ? 'Pesan terkirim! Kami akan segera menghubungi Anda. ✅' 
  : 'Message sent! We will contact you shortly. ✅';
toast.textContent = toastMsg;
toast.classList.add("show");
setTimeout(() => toast.classList.remove("show"), 3500);
```

---

## 📋 CHECKLIST AKHIR — VERIFIKASI SEBELUM SELESAI

- [ ] Semua gambar produk tampil (tidak ada card hitam kosong)
- [ ] `onerror` handler terpasang pada setiap `<img>` produk
- [ ] Foto owner: max-width 320px, height 380px, object-position center top
- [ ] Warna tema: warm dark chocolate (amber/gold), bukan hijau
- [ ] Semua harga produk: **IDR 150.000**
- [ ] Tombol `🇮🇩 ID | 🇬🇧 EN` muncul di navbar desktop DAN mobile menu
- [ ] Klik toggle bahasa → semua teks berubah (navbar, hero, about, fitur, testimonial, lokasi, kontak form label, FAQ, footer)
- [ ] Produk cards: nama, deskripsi, dan tombol berubah mengikuti bahasa
- [ ] Pilihan bahasa tersimpan di `localStorage` (refresh tetap ingat)
- [ ] Tidak ada horizontal scroll di semua ukuran layar
- [ ] Semua link WA, Maps, tel:, mailto: masih berfungsi
- [ ] Smooth scroll antar section tetap berfungsi
- [ ] FAQ accordion tetap berfungsi
- [ ] Testimonial slider tetap berfungsi
- [ ] Modal produk tetap berfungsi
- [ ] Animasi scroll-triggered tetap berfungsi

---

> 🎯 **TARGET AKHIR:** Website yang bersih, hangat, dan premium — dengan tema cokelat amber yang memanjakan mata, gambar produk tampil sempurna, foto owner proporsional, harga konsisten IDR 150.000, dan fitur bilingual ID/EN yang mulus dan tersimpan otomatis.

---
*Pica Chocolate Bali — Bug Fix & Enhancement Prompt v2.0*
