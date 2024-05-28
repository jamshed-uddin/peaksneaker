import React from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import Title from "../components/Title";

const MensProduct = () => {
  const { mensProduct } = useProduct();

  return (
    <div>
      <Title title={"Men's sneaker"} />
      <ProductGrid products={mensProduct} />
    </div>
  );
};

export default MensProduct;
