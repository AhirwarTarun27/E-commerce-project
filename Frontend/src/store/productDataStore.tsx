import { createSlice, PayloadAction, combineReducers } from "@reduxjs/toolkit";

interface PRODUCT_DATA_STORE {
  productName: string;
  discription: string;
  keyFeatures: any[];
  productPrice: string;
  productImage: any[];
  discountedPrice: string;
  size: string;
}

const initialState: PRODUCT_DATA_STORE = {
  productName: "",
  discription: "",
  keyFeatures: [],
  productPrice: "",
  productImage: [],
  discountedPrice: "",
  size: "",
};

const productDataStore = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setProductName: (state, action: PayloadAction<string>) => {
      console.log("action.payload", action.payload);
      state.productName = action.payload;
    },
    setDiscription: (state, action: PayloadAction<string>) => {
      state.discription = action.payload;
    },
    setKeyFeatures: (state, action: PayloadAction<string[]>) => {
      state.keyFeatures = [...state.keyFeatures, action.payload];
    },
    setProductPrice: (state, action: PayloadAction<string>) => {
      state.productPrice = action.payload;
    },
    setProductImage: (state, action: PayloadAction<any[]>) => {
      state.productImage = [...state.productImage, action.payload];
    },
    setDiscountedPrice: (state, action: PayloadAction<string>) => {
      state.discountedPrice = action.payload;
    },
    setSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
    updateWholeProductData: (
      state,
      action: PayloadAction<PRODUCT_DATA_STORE>
    ) => {
      state = action.payload;
    },
  },
});

export const {
  setProductName,
  setDiscription,
  setKeyFeatures,
  setProductPrice,
  setProductImage,
  setDiscountedPrice,
  setSize,
  updateWholeProductData,
} = productDataStore.actions;

combineReducers({
  setProductName,
  setDiscription,
  setKeyFeatures,
  setProductPrice,
  setProductImage,
  setDiscountedPrice,
  setSize,
});

export default productDataStore.reducer;
