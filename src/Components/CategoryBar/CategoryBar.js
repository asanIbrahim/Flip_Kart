import React from "react";
import './CategoryBar.css'

const CategoryBar = ({ imgsrc, CategoryName }) => {
  return (
    <div className="CategoryBar">
      <div className="categoryBar-Img">
        <img src={imgsrc} alt="CategoryImg" />
      </div>
      <p className="categoryBar-name">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;
