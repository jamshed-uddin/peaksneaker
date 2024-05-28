import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Discover from "./pages/Discover.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import ProductDataProvider from "./providers/ProductDataProvider.jsx";
import MensProduct from "./pages/MensProduct.jsx";
import WomensProduct from "./pages/WomensProduct.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import UserProfile from "./pages/dashboard/UserProfile.jsx";
import AllProducts from "./pages/dashboard/AllProducts.jsx";
import AddProduct from "./pages/dashboard/AddProduct.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Releases from "./pages/Releases.jsx";
import Brands from "./pages/Brands.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "men",
        element: <MensProduct />,
      },
      {
        path: "women",
        element: <WomensProduct />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "releases",
        element: <Releases />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "sneaker/:model/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "allproduct",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "editproduct/:id",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductDataProvider>
        <RouterProvider router={router} />
      </ProductDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
