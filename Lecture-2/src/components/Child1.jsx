import React from "react";

const Child1 = (props) => {
  const Incrementbtn = (props) => {
    props.setcount(count + 1);
  };
  return (
    <>
      <h1>Data passing through the child to parent</h1>
      <button
        onClick={Incrementbtn}
        className="   p-6 m-9 max-w-60 h-10 border bg-pink-200"
      >
        incrment
      </button>
      <input
        className=" p-10  max-w-50 max-h-5 "
        type="text"
        placeholder="enter your name"
        onChange={(e) => {
          props.setcount(e.target.value);
        }}
      />
      <h3>Childre</h3>
      <h3>{props.count}</h3>
    </>
  );
};

export default Child1;
