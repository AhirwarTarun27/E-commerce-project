import "../Header/Header.css";
import "./Product.css";
// import "../../index.css";
import { product_card } from "./ProductData";
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
// import { userService } from "../../services";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductData,
  sortByMenCategory,
  sortByPrice,
  sortByRate,
} from "../../store/productPageStore";

export const Product: React.FC = () => {
  const dispatch = useDispatch();

  // dispatching the product data to the store
  for (let i = 0; i < product_card.length; i++) {
    dispatch(setProductData(product_card[i]));
  }

  const productData: any = useSelector((state: any) => state.productPage);

  const showedProducts = 6;
  const [productsShown, setProductsShown] = useState(showedProducts);
  const [remainingCount, setRemainingCount] = useState(
    productData.length - showedProducts
  );
  const [isHide, setIsHide] = useState(false);

  const [isHover, setIsHover] = useState(false);

  //filtering functionality
  const handleChange = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    if (value === "Rating") {
      dispatch(sortByRate());
    } else if (value === "Price") {
      dispatch(sortByPrice());
    }
  };

  const showMore = () => {
    if (productsShown + 6 <= productData.length) {
      setRemainingCount(remainingCount - showedProducts);
      setProductsShown(productsShown + showedProducts);
    } else {
      setProductsShown(productData.length);
    }
  };

  //for hiding the LODE MORE button
  useEffect(() => {
    if (productsShown >= productData.length) {
      setIsHide(true);
    }
  }, [productsShown, productData.length, productData]);

  const handleMouseOver = (e: any) => {
    setIsHover(true);
  };
  const handleMouseOut = (e: any) => {
    setIsHover(false);
  };

  const handleManData = (e: any) => {
    e.preventDefault();
    // const filterData = productData.filter((product: any) => {
    //   return product.category === "men's clothing";
    // });
    // console.log("filterData:", filterData);
    // for (let i = 0; i < filterData.length; i++) {
    //   dispatch(setProductData(filterData[i]));
    // }
    dispatch(sortByMenCategory());
    console.log("productData", productData);
  };

  // const getData = async (params: string) => {
  //   const response = await userService.productData(params);
  //   console.log("response:", response);
  // };
  // getData("men's clothing");
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
                  onChange={handleChange}
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
            <p>{product_card.length} Item(s)</p>
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
                                <input
                                  onChange={handleManData}
                                  type="checkbox"
                                />
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
            <Accordion key={3} sx={{ width: "100%" }}>
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
            <Accordion key={4} sx={{ width: "100%" }}>
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
            <Accordion key={5} sx={{ width: "100%" }}>
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
            <Accordion key={6} sx={{ width: "100%" }}>
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
                    <div key={item} className="currentSectionBtn">
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
          <div className="rightProductCardBox">
            <ProductCard productsShown={productsShown} />
            <div
              className={isHide ? "showMoreBtn hide" : "showMoreBtn"}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isHover ? (
                <div onClick={showMore} className="pagination-container">
                  {`${remainingCount} out of ${product_card.length}`}
                </div>
              ) : (
                <div onClick={showMore} className="pagination-container">
                  LOAD MORE
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
