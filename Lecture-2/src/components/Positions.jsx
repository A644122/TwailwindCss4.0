import React from "react";

const Positions = () => {
  return (
    <>
      <h2 className=" text-3xl">Learning position</h2>

      {/* <div className="  size-20 absolute  bottom-0 right-0 bg-green-500 text-2xl border rounded-md">
        1
      </div>
      <div className=" size-20 absolute top-0 right-0 bg-green-600 text-2xl border rounded-md">
        2
      </div>
      <div className=" size-20 absolute bottom-0 bg-green-400 text-2xl border rounded-md">
        3
      </div>
      <div className=" size-20 absolute top-0 bg-green-200 text-2xl border rounded-md">
        4
      </div> */}
      <div className=" h-screen  relative bg-black/35">
        <div className="  size-20 absolute  bottom-0 right-30 bg-green-500 text-2xl border rounded-md">
          1
        </div>
        <div className=" size-20 absolute top-0 right-40 bg-green-600 text-2xl border rounded-md">
          2
        </div>
        <div className=" size-20 absolute bottom-0 bg-green-400 text-2xl border rounded-md">
          3
        </div>
        <div className=" size-20 absolute top-0 bg-green-200 text-2xl border rounded-md">
          4
        </div>
      </div>
    </>
  );
};

export default Positions;
