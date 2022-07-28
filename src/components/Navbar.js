import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { BsPerson, BsTools } from "react-icons/bs";
import { ImMenu4 } from "react-icons/im";
import {
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
  return (
    <div className="fixed px-4  flex justify-between items-center max-h-16 bottom-0 md:top-0 w-screen  z-50 bg-bodyColor dark:bg-darkBodyColor">
      {/* logo */}
      <div className=" opacity-40 flex items-center justify-center font-bold text-4xl py-2 px-4">
        <SiWebmoney></SiWebmoney>
      </div>
      {/* Menu button */}
      <div
        onClick={navHandler}
        className=" hover:text-firstColor cursor-pointer font-bold text-4xl  py-2 px-8  flex items-center justify-start md:hidden"
      >
        <CgMenuGridO></CgMenuGridO>
      </div>
      {/* nav list */}
      <div
        className={
          openNav
            ? `md:static fixed  bottom-12 left-0 opacity-100 `
            : "md:static fixed  bottom-12 left-0 opacity-0 md:opacity-100"
        }
      >
        <ul className="md:h-full md:w-full w-screen grid grid-cols-3 gap-x-4 justify-center items-center shadow-inner font-semibold md:grid-cols-6  h-[30vh] pl-4 pr-4 bg-bodyColor dark:bg-darkBodyColor rounded-t-2xl md:rounded-none md:shadow-none">
          <li>
            <a href="">
              <div className="hover:text-firstColor transition-all flex flex-col gap-1 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <BiHome></BiHome>
                </div>
                <span>Home</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="hover:text-firstColor transition-all flex flex-col gap-1 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <BsPerson></BsPerson>
                </div>
                <span>About Me</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="hover:text-firstColor transition-all flex flex-col gap-1 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <BsTools></BsTools>
                </div>
                <span>Experience</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="hover:text-firstColor transition-all flex flex-col gap-1 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen>
                </div>
                <span>Projects</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="hover:text-firstColor transition-all flex flex-col gap-1 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <TbCertificate></TbCertificate>
                </div>
                <span>Certificates</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="hover:text-firstColor transition-all flex flex-col gap-1 md:flex-row items-center justify-center">
                <div className=" flex  items-center justify-center font-bold md:text-2xl text-4xl">
                  <IoGameControllerOutline></IoGameControllerOutline>
                </div>
                <span>Games</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
