import React, { useState } from "react";
import logo from "./images/logo.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-100vh",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ type: "spring", duration: 0.7 }}
      className="bg-[#F5F5F5]  h-[36px] font-['Rubik'] xl:w-[1223px] lg:h-[72px] rounded-xl flex justify-between items-center px-[19.5px] mt-7 mx-auto text-xs sticky top-5 z-50"
    >
      <Link to="/">
        {" "}
        <img className="h-[15px] md:h-[36px]" src={logo} alt="logo" />
      </Link>
      {search && (
        <div>
          <input type="text" />
          <button>Go</button>
        </div>
      )}
      <NavBar setSearch={setSearch} search={search} />
    </motion.div>
  );
};

export default Header;
