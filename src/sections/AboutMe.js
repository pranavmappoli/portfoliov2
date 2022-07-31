import React from "react";
import Story from "../components/About Me/Story";
import LeetCode from "../components/About Me/LeetCode";

function AboutMe() {
  return (
    <section>
      <div className="section__title">About Me</div>
      <div className="container">
        {/* Flex-Main */}
        <div className="flex flex-col md:flex-row w-screen md:h-[95vh] gap-2 md:gap-0">
          {/* flex box  1 */}
          <div className=" md:w-[160%]  ">
            {/*  flex box about me */}
            <div className="flex flex-col gap-2 w-full h-full ">
              <div className="section__content bg-containerColor dark:bg-darkContainerColor md:max-h-[30%] md:m-2 rounded-lg md:shadow-lg p-2 ">
                <Story></Story>
              </div>
              <div className="bg-containerColor dark:bg-darkContainerColor md:h-full md:m-2 rounded-lg md:shadow-lg p-2">
                other details Lorem ipsum dolor sit amet consectetur adipisici
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              </div>
            </div>
          </div>
          {/*  flexbox 2 */}
          <div className=" flex flex-col gap-2  w-full">
            <div className="h-full bg-containerColor dark:bg-darkContainerColor md:m-2 rounded-lg md:shadow-lg p-2">
              {/* leetcode staus */}
              <LeetCode></LeetCode>
            </div>
            {/* Github status */}
            <div className="h-full bg-containerColor dark:bg-darkContainerColor md:m-2 rounded-lg md:shadow-lg p-2">
              github
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
