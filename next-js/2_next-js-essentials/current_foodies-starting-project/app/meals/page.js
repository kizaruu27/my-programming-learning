import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

// Kita bisa letakan object metaData di semua page/layout untuk setup metadata
export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals() {
  console.log("Fetching meals...");
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created <span className={style.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={style.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        {/* Suspense digunakan untuk menghandle komponen2 yang datanya difetch dari BE */}
        {/* Props fallback diisi dengan sebuah komponen yg akan ditampikan saat datanya sedang loading */}
        <Suspense fallback={<p className={style.loading}>Fetching data...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
