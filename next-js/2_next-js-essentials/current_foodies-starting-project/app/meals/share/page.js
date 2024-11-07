import ImagePicker from "@/components/meals/image-picker";
import style from "./page.module.css";
import { submitMeal } from "@/lib/actions";

export default function MealsSharePage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Share your <span className={style.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={style.main}>
        <form className={style.form} action={submitMeal}>
          <div className={style.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows={10} required />
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={style.actions}>
            <button type="submit">Share MEal</button>
          </p>
        </form>
      </main>
    </>
  );
}
