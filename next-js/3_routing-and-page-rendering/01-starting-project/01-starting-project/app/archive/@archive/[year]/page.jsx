import NewsList from "@/components/news-list/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const { year } = params;
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
