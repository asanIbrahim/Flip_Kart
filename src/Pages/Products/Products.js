import React from "react";
import "./Products.css";
import { ProductsData } from "../../ProductsData";

const Products = () => {
  return (
    <div className="Products">
      <div className="Products-filters">
        <p className="filter-head  ">Filters</p>
        <div className="category">
          <p className="filter-categoryHead">Categories</p>
          <div className="filter-category">Mobiles </div>
          <div className="Price">
            <p className="priceHead">Price </p>
            <input type="range" name="" id="" className="pricerange " />
            <div className="price-input">
              <input value={0} className="pricebox" /> <p>to</p>
              <input value={50000} className="pricebox" />
            </div>
          </div>
        </div>
        <div className="brand">
          <p>Brand</p>
        </div>
      </div>
      <div>
        <div className="Products-items">Showing 1-{ProductsData.length}</div>
      </div>
    </div>
  );
};

export default Products;
