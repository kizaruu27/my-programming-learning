"use client";

import ImagePicker from "@/components/meals/image-picker";
import style from "./page.module.css";
import { submitMeal } from "@/lib/actions";
import MealsFormButton from "@/components/meals/meals-form-submit";
import { useFormState } from "react-dom";

export default function MealsSharePage() {
  // state: response value dari useFormState
  // formAction: function action yg dieksekusi untuk mendapatkan sebuah response
  // argument:
  // 1. function action yg akan dieksekusi
  // 2. initial value dari state
  const [state, formAction] = useFormState(submitMeal, { message: null });

  return (
    <>
      <header className={style.header}>
        <h1>
          Share your <span className={style.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={style.main}>
        <form className={style.form} action={formAction}>
          <div className={style.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows={10} />
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={style.actions}>
            <MealsFormButton />
          </p>
        </form>
      </main>
    </>
  );
}
