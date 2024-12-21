import { signIn, signOut, useSession } from "next-auth/react";
import style from "./navbar.module.css";
import Script from "next/script";
import Image from "next/image";

export default function Navbar() {
  const { data }: any = useSession();
  console.log(data);

  return (
    <div className={style.navbar}>
      <Script id="script-navbar" strategy="lazyOnload">
        {`document.getElementById("navbar-title").innerHTML = "New Navbar"`}
      </Script>
      <div className="big" id="navbar-title"></div>
      {data ? (
        <div className={style.profile}>
          {data.user.image && (
            <Image
              className={style.avatar}
              src={data.user.image}
              alt={data.user.username}
              width={500}
              height={500}
            />
          )}
          <span>{data && data.user.username}</span>
          <button className={style.button} onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      ) : (
        <button className={style.button} onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </div>
  );
}
