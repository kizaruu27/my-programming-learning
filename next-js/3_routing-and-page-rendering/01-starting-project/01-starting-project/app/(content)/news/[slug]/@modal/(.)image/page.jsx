"use client";

import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

// ! 7. Intercepting Navigation
// Intercepting routes memungkinkan untuk me-load route dari bagian lain aplikasi dalam current layout.
// Routing ini dapat berguna  ketika ingin menampilkan konten suatu route tanpa membuat user beralih ke konteks yang berbeda.
// Untuk membuat intercept route sendiri dapat menuliskannya sebagai berikut -> (.)target-route
// Tanda . pada penulisan intercept route sendiri mengacu pada file reference, (.) -> di dalam folder saat ini, (..) keluar 1 level dari folder

export default function InterceptedImagePage({ params }) {
  const { slug } = params;
  const router = useRouter();

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
