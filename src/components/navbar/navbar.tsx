import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex gap-3 ml-5 text-blue-300">
        <li className="cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
