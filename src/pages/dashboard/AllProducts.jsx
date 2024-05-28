import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import useProduct from "../../hooks/useProduct";
import ProductCard from "../../components/ProductCard";

const AllProducts = () => {
  const { allProduct } = useProduct();
  return (
    <div className="mt-3">
      <DashboardTitle title="All product" />

      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {allProduct?.map((sneaker) => (
            <ProductCard
              key={sneaker.id}
              product={sneaker}
              placedIn={"dashboard"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
