import ProductGrid from "../Components/Productgrid";

export default function CollectionPage() {
  return (
    <main className="container section">
      <h1 className="section-title">Collection</h1>
      <p className="muted">Explore our curated pieces crafted for comfort and style.</p>
      <ProductGrid />
    </main>
  );
}
