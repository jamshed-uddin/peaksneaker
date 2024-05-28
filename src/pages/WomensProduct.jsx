import useProduct from "../hooks/useProduct";
import ProductGrid from "../components/ProductGrid";
import Title from "../components/Title";

const WomensProduct = () => {
  const { womensProduct } = useProduct();

  return (
    <div>
      <Title title={"Women's sneaker"} />
      <ProductGrid products={womensProduct} />
    </div>
  );
};

export default WomensProduct;
