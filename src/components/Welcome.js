// import React from "react";
// import img from "../Images/ecommerce-3124413_1920.png";

// import { Carousel } from "@material-tailwind/react";
// const Welcome = () => {
//   return (
//     <Carousel
//       className="rounded max-w-fit"
//       slidesPerPage={1}
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       <img
//         src="https://cdn.pixabay.com/photo/2016/06/06/06/14/limited-time-offer-1438906_640.png"
//         alt="img"
//         className="h-full w-full  bg-no-repeat bg-cover  object-fill"
//       />
//       <img
//         src="https://cdn.pixabay.com/photo/2016/01/19/16/27/sale-1149344_640.jpg"
//         alt="img"
//         className="h-full w-full  bg-no-repeat bg-cover  object-cover"
//       />
//       <img
//         src="https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_640.jpg"
//         alt="img"
//         className="h-full w-full bg-no-repeat bg-cover object-cover"
//       />
//     </Carousel>
//   );
// };
// // <div>
// //   <div className="">
// //     <img
// //       className="bg-cover h-[400px] w-screen bg-no-repeat bg-center  shadow-md"
// //       src={img}
// //       alt="#External Img"
// //     ></img>
// //   </div>
// //   <div className="absolute top-20%">
// //     {/* <h1>Welcome to E-Commerce Store Products</h1> */}
// //   </div>
// // </div>
// //   );
// // };

// export default Welcome;

import React, { useState, useEffect } from "react";
import "./Welcome.css"; // Add your custom CSS here

const images = [
  "https://media.istockphoto.com/id/508417700/photo/shipping-delivery-and-logistics-technology-business.jpg?s=1024x1024&w=is&k=20&c=lBq_ugYTYnbPLmoWDpmtqhj4SSuWdphyWEJBaB11deA=",
  // "https://cdn.pixabay.com/photo/2016/06/06/06/14/limited-time-offer-1438906_640.png",
  "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg",
  "https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75",
];

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel min-w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="carousel-navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
