import React from "react";
import useProduct from "../hooks/useProduct";
import Title from "../components/Title";
import ProductGrid from "../components/ProductGrid";

const Releases = () => {
  const { newReleases } = useProduct();
  return (
    <div>
      <Title title={"New releases"} />
      <ProductGrid products={newReleases} />
    </div>
  );
};

export default Releases;
