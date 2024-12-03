import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

// ! 6. Nested Routes Inside Dynamic Routes
export default function ImagePage({ params }) {
  // Kita bisa menambahkan routes di dalam sebuah dynamic routes -> news/[slug]/image
  // variable ini merupakan params slug yg dapat diambil dari dynamic routes
  const { slug } = params;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
