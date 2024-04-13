import React from "react";
import logo from "./images/logo.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="lg:bg-[#F5F5F5] w-[366px] h-[36px] font-['Rubik'] md:w-[1223px] lg:h-[72px] rounded-xl flex justify-between items-center px-[19.5px] mt-7 mx-auto text-xs sticky top-5 z-50">
      <img className=" h-[36px]" src={logo} alt="logo" />
      <NavBar />
    </div>
  );
};

export default Header;
