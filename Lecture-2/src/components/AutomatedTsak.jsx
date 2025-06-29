import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { LuBook } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
const AutomatedTsak = () => {
  return (
    <>
      <section className=" bg-black h-screen  text-white">
        <div className="  container mx-auto bg-amber-800  flex justify-around  items-center  relative top-1/5 max-w-5xl  ">
          <div className=" grad  size-100 shadow-amber-300  shadow-inner flex m-20  ">
            <div>
              All Task <span className=" m-5">Waiting for approval</span>
              <div className=" flex    gap-10 m-5">
                <h4 className=" mt-5">{<AiOutlineDollar />}</h4>
                <div className=" flex gap-20">
                  <h3>
                    <span className=" font-bold">Payroll Management </span>
                    <br /> due on 2nd july
                  </h3>
                  <h4 className=" m-5 text-2xl text-blue-700/80">
                    {<AiOutlineDollar />}
                  </h4>
                </div>
              </div>
              <div className=" flex  gap-10 m-5">
                <h4 className=" mt-5">{<FaUserGroup />}</h4>
                <div className=" flex gap-20">
                  <h3>
                    <span className=" font-bold">Employ Traking</span> <br />{" "}
                    2daysago
                  </h3>
                  <h4 className=" m-5 text-2xl text-blue-700/80">
                    {<FaCheck />}
                  </h4>
                </div>
              </div>
              <div className=" flex  gap-8  m-5">
                <h4 className=" mt-5">{<LuBook />}</h4>
                <div className=" flex gap-20">
                  <h3>
                    <span className="  font-semibold"> Social media post</span>
                    <br /> Cancelled by user
                  </h3>
                  <h4 className=" m-5 text-2xl text-blue-700/80">
                    {<FaXTwitter />}
                  </h4>
                </div>
              </div>
              <div className=" flex  gap-8  m-5">
                <h4 className="   m-2">{<FaListAlt />}</h4>
                <div className=" flex gap-20 ">
                  <h3>
                    <span className=" font-semibold">
                      Lead list 70% preparend{" "}
                    </span>
                  </h3>
                  <h4 className="  text-2xl text-blue-700/80">
                    {<AiOutlineDownload />}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-8 hover:shadow-amber-900 hover:shadow-inner ">
            <div className="">Workflow Automation</div>
            <h1 className=" text-3xl  ">Automate repetitive tasks</h1>
            <p className="   ">
              We help you streamline internal operations by automating manual
              workflows like data entry, reporting, and approval chains saving
              time and cutting down errors.
            </p>
            <div className=" p-8 flex gap-8">
              <h3>Internal Task Bots</h3>
              <h3>100+ Automations</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutomatedTsak;
