import { useSelector } from "react-redux";

export const ProductDiscription = () => {
  const productDiscription = useSelector((state: any) => state.discription);
  console.log("productDiscription:", productDiscription);
  return (
    <div>
      <h1>ProductDiscription</h1>
      <p>{productDiscription}</p>
    </div>
  );
};
