// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdExit } from "react-icons/io";
// import { FaHome } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
// // import timestamp from "time-stamp";

// const Navbar = ({ data, isVisible, handleColor }) => {
//   const navigate = useNavigate();
//   // if (!isVisible) return null;
//   return (
//     <div>
//       {window.location.pathname !== "/" &&
//       window.location.pathname !== "/payment" ? (
//         <div className="bg-blue-400 rounded border-blue-50 flex font-sans text-xl text-white justify-between items-center text-center h-[70px] cursor-pointer ">
//           <div className="flex p-4 m-4 justify-between  ">
//             <ul>
//               <li className="text-[30px] from-neutral-100 font-semibold">
//                 iStock
//               </li>
//             </ul>
//           </div>
//           <div className="flex justify-between text-center items-center w-1/4 p-2 m-2 transition-all duration-200">
//             <ul className="flex justify-around w-full  ">
//               <li
//                 className="hover:text-[30px] hover:text-blue-900"
//                 onClick={() => navigate("/Home")}
//               >
//                 <span className="hover:home">
//                   {" "}
//                   <FaHome fontSize="large" />{" "}
//                 </span>{" "}
//               </li>
//               <li
//                 className="hover:text-[30px] hover:text-blue-900"
//                 onClick={() => navigate("/Carts")}
//               >
//                 Cart
//               </li>
//               <li className="hover:text-[30px] hover:underline hover:text-blue-900">
//                 <FaShoppingCart fontSize="large" /> {data.length}
//               </li>

//               <li
//                 className="hover:text-[30px] hover:text-blue-900"
//                 onClick={() => navigate("/")}
//               >
//                 <IoMdExit fontSize="large" />
//               </li>
//             </ul>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ data, isVisible, handleColor }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const windowSize = window.innerWidth > 720;

  return (
    <div>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/payment" ? (
        <div className="bg-purple-700 rounded  flex font-sans text-xl text-white justify-between items-center text-center h-[70px] cursor-pointer ">
          <div className="flex p-4 m-4 justify-between">
            <ul>
              <li className="text-[30px] font-semibold">iStock</li>
            </ul>
          </div>
          {windowSize && (
            <div className="flex items-center justify-center w-1/4 p-2 m-2">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="p-2 text-black rounded-lg border border-gray-300"
              />
            </div>
          )}

          <div className="flex md:justify-between justify-evenly  text-center items-center w-1/2 md:w-1/4 p-2 m-2 transition-all duration-200">
            <ul className="flex justify-around w-full">
              <li
                className="hover:text-[30px] hover:text-blue-900"
                onClick={() => navigate("/Home")}
              >
                <span className="hover:home">
                  <FaHome fontSize="large" />
                </span>
              </li>
              <li
                className="hover:text-[30px] hover:text-blue-900"
                onClick={() => navigate("/Carts")}
              >
                Cart
              </li>
              <li className="hover:text-[30px] hover:underline flex text-center hover:text-blue-900">
                <FaShoppingCart fontSize="large" /> {data.length}
              </li>
              <li
                className="hover:text-[30px] hover:text-blue-900"
                onClick={() => navigate("/")}
              >
                <IoMdExit fontSize="large" />
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
