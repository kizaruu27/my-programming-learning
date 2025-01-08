import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <nav className="flex justify-between bg-gray-800 py-2 px-5">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex gap-3 ml-5">
          <li
            className={`cursor-pointer ${
              pathname === "/" ? "text-blue-300" : "text-white"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer ${
              pathname === "/about" ? "text-blue-300" : "text-white"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`cursor-pointer ${
              pathname === "/about/profile" ? "text-blue-300" : "text-white"
            }`}
          >
            <Link href="/about/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => push("/login")}
          className="bg-white px-4 text-sm rounded-md h-6"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
