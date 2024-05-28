import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";
import axios from "axios";
import ProductGrid from "../components/ProductGrid";
import Title from "../components/Title";
const Brands = () => {
  const { brands } = useProduct();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [productOfBrand, setProductOfBrand] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get(
        `http://localhost:3000/products?brand=${selectedBrand}`
      );

      setProductOfBrand(result?.data);
    };

    loadData();
  }, [selectedBrand]);
  return (
    <div>
      <Title title={"Brands"} />
      <div className="flex flex-wrap gap-3 my-3">
        <div
          onClick={() => setSelectedBrand("")}
          className={`border-[1.2px] border-gray-500 rounded-2xl px-4 py-1 cursor-pointer ${
            selectedBrand === "" ? "bg-gray-200" : ""
          }`}
        >
          All
        </div>
        {brands?.map((brand, index) => (
          <div
            onClick={() => setSelectedBrand(brand)}
            className={`border-[1.2px] border-gray-500 rounded-2xl px-4 py-1 cursor-pointer ${
              selectedBrand === brand ? "bg-gray-200" : ""
            }`}
            key={index}
          >
            {brand}
          </div>
        ))}
      </div>

      <div className="">
        <ProductGrid products={productOfBrand} />
      </div>
    </div>
  );
};

export default Brands;
