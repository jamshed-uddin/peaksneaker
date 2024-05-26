import React from "react";
import Title from "../Title";
import useProduct from "../../hooks/useProduct";
import ProductCard from "../ProductCard";
import ProductGrid from "../ProductGrid";

const NewReleases = () => {
  const { newReleases } = useProduct();
  console.log(newReleases);
  return (
    <div>
      <Title title={"New releases"} />
      <ProductGrid products={newReleases} />
    </div>
  );
};

export default NewReleases;
