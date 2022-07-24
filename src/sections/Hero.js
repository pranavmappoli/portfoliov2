import React from "react";
import TrangleAnim from "../components/animations/TrangleAnim";
import Typewriter from "typewriter-effect";
import BackgroundAnim from "../components/animations/BackgroundAnim";
import MainButton from "../components/buttons/MainButton";
import SocialMedia from "../components/SocialMedia";
import Heroimg from "../components/Heroimg";
import RectangleAnim from "../components/animations/RectangleAnim";
import SquareAnim from "../components/animations/SquareAnim";
import CodeIconAnim from "../components/animations/CodeIconAnim";

function Hero() {
  return (
    <section>
      <header className="bg-body min-h-screen overflow-hidden pt-2 sm:pt-4">
        {/* rectangle animation */}
        <RectangleAnim></RectangleAnim>
        {/* square animation */}
        <SquareAnim></SquareAnim>
        {/* code icon  animation */}
        <CodeIconAnim></CodeIconAnim>
        <div className="container  relative ">
          {/* background animation */}
          <div className="w-1/3 opacity-50 absolute top-0 sm:top-0  left-1/2 -translate-x-1/2 sm:opacity-100">
            <BackgroundAnim></BackgroundAnim>
          </div>

          {/* Main flex box */}
          <div className="flex flex-col items-center sm:flex-row  lg:pl-16 lg:pr-16 ">
            {/* hero headings flex box */}
            <div className=" items-center sm:items-start flex gap-2 flex-col xl:gap-8 md:gap-4 w-full">
              <div className="flex gap-2">
                <TrangleAnim></TrangleAnim>
                <div className="text-titleColor dark:text-darkTitleColor text-2xl sm:text-3xl font-bold">
                  Hello,
                </div>
              </div>
              <div className="text-titleColor dark:text-darkTitleColor text-4xl sm:text-6xl font-bold">
                I'am Pranav
              </div>
              <span className="text-titleColor dark:text-darkTitleColor text-xl sm:text-3xl font-bold ">
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

              <MainButton
                btn__color="hsl(250, 70%, 96%)"
                btn__bgcolor="hsl(250, 69%, 61%)"
                btn__name="View Resume"
              ></MainButton>
              <SocialMedia></SocialMedia>
            </div>
            {/* hero image */}
            <div className="w-1/2 mt-4">
              <Heroimg></Heroimg>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Hero;
