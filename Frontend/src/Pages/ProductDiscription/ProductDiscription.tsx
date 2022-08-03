import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faBox,
  faCheck,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Star } from "../Product/Star";
import "./ProductDiscription.css";
import "../../index.css";

export const ProductDiscription = () => {
  // const productDiscription = useSelector((state: any) => state.discription);
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  //discount price by 20%
  const productData = JSON.parse(localStorage.getItem("product") || "{}");
  const withDiscountPrice = (productData.price * 120) / 100;
  const savedAmount = withDiscountPrice - productData.price;

  return (
    <div>
      <Header />
      <div className="endNavSection">
        <span>Home</span>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <span>Women</span>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <span className="hoverColor">{productData.category}</span>
      </div>
      <div className="productDiscriptionContainer">
        <div className="firstDesSection flex">
          <div>
            <span className="flex">
              <Star rating={productData.rating.rate} />{" "}
              <p className="fs9 hoverColor">
                ({productData.rating.count} reviews)
              </p>
            </span>
            <div className="ml6">
              <h3 style={{ color: "#282828" }}>{productData.title}</h3>
            </div>
          </div>
          <div>
            <img src={productData.image} alt="" />
            <img src={productData.image} alt="" />
            <img src={productData.image} alt="" />
          </div>
        </div>
        <div className="secondDesSection">
          <div className="leftDesSection">
            <div className="leftDesImage">
              <img src={productData.image} alt="" />
            </div>
            <div className="leftDesDownImage">
              <img src={productData.image} alt="" />
            </div>
          </div>
          <div className="rightDesSection">
            <div className="rightDesTop">
              <div className="flex desPriceBox">
                <div className="desProductPrice">${productData.price}</div>
                <div>
                  <p className="lineThrough">${withDiscountPrice.toFixed(2)}</p>
                  <p className="pinkText">
                    You Save: ${savedAmount.toFixed(2)}(20%)
                  </p>
                </div>
              </div>
              <div className="flex">
                <i>
                  <FontAwesomeIcon icon={faClockFour as IconProp} />
                </i>
                <p>This product was viewed 13 times within last hour</p>
              </div>
            </div>
            <div className="sortDesBox">
              <p className="bold mb-1">Short Description</p>
              <p>{productData.description}</p>
              <div className="twoColumnGrid">
                <div className="flex width20">
                  <FontAwesomeIcon icon={faCheck as IconProp} />{" "}
                  <p>100% Polyester</p>
                </div>
                <div className="flex width20">
                  <FontAwesomeIcon icon={faCheck as IconProp} />{" "}
                  <p>100% Polyester</p>
                </div>
                <div className="flex width20">
                  <FontAwesomeIcon icon={faCheck as IconProp} />{" "}
                  <p>100% Polyester</p>
                </div>
                <div className="flex width20">
                  <FontAwesomeIcon icon={faCheck as IconProp} />{" "}
                  <p>100% Polyester</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="bold">
                  Hurry Up! Left <span className="primaryColor">34</span> in
                  stock
                </p>
                <div className="boldUnderline"></div>
                <div className="flex timerBox">
                  <i className="font1rem">
                    <FontAwesomeIcon icon={faBox as IconProp} />
                  </i>{" "}
                  <p>
                    Order in the next{" "}
                    <span className="bold">05 : 19 : {timer}</span> to get it by
                    Tuesday, September 08, 2020
                  </p>
                </div>
              </div>
            </div>
            <div className="twoColumnGrid">
              <p>
                Availability: <span className="bold">In Stock</span>
              </p>
              <p>
                Availability: <span className="bold">In Stock</span>
              </p>
              <p>
                Availability: <span className="bold">In Stock</span>
              </p>
              <p>
                Availability: <span className="bold">In Stock</span>
              </p>
              <p>
                Availability: <span className="bold">In Stock</span>
              </p>
              <p>
                Availability: <span className="bold">In Stock</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
