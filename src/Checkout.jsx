import React, { useState } from "react";
import CartProduct from "./components/Product/CartProduct";

const Checkout = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (inputValue === "") {
      e.target.value = "";
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };
  return (
    <div
      className="
    flex flex-col gap-[84px] xl:w-[1223px] mx-auto  "
    >
      <div className="text-center">
        <p className="font-semibold text-[45px]">Checkout</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[32px]">
          <p className="font-medium text-[32px] text-['Rubik']">
            Contact Address
          </p>
          <div className="w-[447px]">
            <form
              action="POST"
              onSubmit={(e) => {
                e.preventDefault();
                e.target.value = "";

                console.log(inputValue);
              }}
              className="flex flex-col gap-[18px] "
            >
              <section className="flex justify-between ">
                <input
                  onChange={handleChange}
                  className="w-[206px] h-[52px] outline-none rounded-lg outline-[#F3E5E3] hover:outline-[#DF4425] pl-[14px] transition-colors duration-400 ease-in-out"
                  type="text"
                  name="first name"
                  placeholder="First Name"
                  required
                />
                <input
                  onChange={handleChange}
                  className="w-[206px] h-[52px] outline-none rounded-lg outline-[#F3E5E3] hover:outline-[#DF4425] pl-[14px]"
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  required
                />
              </section>
              <input
                onChange={handleChange}
                className="h-[52px] outline-none rounded-lg outline-[#F3E5E3] hover:outline-[#DF4425] pl-[14px]"
                type="text"
                name="company name"
                placeholder="Company Name(optional)"
              />

              <input
                onChange={handleChange}
                onInput={(e) => {
                  const { value } = e.target;
                  e.target.value = value.replace(/[^0-9]/g, "");
                }}
                className="h-[52px]  outline-none rounded-lg outline-[#F3E5E3] hover:outline-[#DF4425] pl-[14px]"
                type="tel"
                name="phone number"
                maxLength={11}
                placeholder="Phone Number"
                required
              />

              <input
                onChange={handleChange}
                className="h-[52px] outline-none rounded-lg  outline-[#F3E5E3] hover:outline-[#DF4425] pl-[14px]"
                type="email"
                name="email address"
                placeholder="Email Address"
                required
              />
              <input
                onChange={handleChange}
                className="h-[52px] outline-none rounded-lg  outline-[#F3E5E3] hover:outline-[#DF4425] pl-[14px]"
                type="text"
                name="shipping address"
                placeholder="Shipping Address"
                required
              />
              <button
                type="submit"
                className="text-white h-[62px] mt-[34px] outline-none rounded-[10px]  bg-[#DF4425] pl-[14px] active:opacity-80 transition duration-200 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[672px]">
          <p className="font-medium text-[32px] text-['Rubik']">
            Order Summary
          </p>
          <CartProduct />
          <div className="flex justify-end">
            <button
              disabled={false}
              onClick={() => console.log("clicked")}
              className="flex items-center justify-center text-white md:text-2xl text-center w-[255px] h-[62px] text-sm bg-[#DF4425] rounded-[10px] active:opacity-80 transition duration-200  mt-[68px] mb-[32px] disabled:bg-slate-300 disabled:cursor-not-allowed disabled:transition-none"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
