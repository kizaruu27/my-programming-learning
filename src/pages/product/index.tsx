import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLogin) push("/auth/login");
  }, []);

  const fetchProduct = async () => {
    const response = await axios.get("/api/product");
    setProducts(response?.data?.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: productType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
