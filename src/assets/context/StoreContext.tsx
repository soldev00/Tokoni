import { createContext, useContext, useState, useMemo } from "react";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

type CartItem = { product: Product; qty: number };

type StoreContextType = {
  products: Product[];
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  addToWishlist: (p: Product) => void;
  removeFromWishlist: (id: string) => void;
  total: number;
};

const StoreContext = createContext<StoreContextType | null>(null);

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("StoreContext missing");
  return ctx;
}

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop";

const PRODUCTS: Product[] = [
  { id: "p1", title: "Satin Midi Dress", price: 120, image: PLACEHOLDER_IMG },
  { id: "p2", title: "Linen Summer Shirt", price: 68, image: PLACEHOLDER_IMG },
  { id: "p3", title: "Pleated Skirt", price: 89, image: PLACEHOLDER_IMG },
  { id: "p4", title: "Oversized Blazer", price: 145, image: PLACEHOLDER_IMG },
  { id: "p5", title: "High-Waist Trousers", price: 110, image: PLACEHOLDER_IMG },
  { id: "p6", title: "Wrap Top", price: 59, image: PLACEHOLDER_IMG },
  { id: "p7", title: "Cropped Denim", price: 72, image: PLACEHOLDER_IMG },
  { id: "p8", title: "Silk Scarf", price: 35, image: PLACEHOLDER_IMG },
];

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const found = prev.find((c) => c.product.id === p.id);
      if (found) return prev.map((c) => c.product.id === p.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { product: p, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((c) => c.product.id !== id));

  const addToWishlist = (p: Product) =>
    setWishlist((prev) => (prev.find((w) => w.id === p.id) ? prev : [...prev, p]));

  const removeFromWishlist = (id: string) =>
    setWishlist((prev) => prev.filter((w) => w.id !== id));

  const total = useMemo(() => cart.reduce((sum, i) => sum + i.product.price * i.qty, 0), [cart]);

  return (
    <StoreContext.Provider value={{ products: PRODUCTS, cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist, total }}>
      {children}
    </StoreContext.Provider>
  );
}
