import React from "react";
import Master from "./Master";

const Home = ({ data, setData }) => {
  return (
    <div>
      <Master data={data} setData={setData} />
    </div>
  );
};

export default Home;
