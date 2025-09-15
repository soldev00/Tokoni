import Hero from "../Components/Hero";
import ProductGrid from "../Components/Productgrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="container section">
        <h2 className="section-title">New Arrivals</h2>
        <ProductGrid />
      </section>
    </main>
  );
}
