"use client";

import style from "./main-header.module.css";
import logoImage from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./nav/nav-link";

export default function MainHeaderContent() {
  const path = usePathname();

  return (
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image src={logoImage} alt="A plate with a food on it" priority />
        NextLevelFood
      </Link>

      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse the Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
