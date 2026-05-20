const fmt = (n) => `Rp ${n.toLocaleString("id-ID")}`;

const products = [
  {
    name: "Temple Series 120g",
    name_en: "Temple Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Temple_Series.png",
    desc: "Koleksi cokelat bertema pura Bali, elegan untuk hadiah.",
    desc_en: "Bali temple-themed chocolate collection, elegant for gifting.",
    price: fmt(125000),
    detail:
      "Setiap potongan mengangkat keindahan arsitektur Bali ke dalam rasa. Tekstur halus, finishing premium, dan kemasan yang siap Anda berikan ke orang terpenting.",
    detail_en:
      "Each piece celebrates Bali temple beauty in flavor. Smooth texture, premium finish, gift-ready packaging.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Instrument Series 120g",
    name_en: "Instrument Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Instrument_Series.png",
    desc: "Seri edisi khusus dengan karakter rasa yang memorable.",
    desc_en: "Special edition series with memorable flavor character.",
    price: fmt(125000),
    detail:
      "Dirancang untuk pecinta cokelat yang ingin sesuatu yang berbeda dari produk massal. Rasa kaya, aftertaste bersih, dan presentasi mewah.",
    detail_en: "Made for chocolate lovers who want something beyond mass-market products.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Animal Series 120g",
    name_en: "Animal Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Animal_Series.png",
    desc: "Cokelat lucu nan premium, favorit keluarga dan anak.",
    desc_en: "Playful yet premium chocolate, a family favorite.",
    price: fmt(125000),
    detail:
      "Kombinasi visual menarik dan rasa autentik Pica. Cocok untuk oleh-oleh Bali yang terasa istimewa sejak pertama kali dibuka.",
    detail_en: "Attractive visuals with authentic Pica taste. Perfect Bali souvenir.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Natural Series 120g",
    name_en: "Natural Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Natural_Series.png",
    desc: "Nuansa alam Bali dalam setiap gigitan cokelat.",
    desc_en: "Bali nature notes in every chocolate bite.",
    price: fmt(125000),
    detail:
      "Menonjolkan keaslian bahan dan proses yang hati-hati. Anda akan merasakan kualitas dari aroma pembukaan hingga aftertaste.",
    detail_en: "Highlights ingredient authenticity and careful craftsmanship from aroma to finish.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Culture Series 120g",
    name_en: "Culture Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Culture_Series.png",
    desc: "Merayakan warisan budaya Bali lewat cokelat artisan.",
    desc_en: "Celebrates Balinese heritage through artisan chocolate.",
    price: fmt(125000),
    detail:
      "Pilihan tepat bila Anda ingin memberi kesan mendalam: bukan sekadar manis, tetapi cerita Bali yang bisa dinikmati.",
    detail_en: "Ideal when you want to give more than sweetness—a tastable Bali story.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Beach Series 120g",
    name_en: "Beach Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Beach_Series.png",
    desc: "Sensasi segar pantai Bali dalam koleksi premium.",
    desc_en: "Fresh Bali beach sensation in a premium collection.",
    price: fmt(125000),
    detail:
      "Rasa yang ringan namun tetap berkelas, dengan finishing yang membuat Anda ingin memesan lagi untuk orang tersayang.",
    detail_en: "Light yet classy flavor with a finish that invites repeat gifting.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Destination Series 120g",
    name_en: "Destination Series 120g",
    cat: "Series 120g",
    img: "./gambar/products/Pica_Destination_Series.png",
    desc: "Edisi destinasi ikonik Bali, siap jadi hadiah premium.",
    desc_en: "Iconic Bali destination edition, premium gift-ready.",
    price: fmt(125000),
    detail:
      "Varian bestseller untuk corporate gift dan hampers. Kualitas konsisten, tampilan mewah, dan rasa yang diingat lama.",
    detail_en: "Bestseller for corporate gifts and hampers with consistent quality and luxury look.",
    ingredients: "Cocoa mass, cocoa butter, gula, susu bubuk, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Avocado White Compound 40g",
    name_en: "Avocado White Compound 40g",
    cat: "White Compound",
    img: "./gambar/products/Pica_Avocado.jpg",
    desc: "White compound lembut dengan nuansa alpukat segar.",
    desc_en: "Smooth white compound with fresh avocado notes.",
    price: fmt(44000),
    detail:
      "Perpaduan creamy dan fruity yang unik. Cocok untuk Anda yang ingin cokelat Bali dengan twist rasa modern namun tetap premium.",
    detail_en: "Unique creamy-fruity blend for modern premium Bali chocolate lovers.",
    ingredients: "Gula, vegetable fat, susu bubuk, bubuk alpukat, emulsifier (lecithin), perisa natural.",
  },
  {
    name: "Durian White Compound 40g",
    name_en: "Durian White Compound 40g",
    cat: "White Compound",
    img: "./gambar/products/Pica_Durian.jpg",
    desc: "White compound dengan karakter durian yang khas.",
    desc_en: "White compound with distinctive durian character.",
    price: fmt(44000),
    detail:
      "Untuk pecinta rasa tropis yang berani. Aroma kuat, tekstur halus, dan kualitas Pica yang membuatnya tetap terasa mewah.",
    detail_en: "For bold tropical flavor lovers with smooth Pica quality.",
    ingredients: "Gula, vegetable fat, susu bubuk, perisa durian, emulsifier (lecithin).",
  },
  {
    name: "Mango White Compound 40g",
    name_en: "Mango White Compound 40g",
    cat: "White Compound",
    img: "./gambar/products/Pica_Mango_2.jpeg",
    desc: "Manis tropis mangga yang menyegarkan lidah.",
    desc_en: "Refreshing tropical mango sweetness.",
    price: fmt(44000),
    detail:
      "Rasa mangga yang cerah berpadu dengan white compound creamy. Pilihan aman untuk hadiah yang disukai banyak orang.",
    detail_en: "Bright mango paired with creamy white compound—a crowd-pleasing gift.",
    ingredients: "Gula, vegetable fat, susu bubuk, perisa mangga, emulsifier (lecithin).",
  },
  {
    name: "Strawberry White Compound 40g",
    name_en: "Strawberry White Compound 40g",
    cat: "White Compound",
    img: "./gambar/products/Pica_Strawberry.jpg",
    desc: "Strawberry fruity yang lembut dan mudah disukai.",
    desc_en: "Soft fruity strawberry everyone enjoys.",
    price: fmt(44000),
    detail:
      "Varian paling ramah untuk semua umur. Cocok untuk stok rumah, hampers, atau oleh-oleh yang langsung disukai penerima.",
    detail_en: "All-ages friendly variant for home stock, hampers, or souvenirs.",
    ingredients: "Gula, vegetable fat, susu bubuk, perisa stroberi, emulsifier (lecithin).",
  },
  {
    name: "56% Dark Couverture 70g",
    name_en: "56% Dark Couverture 70g",
    cat: "Dark Couverture",
    img: "./gambar/products/Pica_56_Dark_Couverture.png",
    desc: "Dark couverture seimbang, creamy, dan mudah dinikmati.",
    desc_en: "Balanced dark couverture—creamy and approachable.",
    price: fmt(55000),
    detail:
      "Titik tengah terbaik antara intensitas kakao dan kelembutan. Ideal untuk pemula dark chocolate maupun pecinta rasa klasik.",
    detail_en: "Perfect midpoint between cocoa intensity and softness.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), vanilla natural.",
  },
  {
    name: "50% Milk Couverture 70g",
    name_en: "50% Milk Couverture 70g",
    cat: "Milk Couverture",
    img: "./gambar/products/Pica_50_Milk_Couverture.png",
    desc: "Milk couverture klasik dengan body lembut.",
    desc_en: "Classic milk couverture with soft body.",
    price: fmt(37000),
    detail:
      "Rasa susu yang hangat dan kakao yang jelas. Pilihan tepat bila Anda ingin cokelat premium yang nyaman dinikmati setiap hari.",
    detail_en: "Warm milk notes with clear cocoa—comfortable everyday premium chocolate.",
    ingredients: "Gula, cocoa butter, susu bubuk penuh, cocoa mass, emulsifier (lecithin), vanilla.",
  },
  {
    name: "60% Dark Couverture 70g",
    name_en: "60% Dark Couverture 70g",
    cat: "Dark Couverture",
    img: "./gambar/products/Pica_60_Dark_Couverture.jpeg",
    desc: "Profil dark yang seimbang untuk semua selera.",
    desc_en: "Balanced dark profile for every palate.",
    price: fmt(37000),
    detail:
      "Cokelat asli dengan karakter kakao yang tegas namun tetap ramah. Sangat cocok untuk oleh-oleh yang ingin terasa berkelas.",
    detail_en: "Authentic chocolate with assertive yet friendly cocoa character.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), vanilla natural.",
  },
  {
    name: "80% Dark Couverture 70g",
    name_en: "80% Dark Couverture 70g",
    cat: "Dark Couverture",
    img: "./gambar/products/Pica_80_Dark_Couverture.png",
    desc: "Dark bold dengan finish elegan di lidah.",
    desc_en: "Bold dark with an elegant finish.",
    price: fmt(37000),
    detail:
      "Untuk Anda yang menghargai kedalaman rasa kakao. Setiap gigitan terasa jujur, premium, dan layak dijadikan stok favorit.",
    detail_en: "For those who value deep cocoa depth in every honest premium bite.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), vanilla natural.",
  },
  {
    name: "90% Dark Couverture 70g",
    name_en: "90% Dark Couverture 70g",
    cat: "Dark Couverture",
    img: "./gambar/products/Pica_90_Dark_Couverture.jpeg",
    desc: "Intensitas kakao tertinggi untuk penikmat dark sejati.",
    desc_en: "Highest cocoa intensity for true dark lovers.",
    price: fmt(37000),
    detail:
      "Puncak koleksi couverture Pica. Karakter kuat, aftertaste bersih, dan kualitas yang membuat Anda percaya diri memberikannya sebagai hadiah istimewa.",
    detail_en: "Peak of Pica couverture—strong character and clean aftertaste for special gifting.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), vanilla natural.",
  },
  {
    name: "Mint Dark Compound 70g",
    name_en: "Mint Dark Compound 70g",
    cat: "Dark Compound",
    img: "./gambar/products/Pica_Mint.jpg",
    desc: "Dark chocolate segar dengan sentuhan mint aromatic.",
    desc_en: "Refreshing dark chocolate with aromatic mint.",
    price: fmt(37000),
    detail:
      "Sensasi segar yang memorable tanpa mengalahkan karakter cokelat. Pilihan modern yang tetap terasa premium.",
    detail_en: "Memorable freshness without losing chocolate character.",
    ingredients: "Gula, cocoa mass/powder, lemak nabati, cocoa butter, emulsifier, perisa mint.",
  },
  {
    name: "Nibs & Salt Dark Compound 70g",
    name_en: "Nibs & Salt Dark Compound 70g",
    cat: "Dark Compound",
    img: "./gambar/products/Pica_Nibs_Salt.jpg",
    desc: "Kontras renyah kakao nibs dan sentuhan garam halus.",
    desc_en: "Crunchy cacao nibs contrast with a touch of salt.",
    price: fmt(37000),
    detail:
      "Tekstur dan rasa yang berlapis—manis, pahit, dan savory seimbang. Varian signature untuk pecinta cokelat karakter kuat.",
    detail_en: "Layered texture and taste—sweet, bitter, and savory in balance.",
    ingredients: "Gula, cocoa mass, cocoa nibs, garam, lemak nabati, emulsifier (lecithin).",
  },
  {
    name: "Salted Peanut Dark Compound 70g",
    name_en: "Salted Peanut Dark Compound 70g",
    cat: "Dark Compound",
    img: "./gambar/products/Pica_Salted_Peanut.jpg",
    desc: "Dark compound dengan kacang dan garam yang pas.",
    desc_en: "Dark compound with balanced peanut and salt.",
    price: fmt(37000),
    detail:
      "Perpaduan gurih dan cokelat yang addictive. Sangat cocok untuk menemani kopi sore atau jadi isi hampers premium.",
    detail_en: "Savory-chocolate pairing perfect with afternoon coffee or premium hampers.",
    ingredients: "Gula, cocoa mass, kacang tanah, garam, lemak nabati, emulsifier (lecithin).",
  },
  {
    name: "Rice Krispies Dark Compound 70g",
    name_en: "Rice Krispies Dark Compound 70g",
    cat: "Dark Compound",
    img: "./gambar/products/Pica_Rice_Krispies.jpeg",
    desc: "Tekstur renyah rice krispies dalam dark compound.",
    desc_en: "Crispy rice krispies texture in dark compound.",
    price: fmt(37000),
    detail:
      "Sensasi crunch yang menyenangkan di setiap gigitan. Favorit anak-anak dan dewasa yang ingin cokelat dengan pengalaman makan unik.",
    detail_en: "Fun crunch in every bite—loved by kids and adults alike.",
    ingredients: "Gula, cocoa mass, rice krispies, lemak nabati, emulsifier (lecithin).",
  },
];

const filters = document.getElementById("filters");
const grid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");
let active = "All";

const allCategories = [
  "Dark Couverture",
  "Milk Couverture",
  "White Compound",
  "Dark Compound",
  "Series 120g",
];

const categoriesWithProducts = [...new Set(products.map((p) => p.cat))];

function renderFilters() {
  if (!filters) return;
  const lang = localStorage.getItem("picaLang") || "id";
  const allLabel = lang === "id" ? "Semua" : "All";

  const displayCategories = ["All", ...categoriesWithProducts.sort()];

  filters.innerHTML = displayCategories
    .map((c) => {
      const isActive = c === active ? "active" : "";
      const label = c === "All" ? allLabel : c;
      return `<button class="chip ${isActive}" data-cat="${c}">${label}</button>`;
    })
    .join("");
}

function renderProducts() {
  if (!grid) return;
  const lang = localStorage.getItem("picaLang") || "id";
  const detailLabel = lang === "id" ? "Detail" : "Details";
  const orderLabel = lang === "id" ? "Pesan via WA" : "Order via WA";
  const comingSoonLabel = lang === "id" ? "Segera Hadir" : "Coming Soon";
  const list =
    active === "All" ? products : products.filter((p) => p.cat === active);

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; min-height: 400px; text-align: center;">
        <div>
          <h2 style="font-family: var(--font-display); font-size: 2.2rem; color: var(--primary); margin: 0 0 1rem 0;">${comingSoonLabel}</h2>
          <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">${lang === "id" ? "Kategori ini akan segera tersedia" : "This category will be available soon"}</p>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = list
    .map(
      (p) => `
    <article class="card product-card animate">
      <div class="media">
        <span class="badge">${p.cat}</span>
        <img src="${encodeURI(p.img)}" loading="lazy" width="600" height="900" alt="${p.name} dari Pica Chocolate Bali"
        onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'placeholder\\'><span>${p.cat}</span></div>'">
      </div>
      <div class="product-body">
        <h3>${lang === "id" ? p.name : p.name_en || p.name}</h3>
        <p>${lang === "id" ? p.desc : p.desc_en || p.desc}</p>
        <div class="price">${p.price}</div>
        <div style="display:flex;gap:.5rem;margin-top:.65rem">
          <button class="btn btn-ghost" data-detail="${p.name}">${detailLabel}</button>
          <button class="btn btn-primary" data-order="${p.name}">${orderLabel}</button>
        </div>
      </div>
    </article>`,
    )
    .join("");
  grid.querySelectorAll(".animate").forEach((el) => {
    el.classList.add("visible");
  });
}

filters?.addEventListener("click", (e) => {
  if (!e.target.matches(".chip")) return;
  active = e.target.dataset.cat;
  renderFilters();
  renderProducts();
});

grid?.addEventListener("click", (e) => {
  const detail = e.target.closest("[data-detail]");
  const order = e.target.closest("[data-order]");
  if (order) {
    const productName = order.dataset.order;
    const product = products.find((p) => p.name === productName);
    const price = product?.price || "";
    const msg = `Halo Admin Pica! 👋\n\nSaya ingin memesan:\n*${productName}*${price ? `\nHarga: ${price}` : ""}\n\nMohon informasi ketersediaan. Terima kasih! 🍫`;
    window.open(
      `https://wa.me/628873418080?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }
  if (detail && modal) {
    const title = document.getElementById("mTitle");
    const desc = document.getElementById("mDesc");
    const product = products.find((p) => p.name === detail.dataset.detail);
    if (!product) return;
    const lang = localStorage.getItem("picaLang") || "id";
    title.textContent =
      lang === "id" ? product.name : product.name_en || product.name;
    desc.innerHTML =
      lang === "id"
        ? `<strong>Kenapa wajib coba:</strong><br>${product.detail}<br><br><strong>Bahan utama:</strong><br>${product.ingredients}<br><br><strong>Harga:</strong> ${product.price}`
        : `<strong>Why you should try:</strong><br>${product.detail_en || product.detail}<br><br><strong>Main ingredients:</strong><br>${product.ingredients}<br><br><strong>Price:</strong> ${product.price}`;
    modal.classList.add("open");
  }
});

document
  .getElementById("closeModal")
  ?.addEventListener("click", () => modal?.classList.remove("open"));
modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal?.classList.remove("open");
});

renderFilters();
renderProducts();
window.addEventListener("languagechange", () => {
  renderFilters();
  renderProducts();
});
