import React, { useState, useRef, useEffect } from "react";
import pranavimg from "../assets/images/pranav.jpg";
import {
  SiMongodb,
  SiReact,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";

function Heroimg() {
  const [rotor, setRotor] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    console.log(containerWidth);
    setContainerWidth(~~(+ref.current.offsetWidth / 2));
  }, [ref.current]);

  const rotorActivate = () => {
    setRotor((prev) => !prev);
  };

  return (
    <div ref={ref} className="flex relative items-center justify-center">
      <div
        className={
          (rotor &&
            `h-full w-full animate-spin animation-duration-5000 opacity-100 `) ||
          (!rotor && `opacity-0 h-full w-full`)
        }
      >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#aba5a5"
            d="M256 16c-30 0-50 20-50 40 0 20.478 10.487 33.113 22.063 52.625-20.646 3.89-39.81 11.992-56.532 23.406-5.608-21.973-7.116-38.335-21.593-52.81-14.14-14.143-42.443-14.152-63.656 7.06-21.212 21.214-21.204 49.515-7.06 63.657 14.476 14.478 30.837 15.985 52.81 21.594-11.413 16.724-19.516 35.887-23.405 56.532C89.113 216.488 76.478 206 56 206c-20 0-40 20-40 50s20 50 40 50c20.478 0 33.113-10.487 52.625-22.063 3.89 20.646 11.992 39.81 23.406 56.532-21.973 5.608-38.335 7.116-52.81 21.592-14.143 14.142-14.152 42.444 7.06 63.657 21.214 21.212 49.515 21.204 63.657 7.06 14.478-14.476 15.985-30.837 21.594-52.81 16.724 11.413 35.887 19.516 56.532 23.405C216.488 422.887 206 435.522 206 456c0 20 20 40 50 40s50-20 50-40c0-20.478-10.487-33.113-22.063-52.625 20.646-3.89 39.81-11.992 56.532-23.406 5.608 21.973 7.116 38.335 21.592 52.81 14.142 14.143 42.444 14.152 63.657-7.06 21.212-21.214 21.204-49.515 7.06-63.658-14.476-14.477-30.837-15.984-52.81-21.593 11.413-16.724 19.516-35.887 23.405-56.533C422.887 295.512 435.522 306 456 306c20 0 40-20 40-50s-20-50-40-50c-20.478 0-33.113 10.487-52.625 22.063-3.89-20.646-11.992-39.81-23.406-56.532 21.973-5.608 38.335-7.116 52.81-21.593 14.143-14.14 14.152-42.443-7.06-63.656-21.214-21.212-49.515-21.204-63.658-7.06-14.477 14.476-15.984 30.837-21.593 52.81-16.724-11.413-35.887-19.516-56.533-23.405C295.512 89.113 306 76.478 306 56c0-20-20-40-50-40zm0 180c16.568 0 31.58 6.705 42.438 17.563C309.294 224.42 316 239.433 316 256c0 16.568-6.705 31.58-17.563 42.438C287.58 309.294 272.567 316 256 316c-16.568 0-31.58-6.705-42.438-17.563C202.706 287.58 196 272.567 196 256c0-16.568 6.705-31.58 17.563-42.438C224.42 202.706 239.433 196 256 196z"
          />
        </svg>
      </div>

      <div className="  rounded-full absolute w-[calc(50%+15%)] h-[calc(50%+15%)] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 394 395"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={!rotor ? `animate-shake ` : ""}
        >
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image href={pranavimg} width="100%" height="100%" />
            </pattern>
          </defs>
          <path
            d="M197.008 0.00570907C202.734 0.505709 205.5 33.3882 222.585 35.5088C239.67 37.6294 252.9 6.28943 257.881 9.64757C262.862 13.0057 254.127 42.1287 271.236 51.3172C288.345 60.5057 307.755 34.253 312.796 37.6294C317.836 41.0057 298.53 71.7677 312.621 81.3867C326.712 91.0057 350.536 73.9183 356.376 81.212C362.216 88.5057 331.752 105.042 342.689 122.774C353.627 140.506 382.446 126.753 384.357 136.129C386.267 145.506 356.495 151.349 358.497 171.427C360.498 191.506 394.285 187.506 393.998 197.006C393.712 206.506 364.512 204.663 358.497 222.584C352.481 240.506 387.6 248.758 384.357 257.882C381.114 267.006 351.794 258.47 342.689 271.238C333.584 284.006 361.13 305.593 356.376 312.799C351.622 320.006 326.017 300.744 312.621 312.625C299.225 324.506 317.204 350.258 312.796 356.382C308.387 362.506 286.482 329.006 271.236 342.694C255.99 356.382 266.93 379.222 257.881 384.364C248.832 389.506 239.286 358.503 222.585 358.503C205.884 358.503 205.311 394.006 197.008 394.006C188.704 394.006 189.947 366.5 171.43 358.503C152.914 350.506 142.833 389.222 136.134 384.364C129.435 379.506 137.884 355.383 122.779 342.694C107.675 330.006 87.4051 361.758 81.2194 356.382C75.0337 351.006 94.3397 326.744 81.3941 312.625C68.4484 298.506 42.9061 319.593 37.6388 312.799C32.3715 306.006 58.8275 290.47 51.326 271.238C43.8246 252.006 12.7143 268.758 9.65835 257.882C6.60239 247.006 37.8061 242.163 35.5183 222.584C33.2306 203.006 0.875917 208.006 0.016946 197.006C-0.842025 186.006 31.2206 192.849 35.5183 171.427C39.816 150.006 7.84669 147.253 9.65835 136.129C11.47 125.006 42.5068 140.042 51.326 122.774C60.1453 105.506 32.8847 90.4183 37.6388 81.212C42.393 72.0057 67.1387 97.2677 81.3941 81.3867C95.6494 65.5057 77.9563 39.7499 81.2194 37.6294C84.4825 35.5088 109.424 59.6287 122.779 51.3172C136.134 43.0057 130.235 9.64757 136.134 9.64757C142.034 9.64757 151.865 39.0119 171.43 35.5088C190.995 32.0057 191.281 -0.494291 197.008 0.00570907Z"
            fill="url(#img1)"
          />
        </svg>
      </div>
      {/* button cover */}
      <div
        onClick={rotorActivate}
        className=" cursor-pointer absolute  w-[calc(50%+10%)] h-[calc(50%+10%)] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent z-10"
      ></div>

      {/* icons */}
      <div
        className={
          rotor
            ? `w-full h-full absolute left-0 top-0  animate-spin animation-duration-5000`
            : `opacity-0`
        }
      >
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*0)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-orange-500">
            <SiHtml5></SiHtml5>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*1)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-blue-500">
            <SiReact></SiReact>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*2)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-yellow-300">
            <TbBrandJavascript></TbBrandJavascript>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*3)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-green-500">
            <SiMongodb></SiMongodb>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*4)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-blue-500 pl-0 sm:pl-1">
            <SiCss3></SiCss3>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*5)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-white md:pl-1">
            <SiGithub></SiGithub>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*6)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-green-600">
            <IoLogoNodejs></IoLogoNodejs>
          </div>
        </div>
        <div
          style={{ transformOrigin: `${containerWidth - 15}px` }}
          className={`left-[11px] sm:left-[15px] right-0 top-1/2  -translate-y-1/2 absolute w-8 text-3xl lg:text-4xl rounded-full h-8  rotate-[calc((360deg/8)*7)]`}
        >
          <div className="flex items-center justify-center w-full h-full  text-blue-500">
            <SiPython></SiPython>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
