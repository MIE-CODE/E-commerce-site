import React from "react";
import { FaX } from "react-icons/fa6";

import { Link } from "react-router-dom";
import CartProduct from "./Product/CartProduct";

const CartListModal = ({ setShowCartList }) => {
  return (
    <div
      onClick={() => setShowCartList(false)}
      className="flex justify-center items-center   w-screen fixed   bg-black/50 top-0 right-0 z-50 "
    >
      <div className="flex  gap-[6px] my-10 ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex justify-between gap-[52px]  w-[992px]   bg-white rounded-2xl  p-[42px] leading-6 tracking-[0.05px] shadow-lg sha  "
        >
          <div className="flex flex-col gap-[30px] w-full">
            <p className="text-[45px] font-semibold"> Cart list</p>
            <div className="flex flex-col gap-[40px]">
              <CartProduct />
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
