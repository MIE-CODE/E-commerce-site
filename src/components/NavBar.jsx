import React from "react";
import { FaBars } from "react-icons/fa";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";

const NavBar = () => {
  return (
    <>
      <div className=" hidden lg:flex gap-[50px] items-center justify-center text-base">
        <button className="hover:text-[#DF4425] size-6 transition duration-300 ease-in-out">
          <FaMagnifyingGlass />
        </button>
        <button className="hover:text-[#DF4425] transition duration-300 ease-in-ou">
          Shop Now
        </button>
        <button className="flex items-center gap-1 hover:text-[#DF4425] transition duration-300 ease-in-ou">
          Cart <FaCartShopping />
        </button>
      </div>
      <div className="lg:hidden">
        <button className="hover:text-[#DF4425] text-2xl transition duration-300 ease-in-out">
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default NavBar;
