import React from "react";
import ventilator from "./Images/ventilator.png";
import "./Product.css";

const Product = () => {
  const productTitle = "The Aeolus Ventilator";
  const productText =
    "Aeolus has developed a robust pneumatic and portable ventilator and cost effective ventilator. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. She said the project started as a capstone design project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided   to keep working on the project herself after graduation.";

  return (
    <div id="product" className="product">
      <div className="product-section">
        <h2 className="product-heading">{productTitle}</h2>
        <p className="product-text">{productText}</p>
      </div>
      <div className="product-img-section">
        <img className="img" src={ventilator} alt="" />
      </div>
    </div>
  );
};

export default Product;
