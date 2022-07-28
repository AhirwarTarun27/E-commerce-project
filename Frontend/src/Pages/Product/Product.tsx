import "../Header/Header.css";
import "./Product.css";
// import "../../index.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddIcon from "@mui/icons-material/Add";
import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  FormControl,
  NativeSelect,
  Typography,
} from "@mui/material";
import { Header } from "../Header/Header";
import {
  brands,
  casual,
  categories,
  colors,
  popularTags,
  price,
  size,
} from "./dragDownData";

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
        {/* Title Section */}
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
            <Accordion key={1} sx={{ width: "100%" }}>
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
                    <Accordion key={item}>
                      <AccordionSummary
                        expandIcon={<AddIcon sx={{ width: "10px" }} />}
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
                      <AccordionDetails>
                        <div className="underDropDownBox">
                          {item === "Casual" &&
                            casual.map((item) => (
                              <div className="inputBox" key={item}>
                                <input type="checkbox" />
                                <span className="checkboxText">{item}</span>
                              </div>
                            ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion key={2} sx={{ width: "100%" }}>
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
                <div className="underDropDownBox gridBox">
                  {colors.map((item) => (
                    <div className="gridItem" key={item}>
                      <span>
                        <input style={{ accentColor: item }} type="checkbox" />
                        <span className="checkboxText">{item}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion key={2} sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<AddIcon sx={{ width: "20px" }} />}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.4",
                    fontSize: "0.8rem",
                  }}
                >
                  Size
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="underDropDownBox gridBox">
                  {size.map((item) => (
                    <div className="gridItem" key={item}>
                      <span>
                        <input type="checkbox" />
                        <span className="checkboxText">{item}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion key={2} sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<AddIcon sx={{ width: "20px" }} />}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.4",
                    fontSize: "0.8rem",
                  }}
                >
                  Brands
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="underDropDownBox">
                  {brands.map((item) => (
                    <div className="inputBox" key={item}>
                      <span>
                        <input style={{ accentColor: item }} type="checkbox" />
                        <span className="checkboxText">{item}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion key={2} sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<AddIcon sx={{ width: "20px" }} />}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.4",
                    fontSize: "0.8rem",
                  }}
                >
                  Price
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="underDropDownBox">
                  {price.map((item) => (
                    <div className="inputBox" key={item}>
                      <span>
                        <input style={{ accentColor: item }} type="checkbox" />
                        <span className="checkboxText">{item}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion key={2} sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<AddIcon sx={{ width: "20px" }} />}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.4",
                    fontSize: "0.8rem",
                  }}
                >
                  Popular tags
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="underDropDownBox gridBox">
                  {popularTags.map((item) => (
                    <div className="currentSectionBtn">
                      <span>{item}</span>
                      <span>
                        <FontAwesomeIcon icon={faXmark as IconProp} />
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <div className="addImage">
              <img src={require("../../assets/images/add.webp")} alt="" />
            </div>
          </div>
          <div className="rightProductCardBox"></div>
        </div>
      </div>
    </>
  );
};
