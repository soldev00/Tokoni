import {  useStore } from "../context/StoreContext";
import type { Product } from "../context/StoreContext";
import IconCart from "../Icons/Iconcart";
import IconHeart from "../Icons/Iconheart";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isWished = wishlist.some((w) => w.id === product.id);

  return (
    <article className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <div className="card-top">
          <h3>{product.title}</h3>
          <button className={`icon-btn ${isWished ? "active" : ""}`} onClick={() => addToWishlist(product)}>
            <IconHeart filled={isWished} />
          </button>
        </div>
        <p className="price">${product.price.toFixed(2)}</p>
        <button className="btn full" onClick={() => addToCart(product)}>
          <IconCart /> Add to Cart
        </button>
      </div>
    </article>
  );
}
