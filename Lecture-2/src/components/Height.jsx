import React from "react";

const Height = () => {
  return (
    <>
      {/* agar parent and child ke baat ayega too 
    chind ko h-full de it means full hona chahiye but full nahi hoga poora agar full background lele too iske lia parent ko h-screen dena hoga tabi full lega  */}
      {/* <div className=" parent h-screen">
        <div className="child bg-pink-400 h-full">child</div>
      </div> */}
      {/* agar mai chahta hu ke full na lu mera mn kare ke main h-20 percent lu and ya 30% lu tab mai used kar sakta hu child div me h-1/2 and h-1/3 */}
      {/* <div className=" parent h-screen">
        <div className="child bg-pink-400 h-1/6">
          child
          <nav>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>blog</li>
          </nav>
        </div>
      </div> */}

      {/* <div className=" bg-black h-10 min-h-200  text-white ">hellow</div> */}
    </>
  );
};

export default Height;
