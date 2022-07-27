import "../Header/Header.css";
import "./Product.css";
import "../../index.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlusG,
  faVimeo,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faSearch,
  faShoppingCart,
  faHeart,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box, FormControl, NativeSelect, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Header } from "../Header/Header";

export const Product: React.FC = () => {
  return (
    <>
      <Header />
      <div className="endNavSection">
        <span>Home</span>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <span>Category</span>
      </div>
      <div className="productContainer">
        <div className="titleSection">
          <span>WOMEN'S</span>
        </div>
        {/* Filter Section........ */}
        <div className="filterSection">
          <div>
            <Box sx={{ width: 120, display: "flex", alignItems: "baseline" }}>
              <label className="bold" htmlFor="view">
                VIEW
              </label>
              <FormControl className="textLink">
                <NativeSelect
                  variant="filled"
                  defaultValue={12}
                  inputProps={{
                    id: "sortBy",
                  }}
                  sx={{ width: "100px" }}
                  disableUnderline
                  className="textLink"
                  dir="rtl"
                >
                  <option className="textLink" value={12}>
                    12
                  </option>
                  <option className="textLink" value={36}>
                    36
                  </option>
                  <option className="textLink" value={100}>
                    100
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
          <div>
            <Box sx={{ width: 120, display: "flex", alignItems: "baseline" }}>
              <label className="bold" htmlFor="sortBy">
                SORT
              </label>
              <FormControl className="textLink">
                <NativeSelect
                  variant="filled"
                  defaultValue={"Featured"}
                  inputProps={{
                    id: "sortBy",
                  }}
                  sx={{ width: "110px" }}
                  disableUnderline
                  className="textLink"
                  dir="rtl"
                >
                  <option className="textLink" value={"Featured"}>
                    Featured
                  </option>
                  <option className="textLink" value={"Rating"}>
                    Rating
                  </option>
                  <option className="textLink" value={"Price"}>
                    Price
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
          <div>
            <p>35 Item(s)</p>
          </div>
        </div>
        {/* Product Section........ */}
      </div>
    </>
  );
};
