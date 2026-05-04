# Catatan Belajar: useContext

## Apa itu useContext?

`useContext` adalah hook React yang memungkinkan kamu **berbagi data antar komponen tanpa harus melewatkan props satu per satu**.

Masalah yang diselesaikan disebut **prop drilling** — yaitu kondisi di mana data harus dioper dari komponen induk ke bawah melalui banyak level, meskipun komponen di tengah tidak membutuhkan data tersebut.

---

## Masalah: Prop Drilling

Tanpa `useContext`, data harus dioper terus ke bawah:

```
page.tsx (punya data `cart`)
  └── OrderList.tsx  → harus terima props cart (padahal tidak butuh)
        ├── Cart.tsx → harus terima props cart
        └── Total.tsx → harus terima props cart
```

Dengan `useContext`, `Cart` dan `Total` bisa langsung ambil data tanpa `OrderList` perlu tahu soal itu.

---

## 3 Langkah Menggunakan useContext

### Langkah 1 — Buat Context

```ts
// context/CartContext.ts
import { createContext } from "react";

export const CartContext = createContext<ICart | undefined>(undefined);
```

`createContext` membuat "wadah global" untuk menyimpan data yang ingin dibagikan.

---

### Langkah 2 — Bungkus Komponen dengan Provider

```tsx
// page.tsx
<CartContext.Provider value={cart}>
  <OrderList />
</CartContext.Provider>
```

`Provider` menyediakan data ke **semua komponen di dalamnya**, seberapa pun dalamnya level komponen tersebut.

---

### Langkah 3 — Konsumsi Data di Komponen Manapun

```ts
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const cart = useContext(CartContext); // langsung ambil data!
```

---

## Pattern: Custom Hook

Daripada memanggil `useContext` langsung di setiap komponen, lebih rapi menggunakan **custom hook**:

```ts
// hooks/useCart.ts
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const cart = useContext(CartContext);
  if (cart === undefined) throw Error("Cart context is empty");
  return cart;
};
```

Keuntungan custom hook:
- **Validasi otomatis** — kalau komponen dipakai di luar Provider, langsung throw error yang jelas
- **Lebih bersih** — komponen cukup panggil `useCart()` tanpa perlu import `CartContext` dan `useContext` tiap saat
- **Reusable** — satu hook bisa dipakai di banyak komponen

Cara pakainya di komponen:

```tsx
// components/Cart.tsx
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { name, price } = useCart();

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
```

---

## Visualisasi Alur Data

```
page.tsx
│   [state: cart = { name: "Sabun", price: 10000 }]
│
└── <CartContext.Provider value={cart}>
      │
      └── <OrderList>  ← tidak perlu props
            ├── <Cart>
            │     useCart() → { name, price } ✓
            │
            └── <Total>
                  useCart() → { price } ✓
```

---

## Struktur File yang Direkomendasikan

```
use-context/
├── page.tsx               → Provider & state utama
├── context/
│   └── CartContext.ts     → createContext
├── hooks/
│   └── useCart.ts         → custom hook (useContext + validasi)
├── types/
│   └── types.ts           → interface/type
└── components/
    ├── OrderList.tsx       → komponen container
    ├── Cart.tsx            → consumer
    └── Total.tsx          → consumer
```

---

## Kapan Pakai useContext?

| Situasi | Rekomendasi |
|---|---|
| Data dibutuhkan banyak komponen (theme, user, cart) | ✅ Pakai useContext |
| Prop drilling lebih dari 2-3 level | ✅ Pakai useContext |
| Data hanya dipakai 1-2 komponen berurutan | ❌ Props biasa lebih simpel |
| State yang sering berubah & sangat kompleks | ⚠️ Pertimbangkan Zustand / Redux |

---

## Ringkasan

| Konsep | Penjelasan |
|---|---|
| `createContext` | Membuat wadah context baru |
| `Context.Provider` | Menyediakan value ke semua komponen di dalamnya |
| `useContext` | Mengambil value dari context |
| Custom Hook | Membungkus `useContext` agar lebih bersih dan aman |
