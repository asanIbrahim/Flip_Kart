import React from "react";
import "./Home.css";
import { CategoryBarData, CarouselData, BestOf } from "../../data";
import CategoryBar from "../../Components/CategoryBar/CategoryBar";
import BannerCarouse from "../../Components/BannerCarouse/BannerCarouse";
import ProductCarouse from "../../Components/ProductCarouse/ProductCarouse";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-CategoryContainer">
        <div className="Home-CategoryBar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
        </div>
      </div>
      <div className="Home-container">
        <div className="Home-carousel">
          <BannerCarouse data={CarouselData} />
        </div>
        <div className="Home-ProductCarousel">
          <ProductCarouse
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />
          <ProductCarouse
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Beauty Food Toys"}
            Data={BestOf.Electronics}
          />
          <ProductCarouse
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Winter Essentials"}
            Data={BestOf.Electronics}
          />
          <ProductCarouse
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Wedding & Gifting Specials"}
            Data={BestOf.Electronics}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
