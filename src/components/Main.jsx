import React, { useState } from "react";
import Top from "./Top";
import { FaCartShopping } from "react-icons/fa6";
import Product from "./Product/Product";
import Modal from "./Modal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" relative w-[1223px] mx-auto mt-[31px] ">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Top />
      <div className="flex justify-between items-center mt-20">
        <p className=" text-3xl font-['OldStandardTT']">Brand Your Packages </p>
        <button className="bg-[#DF4425] hover:bg-[#df4d25]/95 active:bg-[#DF4425]/80 transition duration-300 ease-in-out text-white flex justify-center items-center w-[232px] h-[40px] gap-2 rounded-xl">
          <FaCartShopping />
          Cart List
        </button>
      </div>
      <div className="flex justify-between my-[52px]">
        <div className="flex flex-col gap-[10px] w-[252px]   text-xl font-['OldStandardTT']">
          <div className="flex items-center px-[22px] w-[253px] h-[77px] active:text-white   rounded-md bg-[#FFEDEA]/30 active:bg-[#DF4425]">
            Boxes
          </div>
          <div className="flex items-center px-[22px] w-[253px] h-[77px] active:text-white   rounded-md bg-[#FFEDEA]/30 active:bg-[#DF4425]">
            Apparels
          </div>
          <div className="flex items-center px-[22px] w-[253px] h-[77px] active:text-white   rounded-md bg-[#FFEDEA]/30 active:bg-[#DF4425]">
            Bags & Tote Bags
          </div>
          <div className="flex items-center px-[22px] w-[253px] h-[77px] active:text-white   rounded-md bg-[#FFEDEA]/30 active:bg-[#DF4425]">
            Bottle Water
          </div>
          <div className="flex items-center px-[22px] w-[253px] h-[77px] active:text-white   rounded-md bg-[#FFEDEA]/30 active:bg-[#DF4425]">
            Note Book & pen
          </div>
        </div>
        <div className="flex flex-col gap-[52px]">
          <Product name="Boxes" setShowmodal={setShowModal} />
          <Product name="Appearls" setShowmodal={setShowModal} />
          <Product name="Bags & Tote Bags" setShowmodal={setShowModal} />
          <Product name="Water Bottle" setShowmodal={setShowModal} />
          <Product name="Note Book & Pen" setShowmodal={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default Main;
