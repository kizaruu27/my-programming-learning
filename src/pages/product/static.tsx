import { fetchProduct } from "@/lib/axios/productController";
import { ProductType } from "@/types/product/product.type";
import ProductView from "@/views/product";

// Untuk menandakan bahwa sebuah page merupakan static site generation
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/product");
  const res = await response?.json();

  return {
    props: {
      products: res?.data,
    },
    // Fungsi revalidate adalah untuk melakukan regenerate data dalam sebuah static side generation page
    // Revalidate akan mengecek apakah data dari API itu sama atau berbeda
    // Jika berbedda, maka akan dilakukan revalidate setelah 10 detik
    // Cache yg dilakukan pada saat melakukan build akan dihapus dan akan digantikan dengan yang baru
    // revalidate: 10,
  };
}

export default function ProductStaticPage({ products }: { products: ProductType[] }) {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
}
