import "../Header/Header.css";
import "./Product.css";
// import "../../index.css";
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
import AddIcon from "@mui/icons-material/Add";
import {
  faUser,
  faSearch,
  faShoppingCart,
  faHeart,
  faXmark,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  FormControl,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Header } from "../Header/Header";
import { categories } from "./dragDownData";

export const Product: React.FC = () => {
  const arr = ["Men", "Women", "Accessories"];

  const dropdown = (array: any[]) => {
    return array.map((item: any, index: number) => (
      <AccordionDetails key={index}>
        <Typography>{item}</Typography>
      </AccordionDetails>
    ));
  };

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
        <div className="productSection">
          <div className="leftDropdownBox">
            <div className="blackText currentSection">Current section</div>
            <div className="flex">
              <div className="currentSectionBtn">
                <span>GREY</span>
                <span>
                  <FontAwesomeIcon icon={faXmark as IconProp} />
                </span>
              </div>
              <div className="currentSectionBtn">
                <span>MEN</span>
                <span>
                  <FontAwesomeIcon icon={faXmark as IconProp} />
                </span>
              </div>
              <div className="currentSectionBtn">
                <span>ABOVE $200</span>
                <span>
                  <FontAwesomeIcon icon={faXmark as IconProp} />
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="currentSectionBtn bg-grey">
                <span>CLEAR ALL</span>
                <span>
                  <FontAwesomeIcon icon={faXmark as IconProp} />
                </span>
              </div>
              <div>Selected 6 items</div>
            </div>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<AddIcon sx={{ width: "20px" }} />}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.4",
                    fontSize: "0.8rem",
                  }}
                >
                  Categories
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {categories.map((item) => (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={
                          <AddIcon sx={{ width: "10px" }} key={item} />
                        }
                      >
                        <Typography
                          sx={{
                            fontWeight: "700",
                            lineHeight: ".1px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </AccordionSummary>
                    </Accordion>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<AddIcon sx={{ width: "20px" }} />}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.4",
                    fontSize: "0.8rem",
                  }}
                >
                  Colors
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {categories.map((item) => (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={
                          <AddIcon sx={{ width: "10px" }} key={item} />
                        }
                      >
                        <Typography
                          sx={{
                            fontWeight: "700",
                            lineHeight: ".1px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </AccordionSummary>
                    </Accordion>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="rightProductCardBox"></div>
        </div>
      </div>
    </>
  );
};
