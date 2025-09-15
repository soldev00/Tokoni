import { useStore } from "../context/StoreContext";
import ProductCard from "../Components/Productcard";

export default function ProductGrid() {
  const { products } = useStore();
  return (
    <div id="new-arrivals" className="grid">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
