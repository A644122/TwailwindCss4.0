import React, { useState } from "react";

const Mobile = (props) => {
  return (
    <>
      <div>Mobile</div>
      <div>
        <div className="About" btn="Click M!">
          {props.about}
        </div>
        <button></button>
      </div>
    </>
  );
};

export default Mobile;
