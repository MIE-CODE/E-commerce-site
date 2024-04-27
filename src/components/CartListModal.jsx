import React from "react";
import { FaX } from "react-icons/fa6";
import hoodie from "./images/18218926_Isolated_back_black_hoodie-removebg-preview 1.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const CartListModal = ({ setShowCartList }) => {
  const amount = 25;

  return (
    <div
      onClick={() => setShowCartList(false)}
      className="flex justify-center items-center   w-screen fixed   bg-black/50 top-0 right-0 z-50 "
    >
      <div className="flex  gap-[6px] my-10 ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex justify-between gap-[52px]  w-[992px]   bg-white rounded-2xl  p-[42px] leading-6 tracking-[0.05px]  "
        >
          <div className="flex flex-col gap-[58px] w-full">
            <p className="text-[45px] font-semibold"> Cart list</p>
            <div className="flex flex-col gap-[68px]">
              <div className="flex flex-col gap-[62px]">
                <div className="flex flex-col gap-[39px]">
                  {[...Array(2)].map(() => (
                    <div className="flex justify-between">
                      <div className="flex justify-center items-center gap-6">
                        <div className="flex justify-center items-center w-[150px] h-[151px] bg-[#F5F5F5] rounded-[20px]">
                          <img src={hoodie} alt="hoodie" />
                        </div>

                        <div className="flex flex-col gap-4 w-[378px]">
                          <p className="text-[28px] text-['Rubik']">
                            Hoodie Shirt
                          </p>
                          <p className="text-[#7F7573] text-base text-['Roboto']">
                            Hoodie shirt made with high quality fabric from USA.
                            100% cotton fabric.
                          </p>
                          <p className="text-2xl text-[#DF4425] text-['Roboto']">
                            {" "}
                            ₦ 20,000.00{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-[10px]">
                          <p className=" text-[22px] font-['Roboto'] flex justify-center items-center w-[49px] h-[49px] bg-white border-[#F8EBE9] border rounded">
                            {amount}
                          </p>
                          <IoMdArrowDropdown />
                        </div>

                        <button className="text-[#DC0610] text-2xl">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-[54px]">
                  <div className="flex flex-col border-t-2 border-[#FEF1EF] pt-[36px] gap-[41px]">
                    <div className="flex justify-between text-2xl">
                      <p className=" text-[#7F7573]">Subtotal:</p>
                      <p> ₦ 45,000.00 </p>
                    </div>
                    <div className="flex justify-between text-2xl">
                      <p className=" text-[#7F7573]">Delivery Fee</p>
                      <p> ₦ 45,000.00 </p>
                    </div>
                  </div>
                  <div className="border-t-2 border-[#FEF1EF] pt-[36px] ">
                    <div className="flex justify-between text-[28px]">
                      <p>Total:</p>
                      <p> ₦ 45,000.00 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  to="/checkout"
                  className="flex items-center justify-center text-white md:text-2xl text-center w-[255px] h-[62px] text-sm bg-[#DF4425] rounded-[10px] "
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowCartList(false);
          }}
          className="flex justify-center items-center w-[56px] h-[56px] bg-white rounded-[50%]"
        >
          <FaX />
        </button>
      </div>
    </div>
  );
};

export default CartListModal;
