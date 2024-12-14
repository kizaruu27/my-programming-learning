import { Html, Head, Main, NextScript } from "next/document";

// Document adalah script yg digunakan untuk seluruh halaman/pages
// __document bisa juga digunakan untuk mengeset meta tag untuk keperluan SEO
// Head di dalam document juga dapat digunakan untuk keperluan analytics

export default function Document() {
  return (
    <Html lang="id">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
