import React, { useState } from "react";
import Child1 from "./Child1";
import Child from "./Child";
const Parents = () => {
  const [count, setcount] = useState("");
  return (
    <>
      <Child count={count} setcount={setcount} />

      <Child1 count={count} setcount={setcount} />
      <h3>Parents</h3>
      <h4>{count}</h4>

      {/* <h1>This is parent </h1>
      <div>
        <Child name="afroz" age="23" state="West Bengal" />
      </div> */}
    </>
  );
};

export default Parents;
