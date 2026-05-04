"use client";

import Wrapper from "@/component/wrapper";
import OrderList from "./components/orderList";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

export default function UseContextTutorial() {
  const [cart, setCart] = useState<ICart>({
    name: "Sabun",
    price: 10000,
  });

  return (
    <Wrapper title="useContext Tutorial">
      <CartContext.Provider value={cart}>
        <OrderList />
      </CartContext.Provider>
    </Wrapper>
  );
}
