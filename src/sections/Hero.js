import React from "react";
import TrangleAnim from "../components/animations/TrangleAnim";
import Typewriter from "typewriter-effect";
import BackgroundAnim from "../components/animations/BackgroundAnim";
import MainButton from "../components/buttons/MainButton";
import SocialMedia from "../components/Hero/SocialMedia";
// import Heroimg from "../components/Heroimg";
import RectangleAnim from "../components/animations/RectangleAnim";
import Heroimg from "../components/Hero/Heroimg";
import WavingHand from "../components/animations/WavingHand";

function Hero() {
  return (
    <section className=" relative h-screen mt-0 pt-4 sm:pt-0">
      {/* rectangle animation */}
      <RectangleAnim></RectangleAnim>
      {/* square animation */}

      <div className="container  relative bg-body  overflow-hidden h-full p-4 sm:p-16">
        {/* Main flex box */}
        <div className="flex relative flex-col items-center sm:flex-row  flex-grow-[1] justify-center">
          {/* backround anim */}
          <div className="w-1/3 opacity-100 absolute top-[0%] sm:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
            <BackgroundAnim></BackgroundAnim>
          </div>
          {/* hero headings flex box */}
          <div className=" items-center sm:items-start flex gap-2 flex-col xl:gap-8 md:gap-4 w-full pt-2 sm:pt-0">
            <div className="flex gap-2">
              <div className=" section__subtitle font-bold">Hello</div>
              <WavingHand></WavingHand>
            </div>
            <div className="text-4xl lg:text-6xl font-bold text-center sm:text-left ">
              I'am Pranav
            </div>
            <span className=" text-xl sm:text-3xl font-bold sm:min-h-[5rem]">
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
          <div className="pt-8 sm:pt-0 ">
            <Heroimg></Heroimg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
