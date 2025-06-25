import React from "react";
import "./BannerCarouse.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarouse = ({data}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplayspeed:3000
  };
  return <div className="BannerCarouse">
    <Slider {...settings}>
     {data.map((items)=> (
        <div key={items.id}>
       <img src={items.Imgsrc} alt="" className="BannerCarousel_Image"/>
        </div>
     ))}
    </Slider>
  </div>;
};

export default BannerCarouse;
