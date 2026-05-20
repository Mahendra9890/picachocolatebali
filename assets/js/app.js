const SOCIAL_ICONS_HTML = `
<a class="social-icon" href="https://www.instagram.com/picachocolatebali" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
  <img src="./gambar/instagram.png" alt="" width="24" height="24" loading="lazy" decoding="async" />
</a>
<a class="social-icon" href="https://www.tiktok.com/@picachocolatebali" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
  <img src="./gambar/tiktok.png" alt="" width="24" height="24" loading="lazy" decoding="async" />
</a>
<a class="social-icon" href="https://www.youtube.com/@picachocolatebali" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
  <img src="./gambar/youtube.png" alt="" width="24" height="24" loading="lazy" decoding="async" />
</a>`;

function initSocialIcons() {
  document.querySelectorAll(".socials").forEach((el) => {
    el.innerHTML = SOCIAL_ICONS_HTML;
  });
}

function initReviewsMarquee() {
  const track = document.getElementById("reviewsTrack");
  if (!track || track.dataset.cloned === "1") return;
  const cards = [...track.children];
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
  track.dataset.cloned = "1";
}

function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  video.controls = false;
  video.removeAttribute("controls");

  const keepPlaying = () => {
    if (video.paused && !video.ended) {
      video.play().catch(() => {});
    }
  };

  video.addEventListener("pause", keepPlaying);
  video.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    keepPlaying();
  });
  video.addEventListener("contextmenu", (e) => e.preventDefault());

  const tryPlay = () => video.play().catch(() => {});
  tryPlay();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initSocialIcons();
    initHeroVideo();
    initReviewsMarquee();
  });
} else {
  initSocialIcons();
  initHeroVideo();
  initReviewsMarquee();
}

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

// Protect content from copying and downloading
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  return false;
});

document.addEventListener("keydown", (e) => {
  // Prevent Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+P
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === "c" || e.key === "x" || e.key === "s" || e.key === "p")
  ) {
    e.preventDefault();
    return false;
  }
  // Prevent F12 (Developer Tools)
  if (e.key === "F12") {
    e.preventDefault();
    return false;
  }
});

// Prevent text selection
document.addEventListener("selectstart", (e) => {
  e.preventDefault();
  return false;
});

// Prevent image drag
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
    return false;
  });
  img.addEventListener("mousedown", (e) => {
    e.preventDefault();
    return false;
  });
});

document.querySelectorAll(".hero-video").forEach((video) => {
  video.addEventListener("dragstart", (e) => e.preventDefault());
  video.addEventListener("mousedown", (e) => e.preventDefault());
});
