import nike from "../../assets/Nike-Logo-700x394.png";
import adidas from "../../assets/Adidas-Logo-700x394.png";
import puma from "../../assets/Puma-Logo-700x394.png";
import newBalance from "../../assets/New-Balance-Logo-700x394.png";
import asics from "../../assets/Asics-Logo-700x394.png";
import jordan from "../../assets/Air-Jordan-Logo-700x394.png";
import Title from "../Title";
import { Link } from "react-router-dom";

const brandsLogo = [nike, adidas, puma, newBalance, asics, jordan];

const PopularBrands = () => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <Title title={"Popular brands"} />
        <Link to={"/brands"} preventScrollReset={true}>
          <span className="underline">See all</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-x-5 gap-y-9 md:gap-y-12 place-items-center my-9">
        {brandsLogo?.map((logo, index) => (
          <div key={index} className="md:w-48 md:h-28">
            <img
              className="w-full h-full object-cover"
              src={logo}
              alt={"Brand logo"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
