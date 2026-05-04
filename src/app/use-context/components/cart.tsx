import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { name, price } = useCart();

  return (
    <div className="flex flex-col gap-2">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
