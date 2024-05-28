import React from "react";
import useProduct from "../../hooks/useProduct";
import Title from "../Title";
import ProductGrid from "../ProductGrid";

const WeRecommend = () => {
  const { WeRecommend } = useProduct();
  return (
    <div>
      <Title title={"We recommend"} />
      <ProductGrid products={WeRecommend} />
    </div>
  );
};

export default WeRecommend;
