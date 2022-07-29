import { product_card } from "./ProductData";
import "./ProductCard.css";
import "../../index.css";
import "../../App.css";
import "../Header/Header.css";
import PropTypes from "prop-types";
import { Star } from "./Star";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const ProductCard: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = (e: any) => {
    // console.log("e", e);
    // <button>ADD TO CART</button>;
    setIsHover(true);
  };
  return (
    <>
      {product_card.map((product) => {
        return (
          <div className="card">
            <div className="noOverlayCard" key={product.id}>
              <div className="cardImg">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="starRating">
                <Star rating={product.rating.rate} />
              </div>
              <div>
                <p className="grayColor cardTitle mb-1">{product.title}</p>
              </div>

              <p className="grayColor productPrice font1rem">
                $ {product.price}
              </p>
            </div>
            <div className="overlayBox">
              <div className="upperOverlay">
                <div className="leftCard">
                  <img className="circleImage" src={product.image} alt="" />
                  <img className="circleImage" src={product.image} alt="" />
                </div>
                <div className="rightCard">
                  <span>
                    <FontAwesomeIcon icon={faHeart as IconProp} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faEye as IconProp} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCircleDot as IconProp} />
                  </span>
                </div>
              </div>
              <div className="lowerOverlay">
                <button className="addToCartBtn">ADD TO CART</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
