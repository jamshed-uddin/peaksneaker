import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroProduct, setHeroProduct] = useState();

  useEffect(() => {
    const loadHeroProduct = async () => {
      const data = await axios.get("http://localhost:3000/products/1");
      console.log(data?.data);
      setHeroProduct(data?.data);
    };

    loadHeroProduct();
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] w-full ">
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
          <div className="absolute bottom-0 left-0 ">
            <h1 className="text-3xl mb-4 ml-4 flex items-center gap-2">
              <span> {heroProduct?.model}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h1>
          </div>
        </div>

        {/* text */}
        <div className="flex items-end md:w-1/2">
          <div className="mb-5">
            <h1 className="text-8xl lg:text-9xl font-semibold">
              Peak <br /> Sneaker
            </h1>
            <Link to={"/discover"}>
              <span className="transition-all duration-500 ml-2 text-lg hover:tracking-wider">
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
