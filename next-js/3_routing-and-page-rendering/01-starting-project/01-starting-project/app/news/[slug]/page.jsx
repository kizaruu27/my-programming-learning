import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  // bisa langsung dipanggil tanpa harus bikin useEffect dulu
  // method notFound() sudah bawaan dari next js
  if (!newsItem) notFound();

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
