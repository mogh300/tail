import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex  container justify-center max-md:text-center  mt-32 gap-60  max-md:flex-col-reverse  ">
        <img
          className="hidden lg:flex"
          src=".\img\email-marketing-5806302-4863031 1.png"
          alt=""
        />
        <div className=" max-md:flex-col max-md:justify-center max-md:flex  max-md:text-center">
          <h1 className=" lg:text-3xl ">Subscribe</h1>
          <h1 className=" text-6xl mt-5 max-md:text-4xl">
            Join our newsletter 🎉
          </h1>
          <div className="flex gap-16 mt-20 max-md:px-2 ">
            <button className=" rounded-2xl w-10  bg-lime-800 text-background">
              01
            </button>
            <h1>Get more discount</h1>
          </div>
          <div className="flex gap-16 container  mt-5 max-md:px-2">
            <button className=" rounded-2xl w-10  hover:bg-background  hover:transition hover:text-black duration-700 bg-cyan-800 text-background">
              02
            </button>
            <h1>Get premium travel magazine</h1>
          </div>
          <div className="flex container  max-md:px-2 border-2 rounded-full max-md:justify-between   max-md:start-1 pl-3  pb-3 mt-5  ">
            <input
              className="mt-5 flex justify-center items-center border-none"
              placeholder="Enter your email "
              type="text"
            ></input>
            <img
              className=" h-8 mt-3 "
              src=".\l\small circle button.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-InkScribe  h-px  my-20  container"></div>
      <div className=" container flex mt-10 flex-row-reverse max-sm:gap-20 max-md:gap-40 lg:gap-80 justify-center max-md:text-center max-md:flex-col pb-11  max-md:justify-center  ">
        <div className=" flex-col max-md:justify-center ">
          <div className="flex gap-9  max-md:justify-center">
            <h3 className=" text-p">Home</h3>
            <h3 className=" text-p">Services</h3>
            <h3 className=" text-p">About</h3>
            <h3 className=" text-p">Portfolio</h3>
          </div>
          <div className="flex gap-8 mt-4 max-md:justify-center container">
            <div className=" flex items-center bg-scenery rounded h-10 w-10  justify-center ">
              <img src=".\l\linked_in.png" alt="" />
            </div>
            <div className=" flex items-center bg-scenery rounded h-10 w-10  justify-center ">
              <img src=".\l\f.png" alt="" />
            </div>
            <div className=" flex items-center bg-scenery rounded h-10 w-10  justify-center ">
              <img src=".\l\twitter.png" alt="" />
            </div>
            <div className=" flex items-center bg-scenery rounded h-10 w-10  justify-center ">
              <img src=".\l\instagram.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-col container ">
          <h1 className=" text-4xl font-bold">TINTIN</h1>
          <p className=" text-sm text-p pt-10">
            Copyright © 2021 UI8 LLC. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
