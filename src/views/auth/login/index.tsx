import { useRouter } from "next/router";
import styles from "./login.module.scss";
import Link from "next/link";

export default function LoginViews() {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
        Belum punya akun? registrasi{" "}
        <Link href="/auth/register" style={{ color: "blue", fontWeight: "bold" }}>
          disini
        </Link>
      </p>
    </div>
  );
}
