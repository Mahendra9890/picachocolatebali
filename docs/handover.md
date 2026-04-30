# Handover Notes

## Data Produk

Data produk saat ini disimpan langsung di `assets/js/main.js` pada konstanta:

- `categories`
- `products`

Jika nanti ingin diintegrasikan ke CMS/API, refactor bagian ini ke file JSON atau endpoint API.

## Aset Gambar Saat Ini

Folder `gambar/` saat ini berisi nama file real dari aset existing. Beberapa produk masih menggunakan placeholder karena file belum tersedia.

Jika menambah image baru:

1. simpan di `gambar/`
2. update path `img` di array `products`
3. gunakan `loading="lazy"` untuk gambar non-hero

## Titik Kritis

- Hero background menggunakan CSS di `styles.css` (`.hero-bg`).
- Seluruh smooth scroll pakai anchor handler di `main.js`.
- Form kontak hanya mengarah ke WhatsApp (belum ada backend email).
- Testimonial slider masih basic auto-loop; aman untuk iterasi awal.
