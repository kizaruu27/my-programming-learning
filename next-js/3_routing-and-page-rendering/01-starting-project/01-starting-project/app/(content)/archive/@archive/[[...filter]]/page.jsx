import NewsList from "@/components/news-list/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  // ! 1. [CATCH ALL ROUTES]
  // penamaan folder [[...filter]] ditujukan agar dapat mendapatkan value apapun setelah routes tertentu
  // Filter merujuk pada value apa saja yg diterima setelah routes archive
  // Value filter berupa array []
  // usahakan hanya ada 1 file page ketika menggunakan catch all routes agar tidak bertabrakan
  const { filter } = params;

  // ! 2. [CATCH-ALL FALLBACK ROUTES & MULTIPLE PATH]
  // Untuk mengambil nilai path pertama -> /archive/2021
  const selectedYear = filter?.[0];

  // Untuk mengambil nilai path kedua -> /archive/2021/3
  const selectedMonth = filter?.[1];

  // variable untuk menampung data news
  let news;

  // variable untuk menammpung value tahun
  let links = getAvailableNewsYears();

  // cek jika nilai tahun ada dan tidak ada nilai month
  if (selectedYear && !selectedMonth) {
    // update data news
    news = getNewsForYear(selectedYear);
    // update link tahun menjadi link bulan
    links = getAvailableNewsMonths(selectedYear);
  }

  // jika nilai tahun dan bulan terisi
  if (selectedMonth && selectedYear) {
    // update data news
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    // kosongkan link section
    links = [];
  }

  // content yg menampikan daftar news
  let newsContent = <p>No news found for the selected period.</p>;

  // jika data news ada dan value array newsnya ada, maka update newsContent menjadi NewsList
  if (news && news.length > 0) newsContent = <NewsList news={news} />;

  // ! 3. Throwing Error (Routes-related)
  // Kondisi 1: cek apakah routes yearnya ada dan apakah year tersebut tidak ada di dalam list available year
  // Kondisi 2: cek apakah routes month ada dan apakah month tersebut tidak ada di dalam list available news month
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    // Throw error jika kondisi memenuhi
    throw new Error("Invalid filter.");
  }
  console.log("TESTING");
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link, index) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={index}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );

  // const news = getNewsForYear(year);
  // return <NewsList news={news} />;
}
