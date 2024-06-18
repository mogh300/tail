import React from "react";

const Client = () => {
  return (
    <div className="max-md:text-center     max-md:items-center   max-md: ">
      <div className="mt-24  flex  flex-col  justify-center items-center max-md:hidden container">
        <h1 className=" text-5xl font-bold max-md:text-3xl ">
          What our clients say
        </h1>
      </div>
      <div className="max-md:text-center   container   pb-20    max-md:items-center   max-md: bg-primary h-75	 mt-12 rounded-3xl flex flex-col max-md:m-0 max-md:mt-8 max-md:h-auto max-md:hidden ">
        <div className=" flex  absolute  items-center max-md:text-center    self-center  justify-center  max-md:items-center   max-md:  gap-4 pt-14     max-md:m-0 -ml-12    max-md:hidden ">
          <div className=" p-16 bg-white h-80 max-md:text-center    justify-center  max-md:items-center   max-md:    rounded-3xl max-md:h-auto max-md:w-auto    max-md:flex-col max-md:p-3 m-5">
            <img src=".\img\stars.png" alt="" />
            <p className=" text-p">
              Yet preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </p>
            <h1 className=" ml-4 pt-2 text-xl align-text-bottom">sam</h1>
            <p className=" text-sm text-p "> Founder @ Migelko</p>
          </div>
          <div className=" p-16 bg-white h-80     rounded-3xl  max-md:hidden">
            <img src=".\img\stars.png" alt="" />
            <p className=" text-p">
              Yet preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </p>
            <h1 className=" ml-4 pt-2 text-xl align-text-bottom">sam</h1>
            <p className=" text-sm text-p "> Founder @ Migelko</p>
          </div>
          <div className=" p-16 bg-white h-80   rounded-3xl max-sm:hidden ">
            <img src=".\img\stars.png" alt="" />
            <p className=" text-p">
              Yet preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </p>
            <h1 className=" ml-4 pt-2 text-xl align-text-bottom">sam</h1>
            <p className=" text-sm text-p "> Founder @ Migelko</p>
          </div>
        </div>
        <div className="flex flex-row-reverse container  gap-2 items-center justify-center  mt-96   pt-10  max-md:hidden">
          <div className=" hover:border-2 hover:border-p h-10 w-10 flex items-center justify-center rounded-full  transition duration-1000">
            <img src=".\l2\Right arrow.svg" alt="" />{" "}
          </div>
          <div className=" hover:border-2 hover:border-p h-10 w-10 flex items-center justify-center rounded-full  transition duration-1000">
            <img src=".\l2\Left arrow.svg" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;