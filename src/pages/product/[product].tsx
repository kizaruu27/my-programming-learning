import { fetchProduct } from "@/lib/axios/productController";
import DetailProduct from "@/views/detailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetailPage() {
  // Digunakan untuk mengambil data dari params
  const { query } = useRouter();
  const { data, isLoading, error } = useSWR(
    `/api/product/${query.product}`,
    fetchProduct
  );

  return (
    <div>
      <h1>Product Page</h1>
      {/* Nama params diambil dari nama file/folder */}
      <DetailProduct product={data?.data} isLoading={isLoading} />
    </div>
  );
}
