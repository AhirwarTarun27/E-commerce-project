import React from "react";
import { Registrations } from "./Pages/Registration/Registration";
import { Login } from "./Pages/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";

export const App: React.FC = () => {
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
