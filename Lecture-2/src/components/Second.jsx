import React from "react";
import Third from "./Third";
import { myname, myname1 } from "./ContextApi";
const Second = () => {
  return (
    <>
      <div>Second</div>

      <div className=" mx-auto  h-[80%] text-2xl bg-blue-600 w-[70%]">
        <Third />
        <h3 className=" text-3xl text-center ">{myname}</h3>
        <h2 className=" text-3xl text-center ">{myname1}</h2>
      </div>
    </>
  );
};

export default Second;
