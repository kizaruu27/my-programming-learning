import { fetchProduct } from "@/lib/axios/productController";
import { ProductType } from "@/types/product/product.type";
import DetailProduct from "@/views/detailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

// Server Side Rendering
// props params dapat mengambil param dari routes halaman
// export async function getServerSideProps({ params }: { params: { product: string } }) {
//   const response = await fetchProduct(
//     `http://localhost:3000/api/product/${params?.product}`
//   );

//   return {
//     props: {
//       product: response?.data,
//     },
//   };
// }

// Static side generation
export async function getStaticPaths() {
  const response = await fetchProduct("http://localhost:3000/api/product");

  const paths = response?.data?.map((product: ProductType) => ({
    params: {
      product: product?.id,
    },
  }));

  return { paths, fallback: false };
}

// Static side generation
export async function getStaticProps({ params }: { params: { product: string } }) {
  const response = await fetchProduct(
    `http://localhost:3000/api/product/${params?.product}`
  );

  return {
    props: {
      product: response?.data,
    },
  };
}

export default function ProductDetailPage({ product }: { product: ProductType }) {
  // Digunakan untuk mengambil data dari params
  const { query } = useRouter();

  // Client Side Rendering
  // const { data, isLoading, error } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetchProduct
  // );

  return (
    <div>
      {/* Nama params diambil dari nama file/folder */}
      <DetailProduct product={product} />
    </div>
  );
}
