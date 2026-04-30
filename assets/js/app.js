const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const hamburger = document.getElementById("hamburger");
const progress = document.getElementById("topProgress");
const header = document.querySelector("header");
let currentLang = localStorage.getItem("picaLang") || "id";

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () =>
    mobileMenu.classList.toggle("open"),
  );
}

if (mobileMenuClose && mobileMenu) {
  mobileMenuClose.addEventListener("click", () =>
    mobileMenu.classList.remove("open"),
  );
}

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      mobileMenu?.classList.remove("open");
    }
  });
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  if (progress) progress.style.width = `${pct}%`;
  if (header) header.classList.toggle("scrolled", window.scrollY > 8);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));

const faqItems = [...document.querySelectorAll(".faq-item")];
faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-btn");
  const panel = item.querySelector(".faq-panel");
  const mark = btn?.querySelector(".mark");
  btn?.addEventListener("click", () => {
    faqItems.forEach((f) => {
      const p = f.querySelector(".faq-panel");
      const m = f.querySelector(".mark");
      const open = f === item && p.style.maxHeight !== `${p.scrollHeight}px`;
      p.style.maxHeight = open ? `${p.scrollHeight}px` : null;
      if (m) m.textContent = open ? "−" : "+";
    });
  });
  if (panel && mark) {
    panel.style.maxHeight = null;
    mark.textContent = "+";
  }
});

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const wa = document.getElementById("wa")?.value?.trim() || "";
    const alamat = document.getElementById("alamat")?.value?.trim() || "";
    const pesan = document.getElementById("pesan")?.value?.trim() || "";
    const message = `Halo Admin Pica! 👋\n\nNama: ${nama}\nEmail: ${email}\nWhatsApp: ${wa}\nAlamat: ${alamat}\n\nPesan:\n${pesan}`;
    window.open(
      `https://wa.me/628873418080?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    if (toast) {
      toast.textContent =
        "Pesan terkirim! Kami akan segera menghubungi Anda. ✅";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3200);
    }
    form.reset();
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("picaLang", lang);
  document.documentElement.setAttribute("lang", lang === "id" ? "id" : "en");
  document.querySelectorAll("[data-id][data-en]").forEach((el) => {
    el.textContent = lang === "id" ? el.dataset.id : el.dataset.en;
  });
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    const idSpan = btn.querySelector(".lang-id");
    const enSpan = btn.querySelector(".lang-en");
    idSpan?.classList.toggle("lang-active", lang === "id");
    enSpan?.classList.toggle("lang-active", lang === "en");
  });
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

document.querySelectorAll(".lang-toggle").forEach((btn) => {
  btn.addEventListener("click", () =>
    applyLanguage(currentLang === "id" ? "en" : "id"),
  );
});
applyLanguage(currentLang);
