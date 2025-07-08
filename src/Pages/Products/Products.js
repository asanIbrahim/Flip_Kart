import React from "react";
import "./Products.css";
import ProductsData from "../../ProductsData";

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
        <div className="Products-items">
          <p className="totalresults">Showing 1-{ProductsData.length} result</p>
          <div className="sortby">
            <p>Sort By</p>
            <ul className="sortitems">
              <li className="sortitem">Relevance</li>
              <li className="sortitem">Popularity</li>
              <li className="sortitem">Price- Low to High</li>
              <li className="sortitem">Price - High to Low</li>
              <li className="sortitem"> Newest First</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
