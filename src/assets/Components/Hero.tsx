// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-overlay">
//         <h1>Wear Your Confidence</h1>
//         <p>Minimal silhouettes. Maximal impact.</p>
//         <a className="btn" href="#new-arrivals">Shop Now</a>
//       </div>
//     </section>
//   );
// }

import React from "react";
import heroImg from "../heroImg/hero-img.jpg";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span className="highlight"> THE BEST FASHION</span>
        </h1>
        <p>
          Discover timeless silhouettes and modern designs. Minimal effort, maximal impact.
        </p>
        <button className="btn">Shop Now</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="Fashion Model" />
      </div>
    </section>
  );
};

export default Hero;
