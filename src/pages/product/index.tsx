import { fetchProduct } from "@/lib/axios/productController";
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  const { data, isLoading, error } = useSWR("/api/product", fetchProduct);

  useEffect(() => {
    // if (!isLogin) push("/auth/login");
    // push("/");
  }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data?.data} />
    </div>
  );
}
