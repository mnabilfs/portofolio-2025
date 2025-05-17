import React from "react";
import CountUp from "../components/CountUp";
import GooeyNav from "../components/GooeyNav";
import IconLogo from "../assets/IconLogo.png"

const Home = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <>
      <div className=" bg-black w-full h-screen">
        {/* Header */}
        <header className="flex justify-between h-20 w-full  pl-5 pr-15">
          <img src={IconLogo} alt="" className="scale-80 cursor-pointer"/>
          <div style={{ height: "600px", position: "relative" }}>
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </header>
        
        {/* Main */}
        <div>
          {/* Name */}
          <div className=""></div>
          {/* Lanyard */}
          <div></div>
        </div>
        +
      </div>
    </>
  );
};

export default Home;
