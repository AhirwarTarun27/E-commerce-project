import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PRODUCT_STORE {
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

interface PRODUCTS_STORE extends Array<PRODUCT_STORE> {}

const initialState: PRODUCTS_STORE = [];

const productPageStore = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<PRODUCT_STORE>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.push(action.payload);
      }
    },
    sortByRate: (state) => {
      state.sort((a, b) => {
        return b.rating.rate - a.rating.rate;
      });
    },
    sortByPrice: (state) => {
      state.sort((a, b) => {
        return b.price - a.price;
      });
    },
    sortByMenCategory: (state) => {
      state = state.filter((product) => product.category === "men's category");
    },
  },
});

export const { setProductData, sortByPrice, sortByRate, sortByMenCategory } =
  productPageStore.actions;

export default productPageStore.reducer;
