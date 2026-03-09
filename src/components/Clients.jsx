import React from "react";
import { brandLogos } from '../data/brandLogo';
import '../styles/Clients.css'

function Clients() {
  return (
    <section className="brand-section" id="clients">
      <h3 className="brand-title">Trusted By</h3>

      <div className="brand-carousel">
        <div className="brand-track">
          {[...brandLogos, ...brandLogos].map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;