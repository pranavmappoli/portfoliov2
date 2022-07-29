import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiHome } from "react-icons/bi";
import { BsPerson, BsTools } from "react-icons/bs";
import { ImMenu4 } from "react-icons/im";
import {
  AiOutlineCloseCircle,
  AiOutlineTool,
  AiOutlineFundProjectionScreen,
  AiOutlineProject,
} from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { TbCertificate } from "react-icons/tb";
import { SiWebmoney } from "react-icons/si";
import { IoGameControllerOutline } from "react-icons/io5";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const navHandler = () => {
    setOpenNav((state) => !state);
  };
  // animations
  const variants = {
    open: { y: 0 },
    closed: { y: "10%" },
  };
  return (
    <div className="fixed pt-2 pb-4  flex justify-between items-center max-h-16 bottom-0 md:top-0 w-screen  z-50 bg-bodyColor dark:bg-darkBodyColor">
      {/* logo */}
      <div className=" opacity-40 flex items-center justify-center font-bold text-4xl py-4 px-4 z-50">
        <SiWebmoney></SiWebmoney>
      </div>

      {/* Menu button */}
      <div
        onClick={navHandler}
        className="transition-all z-50 hover:text-firstColor opacity-80 md:cursor-pointer font-bold text-4xl  py-4 px-8  flex items-center justify-start md:hidden"
      >
        {!openNav ? (
          <CgMenuGridO></CgMenuGridO>
        ) : (
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        )}
      </div>

      {/* nav list */}
      <motion.div
        className={
          openNav
            ? `md:static fixed  bottom-14 left-0 `
            : "md:static md:block hidden  bottom-14 left-0 "
        }
        animate={openNav ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <ul className="relative z-[49] md:h-full md:w-full w-screen grid grid-cols-3 gap-x-4 justify-center items-center shadow-inner font-medium md:font-semibold md:grid-cols-6  h-[30vh] pl-4 pr-4 bg-bodyColor dark:bg-darkBodyColor rounded-t-2xl md:rounded-none md:shadow-none">
          <li>
            <a href="">
              <div className="md:cursor-pointer md:hover:border-b-2 py-2 border-opacity-20  border-firstColor hover:text-firstColor transition-all flex flex-col gap-1 opacity-80 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <BiHome></BiHome>
                </div>
                <span>Home</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="md:cursor-pointer md:hover:border-b-2 py-2 border-opacity-20  border-firstColor hover:text-firstColor transition-all flex flex-col gap-1 opacity-80 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <BsPerson></BsPerson>
                </div>
                <span>About Me</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="md:cursor-pointer md:hover:border-b-2 py-2 border-opacity-20  border-firstColor hover:text-firstColor transition-all flex flex-col gap-1 opacity-80 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <BsTools></BsTools>
                </div>
                <span>Experience</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="md:cursor-pointer md:hover:border-b-2 py-2 border-opacity-20  border-firstColor hover:text-firstColor transition-all flex flex-col gap-1 opacity-80 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen>
                </div>
                <span>Projects</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="md:cursor-pointer md:hover:border-b-2 py-2 border-opacity-20  border-firstColor hover:text-firstColor transition-all flex flex-col gap-1 opacity-80 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <TbCertificate></TbCertificate>
                </div>
                <span>Certificates</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="md:cursor-pointer md:hover:border-b-2 py-2 border-opacity-20  border-firstColor hover:text-firstColor transition-all flex flex-col gap-1 opacity-80 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <IoGameControllerOutline></IoGameControllerOutline>
                </div>
                <span>Games</span>
              </div>
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
