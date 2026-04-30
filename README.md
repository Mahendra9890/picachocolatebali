# Pica Chocolate Bali Website

Landing page premium single-page untuk Pica Chocolate Bali.

## Struktur Proyek

```
picacoklat/
├── index.html            # Struktur halaman utama
├── assets/
│   ├── css/
│   │   └── styles.css    # Semua styling global + responsive
│   └── js/
│       └── main.js       # Semua logic interaksi halaman
├── gambar/               # Aset gambar produk/brand
└── docs/                 # Catatan tambahan untuk developer
```

## Cara Jalankan

- Buka `index.html` langsung di browser, atau
- Jalankan static server (direkomendasikan) dari root proyek.

Contoh:

```bash
python -m http.server 5500
```

Lalu akses `http://localhost:5500`.

## Konvensi Lanjut Development

- Tambah style baru di `assets/css/styles.css`.
- Tambah behavior JS baru di `assets/js/main.js`.
- Jangan hardcode nomor WA di banyak tempat, update di fungsi `orderProduct` dan submit form.
- Pastikan path gambar tetap mengarah ke folder `./gambar/`.

## Checklist QA Cepat

- Cek semua CTA WA terbuka ke nomor yang benar.
- Cek modal detail produk.
- Cek FAQ accordion (satu item terbuka pada satu waktu).
- Cek mobile menu hamburger.
- Cek responsif minimal di 320px, 768px, 1280px.
