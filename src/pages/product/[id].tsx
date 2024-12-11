import { useRouter } from "next/router";

export default function ProductDetailPage() {
  // Digunakan untuk mengambil data dari params
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h1>Product Page</h1>
      {/* Nama params diambil dari nama filenya */}
      <p>Detail Product: {query.id}</p>
    </div>
  );
}
