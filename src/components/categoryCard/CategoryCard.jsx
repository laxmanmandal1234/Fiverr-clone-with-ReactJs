import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

function CategoryCard({ card }) {
  return (
    <Link to="/gigs?category=design">
      <div className="categoryCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
