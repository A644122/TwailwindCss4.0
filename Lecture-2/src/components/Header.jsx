import React from "react";
import { IoMenu } from "react-icons/io5";
import Herosection from "./Herosection";
const Header = () => {
  return (
    <>
      <header className=" bg-black text-white">
        <div className=" p-4 text-3xl">{<IoMenu />}</div>
        <nav>
          <ul className=" flex ">
            <li className=" p-4">
              {" "}
              <a href="#">Home</a>
            </li>
            <li className=" p-4">
              {" "}
              <a href="#">About</a>
            </li>
            <li className=" p-4">
              {" "}
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Herosection />
    </>
  );
};

export default Header;
