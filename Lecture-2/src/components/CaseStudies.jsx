import React from "react";
// import image from "../assets/shutcase.png";
import image1 from "../assets/logoipsum.svg";

const CaseStudies = () => {
  return (
    <>
      <section className=" bg-black h-screen  text-white">
        <div className="  container mx-auto bg-amber-800    relative  max-w-5xl h-1/2  ">
          <h1 className=" mx-auto text-center">Case Studies</h1>
          <h2 className="mx-auto text-center m-10  text-3xl">
            See How Smart AI Automation <br /> Transforms Businesses
          </h2>
          <p className=" text-center mx-auto text-2xl  ">
            See how AI automation streamlines operations, boosts and drives
            growth.
          </p>
        </div>
        {/* ..........second section.......... */}
        <section className=" bg-black h-screen  text-white">
          <div className="  container mx-auto bg-amber-800   relative  max-w-5xl  ">
            {/* left-div  */}
            <div className=" flex justify-between ">
              <div className=" ">
                <img
                  className=" rounded mx-auto p-10 max-h-[70vh] max-w-[70vw] "
                  src="https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug.jpeg"
                  alt=""
                />
              </div>
              {/* right-side */}
              <div>
                <h1 className="   mx-auto text-center  ">
                  <img
                    className="  shadow-inner bg-red-700"
                    src={image1}
                    alt=""
                  />
                </h1>
                <h2 className="mx-auto text-center m-10  text-3xl">
                  "AI Drive forcasting cut inventory waste by 40% for
                  trailForge"
                </h2>
                <p className=" text-center mx-auto text-2xl  ">
                  Trail forge, a suitcase brand, faced stock issues and
                  inefficiences.Our AI forcasting optimized inventor and
                  production cycles,helping them save coast and deliver faster
                </p>
                <ul className=" list-item">
                  <li className="  list-disc">40% Less Inventory Waste</li>
                </ul>
                <ul>
                  <li className="list-disc">35% Faster Production</li>
                </ul>
                <ul>
                  <li className=" list-disc"> 20% More Accurate Forcasting</li>
                </ul>
                <ul>
                  <li className=" list-disc">25% Faster Fulfilment</li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className=" text-center"> ⬅️DRAGE TO EXPLORE➡️</h1>
        </section>
      </section>
    </>
  );
};

export default CaseStudies;
