import { useState } from "react";
import posts from "../posts.json"
import Blog from "./Blog";

function HomePage() {
    const [valueStr, setValueStr] = useState("");

    const changeValue = (e) => {
        setValueStr(e.target.value);
    }

    return (
        <>
            <h1>Simple Blog</h1>
            <div>
                Cari Artikel: <input type="text" onChange={changeValue}/>
            </div>
            <small>Ditemukan 0 data dengan pencarian kata {valueStr}</small>
            {posts.map(({title, tags, date}, index) => {
                return <Blog {...{title, tags, date}} key={index}/>
            })}
        </>
    );
}

export default HomePage;