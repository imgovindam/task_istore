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

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carts from "./components/Carts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "./redux/dataSlice";
import Login from "./components/Login";

function App() {
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
      <div className="App">
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
