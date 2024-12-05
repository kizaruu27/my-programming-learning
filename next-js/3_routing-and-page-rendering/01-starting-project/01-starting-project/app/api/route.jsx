// ! 10. API Routes
// Kita bisa membuat route untuk API atau membuat request di next JS
// Untuk men-setup route API seperti ini kita dapat membuat folder bernama "api" lalu tambahkan script bernama "route.js" di dalamnya
// Untuk nama folder "api" dan nama script sudah reserve dari next js, yg artinya sudah bawaan dari next js
// Untuk penggunaan http methodnya kita dapat membuat function sesuai dengan nama method yg ingin kita gunakan
// Nama methodnya seperti GET, POST, PUT, PATCH, DELETE, dll.

export const GET = (request) => {
  console.log(request);

  // return Response.json();
  return new Response("Hello");
};

// export const POST = () => {};
