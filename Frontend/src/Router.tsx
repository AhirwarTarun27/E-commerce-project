import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Pages/Header/Header";
import { Login } from "./Pages/LoginPage/Login";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { Registrations } from "./Pages/Registration/Registration";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registrations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};
