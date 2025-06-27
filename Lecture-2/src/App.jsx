import React from "react";
import Header from "./components/Header";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div className=" bg-black h-screen  p-22  ">
      <Header />

      <h1 className=" border  p-0.5 bg-red-800 lg:hidden "></h1>
      <Herosection />
    </div>
  );
}

export default App;
