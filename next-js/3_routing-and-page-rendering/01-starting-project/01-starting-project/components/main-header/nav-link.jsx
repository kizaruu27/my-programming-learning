// Menandakan component ini bersifat client component
"use client";

import Link from "next/link";
// Gunakan usePathname jika ingin mengambil path pada routes
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    // path.startsWith() digunakan untuk mengecek awalan dari path dari current routes
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
