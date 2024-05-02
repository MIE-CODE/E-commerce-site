import React, { useState } from "react";
import { FaMinus, FaPlus, FaX } from "react-icons/fa6";
import hoodie from "./images/hoodie.png";
import smallHoodie from "./images/18218926_Isolated_back_black_hoodie-removebg-preview 1.png";
import { MdOutlineUploadFile } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ setShowModal, setFile, products }) => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);
  console.log(selectedColor, selectedSize, count);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "#A6A6A6" },
    { name: "#C61882" },
    { name: "#E7D300" },
    { name: "#DF4425" },
    { name: "#000000" },
  ];
  if (products) {
    console.log(products);
  }
  const backDrop = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { type: "spring", delay: 0.5 },
    },
  };
  const modal = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.3, stiffness: 40 },
    },
  };
  return (
    <motion.div
      variants={backDrop}
      initial="hidden"
      animate="visible"
      onClick={() => setShowModal(false)}
      className="flex min-w-[100vw] min-h-screen fixed bg-black/50 top-0 right-0 z-50 p-1"
    >
      <motion.div
        variants={modal}
        className="flex gap-1 lg:gap-[6px] mx-auto mt-20"
      >
        <div
          // style={{
          //   width: "clamp(50%,789px, 90%)",
          //   height: "min(50%, 300px)",
          // }}
          onClick={(e) => e.stopPropagation()}
          className="flex justify-between gap-[52px]  md:w-[738px] lg:w-[789px] lg:h-[738px] shadow-lg shadow-black/20 bg-white rounded-2xl  p-[32px] "
        >
          <div className="flex flex-col w-[80%] gap-[24px]">
            <div className="bg-[#F5F5F5] rounded-[28px] w-[50px] h-[50px] lg:w-[353px] lg:h-[383px]">
              <img className="" src={hoodie} alt="hoodie" />
            </div>
            <div className="flex justify-between">
              {[...Array(3)].map((index) => (
                <div
                  key={index}
                  className="flex justify-center items-center  bg-[#F5F5F5] rounded-md w-[92px] h-[92px]"
                >
                  <img src={smallHoodie} alt="hoodie" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[22px]">Customize your hoodie to your taste</p>
              <textarea
                rows="4"
                name=""
                placeholder="Leave a comment"
                className="ring-[#B4A9A7] text-[#B4A9A7] rounded-[10px] px-2 py-6  w-full h-[96px] border border-[#EDE0DE] resize-none outline-none bg-[#F5F5F5] placeholder: text-justify"
                required
              ></textarea>
              <div className="flex justify-end ">
                <button className="w-[115px] h-[40px] rounded-lg bg-[#1D1B20]/10 text-[#201A19]/50 font-medium text-sm">
                  Comment{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[42px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[16px]">
                <p className=" text-[45px] font-semibold ">Hoodie Shirt</p>
                <p className="text-[#DF4425]  text-2xl"> ₦ 20,000.00 </p>
                <p className="text-[#7F7573]">
                  Hoodie shirt made with high quality fabric from USA. 100%
                  cotton fabric.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#7F7573]">Size</p>
                <div className="flex gap-6">
                  {sizes.map((size, index) => (
                    <button
                      onClick={() => {
                        if (selectedSize === size) {
                          setSelectedSize("");
                        } else {
                          setSelectedSize(size);
                        }
                      }}
                      className={`flex  justify-center items-center   font-medium text-sm rounded w-[32px] h-[32px] ${
                        selectedSize === size
                          ? "bg-[#DF4425] text-white"
                          : "bg-[#F5F5F5]"
                      }`}
                      key={size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-[#7F7573]">Color</p>
                <div className="flex gap-6">
                  {colors.map((color, index) => (
                    <button
                      onClick={() => {
                        setSelectedColor(color.name);
                      }}
                      style={{ backgroundColor: color.name }}
                      className={`flex ${
                        color[index.name]
                      }  justify-center items-center text-[#DF4425] text-[11.52px] font-medium text-sm rounded-[50%] w-[24px] h-[24px] `}
                      key={color.name}
                    >
                      {selectedColor === index ? <IoCheckmarkSharp /> : ""}
                    </button>
                  ))}
                </div>
                <input
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  className="hidden"
                  placeholder="Upload Logo(optional)"
                  type="file"
                  id="uploadFile"
                />
                <label
                  className="flex items-center gap-2 text-[#DF4425] hover:text-[#DF4425]/80 active:text-[#DF4425] font-medium text-sm cursor-pointer transition ease-in-out duration-150"
                  htmlFor="uploadFile"
                >
                  <MdOutlineUploadFile size={24} /> Upload Logo(optional)
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-[15px]">
                <button
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                    if (count <= 1) {
                      setShowModal(false);
                    }
                  }}
                  className={`flex justify-center items-center text-[#D0C4C2] w-[32px] h-[32px] ${
                    count <= 1
                      ? "bg-[#FFDAD5]"
                      : "bg-[#DF4425] active:opacity-80 transition duration-200 "
                  }   rounded`}
                >
                  <FaMinus />
                </button>
                <p className="text-[22px]">{count}</p>
                <button
                  onClick={() => {
                    if (count < 25) {
                      setCount(count + 1);
                    }
                  }}
                  className={`flex justify-center items-center text-[#D0C4C2] w-[32px] h-[32px] ${
                    count >= 25
                      ? "bg-[#FFDAD5]"
                      : "bg-[#DF4425] active:opacity-80 transition duration-200"
                  }   rounded`}
                >
                  <FaPlus />
                </button>
              </div>
              <button className="w-[161px] h-[62px] rounded-[10px] text-white text-sm hover:bg-[#DF4425]/80 active:bg-[#DF4425] bg-[#DF4425] transition-colors ease-in-out duration-200">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="flex justify-center items-center w-[25px] md:w-[40px] md:h-[40px] h-[25px]  lg:w-[56px] lg:h-[56px] bg-white rounded-[50%]"
        >
          <FaX />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
