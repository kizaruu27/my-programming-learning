import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterView() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setErrorMsg(result.status === 400 ? "Email already taken" : "");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label htmlFor="email" className={styles.register__form__item__label}>
              Email
            </label>
            <input
              className={styles.register__form__item__input}
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="username" className={styles.register__form__item__label}>
              Username
            </label>
            <input
              className={styles.register__form__item__input}
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="password" className={styles.register__form__item__label}>
              Password
            </label>
            <input
              className={styles.register__form__item__input}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      {errorMsg && <p className={styles.register__error}>{errorMsg}</p>}
      <p className={styles.register__link}>
        Already have an account? Sign in <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
}
