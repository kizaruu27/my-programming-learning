import Image from "next/image";
import styles from "./product.module.scss";
import { ProductType } from "@/types/product/product.type";
import Link from "next/link";

export default function ProductView({ products }: { products: ProductType[] }) {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className={styles.product__content}>
        {products?.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link
                href={`/product/${product.id}`}
                className={styles.product__content__item}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.product__content__item__image}
                />
                <h4 className={styles.product__content__item__name}>{product.name}</h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
}
