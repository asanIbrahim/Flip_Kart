import React from "react";
import "./ProductDetails.css";

const ProductDetailCard = ({ Data }) => {
  return (
    <div className="ProductDetailsCard">
      <div className="ProductDetailCard_Img">
        <img alt="" src={Data.url} />
      </div>
      <div className="ProductDetailCard-details">
        <p className="ProductDetailCard-Name">{Data.Product}</p>
        <div className="ratingsAndreviews">
          <div className="stars">{Data.rating}</div>
          <p className="rating">
            {Data.range} Rating & {Data.reviews} Reviews
          </p>
        </div>
        <ul className="ProductDetailsCard-Productdetails">
          <li className="ProductDetailCard-detail">{Data.Descripition}</li>
          <li className="ProductDetailCard-detail">{Data.Display}</li>
          <li className="ProductDetailCard-detail">{Data.Camera}</li>
          <li className="ProductDetailCard-detail">{Data.Proccessor} </li>
        </ul>
      </div>
      <div className="productDetailCard-PriceandDelivery">
   <div className="pricecontainer">
     <p className="ProductDetailCard-Price">₹{Data.Sellingprice}</p>
     <img alt="" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" height={21}/>
   </div>
   <p className="freedel">Free Delivery</p>
   <p className="discount">Upto <b>17,500</b> off on Exchange no Cost EMI from 23317/month</p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
