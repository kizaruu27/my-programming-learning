import Link from "next/link";
import logoImage from "@/assets/logo.png";
import style from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <img src={logoImage.src} alt="A plate with a food on it" />
        NextLevelFood
      </Link>

      <nav className={style.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse the Meals</Link>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
