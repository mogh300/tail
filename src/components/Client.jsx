import React from "react";
import Absolute from "./Absolute";
import LeftRightArro from "./LeftRightArro";

const Client = () => {
  
  return (
    <section className="text-center  container ">
        <h1 className=" text-5xl font-bold max-md:text-3xl  my-16"> What our clients say </h1>
      <div className="  bg-primary rounded-3xl  ">
        <div className=" flex  my-10  gap-8 ">
          <Absolute></Absolute> 
        </div>
        <LeftRightArro></LeftRightArro>
      </div>
    </section>
  );
};

export default Client;
