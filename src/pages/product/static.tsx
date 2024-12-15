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
  };
}

export default function ProductStaticPage({ products }: { products: ProductType[] }) {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
}
