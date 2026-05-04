import Cart from "./cart";
import Total from "./total";

export default function OrderList() {
  return (
    <div className="flex flex-col items-center gap-3 mt-5">
      <Cart />
      <Total />
    </div>
  );
}
