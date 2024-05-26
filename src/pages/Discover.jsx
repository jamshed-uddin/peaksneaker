import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

const Discover = () => {
  const { allProduct } = useProduct();

  return (
    <div>
      <h1 className="text-2xl ">Discover all</h1>
      <ProductGrid products={allProduct} />
    </div>
  );
};

export default Discover;
