import { Link, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import Iconcart from "../Icons/Iconcart";
import Iconheart from "../Icons/Iconheart";

export default function Navbar() {
  const { cart, wishlist } = useStore();
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">Tokoni </Link>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/our-story">Our Story</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <Link to="/wishlist" className="icon-link">
            <Iconheart />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="icon-link">
            <Iconcart />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
