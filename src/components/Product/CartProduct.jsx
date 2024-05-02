import React from "react";
import hoodie from "../images/18218926_Isolated_back_black_hoodie-removebg-preview 1.png";
import { IoMdArrowDropdown } from "react-icons/io";

const CartProduct = () => {
  const amount = 25;
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[39px]">
        {[...Array(2)].map(() => (
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-6">
              <div className="flex justify-center items-center w-[150px] h-[151px] bg-[#F5F5F5] rounded-[20px]">
                <img src={hoodie} alt="hoodie" />
              </div>

              <div className="flex flex-col gap-4 w-[378px]">
                <p className="text-[28px] text-['Rubik']">Hoodie Shirt</p>
                <p className="text-[#7F7573] text-base text-['Roboto']">
                  Hoodie shirt made with high quality fabric from USA. 100%
                  cotton fabric.
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

              <button className="text-[#DC0610] text-2xl">Remove</button>
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
  );
};

export default CartProduct;
