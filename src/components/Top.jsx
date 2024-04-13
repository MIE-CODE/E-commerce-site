import React from "react";
import gift from "./images/wepik-export-202305151544396i3Z 1.png";
import bottle from "./images/closeup-reusable-eco-water-bottle-red-white-studio-background 1.png";
import headPhone from "./images/Group 3731.png";
import hoodie from "./images/top-view-red-notebook-with-white-background 1.png";
import book from "./images/wepik-export-20230515151245JUAd 2.png";
import flask from "./images/Group 3733.png";
import shirt from "./images/Group 3734.png";

const Top = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col gap-[32px] ">
        <div className="flex  z-10 w-[368px] h-[264px] bg-[#FFEDEA]/30">
          <img src={gift} alt="gift" />
        </div>
        <div className="flex">
          <div className="flex  justify-center w-[50%] h-[142px] bg-[#FFEDEA]/30">
            <img src={bottle} alt="gift" />
          </div>
          <div className="w-[50%] h-[142px] bg-[#FFEDEA]/30">
            <img src={headPhone} alt="gift" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center">
        <p className="text-nowrap absolute z-10  top-0 text-[#000000] lg:text-5xl text-center leading-[56px] tracking-[0.5px] font-['OldStandardTT'] ">
          Tell Your Business Story <br /> With
          <span className="text-[#DF4425]"> E-Print</span>
        </p>
        <div className=" flex justify-items-start w-[368px] h-[264px] bg-[#FFEDEA]/30">
          <img src={hoodie} alt="gift" />
        </div>
      </div>
      <div className="flex flex-col gap-[32px] z-0">
        <div className="flex justify-center  w-[368px] h-[264px] bg-[#FFEDEA]/30">
          <img src={book} alt="gift" />
        </div>
        <div className="flex">
          <div className=" flex justify-center w-[50%] h-[142px] bg-[#FFEDEA]/30">
            <img src={flask} alt="gift" />
          </div>
          <div className="flex justify-center w-[50%] h-[142px] bg-[#FFEDEA]/30">
            <img src={shirt} alt="gift" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
