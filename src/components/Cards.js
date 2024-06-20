// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// // import { useDispatch } from "react-redux";
// // import { addName } from "../redux/dataSlice";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// const Cards = ({ i, addTask }) => {
//   // const dispatch = useDispatch();

//   // const handleclick = (i) => {
//   // dispatch(addName("govind"));
//   // addTask(i);
//   // };
//   // const notify = () => toast("Item added to the cart");

//   return (
//     <div className="m-2 p-2  h-full flex">
//       <div className="border-2 px-2 py-2 ">
//         <Card className="w-96">
//           <CardHeader shadow={false} floated={false} className="h-96 ">
//             <img
//               alt="cards screen"
//               src={i.image}
//               className="h-full rounded-full w-full bg-no-repeat bg-cover object-cover"
//             />
//           </CardHeader>
//           <CardBody>
//             <div className="mb-2 h-20 p-4 bg-blue-100 flex items-center justify-between">
//               <Typography color="blue-gray" className="font-medium">
//                 {i.title}
//               </Typography>
//               <Typography color="blue-gray" className=" flex font-extrabold ">
//                 ₹: {i.price}
//               </Typography>
//             </div>
//             <Typography
//               variant="small"
//               color="gray"
//               className="font-normal opacity-75"
//             ></Typography>
//           </CardBody>
//           <CardFooter className="pt-0">
//             <Button
//               ripple={false}
//               fullWidth={true}
//               className="bg-blue-400 px-2 py-2 mr-2  rounded-lg text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//               onClick={() => addTask(i)}
//               // onClick={() => handleclick(i)}
//               // onClick={()=>dispatch()}
//             >
//               {/* <div>
//                 <button onClick={notify}>Notify!</button>
//                 <ToastContainer />
//               </div> */}
//               Add to Cart
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addName } from "../redux/dataSlice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Card } from "antd";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import "./Cards.css";

const { Meta } = Card;
const Cards = ({ i, addTask }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(`/description/${i.id}`, { state: { product: i } });
  };

  // const dispatch = useDispatch();

  // const handleclick = (i) => {
  // dispatch(addName("govind"));
  // addTask(i);
  // };
  // const notify = () => toast("Item added to the cart");

  return (
    <div className="md:p-2 md:ml-20  ml-10   grid grid-cols-12 ">
      {/* <div className="border-2  px-2 py-2 bg-gray-400   sec "> */}
      {/* <div className="col-span-4">
        <div className="">
          <div className="flex justify-center items-center">
            <img
              alt="cards screen"
              // src={i.image}
              src={i.urls.full}
              className="imageAdjust"
            />
          </div>
        </div>
      </div> */}
      <div className="md:my-0 my-10" whileHover={{ scale: 1.1 }}>
        <Card
          hoverable
          style={{
            width: 240,
            height: 440,
          }}
          cover={
            <img
              onClick={navigateToPage}
              alt="example"
              src={i.urls.full}
              className="imageAdjust"
            />
          }
        >
          <Meta
            className="flex flex-col"
            title={i.description}
            description={i.alt_description}
          />
          <div>price:Rs.{i.likes}</div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-2 my-2 bg-purple-400 rounded-md py-1 flex items-center justify-center
           "
          >
            <button onClick={() => addTask(i)}>
              <span className="font-sans font-semibold">Add to cart</span>
            </button>
          </motion.div>
        </Card>

        <div />
      </div>
    </div>
  );
};

export default Cards;
