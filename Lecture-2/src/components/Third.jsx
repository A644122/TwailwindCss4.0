import React from "react";
import Fourth from "./Fourth";
import { myname3, myname4 } from "./ContextApi";
const Third = () => {
  return (
    <>
      third
      <div className=" mx-auto text-center h-[80%] text-2xl bg-green-500 w-[70%]">
        <Fourth />
        <div className=" p-5 text-3xl">
          <h1 className="p-5 ">{myname3}</h1>
          <h2 className="p-5 ">{myname4}</h2>
        </div>
      </div>
    </>
  );
};

export default Third;
