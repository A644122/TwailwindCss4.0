import React, { useContext } from "react";
import { myname } from "./ContextApi";
const Fourth = () => {
  
  return (
    <>
      fourth
      <div className=" mx-auto text-center h-[80%] text-2xl bg-zinc-600 w-[70%]">
        <h1>my name is :{myname} </h1>
      </div>
    </>
  );
};

export default Fourth;
