import React from "react";

const Home = () => {
  return (
    <>
      {/* Agr ham parent div hai and ek child div hai agar ham child div ko height-full de too child full height nahi lega agar full height dena hai too parent ko height-screen dena hoga tab full-height lega */}
      <div className=" h-screen">
        <div className=" bg-black h-full   text-red-800 text-4xl ">
          child
          <p className=" text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            debitis iste quaerat sequi inventore minus provident modi illo,
            blanditiis libero nostrum ea, exercitationem repellat? Quod sapiente
            nisi officia commodi quam?
          </p>
        </div>
      </div>
      {/* <div className=" bg-yellow-800  w-1/2">height and weight</div>
      <div className=" bg-yellow-200  w-1/3">height and weight</div>
      <div className=" bg-yellow-400  w-1/4">height and weight</div>
      <div className=" bg-yellow-500  w-1/5">height and weight</div>
      <div className=" bg-yellow-600  w-1/6">height and weight</div>
      <div className=" bg-yellow-700  w-1/7">height and weight</div>
      <div className=" bg-yellow-900  w-1/8">height and weight</div> */}

      {/* <h1 className=" text-3xl text-yellow-400 bg-black/40">
        {" "}
        Learning min-height and max-height with tailwind css
      </h1> */}
      {/* agar ham height min-h-50 and height h-100 denge too 100 height lega but ager height h-20 too nahi lega 20 jo min-h-50 hai wahi apply hoga and agar h-50 define kia div me and max-h-60 too max-h-60 apply hoga h-50 nahi hoga q ke mai ne max-height define kar dia hai max-h-60 islye but age h-100 de tab fir h-100 lega q ke max-h-60 hai and mai height ko 60 se above le sakte hai */}
      {/* <div className="h-20 bg-pink-900 min-h-60  ">height</div> */}
      {/* agar koti v div ka H & W same rakhn hai to ham size ka used kar sakte hai */}
      {/* <div className="parent size-50   bg-pink-800   ">
        
      </div> */}
    </>
  );
};

export default Home;
