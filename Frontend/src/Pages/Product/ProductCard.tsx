import "./ProductCard.css";
import "../../index.css";
import "../../App.css";
import "../Header/Header.css";
import { Star } from "./Star";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const ProductCard: any = ({
  products,
  productsShown,
}: {
  products: any;
  productsShown: any;
}) => {
  console.log("productsCard:", products);
  const itemShown = useMemo(() => {
    return products.slice(0, productsShown).map((product: any) => {
      return (
        <div key={product.id} className="card">
          <div className="noOverlayCard" key={product.id}>
            <div key={product.image} className="cardImg">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="starRating">
              <Star rating={product.rating.rate} />
            </div>
            <div>
              <p className="grayColor cardTitle mb-1">{product.title}</p>
            </div>

            <p className="grayColor productPrice font1rem">$ {product.price}</p>
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
    });
  }, [products, productsShown]);

  return <>{itemShown.length ? itemShown : "Loading..."}</>;
};
