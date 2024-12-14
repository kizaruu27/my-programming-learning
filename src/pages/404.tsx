import styles from "@/styles/404.module.scss";
import image404 from "../../public/404.svg";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className={styles.error}>
      <Image src={image404} alt="image-404" className={styles.error__image} />
      <p className={styles.error__text}>404 | Halaman tidak ditemukan!</p>
    </div>
  );
}
