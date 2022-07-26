import React from "react";
import { Registrations } from "./Pages/Registration/Registration";
import { Login } from "./Pages/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const productDataStore = useSelector((state: any) => state.productData);
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Registrations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};
