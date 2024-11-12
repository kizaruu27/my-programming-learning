import { geistSans } from "@/lib/fonts/font";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-between fixed w-[100%] px-8 py-5 top-0 bg-[#0E1217]">
        <li>
          <Link href="/">
            <h1
              className={`${geistSans.className} font-extrabold text-2xl text-[#FB78BD] tracking-wider uppercase`}
            >
              gamesreport
            </h1>
          </Link>
        </li>
        <li>
          <Link href="/create-new-post">
            <button className="rounded-full text-[#0E1217] bg-[#FB78BD] font-bold text-lg py-3 px-5">
              + Post New Blog
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
