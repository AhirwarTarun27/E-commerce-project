import { productDiscription } from "./discriptionStore";
import productPageStore from "./productPageStore";

const { configureStore } = require("@reduxjs/toolkit");
const { default: productDataStore } = require("./productDataStore");

export const store = configureStore({
  reducer: {
    productData: productDataStore,
    productPage: productPageStore,
    discription: productDiscription,
  },
});
