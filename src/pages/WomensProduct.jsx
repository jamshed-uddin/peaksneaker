import React from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

const WomensProduct = () => {
  const { womensProduct } = useProduct();

  return (
    <div>
      <h1 className="text-2xl ">Women&apos;s sneaker</h1>
      <ProductGrid products={womensProduct} />
    </div>
  );
};

export default WomensProduct;
