import React from "react";

const Sizelearning = () => {
  return (
    <>
      {/* size property only apply width and height not max-h min-h aplly */}
      {/* agar ham koyi v div  ka width same rakhe and height v too han direct size property ka used karke height and width set kar sakte hai */}
      {/* agar max-h-50 and ham size-30 too kya size-30 apply hoga too ans hai ke nahi hoga q ke main ne define kar dia hai ke max-h-40 iseh kaam nahi hoga but agar size-50 ya 60 dia tab apply ho jaiga  */}
      {/* <div className=" max-h-50  bg-amber-800 size-90 ">Size matter</div> */}
      {/* <div className=" max-w-150  bg-amber-800 size-290 ">Size matter</div> */}
      {/* size property hai joo ham min-size-30 ke sath work nahi karta ye size property srif max-h amn min-h and h and w ke sath working hota hai */}
      
      <div className="parent h-screen">
        Parent
        {/* <div className=" child size-full bg-pink-600 ">child</div> */}
        {/* <div className=" child size-fit bg-pink-600 ">child</div> */}
        <div className=" child size-1/3 bg-pink-600 ">child</div>
      </div>
    </>
  );
};

export default Sizelearning;
