# 🏗️ Master Notes: Implementasi Model dengan ES6 Class (MVC)

Setelah memisahkan Controller, langkah selanjutnya adalah membuat **Model**. Model bertanggung jawab penuh atas data: bagaimana data dibentuk, disimpan, dan diambil.

---

## 1. Struktur Model (`models/product.js`)

Menggunakan Class memberikan struktur yang lebih formal dan rapi untuk data aplikasi.

```javascript
const products = []; // Data tersimpan di memory server (Local Variable)

class Product {
  constructor(title) {
    this.title = title; // Mendefinisikan struktur objek produk
  }

  // Method untuk menyimpan instance produk saat ini ke array
  save() {
    products.push(this);
  }

  // Method 'static' agar bisa dipanggil langsung dari Class tanpa 'new'
  // Contoh: Product.fetchAll()
  static fetchAll() {
    return products;
  }
}

module.exports = Product;
```

# 🔍 Memahami Output Console: [ Product { title: '...' } ]

Saat melakukan `console.log(Product.fetchAll())`, kamu melihat output seperti:
`[ Product { title: 'Barang' }, Product { title: 'aaa' } ]`

Berikut adalah alasan teknis di baliknya:

## 1. Instance vs Plain Object

- **Plain Object `{}`**: Jika kamu menulis `products.push({ title: 'Barang' })`, console akan menampilkan `[ { title: 'Barang' } ]`. Ini adalah objek anonim tanpa identitas khusus.
- **Instance `Product {}`**: Karena kamu menggunakan `new Product(req.body.title)`, Node.js menandai objek tersebut dengan nama Class-nya. Ini membuktikan bahwa objek tersebut memiliki akses ke semua _method_ yang ada di dalam `class Product` (seperti `.save()`).

## 2. Mengapa Ini Penting?

Ini adalah fitur dari mesin JavaScript (V8) untuk membantu Developer saat **Debugging**:

- Kamu jadi tahu dari mana asal data tersebut.
- Kamu bisa memastikan bahwa data tersebut benar-benar sebuah "Product", bukan objek lain (misalnya "User" atau "Order") yang tidak sengaja masuk ke array yang sama.

## 3. Cara Mengubahnya Menjadi Objek Biasa (Jika Perlu)

Jika karena alasan tertentu kamu hanya ingin melihat data mentahnya tanpa label `Product`, kamu bisa melakukan _mapping_ atau mengubahnya ke JSON:

```javascript
// Menggunakan spread operator untuk membuat objek baru
console.log(products.map((p) => ({ ...p })));
// Output: [ { title: 'Barang' }, { title: 'aaa' } ]
```
