import React from "react";
import Story from "../components/About Me/Story";

function AboutMe() {
  return (
    <section>
      <div className="section__title">About Me</div>
      <div className="container">
        {/* Flex-Main */}
        <div className="flex flex-col sm:flex-row w-screen sm:h-[95vh] ">
          {/* flex box  1 */}
          <div className=" sm:w-[160%]  ">
            {/*  flex box about me */}
            <div className="flex flex-col gap-2 w-full h-full ">
              <div className="section__content bg-containerColor dark:bg-darkContainerColor sm:max-h-[30%] sm:m-2 rounded-lg sm:shadow-lg p-2 ">
                <Story></Story>
              </div>
              <div className="bg-containerColor dark:bg-darkContainerColor sm:h-full sm:m-2 rounded-lg sm:shadow-lg p-2">
                other details Lorem ipsum dolor sit amet consectetur adipisici
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              </div>
            </div>
          </div>
          {/*  flexbox 2 */}
          <div className=" flex flex-col gap-2  w-full">
            {/* leetcode staus */}
            <div className="h-full bg-containerColor dark:bg-darkContainerColor sm:m-2 rounded-lg sm:shadow-lg p-2">
              leetcode
            </div>
            {/* Github status */}
            <div className="h-full bg-containerColor dark:bg-darkContainerColor sm:m-2 rounded-lg sm:shadow-lg p-2">
              {" "}
              github
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
