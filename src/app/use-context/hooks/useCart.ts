import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const cart = useContext(CartContext);
  if (cart === undefined) throw Error("Cart context is empty");

  return cart;
};
