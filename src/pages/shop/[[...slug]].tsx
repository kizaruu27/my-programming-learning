import { useRouter } from "next/router";

// Penamaan [...slug] untuk mengambil semua params query dari routes
// Kalau [[...slug]] akan membuat params query bersifat opsional, sehingga page masih bisa diakses meskipun tidak ada params

export default function ShopPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Shop Page</h1>
      {/* Jika ingin memanggil all catch raouts seperti ini perlu dilakukan validasi terlebih dahulu */}
      {/* Jika tidak dilakukan validasi, maka akan terjadi error dari typescriptnya, namun tetap bisa di jalankan di browser */}
      {/* Bisa menggunakan ternary, ataupun menggunakan operator && untuk melakukan validasi data */}
      {query.slug && <p>Shop: {query.slug && `${query.slug[0]} - ${query.slug[1]}`}</p>}
    </div>
  );
}
