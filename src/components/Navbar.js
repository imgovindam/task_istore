import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Navbar = ({ data, isVisible, handleColor }) => {
  const navigate = useNavigate();
  // if (!isVisible) return null;
  return (
    <div>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/payment" ? (
        <div className="bg-blue-400 rounded border-blue-50 flex font-sans text-xl text-white justify-between items-center text-center h-[70px] cursor-pointer ">
          <div className="flex p-4 m-4 justify-between  ">
            <ul>
              <li className="text-[30px] from-neutral-100 font-semibold">
                e.COM
              </li>
            </ul>
          </div>
          <div className="flex justify-between text-center items-center w-1/4 p-2 m-2 transition-all duration-200">
            <ul className="flex justify-around w-full  ">
              <li
                className="hover:text-[30px] hover:text-blue-900"
                onClick={() => navigate("/Home")}
              >
                <span className="hover:home">
                  {" "}
                  <HomeIcon fontSize="large" />{" "}
                </span>{" "}
              </li>
              <li
                className="hover:text-[30px] hover:text-blue-900"
                onClick={() => navigate("/Carts")}
              >
                Cart
              </li>
              <li className="hover:text-[30px] hover:underline hover:text-blue-900">
                <ShoppingCartCheckoutIcon fontSize="large" /> {data.length}
              </li>

              <li
                className="hover:text-[30px] hover:text-blue-900"
                onClick={() => navigate("/")}
              >
                <ExitToAppIcon fontSize="large" />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
