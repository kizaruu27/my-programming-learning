import "../globals.css";

// ! 9. Route Groups
// Route group digunakan untuk membuat grouping dari tiap routes di dalam project next js
// Routes biasanya digunakan ketika kita ingin menggunakan layout berbeda untuk beberapa routes tertentu
// Penamaan folder routes tidak akan berpengaruh pada routing utama
// Contoh penulisan foldering untuk route group -> (nama_group)

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function MarketingLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
