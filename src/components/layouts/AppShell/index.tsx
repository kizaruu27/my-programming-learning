import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

// Component ini bertindak sebagai wrapper/layout dari semua halaman
export default function AppShell(props: AppShellProps) {
  const { children } = props;

  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}
