import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import HomePage from "./assets/pages/homePage";
import CollectionPage from "./assets/pages/collectionPage";
import OurStoryPage from "./assets/pages/ourstoryPage";
import ContactPage from "./assets/pages/contactPage";
import CartPage from "./assets/pages/cartPage";
import WishlistPage from "./assets/pages/wishlistPage";
import BillingPage from "./assets/pages/billingPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/billing" element={<BillingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
