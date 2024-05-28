import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroProduct, setHeroProduct] = useState();

  useEffect(() => {
    const loadHeroProduct = async () => {
      const data = await axios.get("http://localhost:3000/products/1");

      setHeroProduct(data?.data);
    };

    loadHeroProduct();
  }, []);

  return (
    <div className="md:h-[calc(100vh-4rem)] w-full ">
      <div className="md:flex h-full ">
        {/* image */}
        <div className="md:w-1/2 relative">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover"
              src={heroProduct?.imageUrl}
              alt={`Image of ${heroProduct?.brand} ${heroProduct?.model}`}
              loading="lazy"
            />
          </div>
          <div className="absolute md:bottom-5 bottom-3 left-0 ">
            <h1 className="text-3xl mb-4 ml-4 flex items-center gap-2">
              <Link to={`/sneaker/${heroProduct?.model}/${heroProduct?.id}`}>
                <span> {heroProduct?.model}</span>
              </Link>
            </h1>
          </div>
        </div>

        {/* text */}
        <div className="flex items-end md:w-1/2">
          <div className=" md:mb-10">
            <h1 className="text-[5.5rem] leading-[5rem] lg:text-9xl  lg:font-semibold">
              Peak <br /> Sneakers
            </h1>
            <Link to={"/discover"}>
              <span className="transition-all duration-500 ml-2 text-xl hover:tracking-wider">
                Discover more
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
