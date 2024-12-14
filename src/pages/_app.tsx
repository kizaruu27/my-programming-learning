import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Layouting/Wraping menggunakan appshell
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}