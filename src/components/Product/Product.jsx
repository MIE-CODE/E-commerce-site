import React from "react";
import pics from "../images/24345278_flat-magnetic-boxes-mockup-opened-and-closed 1.png";

const Product = ({ name, setShowmodal }) => {
  return (
    <div className="flex flex-col gap-[28px] w-[884px]">
      <p className=" text-3xl leading-8 font-['OldStandardTT']">{name}</p>
      <div className="flex gap-[16px]">
        {[...Array(4)].map((index) => (
          <div
            className="w-[209px] shadow-md hover:scale-[1.009] active:scale-100 active:shadow-none hover:shadow-lg hover:shadow-black/20 rounded-md transition ease-in-out duration-300"
            key={index}
          >
            <div className="bg-[#D9D9D9]/30 h-[149px] flex justify-center items-center">
              <img src={pics} alt="imag" />
            </div>
            <div className="h-[198px] flex flex-col text-center justify-center items-center gap-[27px]">
              <div className="flex flex-col gap-[12px]">
                <p>branded Box</p>
                <p>
                  {" "}
                  ₦ 10000.00 <span className="text-[#655C5B]">Per box</span>
                </p>
              </div>
              <button
                onClick={() => {
                  setShowmodal(true);
                }}
                className="w-[182px] h-[40px] bg-[#DF4425] hover:bg-[#DF4425]/80 active:bg-[#DF4425] font-medium text-sm text-white rounded-[10px] transition ease-in-out duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
