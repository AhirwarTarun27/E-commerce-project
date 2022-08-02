import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PRODUCT_DISCRIPTION {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const initialState = {} as PRODUCT_DISCRIPTION;

export const productDiscription = createSlice({
  name: "productDiscription",
  initialState,
  reducers: {
    setProductDiscription: (
      state,
      action: PayloadAction<PRODUCT_DISCRIPTION>
    ) => {
      console.log("action.payload", action.payload);
      state = action.payload;
    },
  },
});

export const { setProductDiscription } = productDiscription.actions;
export default productDiscription.reducer;
