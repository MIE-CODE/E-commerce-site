import React from "react";
import logo from "./images/logo.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#F5F5F5]  h-[36px] font-['Rubik'] xl:w-[1223px] lg:h-[72px] rounded-xl flex justify-between items-center px-[19.5px] mt-7 mx-auto text-xs sticky top-5 z-50">
      <Link to="/">
        {" "}
        <img className="h-[15px] md:h-[36px]" src={logo} alt="logo" />
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
