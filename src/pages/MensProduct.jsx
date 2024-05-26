import React from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

const MensProduct = () => {
  const { mensProduct } = useProduct();
  console.log(mensProduct);
  return (
    <div>
      <h1 className="text-2xl ">Men&apos;s sneaker</h1>
      <ProductGrid products={mensProduct} />
    </div>
  );
};

export default MensProduct;
