import React from "react";
const Some = () => {
  return (
    <section className=" my-24 text-center container">
      <img  className=" absolute  end-0 -z-10"  src=".\img\Ellipse 1329.png"/>
      <div className="  flex  flex-col   items-center ">
        <h1 className=" text-4xl font-bold ">Process</h1>
        <p className=" text-p pt-5 text-2xl">My working process</p>
      </div>
      <div className=" flex items-center  gap-24 max-md:flex-col mt-14 ">
        <div className="max-md:w-2/3  max-md:text-center  flex flex-col ">
          <img className=" " src=".\img\icon box (2).png"/>
          <h1 className=" font-bold">Business Planning</h1>
          <p className=" text-p text-sm">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </div>
        <div className="  max-md:w-2/3 flex flex-col   max-md:text-center ">
          <img className=" " src=".\img\icon box (1).png"/>
          <h1 className=" font-bold">Business Planning</h1>
          <p className=" text-p text-sm">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </div>
        <div className="  max-md:w-2/3 flex flex-col  max-md:text-center  ">
          <img className=" " src=".\img\icon box.png"/>
          <h1 className=" font-bold">Business Planning</h1>
          <p className=" text-p text-sm">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Some;
