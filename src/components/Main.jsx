import React, { useEffect, useState } from "react";
import Top from "./Top";
import { FaCartShopping } from "react-icons/fa6";
import Product from "./Product/Product";
import Modal from "./CartModal";
import CartListModal from "./CartListModal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoadind, setIsLoading] = useState(true);
  const [products, setProducts] = useState(Object);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [file, setFile] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fechtData = async () => {
      try {
        const response = await fetch(
          "https://mie-store-backend.onrender.com/api/products"
        );
        const result = await response.json();
        const items = result?.reduce((acc, product) => {
          const { category } = product;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        }, {});
        setProducts(items);

        // const groupedProducts = products?.reduce((acc, product) => {
        //   const { category } = product;
        // if (!acc[category]) {
        //   acc[category] = [];
        // }
        //   acc[category].push(product);
        //   return acc;
        // }, {});
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fechtData();
  }, []);

  console.log(products);
  return (
    <>
      <div className=" relative xl:w-[1223px] mx-auto mt-[31px] ">
        {showModal && (
          <Modal
            products={products?.product}
            setShowModal={setShowModal}
            setFile={setFile}
          />
        )}
        {showCartList && (
          <CartListModal setShowCartList={setShowCartList} setFile={setFile} />
        )}
        {file}
        <Top />
        <div className="flex justify-between items-center mt-20 px-2 xl:px-0">
          <p className=" text-3xl font-['OldStandardTT']">
            Brand Your Packages{" "}
          </p>
          <button
            onClick={() => setShowCartList(true)}
            className="bg-[#DF4425] hover:bg-[#df4d25]/95 active:bg-[#DF4425]/80 transition duration-300 ease-in-out text-white flex justify-center items-center w-[232px] h-[40px] gap-2 rounded-xl"
          >
            <FaCartShopping />
            Cart List
          </button>
        </div>
        <div className="xl:flex justify-between my-10">
          <div className="flex xl:flex-col px-1 my-5 lg:my-0 font-['OldStandardTT'] gap-2 lg:gap-[14px]">
            {Object.entries(products).map(([category, products]) => (
              <button
                key={category}
                onClick={() => {
                  if (selectedFilter === category) {
                    setSelectedFilter("");
                  } else {
                    setSelectedFilter(category);
                  }
                }}
                className={`text-[10px] md:text-base lg:text-[20px] px-2 md:px-4 text-left rounded-md h-10 lg:h-[77px] lg:w-[253px] ${
                  selectedFilter === category
                    ? "bg-[#DF4425] text-white"
                    : "bg-[#FFEDEA]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {isLoadind ? (
            <div className="flex flex-wrap mt-20 ml-10  gap-10">
              {[...Array(8)].map((items) => (
                <div
                  key={items}
                  className="bg-slate-300 w-[200px] h-[347px] rounded-md  animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <>
              {Object.entries(products).map(([category, product]) => (
                // console.log(category,product);
                <div
                  key={category}
                  className="flex  flex-col gap-[52px] px-2  xl:px-0"
                >
                  {product.map((item, index) => (
                    <Product
                      key={index}
                      products={product}
                      name={category}
                      setShowmodal={setShowModal}
                    />
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
