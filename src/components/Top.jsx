import React from "react";

const Top = () => {
  return (
    <section className=" bg-primary  ">
      <div className="  container  flex lg:flex-row   justify-between  items-center  flex-col">
        <div className="  flex flex-col lg:text-left py-10 text-center  text-background  ">
          <h1 className="  text-5xl max-md:text-3xl "> Hello! I’m Kowsar Zahraei An UI/UX Designer{" "}</h1>
          <p className=" flex py-7 ">Stacks is a production-ready library of stackable content blocksbuilt in React Native.
          </p>

          <div className="flex gap-8  left-4 items-center max-md:justify-center">
            <button className=" bg-scenery hover:bg-primary hover:text-black w-40 rounded-3xl  gap-10 text-center px-2   h-12">
              Get Started
            </button>
            <button className=""> Watch Intro </button>
          </div>
        </div>
        <img src="/img/566193b360d6ff97332245b9f146a844.png" />
      </div>
    </section>
  );
};

export default Top;
