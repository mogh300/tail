import React from "react";

const Some = () => {
  return (
    <div className=" mt-24   text-center">
      <img
        className=" absolute  z-10 end-0 w-96  "
        src=".\img\Ellipse 1329.png"
        alt=""
      />
      <div className="  flex  flex-col z-20   items-center container">
        <h1 className=" text-4xl font-bold ">Process</h1>
        <p className=" text-p pt-5 text-2xl">My working process</p>
      </div>
      <div className=" flex items-center  gap-24 max-md:flex-col mt-14 container">
        <div className="max-md:w-2/3  max-md:text-center  flex flex-col container">
          <img className=" " src=".\img\icon box (2).png" alt="" />
          <h1 className=" font-bold">Business Planning</h1>
          <p className=" text-p text-sm">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </div>
        <div className="  max-md:w-2/3 flex flex-col   max-md:text-center container">
          <img className=" " src=".\img\icon box (1).png" alt="" />
          <h1 className=" font-bold">Business Planning</h1>
          <p className=" text-p text-sm">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </div>
        <div className="  max-md:w-2/3 flex flex-col  max-md:text-center  container">
          <img className=" " src=".\img\icon box.png" alt="" />
          <h1 className=" font-bold">Business Planning</h1>
          <p className=" text-p text-sm">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Some;
