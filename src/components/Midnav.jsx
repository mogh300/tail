import React from "react";

const Midnav = () => {
  return (
    <>
      <div className="flex flex-col mt-40    container max-md:text-center">
        <div className="   flex    justify-between  ">
          <h1 className=" text-5xl font-bold   ">Portfolio</h1>
          <div className=" flex flex-row-reverse">
            <div className=" hover:border-2 hover:border-p h-10 w-10 flex items-center justify-center rounded-full  transition duration-1000">
              <img src=".\l2\Right arrow.svg" alt="" />{" "}
            </div>
            <div className=" hover:border-2 hover:border-p h-10 w-10 flex items-center justify-center rounded-full  transition duration-1000">
              <img src=".\l2\Left arrow.svg" alt="" />{" "}
            </div>
          </div>
        </div>
        <p className="  max-md:text-center text-2xl text-p pt-5 ">
          Digital Products Showcases
        </p>
      </div>
      <div className="  flex  justify-between mt-10  container ">
        <div className="  flex  justify-between max-md:hidden ">
          <button className="w-10  h-6 rounded-2xl bg-InkScribe text-white">
            all
          </button>
          <button className="w-32 h-6  rounded-2xl ">Product Design</button>
          <button className="w-32 h-6 rounded-2xl">Web Design</button>
          <button className="w-32 h-6 rounded-2xl">Mobile Design</button>
        </div>
        <div className="   flex gap-9 max-md:hidden  items-center">
          <button className="   h-6  rounded-2xl hover:bg-InkScribe hover:text-bas">
            Recently added{" "}
          </button>
          <button className=" ml-16">
            <img src=".\l\Small.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Midnav;
