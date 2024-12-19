import { signIn, signOut, useSession } from "next-auth/react";
import style from "./navbar.module.css";

export default function Navbar() {
  const { data }: any = useSession();
  console.log(data);

  return (
    <div className={style.navbar}>
      <div className="big">Navbar</div>
      {data ? (
        <div className={style.profile}>
          {data.user.image && (
            <img
              className={style.avatar}
              src={data.user.image}
              alt={data.user.username}
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
