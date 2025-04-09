import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        style={{
          backgroundColor: "purple",
        }}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <h3>Count: {count} </h3>
      <button
        style={{
          backgroundColor: "purple",
        }}
        onClick={() =>
          setCount((prevCount) => (prevCount <= 0 ? prevCount : prevCount - 1))
        }
      >
        -
      </button>
    </div>
  );
}
