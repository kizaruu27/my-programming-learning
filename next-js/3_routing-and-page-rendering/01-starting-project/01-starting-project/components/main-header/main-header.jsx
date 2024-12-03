import NavLink from "./nav-link";

export default function MainHeader() {
  // ! 5. Server vs Client Components;
  // Penggunaan "use client" adalah menandakan bahwa sebuah component sebagai client component yg artinya dirender di client
  // Best practicenya adalah usahakan scope penggunaan "use client" seminimal mungkin agar component tetap dirender di server
  // Dalam kasus ini hanya component NavLink saja yg merupakan client component, sehingga component MainHeader masih bersifat server component

  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href="/">NextNews</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
