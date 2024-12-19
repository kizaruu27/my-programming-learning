import Link from "next/link";
import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Image from "next/image";
import googleIcon from "../../../../public/google.webp";

export default function LoginViews() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setErrorMsg("Email or password is incorect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setErrorMsg("Email or password is incorect");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input
              className={styles.login__form__item__input}
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div className={styles.login__form__item}>
            <label htmlFor="password" className={styles.login__form__item__label}>
              Password
            </label>
            <input
              className={styles.login__form__item__input}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className={styles.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: false,
            })
          }
          className={styles.login__form__item__google}
        >
          <Image
            src={googleIcon}
            alt="google-icon"
            className={styles.login__form__item__google__image}
          />
          <p className={styles.login__form__item__google__text}>Sign in with Google</p>
        </button>
      </div>
      {errorMsg && <p className={styles.login__error}>{errorMsg}</p>}
      <p className={styles.login__link}>
        Dont have an account? sign up <Link href="/auth/register">here</Link>
      </p>
    </div>
  );
}
