import React from "react";

import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="absolute left-0 top-1/3 sm:relative flex flex-col sm:flex-row gap-2 mt-4 mb-4 ">
      <a
        className="hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor cursor-pointer"
        href="mailto:pranavmappoli@gmail.com"
        target="_blank"
      >
        <BiMailSend />
      </a>
      <a
        className="hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor cursor-pointer"
        href="https://www.linkedin.com/in/pranavmapppoli/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor cursor-pointer"
        href="https://wa.me/919746542410?text=Hai%2C%0Ai%20viewed%20your%20profile%2C%20can%20we%20have%20a%20chat%3F"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
      <a
        className="hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor cursor-pointer"
        href="https://github.com/pranavmappoli"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        className="hover:bg-bodyColor hover:text-firstColor dark:hover:bg-darkBodyColor dark:hover:text-firstColor transition-all duration-300   text-white flex justify-center items-center w-8 h-8 rounded-full dark:bg-firstColor bg-darkContainerColor cursor-pointer"
        href="https://www.instagram.com/pranav_mm"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default SocialMedia;
