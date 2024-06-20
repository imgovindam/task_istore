// import React, { useState } from "react";
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Carts = ({ data, removeData }) => {
//   // let arr = [1, 2, 3];
//   const totalAmount = () => {
//     let sum = 0;
//     for (let i = 0; i <= data.length - 1; i++) {
//       sum += data[i].likes;
//     }
//     return sum;
//   };
//   let a = Math.round(totalAmount());
//   console.log(totalAmount());
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="mt-4 p-8 my-8 ">
//         <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mx-2 px-4 ">
//           {data.map((i, index) => {
//             return (
//               <div key={i.id} className="flex h-full">
//                 <div className="p-2 m-2 text-center items-center border-black bg-slate-200  flex w-full">
//                   <img className="w-[200px]" src={i.urls.full} alt="product" />
//                   <span className="h-[40px] w-full leading-3 font-sans font-semibold text-[18px]">
//                     {i.description}
//                   </span>
//                   <span className="flex">₹: {i.likes}</span>
//                   <span className="p-2 m-2">
//                     <button
//                       className="p-2 m-2 border bg-gray-200 rounded-l-md"
//                       onClick={() => removeData(index)}
//                     >
//                       <MdDelete />
//                     </button>
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="bg-blue-400 rounded-md text-white text-[20px] w-1/5 float-right h-14 items-center justify-center flex font-sans font-semibold">
//             {" "}
//             {data == 0
//               ? "Your Cart is empty"
//               : `Total amount: Rs. ${Math.round(totalAmount())}`}
//             {/* {totalAmount()} */}
//           </div>
//           <div className="flex">
//             <button
//               className="px-2 py-2 justify-center w-1/5 rounded-lg text-white font-sans font-semibold bg-blue-400"
//               onClick={() => navigate("/Payment")}
//             >
//               {" "}
//               check out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carts;

import React from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Carts = ({ data, removeData }) => {
  const totalAmount = () => {
    let sum = 0;
    for (let i = 0; i <= data.length - 1; i++) {
      sum += data[i].likes;
    }
    return sum;
  };

  const navigate = useNavigate();

  return (
    <div>
      {/* <div className="mt-4 p-8 bg-yellow-500 my-8"> */}
      <div className="grid grid-cols-1  lg:grid-cols-1 gap-4 mx-2 px-4">
        {data.map((i, index) => (
          <div key={i.id} className="flex  h-full">
            <div className="p-2 m-2 text-center items-center border-black bg-slate-200 flex md:flex-row flex-col w-full">
              <img className="w-[200px]" src={i.urls.full} alt="product" />
              <span className="h-[40px] w-full md:my-0 my-3 leading-3 font-sans font-semibold text-[18px]">
                {i.description}
              </span>
              <span className="flex">₹: {i.likes}</span>
              <span className="p-2 m-2">
                <button
                  className="p-2 m-2 border bg-gray-200 rounded-l-md"
                  onClick={() => removeData(index)}
                >
                  <MdDelete />
                </button>
              </span>
            </div>
          </div>
        ))}

        <div className="flex flex-col justify-center items-center h-100">
          <div className="bg-purple-400 p-4  rounded-md text-white text-[18px]  h-14 items-center justify-center flex font-sans font-semibold">
            {data.length === 0
              ? "Your Cart is empty"
              : `Total amount: Rs. ${Math.round(totalAmount())}`}
          </div>
          <div className="my-2">
            <button
              className="px-2 py-2 justify-center  rounded-lg text-white font-sans font-semibold bg-purple-400"
              onClick={() => navigate("/payment")}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Carts;
