const products = [
  {
    name: "90% Dark Chocolate Couverture",
    name_en: "90% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/90% Dark Chocolate Couverture.webp",
    desc: "Rasa kakao intens untuk penikmat dark sejati.",
    desc_en: "Intense cocoa profile for true dark lovers.",
    price: "IDR 150.000",
    detail:
      "Pilihan paling premium untuk Anda yang suka karakter kakao kuat, clean finish, dan aftertaste elegan. Cocok untuk hadiah eksklusif atau pairing dengan kopi specialty.",
    detail_en:
      "A premium choice for those who love strong cocoa character, clean finish, and elegant aftertaste. Perfect for exclusive gifting or coffee pairing.",
    ingredients:
      "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla.",
  },
  {
    name: "80% Dark Chocolate Couverture",
    name_en: "80% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/80% Dark Chocolate Couverture.webp",
    desc: "Bold, seimbang, dan tetap smooth di lidah.",
    desc_en: "Bold, balanced, and still smooth on the palate.",
    price: "IDR 150.000",
    detail:
      "Dirancang untuk pecinta dark chocolate yang ingin rasa tegas namun tetap ramah dinikmati harian. Karakter kakao dominan dengan sentuhan manis yang pas.",
    detail_en:
      "Crafted for dark chocolate lovers who want assertive flavor yet everyday-friendly enjoyment.",
    ingredients:
      "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla.",
  },
  {
    name: "60% Dark Chocolate Couverture",
    name_en: "60% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/60% Dark Chocolate Couverture.webp",
    desc: "Profil rasa aman untuk semua kalangan.",
    desc_en: "A balanced profile that suits everyone.",
    price: "IDR 150.000",
    detail:
      "Keseimbangan terbaik antara intensitas kakao dan kelembutan rasa. Ideal sebagai oleh-oleh premium karena disukai banyak preferensi rasa.",
    detail_en:
      "Great balance between cocoa intensity and softness. Ideal as a premium gift for many taste preferences.",
    ingredients:
      "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla.",
  },
  {
    name: "56% Dark Chocolate Couverture",
    name_en: "56% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/56% Dark Chocolate Couverture.webp",
    desc: "Creamy, ringan, dan mudah disukai.",
    desc_en: "Creamy, light, and easy to enjoy.",
    price: "IDR 150.000",
    detail:
      "Varian nyaman untuk Anda yang ingin sensasi cokelat premium tanpa terlalu pahit. Pas untuk gift set, hampers, atau stok keluarga di rumah.",
    detail_en:
      "Comforting variant for those who want premium chocolate without too much bitterness.",
    ingredients:
      "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla.",
  },
  {
    name: "Cashew Milk Chocolate Couverture",
    name_en: "Cashew Milk Chocolate Couverture",
    cat: "Milk Couverture",
    img: "./gambar/Nibs & Salt Dark Chocolate Compound.webp",
    desc: "Milk chocolate lembut dengan nuansa kacang.",
    desc_en: "Smooth milk chocolate with nutty notes.",
    price: "IDR 150.000",
    detail:
      "Perpaduan creamy milk chocolate dan karakter kacang yang hangat menciptakan rasa mewah yang comforting. Sangat cocok untuk hadiah personal yang berkesan.",
    detail_en:
      "Creamy milk chocolate and warm nut character create a luxurious comforting taste.",
    ingredients:
      "Gula, cocoa butter, whole milk powder, cocoa mass, kacang mete, emulsifier (lecithin), natural vanilla.",
  },
  {
    name: "50% Milk Chocolate Couverture",
    name_en: "50% Milk Chocolate Couverture",
    cat: "Milk Couverture",
    img: "./gambar/60% Dark Chocolate Couverture.webp",
    desc: "Milk couverture klasik dengan body seimbang.",
    desc_en: "Classic milk couverture with balanced body.",
    price: "IDR 150.000",
    detail:
      "Tekstur halus, milky, dan tetap punya karakter kakao yang jelas. Aman untuk semua umur dan jadi varian favorit untuk hampers premium.",
    detail_en:
      "Smooth and milky with clear cocoa character. A favorite for premium hampers.",
    ingredients:
      "Gula, cocoa butter, whole milk powder, cocoa mass, skimmed milk powder, emulsifier (lecithin), natural vanilla.",
  },
  {
    name: "Mint Dark Chocolate Compound",
    name_en: "Mint Dark Chocolate Compound",
    cat: "Dark Compound",
    img: "./gambar/Mint Chocolate Compound.webp",
    desc: "Dark cokelat segar dengan mint aromatic.",
    desc_en: "Refreshing dark chocolate with aromatic mint.",
    price: "IDR 150.000",
    detail:
      "Sensasi mint yang bersih berpadu dengan cokelat hitam menciptakan finish segar dan memorable. Pilihan tepat untuk Anda yang ingin rasa unik dan modern.",
    detail_en:
      "Clean mint sensation blended with dark chocolate creates a fresh memorable finish.",
    ingredients:
      "Sugar, cocoa mass/powder, vegetable fat, cocoa butter, emulsifier (soy/sunflower lecithin), mint oil or peppermint flavour, natural vanilla.",
  },
];

const filters = document.getElementById("filters");
const grid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");
let active = "All";

// All categories - including those with no products yet
const allCategories = [
  "Dark Couverture",
  "Milk Couverture",
  "White Couverture",
  "Dark Compound",
  "Milk Compound",
  "Series 120g",
];

// Get categories that have products
const categoriesWithProducts = [...new Set(products.map((p) => p.cat))];

function renderFilters() {
  if (!filters) return;
  const lang = localStorage.getItem("picaLang") || "id";
  const allLabel = lang === "id" ? "Semua" : "All";
  const comingSoonLabel = lang === "id" ? "Segera Hadir" : "Coming Soon";

  // Build categories array - only show unique categories, add "All" first
  const displayCategories = ["All", ...categoriesWithProducts.sort()];

  filters.innerHTML = displayCategories
    .map((c) => {
      const isActive = c === active ? "active" : "";
      const label = c === "All" ? allLabel : c;
      return `<button class="chip ${isActive}" data-cat="${c}">${label}</button>`;
    })
    .join("");

  // AddComing Soon badges for empty categories
  const emptyCategories = allCategories.filter(
    (c) => !categoriesWithProducts.includes(c),
  );
  if (emptyCategories.length > 0) {
    const badges = emptyCategories
      .map((c) => {
        const isComingSoon = c === active ? "active" : "";
        return `<button class="chip ${isComingSoon}" data-cat="${c}">${c}</button>`;
      })
      .join("");
    filters.innerHTML += badges;
  }
}

function renderProducts() {
  if (!grid) return;
  const lang = localStorage.getItem("picaLang") || "id";
  const detailLabel = lang === "id" ? "Detail" : "Details";
  const orderLabel = lang === "id" ? "Pesan via WA" : "Order via WA";
  const comingSoonLabel = lang === "id" ? "Segera Hadir" : "Coming Soon";
  const list =
    active === "All" ? products : products.filter((p) => p.cat === active);

  // If no products in selected category, show coming soon
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
    const msg = `Halo Admin Pica! 👋\n\nSaya ingin memesan:\n*${productName}*\n\nMohon informasi ketersediaan dan harga. Terima kasih! 🍫`;
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
