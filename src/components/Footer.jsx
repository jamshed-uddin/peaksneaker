import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-8 mx-2  w-full">
      <div className="w-full mb-2">
        <div className="border-t-2 w-3/4 lg:w-1/2 mx-auto"></div>
      </div>
      <div className="md:flex justify-between space-y-8">
        <div>
          <h1 className="text-lg lg:text-2xl font-medium text-center md:text-start">
            Peak Sneakers
          </h1>
          <div className="flex gap-4 justify-evenly">
            <span>f</span>
            <span>insta</span>
            <span>tw</span>
          </div>
        </div>

        <div className=" mx-auto text-center md:text-start">
          <label htmlFor="" className=" leading-3 font-semibold block mb-2">
            Be the first to know
            <span className="block text-sm font-normal">
              About new products , discounts and more!
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter you email"
            className="input input-bordered input-sm w-full max-w-xs focus:outline-none"
            name="email"
          />
          <button className="btn btn-sm mt-2 btn-wide">Subscribe</button>
        </div>
        <div>
          <ul>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Women</Link>
            </li>
            <li>
              <Link>Discover</Link>
            </li>
            <li>Terms & conditon</li>
            <li>Privacy & policy</li>
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-center font-thin text-sm">
          @2024 Peak Sneaker.All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
