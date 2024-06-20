// import { useState } from "react";
// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Carts from "./components/Carts";
// import Home from "./components/Home";

// import Navbar from "./components/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { addName } from "./redux/dataSlice";
// import Login from "./components/Login";

// function App() {
//   // const location = useLocation();
//   // console.log(location.pathname);
//   const selectedData = useSelector((state) => {
//     return state.myStore.names;
//   });
//   // const dispatch=useDispatch()
//   const [data, setData] = useState([]);
//   // console.log(selectedData)
//   //Remove item from Carts
//   const removeData = (index) => {
//     const removeItem = data.filter((e, idx) => {
//       // dispatch(addName("Govind"))
//       return idx !== index;
//     });
//     setData(removeItem);

//     // console.log(removeItem);
//   };
//   //&&******* line-12
//   return (
//     <>
//       <div className="App">
//         <BrowserRouter>
//           {/* <Login /> */}
//           <Navbar data={data} />
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/" element={<Home data={data} setData={setData} />} />
//             <Route
//               path="/Home"
//               element={<Home data={data} setData={setData} />}
//             />
//             <Route
//               path="/Carts"
//               element={<Carts data={data} removeData={removeData} />}
//             />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carts from "./components/Carts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "./redux/dataSlice";
import Login from "./components/Login";
import Description from "./components/Description";
import Payment from "./components/Payment";

function App() {
  // ************for loading of pages
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data from an API)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    // Clear the timeout to avoid setting state after component unmounts
    return () => clearTimeout(delay);
  }, []); // The empty dependency array ensures this effect runs once on mount

  // ********
  const selectedData = useSelector((state) => {
    return state.myStore.names;
  });

  const [data, setData] = useState([]);

  const removeData = (index) => {
    const removeItem = data.filter((e, idx) => {
      return idx !== index;
    });
    setData(removeItem);
  };
  // console.log(window.location.pathname);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="App ">
          <BrowserRouter>
            <Navbar data={data} />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/Home"
                element={<Home data={data} setData={setData} />}
              />
              <Route
                path="/Carts"
                element={<Carts data={data} removeData={removeData} />}
              />
              <Route path="/description/:id" element={<Description />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
