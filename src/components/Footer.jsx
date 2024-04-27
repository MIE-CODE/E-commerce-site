import React from "react";
import logo from "./images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" p-6   font-['Rubik']  bg-[#F2F2F2] text-xs ">
      <div className="grid md:flex mx-auto xl:w-[1223px] gap-8">
        <Link to="/">
          {" "}
          <img className=" h-[36px]" src={logo} alt="logo" />
        </Link>
        <div className="grid md:flex justify-between  gap-4 w-full">
          <div className="flex flex-col gap-6">
            <p className="  border-b-2 border-black  w-fit">Company</p>
            <div className="flex flex-col gap-6 text-[10px]  font-['Rubik']">
              <p>How we operate</p>
              <p>Our courses</p>
              <p>Upcoming programs</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="  border-b-2 border-black  w-fit">Contact US</p>
            <div className="flex flex-col gap-4 text-[10px] font-['Rubik']">
              <p className="flex gap-10 items-center">
                <FaPhoneAlt /> 09137437424
              </p>
              <p className="flex gap-10 items-center">
                <FaLocationDot /> Berikebbi, Gariki, Abuja.
              </p>
              <p className="flex gap-10 items-center">
                <IoMdMail /> Sprout@...
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="  border-b-2 border-black  w-fit ">Follow Up</p>
            <div className="flex gap-4 text-[30px]">
              <SiFacebook className="text-white fill-black" />
              <IoLogoLinkedin />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
