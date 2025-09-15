import { useStore } from "../context/StoreContext";
import IconCart from "../Icons/Iconcart";

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useStore();
  return (
    <main className="container section">
      <h1 className="section-title">Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="muted">Your wishlist is empty.</p>
      ) : (
        <div className="grid">
          {wishlist.map((p) => (
            <article className="card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="price">${p.price.toFixed(2)}</p>
                <div className="card-actions">
                  <button className="btn" onClick={() => addToCart(p)}>
                    <IconCart /> Add to Cart
                  </button>
                  <button className="btn-outline" onClick={() => removeFromWishlist(p.id)}>Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
