// ! 8. Combining Parallel and Intercepting Routes
// Kita bisa masukkan intercepting routes ke dalam sebuah parallel routes dan menjadikannya sebagai parallel routes

// Masukkan parallel routes (dalam kasus ini adalah modal) sebagai props dari layout, lalu tampilkan
// Pastikan parallel routes memiliki page/default file agar file tidak terjadi error
export default function NewsDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
