import React from "react";
import Top from "../Top";
import Services from "./Services";
import Mid from "../Mid";
import Some from "../Some";
import Client from "../Client";
import Midnav from "../Midnav";
import Cop from "../Cop";
import Secendry from "../../Secendry";
import Footer from "../Footer";
import Header from "../Header";
import Circle from "../Circle";
const Pag1 = () => {
  return (
    <div className=" ">
      <div className="  bg-background  mx-auto  justify-center   font-DM  max-md:items-center max-md:text-center ">
        <Header></Header>
        <Top></Top>
        <Services></Services>
       
        <Mid></Mid>
        <Client></Client>
        <Some></Some>
        <Midnav></Midnav>
        <Cop></Cop>
        <button className=" container max-md:hidden mt-10   flex start-40   hover:animate-pulse  bg-background">
          {" "}
          <h1 className="border-2 rounded-full px-5 py-3 font-DM ">
            Show More {">"}
          </h1>
        </button>
        <Secendry></Secendry>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Pag1;