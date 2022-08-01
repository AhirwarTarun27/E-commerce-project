import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faApplePay,
  faCcVisa,
  faFacebookF,
  faGooglePay,
  faGooglePlusG,
  faPinterestP,
  faTwitter,
  faVimeoV,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faCoins,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="upperFooterContent">
        <div className="productContainer flex ">
          <div className="footerFeatureSection">
            <div>
              <FontAwesomeIcon icon={faCartShopping as IconProp} />
            </div>
            <div>
              <h4>Extra fast delivery</h4>
              <p>
                Your order will be delivered 3-5 business days after all of your
                items are available
              </p>
            </div>
          </div>
          <div className="footerFeatureSection">
            <div>
              <FontAwesomeIcon icon={faCoins as IconProp} />
            </div>
            <div>
              <h4>Best price</h4>
              <p>
                We'll match the product prices of key online and local
                competitors for immediately
              </p>
            </div>
          </div>
          <div className="footerFeatureSection">
            <div>
              <FontAwesomeIcon icon={faDoorClosed as IconProp} />
            </div>
            <div>
              <h4>Guarantee</h4>
              <p>
                If the item you want is available, we can process a return and
                place a new order
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerFooterContent">
        <div className="productContainer flex">
          <div className="firstFooter">
            <img
              className="foxicLogo pT0"
              src={require("../../assets/images/logo.webp")}
              alt="logo"
            />
            <span className="flex">
              Email: <p className="blackText">Foxshop@gmail.com</p>
            </span>
            <p className="mt10">Hours: 10:00 - 18:00, Mon - Fri</p>
            <div className="flex footerFontBox">
              <FontAwesomeIcon
                className="smallIcon blackText "
                icon={faFacebookF as IconProp}
              />
              <FontAwesomeIcon
                className="smallIcon blackText "
                icon={faTwitter as IconProp}
              />
              <FontAwesomeIcon
                className="smallIcon blackText "
                icon={faGooglePlusG as IconProp}
              />
              <FontAwesomeIcon
                className="smallIcon blackText "
                icon={faVimeoV as IconProp}
              />
              <FontAwesomeIcon
                className="smallIcon blackText "
                icon={faYoutube as IconProp}
              />
              <FontAwesomeIcon
                className="smallIcon blackText "
                icon={faPinterestP as IconProp}
              />
            </div>
          </div>
          <div className="secondFooter">
            <h4>Information</h4>
            <p className="blackText lightText">About us</p>
            <p className="blackText lightText">Contact us</p>
            <p className="blackText lightText">Terms & conditions</p>
            <p className="blackText lightText">Returns & Exchanges</p>
            <p className="blackText lightText">Shipping & Delivery</p>
          </div>
          <div className="secondFooter">
            <h4>Information</h4>
            <p className="blackText lightText">About us</p>
            <p className="blackText lightText">Contact us</p>
            <p className="blackText lightText">Terms & conditions</p>
            <p className="blackText lightText">Returns & Exchanges</p>
            <p className="blackText lightText">Shipping & Delivery</p>
          </div>
          <div className="thirdFooter">
            <h4>Safe payments</h4>
            <div>
              <FontAwesomeIcon
                className="largeIcon blackText "
                icon={faGooglePay as IconProp}
              />
              <FontAwesomeIcon
                className="largeIcon blackText "
                icon={faCcVisa as IconProp}
              />
              <FontAwesomeIcon
                className="largeIcon blackText "
                icon={faApplePay as IconProp}
              />
            </div>
            <div className="dottedBorder">
              <img src={require("../../assets/images/logo.webp")} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
