import React from "react";
import "./ProductCarouse.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatergoryBanner from "../../Components/CategoryBanner/CatergoryBanner";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const ProductCarouse = ({ BgImg, Title, Data }) => {
  const Next = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdArrowForwardIos
          style={{ color: "black", fontSize: 25, fontWeight: 900 }}
        />
      </div>
    );
  };

  const Prev = (props) => {
    const { className, onClick } = props;

    return (
      <div className={className} onClick={onClick}>
        <MdArrowBackIosNew
          style={{ color: "black", fontSize: 25, fontWeight: 900 }}
        />
      </div>
    );
  };
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    infinite: false,
  };
  return (
    <div className="Categorycarouse">
      <div
        className="CategoryCarousel-left"
         style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}
      >
        <p className="Categorycarouse-tile">{Title}</p>
        <button className="Categorycarouse-btn">View All</button>
          </div>
        <div className="Categorycarouse-right">
          <Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
            {Data.map((item, index) => (
              <Link key={index} to={"/Products"}>
                <CatergoryBanner
                  ImgSrc={item.ImgSrc}
                  Title={item.CategoryName}
                  Brand={item.Brand}
                />
              </Link>
            ))}
          </Slider>
        </div>
    
    </div>
  );
};

export default ProductCarouse;
