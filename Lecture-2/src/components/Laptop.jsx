import React, { useState } from "react";
import Mobile from "./Mobile";
const Laptop = () => {
  const [About, setAbout] = useState(<h1>afroz</h1>);
  return (
    <>
      <div>Laptop</div>;
      <div>
        <Mobile about={About} setAbout={setAbout} />
      </div>
      <h1>{About}</h1>
    </>
  );
};

export default Laptop;
