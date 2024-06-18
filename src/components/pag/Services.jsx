import React from "react";

const Services = () => {
  return (
    <div className=" bg-background mt-24 pr-20 pl-24 flex flex-col items-center  container  ">
      <div className="  flex  flex-col text-center  ">
        <h1 className=" text-4xl font-bold ">Services</h1>
        <p className=" text-p pt-5 text-2xl">
          Expertise services! Let’s check it out!
        </p>
      </div>
      <div className="  flex max-md:flex-col  gap-10 container  mt-10  ">
        <div className="flex flex-col  items-start  rounded-3xl p-5  gap-4 lg:w-60 border-2  pt-20 ">
          <img className="h-9   " src=".\l\Line.svg" alt="" />
          <h1 className=" py-1 font-bold">Webflow Develop</h1>
          <p className=" text-sm ">Small description</p>
        </div>

        <div className="flex  h-60  gap-4   items-start border-2 p-5   lg:w-60    bg-primary text-background rounded-3xl  pt-20 ">
          <div className="flex flex-col  items-start  ">
            <img className="h-9    " src=".\l\Line.svg" alt="" />
            <h1 className="  py-2  font-bold">Webflow Develop</h1>
            <p className=" text-sm  ">Small description</p>
          </div>
          <div className=" flex   pt-16 pr-2  ">
            <button className=" ml-3 rounded-full bg-scenery   flex justify-center items-center h-10 w-10 hover:animate-pulse">
              <img src=".\l\vector (Stroke).svg" alt="" />
            </button>
          </div>
        </div>
        <div className="flex flex-col  h-60 border-2   items-start lg:w-60 p-5    gap-4 rounded-3xl pt-20  ">
          <img className="h-9  " src=".\l\Line.svg" alt="" />
          <h1 className="py-1 font-bold ">Webflow Develop</h1>
          <p className=" text-sm ">Small description</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
