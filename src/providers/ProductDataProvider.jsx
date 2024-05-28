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
  const [WeRecommend, setWeRecommend] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const loadHeroProduct = async () => {
      const data = await axios.get("http://localhost:3000/products");

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

      const recommends = data?.data.filter(
        (product) =>
          product.brand.toLowerCase() === "nike" ||
          product.brand.toLowerCase() === "under armour"
      );

      const allBrands = data?.data.map((product) => product.brand);

      setBrands(allBrands);

      setMensProduct(mensProduct);
      setWomensProduct(womensProduct);
      setNewReleases(releases);
      setTrending(trends);
      setWeRecommend(recommends);
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
    WeRecommend,
    brands,
  };

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductDataProvider;
