// Import css styles
import "./globals.css";

// Favicon tidak dideklarasikan di sini -> untuk set favicon cukup masukkan image ke dalam folder app lalu beri nama "icon"

// Variable dengan nama 'metadata' akan otomatis diset sebagai data2 untuk metadata -> tidak perlu dipanggil di mana-mana lagi
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

// Root/wrapper dari content sebuah page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
