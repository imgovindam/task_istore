// import React, { useEffect, useState } from "react";

// import Welcome from "./Welcome";
// import Cards from "./Cards";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addMasterData } from "../redux/dataSlice";
// import { searchPhotos } from "./unsplashApi"; // Adjust the path if necessary

// // import { dummyData } from "./dummyData";

// const Master = ({ setData, data }) => {
//   //useDispatch is used to dispatchthe dat from REACT TO REDUX.
//   const dispatch = useDispatch();
//   //useSelector is used to send data from REDUX TO REACT  .......
//   const selectedData = useSelector((state) => {
//     return state.myStore.data;
//   });
//   const addTask = (i) => {
//     setData([...data, i]);
//   };

//   // const [fetchData, setFetchedData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await searchPhotos("nature"); // You can change the query parameter as needed
//         dispatch(addMasterData(data.results));

//         console.log(response);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get("https://fakestoreapi.com/products");
//   //       dispatch(addMasterData(response.data));

//   //       console.log(response);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);
//   console.log(selectedData);
//   return (
//     <div className="flex flex-col h-[100vh] w-full box-border m-0 p-0">
//       <div className=""></div>
//       <div>
//         <Welcome />
//       </div>
//       <div className="grid grid-cols-12 bg-zinc-200 lg:grid-cols-3 gap-4 mx-2 px-4">
//         {selectedData?.map((i) => {
//           return (
//             <>
//               <div key={i.id}>
//                 <Cards i={i} addTask={addTask} />
//               </div>
//             </>
//           );
//         })}
//         {/* {fetchData ? ( */}
//         {/* fetchData.map((i) => {
//           return(
//             <div key={i.id}>
//               <Cards i={i} addTask={addTask} />
//             </div>
//           )}) */}
//         {/* // ) : ( */}
//         {/* <p>Loading data...</p>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default Master;

import React, { useEffect } from "react";
import Welcome from "./Welcome";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { addMasterData } from "../redux/dataSlice";
import { searchPhotos } from "./unsplashApi"; // Adjust the path if necessary
import Description from "./Description";

const Master = ({ setData, data }) => {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.myStore.data);

  const addTask = (i) => {
    setData([...data, i]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchPhotos("nature"); // You can change the query parameter as needed
        dispatch(addMasterData(response.data.results));
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(selectedData);

  return (
    <div className="flex flex-col h-[100vh] w-full box-border m-0 p-0">
      <div className=""></div>
      <div>
        <Welcome />
      </div>
      <div
        style={{
          background: `
          radial-gradient(
            184.42% 184.42% at 51.11% 0%,
            #141414 25.2%,
            #162664 36.82%,
            #253EA7 44.36%,
            #375DF8 50.6%,
            #C2D6FF 59.81%
          ),
          #C2D6FF
        `,
        }}
        className="grid grid-cols-12 gap-4 mx-2 px-4"
      >
        {selectedData.map((i) => (
          <div className="col-span-12 md:col-span-4" key={i.id}>
            <Cards i={i} addTask={addTask} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Master;
