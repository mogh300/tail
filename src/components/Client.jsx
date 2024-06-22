import React from "react";
import Absolute from "./Absolute";
import LeftRightArro from "./LeftRightArro";

const Client = () => {
  
  return (
    <section className="text-center  container ">
        <h1 className=" text-5xl font-bold max-md:text-3xl  my-16"> What our clients say </h1>
      <div className="  bg-primary py-16 rounded-3xl  ">
        <div className=" flex my-10  -mx-6 gap-4 ">
          <Absolute></Absolute> 
        </div>
        <LeftRightArro></LeftRightArro>
      </div>
    </section>
  );
};

export default Client;
