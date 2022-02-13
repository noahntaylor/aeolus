import React from "react";

import "./Product.css";
import ventilator from "./Images/ventilator.png";

function Product() {
  return (
    <div id="product" className="product-section">
      <div>
        <h2 className="product-heading">The Aeolus Ventilator</h2>
        <p className="product-text">
          Aeolus has developed a robust and portable ventilator for use in
          developing countries. Katie Stone, 22, won the Genesis Centre's Pitch
          and Pick competition with the Aeolus Portable Ventilation System, a
          prototype that will hopefully provide a cost-effective alternative to
          traditional COVID-19 ventilators. She said the project started as a
          capstone design project for her degree, along with work from partners
          Desiree Van Heerden and Rachel Tobin, but Stone decided to keep
          working on the project herself after graduation.
        </p>
      </div>
      <div>
        <img className="product-img" src={ventilator} alt="" />
      </div>
    </div>
  );
}

export default Product;
