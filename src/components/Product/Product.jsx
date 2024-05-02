import React, { useState } from "react";
import pics from "../images/24345278_flat-magnetic-boxes-mockup-opened-and-closed 1.png";

const Product = ({ name, setShowmodal, products }) => {
  return (
    <div className="flex flex-col lg:gap-[28px] xl:w-[884px]">
      <p className="text-xl md:text-3xl leading-8 font-['OldStandardTT']">
        {name}
      </p>
      <div className="flex xl:gap-[16px]  ">
        {/* {products?.map((product, index) => (
          <div
            className="text-[10px] md:text-base lg:text-[14px] lg:w-[209px] shadow-md hover:scale-[1.009] active:scale-100 active:shadow-none hover:shadow-lg hover:shadow-black/20 rounded-md transition ease-in-out duration-300"
            key={product}
          >
            <div className="bg-[#D9D9D9]/30 h-[100px] lg:h-[149px] flex justify-center items-center">
              <img src={pics} alt="imag" />
            </div>
            <div className="py-5 md:py-10  lg:h-[198px] flex flex-col text-center justify-center items-center lg:gap-[27px]">
              <div className="flex flex-col  lg:gap-[12px]">
                <p>{product?.name}</p>
                <p className="flex gap-1">
                  {" "}
                  ₦ {product?.price.toLocaleString()}
                  <span className="text-[#655C5B]">Per box</span>
                </p>
              </div>
              <button
                onClick={() => {
                  setShowmodal(true);
                }}
                className="w-[70px] h-[20px] md:w-[182px] md:h-[40px]   bg-[#DF4425] hover:bg-[#DF4425]/80 active:bg-[#DF4425] font-medium     text-white rounded-md  lg:rounded-[10px] transition ease-in-out duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Product;
