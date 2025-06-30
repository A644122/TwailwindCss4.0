import React, { useContext } from "react";
import Second from "./Second";
import { myname } from "./ContextApi";
const First = () => {
  const name= useContext(myname);
  return (
    <>
      <div className=" mx-auto text-center h-[80%] text-2xl bg-pink-500 w-[70%]">
        <Second />
      </div>
    </>
  );
};

export default First;
