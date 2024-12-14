import { fetchProduct } from "@/lib/axios/productController";
import ProductView from "@/views/product";
import { ProductType } from "../../types/product/product.type";

// Dipanggil setiap melakukan request/halaman dibuka
export async function getServerSideProps() {
  // fetch data
  // const data = await fetch("/api/product");
  // const response = await data?.json();
  const response = await fetchProduct("http://localhost:3000/api/product");
  console.log(response);

  // getServerSideProps harus mereturn sebuah object dengan format seperti ini
  return {
    props: {
      products: response?.data,
    },
  };
}

export default function ServerProductPage({ products }: { products: ProductType[] }) {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
}
