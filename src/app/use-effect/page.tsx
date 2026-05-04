"use client";

import Wrapper from "@/component/wrapper";
import { useEffect, useState } from "react";

export default function UseEffectTutorial() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Current count: ", count);

    return () => {
      console.log("Cleaned up!");
    };
  }, [count]);

  useEffect(function testInterval() {
    console.log("Set interval");

    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      console.log("Clean up interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper title="useEffect Tutorial">
      <div className="text-4xl text-center">{count}</div>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev + 1;
          })
        }
        className="p-2 bg-orange-700 text-black rounded-md font-bold mx-auto cursor-pointer"
      >
        Increase
      </button>
    </Wrapper>
  );
}
