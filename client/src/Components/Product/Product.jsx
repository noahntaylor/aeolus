import React from "react";

import { ProductData } from "../Data";
import "./Product.css";

function Product() {
  return (
    <div id="product" className="product">
      <div className="product-section">
        <h2 className="product-heading">{ProductData.productTitle}</h2>
        <p className="product-text">{ProductData.productText}</p>
      </div>
      <div className="product-img-section">
        <img className="img" src={ProductData.productImage} alt="" />
      </div>
      <div className="product-img-section-right">
        <img className="img" src={ProductData.secondProductImage} alt="" />
      </div>
      <div className="product-section-right">
        <h2 className="product-heading">{ProductData.secondProductTitle}</h2>
        <p className="product-text">{ProductData.secondProductText}</p>
      </div>
      <div className="product-section">
        <h2 className="product-heading">{ProductData.thirdProductTitle}</h2>
        <p className="product-text">{ProductData.thirdProductText}</p>
      </div>
      <div className="product-img-section last">
        <img className="img" src={ProductData.thirdProductImage} alt="" />
      </div>
    </div>
  );
}

export default Product;
