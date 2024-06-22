import React from "react";
import ForSome from "./ForSome";
const Some = () => {
  return (
    <section className=" my-20 text-center container">
      <img  className=" absolute  end-0 -z-10"  src=".\img\Ellipse 1329.png"/>
        <h1 className=" text-4xl font-bold ">Process</h1>
        <p className=" text-InkScribe  mt-5 text-2xl">My working process</p>
        <div className=" flex  gap-24 max-md:flex-col mt-10 ">
          <ForSome></ForSome>
        </div>
    </section>
  );
};
export default Some;
