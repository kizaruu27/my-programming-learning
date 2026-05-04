import { useCart } from "../hooks/useCart";

export default function Total() {
  const { price } = useCart();

  return (
    <div>
      <p>Total price: {price}</p>
    </div>
  );
}
