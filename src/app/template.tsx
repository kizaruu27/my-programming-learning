"use client";
import { useState } from "react";

// ! Note This ! //
export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);

  return (
    <div>
      {/* <div className="mb-3">
        <h1>Template State: {state}</h1>
        <button
          onClick={() => setState(state + 1)}
          className="bg-gray-600 p-2 text-white"
        >
          Click
        </button>
      </div> */}
      {children}
    </div>
  );
}
