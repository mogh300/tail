import React from "react";

const Top = () => {
  return (
    <section className=" bg-primary  ">
      <div className="  h-24	 flex justify-between  flex-row-reverse    pt-4  max-md:hidden items-center container">
        <div className="  lg:gap-10  items-center lg: flex  max-md:text-center  ">
          <button className=" h-12   text-background flex gap-6  items-center ">
            <img className=" to-background  " src=".\l\Shape.svg" alt="" />
            language
          </button>
          <button className="  bg-scenery   hover:bg-primary hover:text-black  w-44 rounded-3xl text-background  gap-5 text-center px-2   h-12">
           
            Download CV
          </button>
        </div>
        <div className=" ">
          <ul className=" list-none  flex    gap-8   max-md:hidden   ">
            <li className="  text-cyan-50  font-DM">Home</li>
            <li className="  text-cyan-50 ">Services</li>
            <li className="  text-cyan-50 ">About</li>
            <li className="  text-cyan-50 ">Portfolio</li>
            <li className="  text-cyan-50 ">Contact</li>
          </ul>
        </div>
        <div className="   max-md:hidden ">
          {" "}
          <h1 className=" text-3xl text-cyan-50 font-DM ">TinTin</h1>{" "}
        </div>
      </div>
      <div className="  container  flex  text-center    justify-between  items-center  max-md:flex-col-reverse flex-row-reverse">
        <img
          src=".\img\566193b360d6ff97332245b9f146a844.png"
          alt=""
        />
        <div className="  flex flex-col  mt-10 text-center   ">
          <h1 className="  text-background text-5xl max-md:text-3xl ">
            Hello! I’m Kowsar Zahraei An UI/UX Designer{" "}
          </h1>
          <p className=" flex text-background py-7 ">
            Stacks is a production-ready library of stackable content blocks
            built in <br /> React Native.
          </p>
          <div className="flex gap-8  items-center justify-center">
            <button className=" bg-scenery hover:bg-primary hover:text-black w-40 rounded-3xl text-background  gap-10 text-center px-2   h-12">
              Get Started
            </button>
            <button className=" text-background"> Watch Intro </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
