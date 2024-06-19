import React from "react";

const Secendry = () => {
  return (
    <div className="  flex mt-32 bg-primary pb-24">
      <div className="  flex  max-md:flex-col container  max-md:items-center max-md:justify-center gap-8  -  pt-12  max-md:h-auto ">
        <div className="max-md:text-center   ">
          <h1 className=" mt-16 text-6xl max-md:text-4xl text-background">
            Got A Project ?! <br /> Let’s Talk!
          </h1>
          <p className=" text-background mt-6">
            Stacks is a production-ready library of stackable content <br />{" "}
            blocks built in React Native.
          </p>
          <button className=" mt-12  hover:bg-primary hover:text-black    bg-scenery w-44 rounded-3xl text-background  gap-5 text-center px-2    h-12">
            Contact
          </button>
        </div>
        <div className=" ">
          {" "}
          <img src=".\img\calling-5779539-4849629 1.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Secendry;
