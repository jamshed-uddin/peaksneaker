import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="md:flex justify-between items-center mt-7">
      <div className="md:w-1/2 shrink-0 p-5 rounded-3xl">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/369449/27/sv01/fnd/PNA/fmt/png/RS-X-Toys-Men's-Sneakers"
          alt=""
        />
      </div>
      <div className="md:w-1/2 shrink-0">
        <h1 className="text-2xl font-medium">
          Discover the art of{" "}
          <span className="font-extrabold">Sneaker perfection</span> at{" "}
          <span className="font-extrabold">Peak Sneakers</span>
        </h1>
        <h2 className="text-xl font-light mt-2">
          At Peak Sneakers we understand that a great pair of sneaker is more
          than just footwear.It's a lifestyle.Our diverse range of sneakers is
          to meet the needs of every customer.Our selection includes the most
          sought after brands and exclusive drops, ensuring you always stay
          ahead of the trends.Come explore our collection and find your perfect
          pair today.
        </h2>
        <Link to={"/discover"}>
          <span className="underline  text-lg">Shop now</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
