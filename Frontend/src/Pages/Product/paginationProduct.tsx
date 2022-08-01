import { useState } from "react";

export const PaginationProduct: any = ({
  productsPerPage,
  product_card,
  spreadProduct,
  remainingProducts,
  currentProducts,
}: {
  productsPerPage: number;
  product_card: any;
  spreadProduct: any;
  remainingProducts: number;
  currentProducts: any[];
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const pageNumbers: any = [];
  for (let i = 1; i <= Math.ceil(product_card.length / productsPerPage); i++) {
    pageNumbers.push(currentProducts);
  }

  const handleMouseOver = (e: any) => {
    setIsHovering(true);
  };
  const handleMouseOut = (e: any) => {
    setIsHovering(false);
  };

  const spreadProductCard = () => {
    console.log("hi");
    console.log("productNumbers", pageNumbers);
  };

  return (
    // <nav>
    //   <ul className="pagination">
    //     {pageNumbers.map((number) => (
    //       <li key={number} className="page-item">
    //         <a onClick={() => paginate(number)} className="page-link" href="">
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="pagination"
    >
      {isHovering ? (
        <div onClick={() => spreadProductCard} className="pagination-container">
          {`${remainingProducts} out of ${product_card.length}`}
        </div>
      ) : (
        <div onClick={() => spreadProductCard} className="pagination-container">
          LOAD MORE
        </div>
      )}
    </div>
  );
};
