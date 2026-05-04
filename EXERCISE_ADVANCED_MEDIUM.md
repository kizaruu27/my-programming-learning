# 🎓 Exercise Advanced Medium Level - Product Catalog

**Level:** Medium+
**Difficulty:** ⭐⭐⭐ (3/5)
**Estimated Time:** 45-60 minutes

---

## 📋 Requirements Overview

Buat aplikasi **Product Catalog** dengan fitur yang lebih kompleks dari Task Manager. Aplikasi harus menggunakan kombinasi `useState`, `useEffect`, dan `useMemo` dengan logika yang lebih advanced.

---

## 🎯 Functional Requirements

### 1. **Data Management (useState)**

- **products state**: Array of products dengan structure:

  ```typescript
  {
    id: number,
    name: string,
    price: number,
    category: string,
    stock: number,
    rating: number (0-5),
    image: string (emoji atau URL),
    lastUpdated: number (timestamp)
  }
  ```

- **Multiple independent states:**
  - `products` - list semua products
  - `filters` - object dengan keys: `category`, `minPrice`, `maxPrice`, `minRating`, `sortBy`
  - `cart` - array of items dalam cart (dengan quantity)
  - `viewMode` - "grid" | "list"
  - `showFilters` - boolean untuk toggle filter panel

### 2. **useEffect Requirements (Advanced)**

#### A. **Effect #1 - Initialize Products (mount only)**

- Load initial products dari localStorage dengan key `"products"`
- Jika tidak ada di localStorage, gunakan `DEFAULT_PRODUCTS` yang sudah disediakan
- Dependency: `[]`

#### B. **Effect #2 - Persist Products (auto-save)**

- Auto-save products ke localStorage setiap kali products state berubah
- **REQUIREMENT ADVANCE:** Tambahkan debounce 3 detik agar tidak save terlalu sering
  - Hint: Gunakan `setTimeout` di effect, cleanup dengan `clearTimeout`
- Console log: `"🔵 Products auto-saved at [timestamp]"`
- Dependency: `[products]`

#### C. **Effect #3 - Fetch Additional Data (simulated)**

- Simulasikan fetch dari API yang mengambil 2 detik
- Update semua product ratings dengan nilai random (0-5)
- Hanya jalankan sekali saat component mount
- **REQUIREMENT ADVANCE:** Add loading state sementara fetch berjalan
- Dependency: `[]`

#### D. **Effect #4 - Update Cart Totals**

- Calculate total price, item count, dan savings di cart
- Jalankan hanya saat cart berubah
- **REQUIREMENT ADVANCE:** Implement localStorage persistence untuk cart juga
- Dependency: `[cart]`

---

## 🚀 Advanced Features (useMemo)

### 1. **Filtered & Sorted Products (Complex Logic)**

```typescript
useMemo(() => {
  // Step 1: Filter berdasarkan:
  //   - Category (exact match atau "all")
  //   - Price range (minPrice <= price <= maxPrice)
  //   - Rating (minRating <= rating)
  // Step 2: Sort berdasarkan sortBy:
  //   - "price-asc" → dari terendah ke tertinggi
  //   - "price-desc" → dari tertinggi ke terendah
  //   - "rating" → dari rating tertinggi
  //   - "newest" → dari lastUpdated terbaru
  //   - "stock" → dari stock terbanyak
  // Step 3: Return filtered & sorted array
  // Console.time() untuk measure performance
}, [products, filters]);
```

### 2. **Cart Totals Calculation**

```typescript
useMemo(() => {
  // Calculate:
  //   - subtotal: sum(price * quantity)
  //   - tax: subtotal * 10% (10% tax)
  //   - discount: jika subtotal > 1000, discount 5%
  //   - total: subtotal + tax - discount
  //   - itemCount: sum(quantity)
  //   - savings: total discount amount
  // Return object dengan semua value ini
}, [cart]);
```

### 3. **Category Summary (Stats)**

```typescript
useMemo(() => {
  // Create object dengan stats per category:
  // {
  //   "category-name": {
  //     count: number of products,
  //     avgPrice: average price,
  //     avgRating: average rating
  //   }
  // }
  // Gunakan untuk display category badges
}, [products]);
```

---

## 📌 Handler Functions (Kosong - Harus Diimplementasikan)

```typescript
// ===== PRODUCT HANDLERS =====
const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
  // TODO: Add new product dari form
  // 1. Get data dari FormData
  // 2. Create new product object dengan unique ID
  // 3. Add ke products array
  // 4. Reset form
};

const handleDeleteProduct = (id: number) => {
  // TODO: Delete product by id
};

const handleUpdateStock = (id: number, newStock: number) => {
  // TODO: Update stock untuk product tertentu
};

// ===== FILTER HANDLERS =====
const handleFilterChange = (key: string, value: any) => {
  // TODO: Update filters state
  // setFilters(prev => ({ ...prev, [key]: value }))
};

const handleResetFilters = () => {
  // TODO: Reset semua filters ke default
};

// ===== CART HANDLERS =====
const handleAddToCart = (productId: number, quantity: number) => {
  // TODO: Add product to cart
  // 1. Check jika product sudah di cart
  // 2. Jika ada, update quantity
  // 3. Jika tidak, add item baru
  // Validation: quantity tidak boleh > available stock
};

const handleRemoveFromCart = (productId: number) => {
  // TODO: Remove product from cart completely
};

const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
  // TODO: Update quantity untuk item di cart
};

const handleClearCart = () => {
  // TODO: Clear all items from cart dengan confirmation
};

// ===== VIEW HANDLERS =====
const handleToggleViewMode = () => {
  // TODO: Toggle antara "grid" dan "list"
};

const handleToggleFilters = () => {
  // TODO: Toggle filter panel visibility
};
```

---

## 🏗️ Component Structure

```
<Wrapper>
  ├─ Header Section
  │  ├─ Title & View Mode Toggle
  │  └─ Cart Summary (Cart Icon + Count + Total)
  │
  ├─ Main Content Area (2 columns)
  │  ├─ Left: Filter Panel (Conditional Render)
  │  │  ├─ Category Filter (Select)
  │  │  ├─ Price Range (Slider atau Inputs)
  │  │  ├─ Minimum Rating (Slider)
  │  │  ├─ Sort By (Select)
  │  │  ├─ Category Stats Display
  │  │  └─ Reset Button
  │  │
  │  └─ Right: Product Grid/List
  │     ├─ Product Count Display
  │     ├─ Empty State (jika no products)
  │     └─ Products Map (dengan Add to Cart button)
  │
  ├─ Add Product Form Section
  │  ├─ Input: Product Name
  │  ├─ Input: Price
  │  ├─ Select: Category
  │  ├─ Input: Stock
  │  └─ Submit Button
  │
  └─ Cart Preview Section (Sticky/Fixed)
     ├─ Cart Items List
     ├─ Price Breakdown (Subtotal, Tax, Discount, Total)
     └─ Checkout Button & Clear Cart Button
```

---

## 🔧 Advanced Implementation Hints

### Debounce untuk Auto-Save

```typescript
// Jangan langsung save, tunggu 3 detik setelah perubahan terakhir
// Implementasi di useEffect dengan setTimeout
useEffect(() => {
  const timer = setTimeout(() => {
    // save to localStorage
  }, 3000);

  return () => clearTimeout(timer); // cleanup
}, [products]);
```

### Simulated API Call dengan Loading State

```typescript
// Tambahkan state untuk loading
const [isLoadingRatings, setIsLoadingRatings] = useState(false);

useEffect(() => {
  setIsLoadingRatings(true);

  // Simulasi API call 2 detik
  const timer = setTimeout(() => {
    // Update ratings
    setIsLoadingRatings(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
```

### Performance Measurement

```typescript
useMemo(() => {
  console.time("filter-and-sort");

  // Do expensive operations here
  const result = console.timeEnd("filter-and-sort"); // filtered & sorted
  return result;
}, [dependencies]);
```

---

## 📊 Default Products Data

```typescript
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Laptop",
    price: 15000000,
    category: "Electronics",
    stock: 5,
    rating: 4.5,
    image: "💻",
    lastUpdated: Date.now(),
  },
  {
    id: 2,
    name: "Mouse",
    price: 500000,
    category: "Electronics",
    stock: 20,
    rating: 4.0,
    image: "🖱️",
    lastUpdated: Date.now(),
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500000,
    category: "Electronics",
    stock: 15,
    rating: 4.2,
    image: "⌨️",
    lastUpdated: Date.now(),
  },
  {
    id: 4,
    name: "Book",
    price: 100000,
    category: "Books",
    stock: 50,
    rating: 4.8,
    image: "📚",
    lastUpdated: Date.now(),
  },
  {
    id: 5,
    name: "Headphones",
    price: 3000000,
    category: "Electronics",
    stock: 10,
    rating: 4.6,
    image: "🎧",
    lastUpdated: Date.now(),
  },
  // ... add more
];
```

---

## ✅ Acceptance Criteria

- [x] Semua 4 useEffect berjalan dengan benar dan cleanup dipanggil
- [x] Filtering & sorting bekerja dengan kombinasi semua filter
- [x] Cart management: add, remove, update quantity
- [x] Data persists di localStorage untuk products & cart
- [x] Performance: useMemo mencegah unnecessary re-calculations
- [x] Category stats menampilkan info yang benar
- [x] Form validation untuk add product (nama, price, stock tidak boleh kosong)
- [x] UI responsive dan intuitif
- [x] Console logs untuk debugging (terutama dari useEffect & useMemo)

---

## 🎓 Learning Outcomes

Setelah selesai exercise ini, Anda akan memahami:

1. **useState dengan multiple states** - Mengelola state yang kompleks
2. **useEffect patterns:**
   - Mount-only initialization
   - Auto-save dengan debounce
   - API simulation dengan loading state
   - Dependency management yang tepat
3. **useMemo untuk optimization:**
   - Expensive filtering & sorting
   - Complex calculations
   - Performance measurement
4. **Best practices:**
   - Form handling dengan FormData
   - localStorage API
   - State immutability
   - TypeScript types

---

## 🚨 Common Pitfalls to Avoid

1. ❌ Lupa cleanup untuk setTimeout/setInterval
2. ❌ Dependency array yang salah → infinite loops atau missing updates
3. ❌ Mutating state directly (gunakan spread operator atau immutable patterns)
4. ❌ useMemo di semua tempat → only untuk expensive operations
5. ❌ Tidak validasi input form
6. ❌ Cart quantity bisa lebih dari available stock

---

## 📚 Hints to Get Started

1. Start dengan membuat DEFAULT_PRODUCTS array
2. Setup 3 useState untuk products, filters, cart
3. Implementasi Effect #1 & #2 (load & save dari localStorage)
4. Buat filtered memoized value
5. Implementasi handlers one by one
6. Test setiap fitur sambil berjalan

Good luck! 🚀
