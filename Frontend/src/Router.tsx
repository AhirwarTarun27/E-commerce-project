import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/LoginPage/Login";
import { Product } from "./Pages/Product/Product";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { ProductDiscription } from "./Pages/ProductDiscription/ProductDiscription";
import { Registrations } from "./Pages/Registration/Registration";

export const Router: React.FC = () => {
  const productDiscription = useSelector((state: any) => state.discription);
  console.log("productDiscription:", productDiscription);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registrations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/" element={<Product />} />
        <Route path="/product-discription" element={<ProductDiscription />} />
      </Routes>
    </BrowserRouter>
  );
};
