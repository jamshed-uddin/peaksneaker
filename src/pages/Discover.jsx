import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import Title from "../components/Title";

const Discover = () => {
  const { allProduct } = useProduct();

  return (
    <div>
      <Title title={"Discover all"} />
      <ProductGrid products={allProduct} />
    </div>
  );
};

export default Discover;
