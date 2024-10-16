import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Testing...."); // Only called on the server side and not on client side
  return (
    <main>
      <Header />

      {/* Navigation using anchor */}
      {/* Reload a new page from server */}
      {/* ! Not recommended ! */}
      {/* <p>
        <a href="/about">About</a>
      </p> */}

      {/* Navigation using Link */}
      {/* Go to new page without reloading a new page */}
      <p>
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
