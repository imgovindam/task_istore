import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  const { product } = location.state;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="grid bg-purple-200 md:h-[100vh]  grid-cols-12">
        <div className="col-span-1 mx-4" onClick={handleNavigate}>
          <button className="px-2 py-2 bg-purple-400 text-white font-sans my-2">
            back
          </button>
        </div>
        <div className="col-span-12 mx-4 md:col-span-5">
          <img
            className="h-[70vh] w-full  py-4 "
            src={product.urls.full}
            alt="img"
          />
        </div>
        <div className="col-span-12 mx-4  md:col-span-5 ">
          <div className="h-[70vh] w-full py-4 capitalize">
            <div className="flex">
              <span className="mx-2 font-sans font-bold text-[20px]">
                Description:
              </span>
              <h3 className="font-sans font-bold text-[20px]">
                {product.description}
              </h3>
            </div>
            <div className="flex">
              <span className="mx-2 font-sans font-semibold">Description:</span>
              {product.alt_description}
            </div>
            <div className="flex">
              <span className="mx-2 font-sans font-semibold">Price:</span>
              Rs.{product.likes}
            </div>
            {/* <div className="flex">
            <span className="mx-2 font-sans font-semibold">Price:</span>
            {product.}
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
