import React from "react";
import Parents from "./Parents";
const Child = ({ name, age, state, count, setcount }) => {
  return (
    <>
      <h1>Child here present</h1>
      <div className="  size-80 p-32 bg-gradient-to-b to-green-100 from-yellow-100">
        <h1>{name}</h1>
        <h3>{age}</h3>
        <p>{state}</p>
        <div>
          <input
            className=" p-10 max-w-20"
            type="text"
            placeholder="enter your name"
            onChange={(e) => {
              setcount(e.target.value);
            }}
          />
          <h2>{count}</h2>
        </div>
      </div>
    </>
  );
};

export default Child;
