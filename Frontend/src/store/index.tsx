const { configureStore } = require("@reduxjs/toolkit");
const { default: productDataStore } = require("./productDataStore");

export const store = configureStore({
  reducer: productDataStore,
});
