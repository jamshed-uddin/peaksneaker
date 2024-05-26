import React, { useEffect, useState } from "react";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const AddProduct = () => {
  const { id: editingProductId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [productData, setProductData] = useState({
    brand: "",
    model: "",
    description: "",
    imageUrl: "",
    category: "men",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // using add product form for editing product by filling the product state with the product that need to be edited.
  useEffect(() => {
    if (editingProductId) {
      setEditMode(true);
    }

    const loadHeroProduct = async () => {
      const data = await axios.get(
        `http://localhost:3000/products/${editingProductId}`
      );
      console.log(data?.data);
      setProductData(data?.data);
    };

    loadHeroProduct();
  }, [editingProductId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const submitProduct = async (e) => {
    e.preventDefault();

    const product = {
      id: JSON.stringify(parseInt(Math.random() * 10000)),
      ...productData,
    };

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Make sure you filled all the info right",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // if the form being used for editing product;
          if (editMode && editingProductId) {
            setLoading(true);
            const updatedProduct = await axios.patch(
              `http://localhost:3000/products/${editingProductId}`,
              product
            );
            navigate(
              `/sneaker/${updatedProduct?.data?.model}/${updatedProduct?.data?.id}`
            );
            console.log(updatedProduct);
            Swal.fire({
              title: "Product updated!",
              text: "Your product has been updated.",
              icon: "success",
            });
            setLoading(false);
            return;
          } else {
            // if the form is being used for adding product;
            setLoading(true);
            const addedProduct = await axios.post(
              "http://localhost:3000/products",
              product
            );
            navigate(
              `/sneaker/${addedProduct?.data?.model}/${addedProduct?.data?.id}`
            );
            Swal.fire({
              title: "Added",
              text: "Your product has been added.",
              icon: "success",
            });
            setLoading(false);
            console.log(addedProduct);
          }
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <DashboardTitle
        title={`${
          editingProductId && editMode ? "Edit product" : "Add product"
        }`}
      />
      <div className="mt-2 lg:w-3/4">
        <form onSubmit={submitProduct} className="md:space-y-4 mt-5">
          <div className="md:flex  gap-4 ">
            <div className="w-full">
              <label htmlFor="" className="block text-lg font-semibold ">
                Model
              </label>
              <input
                type="text"
                placeholder="Product model"
                className="input input-bordered w-full  focus:outline-none"
                name="model"
                value={productData.model}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="block text-lg font-semibold ">
                Brand
              </label>
              <input
                type="text"
                placeholder="Product brand"
                className="input input-bordered w-full  focus:outline-none"
                name="brand"
                value={productData.brand}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="" className="block text-lg font-semibold ">
              Image url
            </label>
            <input
              type="text"
              placeholder="Product image url"
              className="input input-bordered w-full  focus:outline-none"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:flex  gap-4 ">
            <div className="w-full">
              <label htmlFor="" className="block text-lg font-semibold ">
                Price
              </label>
              <input
                type="number"
                placeholder="Product price"
                className="input input-bordered w-full  focus:outline-none"
                name="price"
                value={productData.price && parseInt(Number(productData.price))}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="block text-lg font-semibold ">
                Category
              </label>

              <select
                className="select select-bordered focus:outline-none w-full"
                name="category"
                id=""
                onChange={handleInputChange}
                value={productData.category}
                required
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="" className="block text-lg font-semibold ">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Product description"
              className="input input-bordered w-full  focus:outline-none max-h-40"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-end">
            <button disabled={loading} className="btn btn-sm btn-wide">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
