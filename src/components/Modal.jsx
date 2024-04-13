import React from "react";
import { FaX } from "react-icons/fa6";
import hoodie from "./images/hoodie.png";

const Modal = ({ setShowModal }) => {
  return (
    <div className="flex justify-center items-center  w-screen h-screen fixed bg-black/50 top-0 right-0 z-50">
      <div className="flex  gap-[6px]">
        <div className="flex justify-between gap-[52px]  w-[789px] h-[738px] bg-white rounded-2xl  p-[32px] ">
          <div className="flex flex-col w-[80%] gap-[24px]">
            <div className="bg-[#F5F5F5] rounded-[28px] w-[353px] h-[383px]">
              <img src={hoodie} alt="hoodie" />
            </div>
            <div className="flex justify-between">
              {[...Array(3)].map((index) => (
                <div
                  key={index}
                  className="flex justify-center items-center  bg-[#F5F5F5] rounded-md w-[92px] h-[92px]"
                >
                  hi
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[22px]">Customize your hoodie to your taste</p>
              <textarea
                name=""
                placeholder="Leave a comment"
                className="ring-[#B4A9A7] text-[#B4A9A7] rounded-[10px] px-2 py-6  w-full h-[96px] border border-[#EDE0DE] outline-none bg-[#F5F5F5] placeholder: text-justify"
              ></textarea>
              <div className="flex justify-end ">
                <button className="w-[115px] h-[40px] rounded-lg bg-[#1D1B20]/10 text-[#201A19]">
                  Comment{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[16px]">
                <p className=" text-[45px] font-semibold ">Hoodie Shirt</p>
                <p className="text-[#DF4425]  text-2xl"> ₦ 20,000.00 </p>
                <p className="text-[#7F7573]">
                  Hoodie shirt made with high quality fabric from USA. 100%
                  cotton fabric.
                </p>
              </div>
              <div>
                <p className="text-[#7F7573]">Size</p>
                <div></div>
              </div>
            </div>
            <div>button</div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="flex justify-center items-center w-[56px] h-[56px] bg-white rounded-[50%]"
        >
          <FaX />
        </button>
      </div>
    </div>
  );
};

export default Modal;
