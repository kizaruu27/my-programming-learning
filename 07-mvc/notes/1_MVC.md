# Catatan Belajar: Konsep MVC (Model-View-Controller)

MVC adalah pola arsitektur yang membagi aplikasi menjadi tiga komponen utama untuk mencapai **Separation of Concerns**.

## 1. Model (Data)

- **Tugas:** Mengelola data dan logika bisnis yang berkaitan dengan data.
- **Fungsi Utama:**
  - Representasi struktur data dalam kode.
  - Operasi Database (CRUD: Create, Read, Update, Delete).
  - Validasi data sebelum masuk ke database.

## 2. View (User Interface)

- **Tugas:** Menampilkan informasi kepada pengguna (Frontend).
- **Fungsi Utama:**
  - Merender data menjadi tampilan visual (HTML/CSS).
  - Menerima input dari pengguna untuk diteruskan ke Controller.
  - Harus tetap "bodoh" (tidak mengandung logika database langsung).

## 3. Controller (Logic/Brain)

- **Tugas:** Menghubungkan Model dan View.
- **Fungsi Utama:**
  - Menerima input dari **Routes**.
  - Memproses permintaan user (misalnya: memvalidasi input form).
  - Meminta data dari Model.
  - Mengirimkan hasil data tersebut ke View.
  - Sering diimplementasikan sebagai kumpulan fungsi **Middleware**.

---

_Catatan: Pemisahan ini memudahkan tim untuk bekerja secara paralel (ada yang fokus di UI, ada yang fokus di Database)._
