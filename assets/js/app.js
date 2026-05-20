const SOCIAL_ICONS_HTML = `
<a class="social-icon" href="https://www.instagram.com/picachocolatebali" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>
</a>
<a class="social-icon" href="https://www.tiktok.com/@picachocolatebali" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 0h1.98c.144.715.54 1.617 1.285 2.247A4.98 4.98 0 0 1 12 5.229V8.26a6.97 6.97 0 0 0-1.226-.069c-2.334 0-4.226 1.842-4.226 4.113 0 2.27 1.892 4.113 4.226 4.113 2.205 0 4.028-1.697 4.225-3.862H12V4.868h5.838v4.41a7.94 7.94 0 0 1-4.247 1.221 8.06 8.06 0 0 1-4.103-.925 8.06 8.06 0 0 0 4.103 2.855 8.08 8.08 0 0 0 6.408-3.186V0H9z"/></svg>
</a>
<a class="social-icon" href="https://www.youtube.com/@picachocolatebali" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
</a>`;

function initSocialIcons() {
  document.querySelectorAll(".socials").forEach((el) => {
    el.innerHTML = SOCIAL_ICONS_HTML;
  });
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
  });
} else {
  initSocialIcons();
  initHeroVideo();
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
