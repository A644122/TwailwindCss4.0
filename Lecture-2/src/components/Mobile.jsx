import React from "react";
import { MdAccessTime } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";

const Mobile = () => {
  return (
    <>
      <div>Mobile</div>
      <h1 className=" text-4xl p-10 m-10">{<MdAccessTime />}</h1>
      <h1 className=" text-4xl p-10 m-10">{<FaCheck />}</h1>
      <h1 className=" text-4xl p-10 m-10">{<FaListAlt />}</h1>
      <h1 className=" text-4xl p-10 m-10">{<FaXTwitter />}</h1>

    </>
  );
};

export default Mobile;
