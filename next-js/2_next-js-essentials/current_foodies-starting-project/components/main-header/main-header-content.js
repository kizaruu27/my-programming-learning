import style from "./main-header.module.css";
import logoImage from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function MainHeaderContent() {
  return (
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image src={logoImage} alt="A plate with a food on it" priority />
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
