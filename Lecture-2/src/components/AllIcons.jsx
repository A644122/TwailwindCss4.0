import React from "react";
import { MdAccessTime } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { RiFolderUserLine } from "react-icons/ri";
import { IoTimerSharp } from "react-icons/io5";
const AllIcons = () => {
  return (
    <>
      <span>{<IoTimerSharp />}</span>
      <span>{<RiFolderUserLine />}</span>
      <span>{<AiOutlineDollar />}</span>
      <span className=" text-3xl  text-blue-900">{<FaUserGroup />}</span>
      <span className=" text-3xl  text-blue-900">{<FaCheck />}</span>
      <span className=" className=" text-3xl text-blue-900>
        {<FaListAlt />}
      </span>
      <span className=" text-3xl  text-blue-900">{<FaXTwitter />}</span>
      <span className=" text-3xl  text-blue-900">{<MdAccessTime />}</span>
    </>
  );
};

export default AllIcons;
