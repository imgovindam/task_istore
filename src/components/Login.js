import React from "react";

// import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[100vh] justify-center text-center items-center flex  bg-zinc-200">
      <div className="flex flex-col h-96 rounded-xl  bg-white w-80 m-2 p-2  justify-center items-center">
        <div className="p-2 m-2 bg-blue-400 h-12 w-full rounded-xl">
          <span className="font-mono text-white text-lg decoration-slate-950">
            Welcome to e{" "}
          </span>
          .<span className="font-bold text-white font-sans">COM</span>
        </div>
        <input
          className="px-2 w-full py-2 m-2 bg-zinc-200 rounded-lg outline-none text-left"
          type="number"
          placeholder="Mobile or email"
        />
        <input
          className="px-2 py-2 m-2 w-full bg-zinc-200 rounded-lg outline-none text-left"
          type="password"
          placeholder="password/OTP"
        />
        {/* <Switch /> Remembere me */}
        <button
          className="bg-blue-400 w-full hover:text-blue-500 hover:bg-blue-200 text-white px-2 py-2 m-2 rounded-lg font-sans font-semibold"
          onClick={() => navigate("/Home")}
        >
          Sign in
        </button>
        <div className="p-2 m-2 mx-2 font-sans">
          Don't have account ?{" "}
          <span className="font-sans font-semibold cursor-pointer ">
            Sign up
          </span>
        </div>
      </div>
      <div></div>

      {/* <Card className="w-80  m-12 bg-zinc-100 p-2">
        <CardHeader
          variant="gradient"
          color="gray"
          className=" grid h-28  place-items-center rounded-lg bg-blue-400"
        >
          <Typography
            variant="h3"
            className="text-[24px]   font-sans font-semibold"
          >
            Sign in
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col mt-4 gap-4 ">
          <Input
            className="px-2 py-2 rounded-lg outline-none bg-slate-200"
            placeholder="Mobile number"
            type="number"
            // size="lg"
          />
          <Input
            className="px-2 py-2 rounded-lg outline-none bg-slate-200"
            placeholder="Password"
            // type="number"
          />
          <div className="px-2 py-2">
            <Switch color="default" />
            <span className="font-sans font-medium text-sm">Remember me</span>
          </div>
        </CardBody>
        <CardFooter className=" pt-1">
          <button
            className="p-3  bg-blue-400 w-full text-sm hover:bg-blue-100"
            onClick={() => navigate("/Home")}
          >
            SIGN IN
          </button>
          <Typography variant="large" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card> */}
    </div>
  );
};

export default Login;
