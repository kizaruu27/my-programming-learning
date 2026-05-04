"use client";
import Wrapper from "@/component/wrapper";
import { useState } from "react";

export default function UseStateTutorial() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <Wrapper title="useState Tutorial">
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
          className="py-2 px-4 border border-white bg-purple-400 hover:bg-purple-600 cursor-pointer rounded-xl"
        >
          -
        </button>
        <p className="text-2xl text-orange-400 font-bold">Value: {count}</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="py-2 px-4 border border-white bg-purple-400 hover:bg-purple-600 cursor-pointer rounded-xl"
        >
          +
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setText((formData.get("text") ?? "") as string);
        }}
        className="flex flex-col gap-2 mt-5"
      >
        <label htmlFor="my-text">Your Text</label>
        <input
          className="bg-white text-black px-2"
          type="text"
          name="text"
          id="my-text"
        />
        <button
          type="submit"
          className="py-2 px-4 border border-white bg-purple-400 hover:bg-purple-600 cursor-pointer rounded-xl"
        >
          Submit Text
        </button>
        <h1 className="text-4xl">{text}</h1>
      </form>
    </Wrapper>
  );
}
