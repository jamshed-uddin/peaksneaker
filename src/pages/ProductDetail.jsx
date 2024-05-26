import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ProductDetail = () => {
  const { id, model } = useParams();
  const [product, setProduct] = useState(null);
  const [productLoading, setProductLoading] = useState(false);

  console.log(id, model);
  console.log(product);
  useEffect(() => {
    const loadHeroProduct = async () => {
      setProductLoading(true);
      const data = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(data?.data);
      setProduct(data?.data);
      setProductLoading(false);
    };

    loadHeroProduct();
  }, [id]);

  return (
    <div className=" h-[calc(100vh-6rem)] mt-3">
      <div className="md:flex items-center h-full gap-5">
        {/* image */}
        <div className="md:w-1/2 overflow-hidden  h-full">
          <div className="h-full w-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={product?.imageUrl}
              alt={`Image of ${product?.brand} ${product?.model}`}
              loading="lazy"
            />
          </div>
        </div>

        {/* product details*/}
        <div className=" md:w-1/2">
          <div>
            <h1 className="text-4xl font-semibold mb-3">{product?.model}</h1>
            <h3 className="text-xl ">Brand: {product?.brand}</h3>
            <h3 className="text-xl  font-light">{product?.description}</h3>
            <h3 className="text-2xl  mt-3">
              <span className="text-sm">$</span>
              {product?.price}
            </h3>
          </div>
          <div className="mt-2 flex gap-3 flex-col md:flex-row">
            <button className="btn btn-sm btn-wide text-lg">Add to cart</button>

            <button className="btn btn-sm btn-wide text-lg">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
