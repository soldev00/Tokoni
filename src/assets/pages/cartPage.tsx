import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, total } = useStore();
  const navigate = useNavigate();

  return (
    <main className="container section">
      <h1 className="section-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map(({ product, qty }) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="cart-item-info">
                <h4>{product.title}</h4>
                <p>Qty: {qty}</p>
                <p>${(product.price * qty).toFixed(2)}</p>
              </div>
              <button className="btn-outline" onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <div>Total</div>
            <div>${total.toFixed(2)}</div>
          </div>
          <div className="cart-actions">
            <button className="btn" onClick={() => navigate("/billing")}>Proceed to Billing</button>
          </div>
        </div>
      )}
    </main>
  );
}
