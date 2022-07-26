import "./ProductDetails.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setProductImage,
  setProductName,
  setDiscountedPrice,
  setDiscription,
  setKeyFeatures,
  setProductPrice,
  setSize,
  updateWholeProductData,
} from "../../store/productDataStore";

// import {setProductData } from "../../store/index"

import {
  Grid,
  Box,
  FormControl,
  TextField,
  Button,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface PRODUCT_FORM_DATA {
  productName: string;
  discription: string;
  keyFeatures: any[];
  productPrice: string;
  productImage: any[];
  discountedPrice: string;
  size: string;
}

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const productDataStore = useSelector((state: any) => state);
  const [productFormData, setProductFormData] = useState<PRODUCT_FORM_DATA>({
    productName: "",
    discription: "",
    keyFeatures: [],
    productPrice: "",
    productImage: [],
    discountedPrice: "",
    size: "",
  });

  //state hook setting up the form using use state
  const [singleKeyFeature, setSingleKeyFeature] = useState("");
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [productImage, setProductImage] = useState<any[]>([]);

  // state for enabling the display of the image preview
  const handleFileUpload = (event: any) => {
    const files = Array.from(event.target.files);

    setProductImage([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setProductImage((prevState: any) => [...prevState, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
    console.log("files", files);
  };

  //on change event for the form
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProductFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // on form submit
  const onFieldSubmit = (event: any) => {
    event.preventDefault();

    console.log("keyFeaturessdfsdfdfsdf", keyFeatures);
    setProductFormData((prevState: any) => ({
      ...prevState,
      keyFeatures: [...prevState.keyFeatures, keyFeatures],
      productImage: [...prevState.productImage, productImage],
    }));
    console.log("productFormData......", productFormData);
    dispatch(setProductName(productFormData.productName));
    dispatch(setDiscription(productFormData.discription));
    dispatch(setProductPrice(productFormData.productPrice));
    dispatch(setDiscountedPrice(productFormData.discountedPrice));
    dispatch(setSize(productFormData.size));
    console.log("productDataStore", productDataStore);
  };

  useEffect(() => {
    console.log("productDataStore", productDataStore);
    console.log("productFormData..........", productFormData);
  });

  // on key feature change
  const keyFeatureSubmit = () => {
    setKeyFeatures([...keyFeatures, singleKeyFeature]);
    setSingleKeyFeature("");
    console.log("keyFeatures:", keyFeatures);
  };

  // discount rate change
  const discountRate = (price: any, disPrice: any) => {
    if (price !== undefined && disPrice !== undefined) {
      if (disPrice > price) {
        alert("Discounted Price cannot be greater than Product Price");
        return 0;
      }
      const value = ((price - disPrice) / price) * 100;
      return value;
    }
  };

  const closeImg = (e: any) => {
    e.preventDefault();
    e.target.parentElement.remove();
  };

  return (
    <div className="flexBox">
      <Box className="leftProductBox"></Box>
      <form onSubmit={onFieldSubmit} autoComplete="off">
        <Box className="productFormBox">
          <h1>Product Details</h1>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            className="positionRelative productForm"
          >
            <Grid item>
              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="product-name"
                  onChange={handleChange}
                  name="productName"
                  value={productFormData.productName}
                  placeholder="Product Name..."
                  label="Product Name"
                  variant="standard"
                />
              </FormControl>
              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="Description"
                  name="discription"
                  placeholder="Product Description..."
                  label="Product Description"
                  onChange={handleChange}
                  value={productFormData.discription}
                  autoComplete="on"
                  variant="standard"
                />
              </FormControl>
              <Grid item className="spaceBtw">
                <FormControl variant="outlined" className="mb-1">
                  <TextField
                    id="keyFeatures"
                    name="KeyFeatures"
                    value={singleKeyFeature || ""}
                    onChange={(e) =>
                      setSingleKeyFeature(String(e.target.value))
                    }
                    placeholder="add product key features..."
                    label="Key Features"
                    autoComplete="on"
                    variant="standard"
                  />
                </FormControl>
                <div className="keyFeatureBtn">
                  <Button
                    onClick={() => keyFeatureSubmit()}
                    variant="contained"
                    size="small"
                  >
                    Add
                  </Button>
                </div>
              </Grid>
              <Grid>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 100,
                    "& ul": {
                      borderBlockEnd: "1px solid #d9d9d9",
                      margin: 0,
                      padding: 0,
                      color: "text.primary",
                    },
                    backgroundColor: "background.paper",
                  }}
                  subheader={<li />}
                >
                  {keyFeatures.map((keyFeature: string, num: number) => {
                    return (
                      <li key={num}>
                        <ul>
                          <ListItem>
                            <ListItemText primary={keyFeature} />
                          </ListItem>
                        </ul>
                      </li>
                    );
                  })}
                </List>
              </Grid>

              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="price"
                  name="productPrice"
                  autoComplete="off"
                  type="number"
                  onChange={handleChange}
                  value={productFormData.productPrice}
                  placeholder="Product Price..."
                  label="MRP"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">₹</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="discountedPrice"
                  name="discountedPrice"
                  autoComplete="off"
                  type={"number"}
                  onChange={handleChange}
                  value={productFormData.discountedPrice}
                  placeholder="Discounted Price..."
                  label="Discounted Price"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">₹</InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </FormControl>
              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="discount"
                  name="discount"
                  autoComplete="off"
                  type={"number"}
                  value={
                    discountRate(
                      Number(productFormData.productPrice),
                      Number(productFormData.discountedPrice)
                    ) || 0
                  }
                  placeholder="Discount..."
                  label="Discount"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </FormControl>
              <FormControl variant="standard" className="formControl mb-1">
                <InputLabel id="demo-simple-select-standard-label">
                  Sizes
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Sizes"
                  name="size"
                  onChange={handleChange}
                  value={productFormData.size}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"X-Small"}>X-Small</MenuItem>
                  <MenuItem value={"Small"}>Small</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Large"}>Large</MenuItem>
                  <MenuItem value={"X-Large"}>X-Large</MenuItem>
                  <MenuItem value={"XX-Large"}>XX-Large</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="fileUpload"
                  name="FileUpload"
                  type={"file"}
                  label="Upload Image"
                  variant="standard"
                  inputProps={{
                    multiple: true,
                  }}
                  onChange={handleFileUpload}
                />
              </FormControl>
              <Box>
                {productImage.map((image: any, index: number) => {
                  return (
                    <div key={index} className="productImageCard">
                      <img
                        src={image}
                        alt="crashed"
                        className="productImageCard"
                      />
                      <span onClick={closeImg} className="close">
                        &times;
                      </span>
                    </div>
                  );
                })}
              </Box>
            </Grid>
            <div className="registrationBtn">
              <input
                type="submit"
                className="registrationFormBtn"
                value="Submit"
              />
            </div>
          </Grid>
        </Box>
      </form>
    </div>
  );
};
