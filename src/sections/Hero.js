import React from "react";
import TrangleAnim from "../components/animations/TrangleAnim";
import Typewriter from "typewriter-effect";
import BackgroundAnim from "../components/animations/BackgroundAnim";
import MainButton from "../components/buttons/MainButton";
import SocialMedia from "../components/SocialMedia";
// import Heroimg from "../components/Heroimg";
import RectangleAnim from "../components/animations/RectangleAnim";
import Heroimg from "../components/Heroimg";

function Hero() {
  return (
    <section className=" relative h-screen">
      {/* rectangle animation */}
      <RectangleAnim></RectangleAnim>
      {/* square animation */}

      <div className="container  relative bg-body  overflow-hidden h-full w-full">
        {/* Main flex box */}
        <div className="flex relative flex-col items-center sm:flex-row  flex-grow-[1] justify-center">
          {/* backround anim */}
          <div className="w-1/3 opacity-100 absolute top-[0%] sm:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
            <BackgroundAnim></BackgroundAnim>
          </div>
          {/* hero headings flex box */}
          <div className=" items-center sm:items-start flex gap-2 flex-col xl:gap-8 md:gap-4 w-full ">
            <div className="flex gap-2">
              <TrangleAnim></TrangleAnim>
              <div className="text-titleColor dark:text-darkTitleColor text-2xl sm:text-3xl font-bold">
                Hello,
              </div>
            </div>
            <div className="text-titleColor dark:text-darkTitleColor text-4xl sm:text-6xl font-bold">
              I'am Pranav
            </div>
            <span className="text-titleColor dark:text-darkTitleColor text-xl sm:text-3xl font-bold sm:min-h-[5rem]">
              <Typewriter
                options={{
                  strings: [
                    "Front End Web Developer",
                    "React-JS Developer",
                    "JavaScript Developer",
                    "Python Developer",
                    "Competitive Programmer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
            {/* button social media flex */}
            <div className="relative w-full items-center sm:items-start flex gap-2 flex-col xl:gap-8 md:gap-4">
              <MainButton
                btn__color="hsl(250, 70%, 96%)"
                btn__bgcolor="hsl(250, 69%, 61%)"
                btn__name="View Resume"
              ></MainButton>
              <SocialMedia></SocialMedia>
            </div>
          </div>
          {/* hero image */}
          <div className="pt-16 sm:pt-0 ">
            <Heroimg></Heroimg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
