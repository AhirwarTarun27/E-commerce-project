import "./ProductDetails.css";

import { useState } from "react";

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
  ProductName: string;
  Description: string;
  KeyFeatures: any[];
  ProductPrice: string;
  ProductImage: string;
  DiscountedPrice: string;
  Size: string;
  FileUpload: string;
}

export const ProductDetails = () => {
  // const [productFormData, setProductFormData] = useState<PRODUCT_FORM_DATA>({
  //   ProductName: "",
  //   Description: "",
  //   KeyFeatures: [],
  //   ProductPrice: "",
  //   ProductImage: "",
  //   DiscountedPrice: "",
  //   Size: "",
  //   FileUpload: "",
  // });

  //state hook setting up the form using use state
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [singleKeyFeature, setSingleKeyFeature] = useState("");
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [productPrice, setProductPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [size, setSize] = useState("");
  const [productImage, setProductImage] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  // state for enabling the display of the image preview

  const handleSizeChange = (event: any) => {
    setSize(event.target.value);
  };

  const handleFileUpload = (event: any) => {
    const files = Array.from(event.target.files);

    setPreviewImage([]);
    setProductImage([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setPreviewImage((prevState: any) => [...prevState, reader.result]);
          setProductImage((prevState: any) => [...prevState, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
    console.log("files", files);
  };

  // on form submit
  const onFieldSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData();

    if (
      formData.get("ProductName") !== "" &&
      formData.get("Description") !== "" &&
      formData.get("KeyFeatures") !== "" &&
      formData.get("ProductPrice") !== "" &&
      formData.get("ProductImage") !== "" &&
      formData.get("DiscountedPrice") !== "" &&
      formData.get("Size") !== "" &&
      formData.get("FileUpload") !== ""
    ) {
      formData.set("ProductName", productName);
      formData.set("Description", description);
      formData.set("KeyFeatures", JSON.stringify(keyFeatures));
      formData.set("ProductPrice", JSON.stringify(productPrice));
      formData.set("DiscountedPrice", JSON.stringify(discountedPrice));
      formData.set("Size", JSON.stringify(size));

      productImage.forEach((image: any) => {
        formData.append("ProductImage", image);
      });

      for (const [key, value] of formData) {
        console.log(`${key} = ${value}`);
      }
      alert("Form Submitted");
    } else {
      alert("Please fill all the fields");
    }
  };

  const keyFeatureSubmit = () => {
    setKeyFeatures([...keyFeatures, singleKeyFeature]);
    setSingleKeyFeature("");
  };

  const discountRate = (price: any, disPrice: any) => {
    if (price != undefined && disPrice != undefined) {
      if (disPrice > price) {
        alert("Discounted Price cannot be greater than Product Price");
        return 0;
      }
      const value = 100 - ((price - disPrice) / price) * 100;
      return value;
    }
  };

  // const previewChange = () => {
  //   setActive(true);
  // };

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
                  onChange={(e) => setProductName(String(e.target.value))}
                  name="ProductName"
                  value={productName || ""}
                  placeholder="Product Name..."
                  label="Product Name"
                  variant="standard"
                />
              </FormControl>
              <FormControl variant="outlined" className="formControl mb-1">
                <TextField
                  id="Description"
                  name="Description"
                  value={description || ""}
                  placeholder="Product Description..."
                  label="Product Description"
                  onChange={(e) => setDescription(String(e.target.value))}
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
                  name="ProductPrice"
                  value={productPrice || 0}
                  autoComplete="off"
                  type="number"
                  onChange={(e) => setProductPrice(Number(e.target.value))}
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
                  name="DiscountedPrice"
                  value={discountedPrice || 0}
                  autoComplete="off"
                  type={"number"}
                  onChange={(e) => {
                    setDiscountedPrice(Number(e.target.value));
                  }}
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
                  name="Discount"
                  autoComplete="off"
                  type={"number"}
                  value={discountRate(productPrice, discountedPrice) || 0}
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
                  value={size || ""}
                  label="Sizes"
                  name="Size"
                  onChange={handleSizeChange}
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
                      <img src={image} className="productImageCard" />
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
