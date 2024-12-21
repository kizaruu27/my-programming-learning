// import Navbar from "../Navbar";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

type AppShellProps = {
  children: React.ReactNode;
};

const Navbar = dynamic(() => import("../Navbar"));

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

// Component ini bertindak sebagai wrapper/layout dari semua halaman
export default function AppShell(props: AppShellProps) {
  const { children } = props;

  // Untuk mengecek pathname
  const { pathname } = useRouter();

  return (
    <>
      <main className={roboto.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </main>
    </>
  );
}
