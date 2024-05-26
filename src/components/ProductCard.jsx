/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useProduct from "../hooks/useProduct";

const ProductCard = ({ product, placedIn }) => {
  const productModel = product.model.split(" ").join("-");
  const { setAllProduct } = useProduct();

  const handleProductDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/products/${product.id}`);
        setAllProduct((prev) =>
          prev.filter((prevProduct) => prevProduct.id !== product.id)
        );

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="h-54 relative ">
      {placedIn === "dashboard" && (
        <div className="absolute top-0 right-0 pr-2 z-30">
          <div className="flex gap-3">
            <Link to={`/dashboard/editproduct/${product.id}`} replace="true">
              <span className="cursor-pointer">Edit</span>
            </Link>
            <span onClick={handleProductDelete} className="cursor-pointer">
              Delete
            </span>
          </div>
        </div>
      )}
      <Link to={`/sneaker/${productModel}/${product.id}`}>
        <div className="h-[90%] w-full">
          <img
            className="h-full w-full object-cover"
            src={product?.imageUrl}
            alt={`Image of ${product?.brand} ${product?.model}`}
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between mt-1 px-1">
          <h1 className="text-xl font-semibold">{product?.model}</h1>
          <h1 className="text-xl">
            <span className="text-sm">$</span>
            {product?.price}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
