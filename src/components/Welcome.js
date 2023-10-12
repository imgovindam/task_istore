import React from "react";
import img from "../Images/ecommerce-3124413_1920.png";

import { Carousel } from "@material-tailwind/react";
const Welcome = () => {
  return (
    <Carousel
      className="rounded"
      slidesPerPage={1}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://cdn.pixabay.com/photo/2016/06/06/06/14/limited-time-offer-1438906_640.png"
        alt="img"
        className="h-full w-full  bg-no-repeat bg-cover  object-cover"
      />
      <img
        src="https://cdn.pixabay.com/photo/2016/01/19/16/27/sale-1149344_640.jpg"
        alt="img"
        className="h-full w-full  bg-no-repeat bg-cover  object-cover"
      />
      <img
        src="https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_640.jpg"
        alt="img"
        className="h-full w-full bg-no-repeat bg-cover object-cover"
      />
    </Carousel>
  );
};
// <div>
//   <div className="">
//     <img
//       className="bg-cover h-[400px] w-screen bg-no-repeat bg-center  shadow-md"
//       src={img}
//       alt="#External Img"
//     ></img>
//   </div>
//   <div className="absolute top-20%">
//     {/* <h1>Welcome to E-Commerce Store Products</h1> */}
//   </div>
// </div>
//   );
// };

export default Welcome;
