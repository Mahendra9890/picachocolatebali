const products = [
  {
    name: "90% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/90% Dark Chocolate Couverture.webp",
    desc: "Rasa kakao intens untuk penikmat dark sejati.",
    price: "IDR 150.000",
    detail: "Pilihan paling premium untuk Anda yang suka karakter kakao kuat, clean finish, dan aftertaste elegan. Cocok untuk hadiah eksklusif atau pairing dengan kopi specialty.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla."
  },
  {
    name: "80% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/80% Dark Chocolate Couverture.webp",
    desc: "Bold, seimbang, dan tetap smooth di lidah.",
    price: "IDR 150.000",
    detail: "Dirancang untuk pecinta dark chocolate yang ingin rasa tegas namun tetap ramah dinikmati harian. Karakter kakao dominan dengan sentuhan manis yang pas.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla."
  },
  {
    name: "60% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/60% Dark Chocolate Couverture.webp",
    desc: "Profil rasa aman untuk semua kalangan.",
    price: "IDR 150.000",
    detail: "Keseimbangan terbaik antara intensitas kakao dan kelembutan rasa. Ideal sebagai oleh-oleh premium karena disukai banyak preferensi rasa.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla."
  },
  {
    name: "56% Dark Chocolate Couverture",
    cat: "Dark Couverture",
    img: "./gambar/56% Dark Chocolate Couverture.webp",
    desc: "Creamy, ringan, dan mudah disukai.",
    price: "IDR 150.000",
    detail: "Varian nyaman untuk Anda yang ingin sensasi cokelat premium tanpa terlalu pahit. Pas untuk gift set, hampers, atau stok keluarga di rumah.",
    ingredients: "Cocoa mass, cocoa butter, gula, emulsifier (lecithin), natural vanilla."
  },
  {
    name: "Cashew Milk Chocolate Couverture",
    cat: "Milk Couverture",
    img: "./gambar/Nibs & Salt Dark Chocolate Compound.webp",
    desc: "Milk chocolate lembut dengan nuansa kacang.",
    price: "IDR 150.000",
    detail: "Perpaduan creamy milk chocolate dan karakter kacang yang hangat menciptakan rasa mewah yang comforting. Sangat cocok untuk hadiah personal yang berkesan.",
    ingredients: "Gula, cocoa butter, whole milk powder, cocoa mass, kacang mete, emulsifier (lecithin), natural vanilla."
  },
  {
    name: "50% Milk Chocolate Couverture",
    cat: "Milk Couverture",
    img: "./gambar/60% Dark Chocolate Couverture.webp",
    desc: "Milk couverture klasik dengan body seimbang.",
    price: "IDR 150.000",
    detail: "Tekstur halus, milky, dan tetap punya karakter kakao yang jelas. Aman untuk semua umur dan jadi varian favorit untuk hampers premium.",
    ingredients: "Gula, cocoa butter, whole milk powder, cocoa mass, skimmed milk powder, emulsifier (lecithin), natural vanilla."
  },
  {
    name: "Mint Dark Chocolate Compound",
    cat: "Dark Compound",
    img: "./gambar/Mint Chocolate Compound.webp",
    desc: "Dark cokelat segar dengan mint aromatic.",
    price: "IDR 150.000",
    detail: "Sensasi mint yang bersih berpadu dengan cokelat hitam menciptakan finish segar dan memorable. Pilihan tepat untuk Anda yang ingin rasa unik dan modern.",
    ingredients: "Sugar, cocoa mass/powder, vegetable fat, cocoa butter, emulsifier (soy/sunflower lecithin), mint oil or peppermint flavour, natural vanilla."
  }
];

const categories = ["All", "Dark Couverture", "Milk Couverture", "White Couverture", "Dark Compound", "Milk Compound", "Series 120g"];
const filters = document.getElementById("filters");
const grid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");
let active = "All";

function renderFilters() {
  if (!filters) return;
  filters.innerHTML = categories.map((c) => `<button class="chip ${c === active ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
}

function renderProducts() {
  if (!grid) return;
  const list = active === "All" ? products : products.filter((p) => p.cat === active);
  grid.innerHTML = list.map((p) => `
    <article class="card product-card animate">
      <div class="media">
        <span class="badge">${p.cat}</span>
        <img src="${encodeURI(p.img)}" loading="lazy" width="600" height="900" alt="${p.name} dari Pica Chocolate Bali"
        onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'placeholder\\'><span>${p.cat}</span></div>'">
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">${p.price}</div>
        <div style="display:flex;gap:.5rem;margin-top:.65rem">
          <button class="btn btn-ghost" data-detail="${p.name}">Detail</button>
          <button class="btn btn-primary" data-order="${p.name}">Pesan via WA</button>
        </div>
      </div>
    </article>`).join("");
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
    window.open(`https://wa.me/628873418080?text=${encodeURIComponent(msg)}`, "_blank");
  }
  if (detail && modal) {
    const title = document.getElementById("mTitle");
    const desc = document.getElementById("mDesc");
    const product = products.find((p) => p.name === detail.dataset.detail);
    if (!product) return;
    title.textContent = product.name;
    desc.innerHTML = `<strong>Kenapa wajib coba:</strong><br>${product.detail}<br><br><strong>Bahan utama:</strong><br>${product.ingredients}<br><br><strong>Harga:</strong> ${product.price}`;
    modal.classList.add("open");
  }
});

document.getElementById("closeModal")?.addEventListener("click", () => modal?.classList.remove("open"));
modal?.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal?.classList.remove("open"); });

renderFilters();
renderProducts();
