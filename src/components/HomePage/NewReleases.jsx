import Title from "../Title";
import useProduct from "../../hooks/useProduct";

import ProductGrid from "../ProductGrid";
import { Link } from "react-router-dom";

const NewReleases = () => {
  const { newReleases } = useProduct();

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title={"New releases"} />
        <Link to={"/releases"}>
          {" "}
          <span className="underline">See all</span>
        </Link>
      </div>
      <ProductGrid products={newReleases} />
    </div>
  );
};

export default NewReleases;
