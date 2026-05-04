"use client";

import Wrapper from "@/component/wrapper";
import { initItems } from "@/utils/utils";
import { useMemo, useState } from "react";

export default function UseMemoTutorial() {
  const [count, setCount] = useState(0);
  const [items] = useState(initItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count],
  );

  return (
    <Wrapper title="useMemo Tutorial">
      <div className="text-4xl">Count: {count}</div>
      <div className="text-4xl">SelectedItems: {selectedItem?.id}</div>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-orange-500 p-2 text-lg font-bold rounded-md cursor-pointer"
      >
        Increase
      </button>
    </Wrapper>
  );
}
