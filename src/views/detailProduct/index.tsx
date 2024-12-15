import { ProductType } from "@/types/product/product.type";
import styles from "./detailProduct.module.scss";
import Link from "next/link";

export default function DetailProduct({ product }: { product: ProductType }) {
  return (
    <>
      <h1 className={styles.title}>Product Detail</h1>
      {product && (
        <div className={styles.productDetail}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productDetail__image}
          />
          <h4 className={styles.productDetail__name}>{product.name}</h4>
          <p className={styles.productDetail__category}>{product.category}</p>
          <p className={styles.productDetail__price}>
            {product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      )}
    </>
  );
}
