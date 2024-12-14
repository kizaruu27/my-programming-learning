import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

// Component ini bertindak sebagai wrapper/layout dari semua halaman
export default function AppShell(props: AppShellProps) {
  const { children } = props;

  // Untuk mengecek pathname
  const { pathname } = useRouter();

  return (
    <>
      <main>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </main>
    </>
  );
}
