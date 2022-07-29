import React from "react";

import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="absolute -left-[calc(2rem-5px)] top-1/3 sm:static flex flex-col sm:flex-row gap-2 mt-4 mb-4 ">
      <a
        className="group hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor md:cursor-pointer"
        href="mailto:pranavmappoli@gmail.com"
        target="_blank"
      >
        <div className="transition-all ease-linear group-hover:scale-150">
          <BiMailSend />
        </div>
      </a>
      <a
        className="group hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor md:cursor-pointer"
        href="https://www.linkedin.com/in/pranavmapppoli/"
        target="_blank"
      >
        <div className="transition-all ease-linear group-hover:scale-150">
          <FaLinkedinIn />
        </div>
      </a>
      <a
        className="group hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor md:cursor-pointer"
        href="https://wa.me/919746542410?text=Hai%2C%0Ai%20viewed%20your%20profile%2C%20can%20we%20have%20a%20chat%3F"
        target="_blank"
      >
        <div className="transition-all ease-linear group-hover:scale-150">
          <FaWhatsapp />
        </div>
      </a>
      <a
        className="group hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor md:cursor-pointer"
        href="https://github.com/pranavmappoli"
        target="_blank"
      >
        <div className="transition-all ease-linear group-hover:scale-150">
          <FaGithub />
        </div>
      </a>
      <a
        className="group hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor md:cursor-pointer"
        href="https://www.instagram.com/pranav_mm"
        target="_blank"
      >
        <div className="transition-all ease-linear group-hover:scale-150">
          <BsInstagram />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;
