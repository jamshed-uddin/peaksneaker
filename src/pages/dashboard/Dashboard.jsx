import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, userLogout } = useAuth();
  const navigate = useNavigate();

  const handleUserLogout = async () => {
    await userLogout();
    navigate("/");
  };

  return (
    <div className="md:flex  m-2 md:m-0 max-h-screen overflow-y-auto">
      <div
        className={`bg-gray-200 shrink-0 w-fit pl-8 pr-5  h-screen  absolute  top-0 bottom-0 transition-all duration-500 ${
          menuOpen ? "left-0" : "-left-56"
        } md:sticky left-0 top-0 bottom-0 `}
      >
        <div className=" mb-2  flex flex-col   h-full ">
          <div className="text-end text-xl md:hidden font-bold ">
            <button onClick={() => setMenuOpen(false)}>X</button>
          </div>
          <ul className="text-xl  font-semibold  pt-3 md:pt-10 flex-grow space-y-2 ">
            <li>
              <Link to={"/dashboard/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/dashboard/allproduct"}>All products</Link>
            </li>
            <li>
              <Link to={"/dashboard/addproduct"}>Add product</Link>
            </li>
          </ul>

          <ul className="text-xl  font-semibold space-y-2 mb-6 ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer" onClick={handleUserLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>

      {/* outlet */}
      <div className="flex-grow px-3">
        <div className=" flex gap-5 ">
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            Menu
          </button>{" "}
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </div>
        <div className="mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
