import React, { useContext } from "react";
import { ProductContext } from "../providers/ProductDataProvider";

const useProduct = () => {
  const productContext = useContext(ProductContext);
  return productContext;
};

export default useProduct;
