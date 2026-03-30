# 📘 Master Notes: Implementasi Controller di Express.js (MVC)

Catatan ini membahas bagaimana memisahkan logika aplikasi (Business Logic) dari rute (Routing) menggunakan pola **Controller**.

---

## 1. Filosofi Controller

Dalam arsitektur **MVC (Model-View-Controller)**, Controller adalah "Otak" atau "Polisi Lalu Lintas".

- **Tugas Utama:** Menerima HTTP Request, memproses data (lewat Model), dan mengembalikan HTTP Response (lewat View).
- **Prinsip:** Controller tidak boleh berisi definisi rute (seperti `router.get`), ia hanya berisi fungsi yang akan dijalankan oleh rute tersebut.

---

## 2. Bedah Struktur Kode (Implementasi)

### A. Bagian Controller (`controllers/products.js`)

Di sini kita mendefinisikan logika untuk setiap aksi yang dilakukan user.

```javascript
// 1. Simulasi Data (Nantinya akan diganti oleh Model/Database)
const products = [];

// 2. Fungsi GET (Menampilkan Halaman Form)
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// 3. Fungsi POST (Menangani Input Data)
exports.postAddProduct = (req, res, next) => {
  // Mengambil data dari body request (input form)
  products.push({ title: req.body.title });

  // Mengarahkan user kembali ke halaman tertentu setelah proses selesai
  res.redirect("/");
};

// 4. Fungsi GET (Menampilkan List Data)
exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products, // Mengirim data array ke View
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
  });
};
```
