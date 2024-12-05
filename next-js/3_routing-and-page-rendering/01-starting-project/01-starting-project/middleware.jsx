import { NextResponse } from "next/server";

// ! 11. Setup middleware on NEXT JS
// Kita juga bisa men-setup middleware di next js
// Untuk melakukan setup middleware kita dapat membuat sebuah script bernama "middleware.js" di root folder project kita
// Untuk membuat middlewarenya sendiri, kita dapat membuat sebuah function bernama "middleware" dengan argument "request" di dalamnya

// Function untuk mendeklarasikan middleware di nex js
// Harus ditambah argument request berupa object di dalamnya
export const middleware = (request) => {
  console.log(request);

  // Berupa response yg akan melanjutkan ke proses berikutnya ketika middleware sudah selesai dijalankan
  // Ini mirip seperti res.next()
  return NextResponse.next();
};

// Kita juga dapat membuat konfigurasi pada middleware kita
export const config = {
  // property matcher digunakan untuk menandai bahwa suatu middleware hanya akan dieksekusi pada route tertentu saja
  // dalam kasus ini middleware hanya dieksekusi di route "/news"
  matcher: "/news",
};
