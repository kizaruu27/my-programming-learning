# React Hooks Learning Documentation

**Tanggal**: May 2, 2026
**Project**: React Hooks Tutorial - my-programming-learning
**Learning Focus**: useState, useEffect, useMemo

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Setup](#project-setup)
3. [useState - Implementation & Learnings](#usestate---implementation--learnings)
4. [useEffect - Complete Guide](#useeffect---complete-guide)
5. [useMemo - Optimization Guide](#usememo---optimization-guide)
6. [Key Takeaways](#key-takeaways)

---

## Project Overview

Ini adalah project pembelajaran Next.js 16 dengan React 19 yang focus pada pemahaman mendalam tentang React Hooks.

**Tech Stack:**

- Next.js 16.2.4
- React 19.2.4
- TypeScript 5.9.3
- Tailwind CSS 4.2.4

**Project Structure:**

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── use-state/
│   │   └── page.tsx          # useState Tutorial
│   ├── use-effect/
│   │   └── page.tsx          # useEffect Tutorial
│   └── use-memo/
│       └── page.tsx          # useMemo Tutorial
├── component/
│   └── wrapper.tsx           # Reusable wrapper component
└── utils/
    └── utils.ts              # Helper functions & data
```

---

## Project Setup

### Dependencies Installed

**Production:**

- `next@16.2.4`
- `react@19.2.4`
- `react-dom@19.2.4`

**Development:**

- `@tailwindcss/postcss@^4`
- `@types/node@^20`
- `@types/react@^19`
- `@types/react-dom@^19`
- `tailwindcss@^4`
- `typescript@^5`

### Configuration Files

- `tsconfig.json` - TypeScript configuration dengan path alias `@/*`
- `postcss.config.mjs` - PostCSS config untuk Tailwind CSS
- `next.config.ts` - Next.js configuration

### Scripts

```bash
npm run dev      # Jalankan development server
npm run build    # Build untuk production
npm start        # Jalankan production server
```

---

## useState - Implementation & Learnings

### File: `src/app/use-state/page.tsx`

#### Problem Statement

User ingin `setText` dipanggil **hanya saat submit button ditekan**, bukan pada setiap `onChange` event.

#### Solution - FormData API (Best Practice)

```typescript
"use client";
import Wrapper from "@/component/wrapper";
import { useState } from "react";

export default function UseStateTutorial() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <Wrapper title="useState Tutorial">
      {/* Counter Section */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
          className="py-2 px-4 border border-white bg-purple-400 hover:bg-purple-600 cursor-pointer rounded-xl"
        >
          -
        </button>
        <p className="text-2xl text-orange-400 font-bold">Value: {count}</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="py-2 px-4 border border-white bg-purple-400 hover:bg-purple-600 cursor-pointer rounded-xl"
        >
          +
        </button>
      </div>

      {/* Form Section - Single State for Submit-Only Update */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setText((formData.get("text") ?? "") as string);
        }}
        className="flex flex-col gap-2 mt-5"
      >
        <label htmlFor="my-text">Your Text</label>
        <input
          className="bg-white text-black px-2"
          type="text"
          name="text"
          id="my-text"
        />
        <button
          type="submit"
          className="py-2 px-4 border border-white bg-purple-400 hover:bg-purple-600 cursor-pointer rounded-xl"
        >
          Submit Text
        </button>
        <h1 className="text-4xl">{text}</h1>
      </form>
    </Wrapper>
  );
}
```

#### Key Concepts Explained

### 1️⃣ Controlled vs Uncontrolled Components

| Aspek    | Controlled           | Uncontrolled          |
| -------- | -------------------- | --------------------- |
| State    | Disimpan di React    | Disimpan di DOM       |
| Update   | Via onChange event   | Via FormData / useRef |
| Best Use | Real-time validation | Simple form submit    |

### 2️⃣ FormData API (✅ Recommended)

```typescript
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const inputValue = formData.get("text"); // String | null
  setText((inputValue ?? "") as string); // Handle null case
};
```

**Keuntungan:**

- ✅ Modern browser API
- ✅ Tidak perlu track state input
- ✅ Clean & simple syntax
- ✅ Support multiple inputs mudah

### 3️⃣ Form Best Practices

```typescript
// ✅ BEST PRACTICE
<form onSubmit={handleSubmit}>
  <input type="text" name="text" />
  <button type="submit">Submit</button>
</form>

// ❌ TIDAK RECOMMENDED
<button onClick={() => setText(value)}>Submit</button>
<button type="button" onClick={...}>Submit</button>
```

**Mengapa `onSubmit` lebih baik:**

- Trigger dengan Enter key ✅
- Semantic HTML
- Accessibility better
- Support form validation

---

## useEffect - Complete Guide

### File: `src/app/use-effect/page.tsx`

#### Two Use Cases Demonstrated

```typescript
"use client";
import Wrapper from "@/component/wrapper";
import { useEffect, useState } from "react";

export default function UseEffectTutorial() {
  const [count, setCount] = useState(0);

  // EFFECT 1: Run kapan dependency berubah
  useEffect(() => {
    console.log("Current count: ", count);

    return () => {
      console.log("Cleaned up!");
    };
  }, [count]);

  // EFFECT 2: Run sekali saat mount, cleanup saat unmount
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
```

### 1️⃣ Dependency Array Modes

#### A. **Tanpa Dependency Array** → Run SETIAP RENDER

```typescript
useEffect(() => {
  console.log("Setiap render!");
});
// ⚠️ HATI-HATI: Infinite loop jika set state!
```

**Kapan gunakan:** Jarang, hanya untuk side effects yang memang harus run every render.

#### B. **Dependency Array Kosong `[]`** → Run SEKALI SAAT MOUNT

```typescript
useEffect(() => {
  console.log("Component mounted!");
  const interval = setInterval(() => {
    console.log("Interval running...");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup saat unmount
  };
}, []);
```

**Kapan gunakan:**

- Fetch data pada init
- Subscribe event listener
- Set up interval/timeout
- Initialize 3rd party library

#### C. **Dependency Array Dengan Value** → Run SAAT DEPENDENCY BERUBAH

```typescript
useEffect(() => {
  console.log("Count berubah:", count);
  // Do something dengan count
}, [count]);
```

**Kapan gunakan:**

- Respond to state/props change
- Update side effect based on dependencies

### 2️⃣ Cleanup Function (Return)

```typescript
useEffect(() => {
  // Setup
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // Cleanup - dijalankan SEBELUM:
  // 1. Effect dijalankan ulang (dependency berubah)
  // 2. Component unmount
  return () => {
    console.log("Cleaning up!");
    clearInterval(interval);
  };
}, [dependency]);
```

#### ⚠️ Masalah Tanpa Cleanup

```
Render 1 → Interval A dibuat
Render 2 → Cleanup TIDAK ada! Interval A masih jalan
         → Interval B dibuat (BARU)
Render 3 → Interval A + B + C semua jalan! 🚨
```

**Memory Leak & CPU naik!**

#### ✅ Dengan Cleanup

```
Render 1 → Interval A dibuat
Render 2 → Cleanup: clearInterval(A) ✅
         → Interval B dibuat
Result → Hanya 1 interval yang jalan ✅
```

### 3️⃣ Mount & Unmount Concept

```
┌────────────────────────────────────────┐
│ MOUNT (Component "lahir")              │
├────────────────────────────────────────┤
│ useEffect([]) jalankan 1x              │
│ Component render pertama               │
│                                        │
│ (User klik button)                     │
│ ↓                                      │
│ RE-RENDER (bukan mount/unmount)        │
│ useEffect([dependency]) cleanup + run  │
│                                        │
│ (User navigate ke halaman lain)        │
│ ↓                                      │
│ UNMOUNT (Component "mati")             │
│ useEffect cleanup jalankan             │
│ Semua resource di-clear                │
└────────────────────────────────────────┘
```

### 4️⃣ Visualisasi Console Output

Saat user interact dengan component:

```javascript
// 1. Render pertama (MOUNT)
"Current count: 0";
"Set interval";

// 2. User klik button (RE-RENDER, count: 0→1)
"Cleaned up!";
"Current count: 1";
// Interval masih jalan (dependency [count] tidak terpengaruh interval)

// 3. User klik button lagi (RE-RENDER, count: 1→2)
"Cleaned up!";
"Current count: 2";

// 4. User navigate ke halaman lain (UNMOUNT)
"Cleaned up!";
"Clean up interval";
// Interval di-clear, component di-unmount
```

---

## useMemo - Optimization Guide

### File: `src/app/use-memo/page.tsx`

```typescript
"use client";
import Wrapper from "@/component/wrapper";
import { initItems } from "@/utils/utils";
import { useMemo, useState } from "react";

export default function UseMemoTutorial() {
  const [count, setCount] = useState(0);
  const [items] = useState(initItems); // 7 juta items!

  // Menyimpan hasil find(), hanya re-calculate saat items/count berubah
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
```

### 1️⃣ Apa itu useMemo?

`useMemo` adalah hook untuk **menyimpan (cache) hasil perhitungan** agar tidak dihitung ulang setiap render jika dependency tidak berubah.

#### Syntax:

```typescript
const memoizedValue = useMemo(() => {
  // expensive calculation di sini
  return result;
}, [dependency1, dependency2]);
```

### 2️⃣ Comparison: Dengan vs Tanpa useMemo

#### ❌ TANPA useMemo (Setiap render jalankan ulang)

```typescript
// Component render ulang karena state lain berubah
const selectedItem = items.find((item) => item.id === count);
// items.find() dijalankan SETIAP RENDER! 🚨
```

**Output Console:**

```
Render 1 → items.find() jalankan
Render 2 → items.find() jalankan ULANG (⏱️ 50ms)
Render 3 → items.find() jalankan ULANG (⏱️ 50ms)
...SETIAP RENDER!
```

#### ✅ DENGAN useMemo (Cache hasil jika dependency tidak berubah)

```typescript
const selectedItem = useMemo(
  () => items.find((item) => item.id === count),
  [items, count],
);
```

**Output Console:**

```
Render 1 → items.find() jalankan → SIMPAN HASIL
Render 2 → items berubah? TIDAK, count berubah? YA
         → items.find() jalankan ULANG → SIMPAN HASIL BARU
Render 3 → items berubah? TIDAK, count berubah? TIDAK
         → ✅ PAKAI HASIL DARI CACHE (TIDAK jalankan ulang)
```

### 3️⃣ Real-World Use Cases

#### Case 1: Sorting Large Dataset

```typescript
// ❌ TANPA useMemo - Filter 1 juta produk setiap render
const filteredProducts = products.filter((p) => p.name.includes(searchTerm));

// ✅ DENGAN useMemo - Filter hanya saat searchTerm berubah
const filteredProducts = useMemo(() => {
  console.time("filtering");
  const result = products.filter((p) => p.name.includes(searchTerm));
  console.timeEnd("filtering");
  return result;
}, [products, searchTerm]);

// Hasil:
// - Ketik huruf pertama: "filtering: 100ms" (dihitung)
// - Ketik huruf kedua: "filtering: 100ms" (dihitung lagi, dependency berubah)
// - Render component lain: TIDAK ada "filtering" log (pakai cache!)
```

#### Case 2: Expensive Calculation

```typescript
export default function Fibonacci() {
  const [count, setCount] = useState(1);
  const [renderCount, setRenderCount] = useState(0);

  // ❌ TANPA useMemo
  // const fib = fibonacci(count); // Hitung 1000x per detik!

  // ✅ DENGAN useMemo
  const fib = useMemo(() => {
    console.log("Computing fibonacci...");
    return fibonacci(count);
  }, [count]);

  return (
    <>
      <div>Fibonacci({count}) = {fib}</div>
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Re-render ({renderCount})
      </button>
    </>
  );
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**Scenario:**

- Klik "Next" → Fibonacci dihitung ✅
- Klik "Re-render" → Tanpa useMemo: dihitung ulang ❌, Dengan useMemo: pakai cache ✅

#### Case 3: Passing Object ke Child Component

```typescript
export default function Parent() {
  const [count, setCount] = useState(0);

  // ❌ TANPA useMemo - Object baru dibuat SETIAP RENDER
  // const config = { theme: "dark", size: "large" };
  // <Child config={config} /> // Setiap render, config ref berbeda!

  // ✅ DENGAN useMemo - Object disimpan, hanya update saat berguna
  const config = useMemo(
    () => ({ theme: "dark", size: "large" }),
    [],
  );

  return <Child config={config} />;
}

const Child = memo(({ config }) => {
  console.log("Child rendered!");
  return <div>{config.theme}</div>;
});
```

### 4️⃣ Checklist: Kapan Gunakan useMemo?

✅ **Gunakan useMemo** untuk:

- Calculation EXPENSIVE (sorting 1M data, fibonacci, dll)
- Dependency jarang berubah
- Component sering re-render karena alasan lain
- Passing object/array ke memoized child component

❌ **JANGAN gunakan** untuk:

- Calculation simple (`x * 2`, string concat, dll)
- Overhead useMemo > manfaatnya
- Dependency sering berubah
- Tanpa measurement / benchmark

### 5️⃣ Measurement Approach

Jangan guess, measure dulu!

```typescript
const processed = useMemo(() => {
  console.time("mapping");
  const result = data.map((item) => heavyTransform(item));
  console.timeEnd("mapping");
  return result;
}, [data]);

// Check di console:
// mapping: 0.5ms   → TIDAK perlu useMemo
// mapping: 50ms    → GUNAKAN useMemo ✅
// mapping: 500ms   → HARUS pakai useMemo!
```

### 6️⃣ Decision Table

| Data Size | Logic   | Re-render Freq | Perlu useMemo? |
| --------- | ------- | -------------- | -------------- |
| < 100     | Simple  | Sering         | ❌ Tidak       |
| < 100     | Complex | Sering         | ✅ Ya          |
| 100-1000  | Simple  | Sering         | ❌ Tidak       |
| 100-1000  | Complex | Sering         | ✅ Ya          |
| > 1000    | Apapun  | Apapun         | ✅ Ya          |

---

## Key Takeaways

### useState - Form Handling

1. **Gunakan `onSubmit` pada form**, bukan `onClick` pada button
2. **FormData API adalah best practice** untuk submit-only updates
3. **Handling null:** `formData.get("field") ?? ""`
4. **Type assertion:** `as string` untuk TypeScript

### useEffect - Side Effects & Lifecycle

1. **Tiga dependency array modes:**
   - Tanpa array → Setiap render
   - `[]` → Sekali saat mount
   - `[deps]` → Saat dependency berubah

2. **Cleanup function PENTING untuk:**
   - Clear interval/timeout
   - Remove event listener
   - Unsubscribe
   - Cancel pending request

3. **Mount/Unmount Flow:**
   - MOUNT → useEffect run
   - RE-RENDER → cleanup run, useEffect run
   - UNMOUNT → cleanup run

4. **Avoid Memory Leak:** Selalu clear resource di cleanup!

### useMemo - Performance Optimization

1. **Gunakan hanya untuk expensive calculation**
   - Measure dulu dengan `console.time()`
   - > 10ms = consider useMemo

2. **Rule: Readability > Performance**
   - Jangan overoptimasi dari awal
   - Optimize saat ada problem

3. **Common Use Cases:**
   - Filtering/sorting large dataset
   - Expensive calculation (fibonacci)
   - Passing object to memoized child

4. **Dependency array penting:**
   - Include semua variable yang dipakai
   - Lupa dependency = bug yang sulit ditrack

---

## Practical Exercise

### Try This!

1. **useState:** Modify form untuk support multiple inputs dengan FormData

   ```typescript
   const handleSubmit = (e) => {
     const formData = new FormData(e.target);
     const name = formData.get("name");
     const email = formData.get("email");
     // Handle multiple values
   };
   ```

2. **useEffect:** Add cleanup untuk event listener

   ```typescript
   useEffect(() => {
     const handleResize = () => console.log("resized");
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);
   ```

3. **useMemo:** Measure performance saat data besar
   ```typescript
   const result = useMemo(() => {
     console.time("heavy-calc");
     // expensive operation
     console.timeEnd("heavy-calc");
     return data;
   }, [data]);
   ```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks Documentation](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated:** May 2, 2026
**Learning Status:** In Progress 🚀
