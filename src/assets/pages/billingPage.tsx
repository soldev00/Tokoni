import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function BillingPage() {
  const { total } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <main className="container section narrow">
      <h1 className="section-title">Billing</h1>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact</legend>
          <label>
            Full Name
            <input type="text" required placeholder="Jane Doe" />
          </label>
          <label>
            Email
            <input type="email" required placeholder="jane@violetvogue.com" />
          </label>
        </fieldset>

        <fieldset>
          <legend>Shipping Address</legend>
          <label>
            Address
            <input type="text" required placeholder="123 Purple Ave" />
          </label>
          <div className="row-2">
            <label>
              City
              <input type="text" required />
            </label>
            <label>
              ZIP
              <input type="text" required />
            </label>
          </div>
          <label>
            Country
            <input type="text" required placeholder="USA" />
          </label>
        </fieldset>

        <fieldset>
          <legend>Payment</legend>
          <label>
            Card Number
            <input type="text" required placeholder="4242 4242 4242 4242" />
          </label>
          <div className="row-2">
            <label>
              Exp
              <input type="text" required placeholder="MM/YY" />
            </label>
            <label>
              CVC
              <input type="text" required placeholder="CVC" />
            </label>
          </div>
        </fieldset>

        <div className="billing-summary">
          <h3>Order Summary</h3>
          <p>Total: <strong>${total.toFixed(2)}</strong></p>
        </div>

        <button className="btn full" type="submit">
          Place Order
        </button>
      </form>
    </main>
  );
}
