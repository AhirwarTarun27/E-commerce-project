import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlusG,
  faVimeo,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box, FormControl, NativeSelect } from "@mui/material";
import { useState } from "react";
import { sidebarData } from "./sidebarData";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <div className="container">
      <div className="centerContainer">
        <div className="iconBox">
          <FontAwesomeIcon icon={faFacebook as IconProp} className="icon" />
          <FontAwesomeIcon icon={faTwitter as IconProp} className="icon" />
          <FontAwesomeIcon icon={faGooglePlusG as IconProp} className="icon" />
          <FontAwesomeIcon icon={faInstagram as IconProp} className="icon" />
          <FontAwesomeIcon icon={faVimeo as IconProp} className="icon" />
          <FontAwesomeIcon icon={faLinkedin as IconProp} className="icon" />
        </div>
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">
                {" "}
                Use promocode FOXIC to get 15% discount!
              </li>
              <li className="content__container__list__item">
                {" "}
                Free plane shipping over $250
              </li>
              <li className="content__container__list__item">
                {" "}
                Today only! Post holiday Flash Sale! 2 for $20
              </li>
            </ul>
          </div>
        </div>
        <div className="dropDownSection">
          <Box sx={{ width: 120 }}>
            <FormControl className="textColor">
              <NativeSelect
                variant="standard"
                defaultValue={"English"}
                inputProps={{
                  id: "uncontrolled-native",
                }}
                className="textColor"
              >
                <option className="textColor" value={"English"}>
                  English
                </option>
                <option className="textColor" value={"Spanish"}>
                  Spanish
                </option>
                <option className="textColor" value={"German"}>
                  German
                </option>
                <option className="textColor" value={"French"}>
                  French
                </option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box sx={{ width: 120 }}>
            <FormControl className="textColor">
              <NativeSelect
                variant="standard"
                defaultValue={"Us dollars"}
                inputProps={{
                  id: "uncontrolled-native",
                }}
                className="textColor"
              >
                <option className="textColor" value={"Us dollars"}>
                  Us dollars
                </option>
                <option className="textColor" value={"Euro"}>
                  Euro
                </option>
                <option className="textColor" value={"Uk pounds"}>
                  Uk pounds
                </option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box sx={{ width: 120 }}>
            <span className="textColor accountBtn">
              <FontAwesomeIcon icon={faUser as IconProp} />
              &nbsp;&nbsp; Account
            </span>
          </Box>
        </div>
      </div>
      <Box
        className={sideBar ? "nav-menu active" : "nav-menu"}
        sx={{ width: "30%" }}
      >
        <span onClick={showSideBar}>close</span>
        <ul>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link className="textLink" to={item.link}>
                  <span>{item.title}</span>
                  &nbsp;&nbsp;
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </Box>
    </div>
  );
};
