import React, { useState } from "react";
import Title from "../Title";
import ProductGrid from "../ProductGrid";
import useProduct from "../../hooks/useProduct";

const Trending = () => {
  const { trending } = useProduct();
  return (
    <div>
      <Title title={"Trending"} />
      <ProductGrid products={trending} />
    </div>
  );
};

export default Trending;
