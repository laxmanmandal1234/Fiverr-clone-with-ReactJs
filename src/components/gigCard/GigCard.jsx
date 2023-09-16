import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ gig }) => {
  let username = gig.username;
  username = username?.replace(/\s/g, "");
  const link = `/gig/${username}`;

  return (
    <Link to={link} className="link">
      <div className="gigCard">
        <img src={gig.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={gig.pp} alt="" />
            <span>{gig.username}</span>
          </div>
          <p>{gig.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{gig.star}</span>
          </div>
        </div>

        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {gig.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
