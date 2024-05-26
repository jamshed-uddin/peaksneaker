/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext(null);

const ProductDataProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [mensProduct, setMensProduct] = useState([]);
  const [womensProduct, setWomensProduct] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const loadHeroProduct = async () => {
      const data = await axios.get("http://localhost:3000/products");
      console.log(data?.data);
      setAllProduct(data?.data?.reverse());

      const mensProduct = data?.data.filter(
        (sneaker) => sneaker.category === "men"
      );
      const womensProduct = data?.data.filter(
        (sneaker) => sneaker.category === "women"
      );
      const releases = data?.data.filter(
        (product) =>
          product.brand.toLowerCase() === "adidas" ||
          product.brand.toLowerCase() === "nike" ||
          product.brand.toLowerCase() === "new balance"
      );
      const trends = data?.data.filter(
        (product) =>
          product.brand.toLowerCase() === "adidas" ||
          product.brand.toLowerCase() === "puma" ||
          product.brand.toLowerCase() === "asics"
      );

      setMensProduct(mensProduct);
      setWomensProduct(womensProduct);
      setNewReleases(releases);
      setTrending(trends);
    };

    loadHeroProduct();
  }, []);

  const productData = {
    allProduct,
    setAllProduct,
    mensProduct,
    womensProduct,
    newReleases,
    trending,
  };

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductDataProvider;
