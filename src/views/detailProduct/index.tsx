import { ProductType } from "@/types/product/product.type";
import styles from "../product/product.module.scss";
import Link from "next/link";

export default function DetailProduct({
  product,
  isLoading,
}: {
  product: ProductType;
  isLoading: boolean;
}) {
  return (
    <>
      {isLoading ? (
        <div className={styles.product__content__skeleton}>
          <div className={styles.product__content__skeleton__image} />
          <div className={styles.product__content__skeleton__name} />
          <div className={styles.product__content__skeleton__category} />
          <div className={styles.product__content__skeleton__price} />
        </div>
      ) : (
        <Link href={`/product/${product.id}`} className={styles.product__content__item}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.product__content__item__image}
          />
          <h4 className={styles.product__content__item__name}>{product.name}</h4>
          <p className={styles.product__content__item__category}>{product.category}</p>
          <p className={styles.product__content__item__price}>
            {product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </Link>
      )}
    </>
  );
}
