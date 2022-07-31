import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function LeetCode() {
  const [progressValue, setProgressValue] = useState(11.5);
  const [totalsolvedInterval, settotalsolvedInterval] = useState(null);
  const [totalSolved, setTotalSolve] = useState(0);
  const totalSolvedEndValue = 265;
  const totalQuestions = 2356;
  const speedSolved = 0;
  const easySolved = 71;
  const totalEasy = 586;
  const easyBeats = 84;
  const easySolvedPercnt = ((easySolved / totalEasy) * 100).toFixed(1);
  const mediumSolved = 161;
  const totalMedium = 1257;
  const mediumBeats = 92;
  const mediumSolvedPercnt = ((mediumSolved / totalMedium) * 100).toFixed(1);
  const hardSolved = 33;
  const totalHard = 517;
  const hardBeats = 87;
  const hardSolvedPercnt = ((hardSolved / totalHard) * 100).toFixed(1);

  useEffect(() => {
    let totalSolvedI = setInterval(() => {
      setTotalSolve((state) => state + 1);
    }, speedSolved);
    settotalsolvedInterval(totalSolvedI);
  }, []);

  if (totalSolved === totalSolvedEndValue) {
    clearInterval(totalsolvedInterval);
  }
  return (
    <div>
      {/* title */}
      <div className="flex justify-left items-center gap-2 pb-4 section__contentTitle ">
        LeetCode
        <span className="text-yellow-500 font-bold text-xl">
          <SiLeetcode></SiLeetcode>
        </span>
      </div>
      {/* main flex */}
      <div className="flex justify-center items-center gap-4 ">
        {/* round progress */}
        <motion.div
          initial={{
            background: `conic-gradient(
            hsl(250, 69%, 61%)${0}deg,
            hsla(250, 69%, 61%, 0.40) ${0}deg
            )`,
          }}
          animate={{
            background: `conic-gradient(
            hsl(250, 69%, 61%)${progressValue * 3.6}deg,
            hsla(250, 69%, 61%, 0.40) ${progressValue * 3.6}deg
            )`,
          }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="w-[45%]  aspect-square rounded-full relative shadow-sm"
        >
          <div className="flex items-center flex-col  justify-center w-[93%] section__content about__content  bg-containerColor dark:bg-darkContainerColor aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-xl font-semibold ">{totalSolved}</span>
            <div className="h-[1px] w-[80%] bg-leetcodeBorderColor my-1"></div>
            <span className="  opacity-80 ">{totalQuestions}</span>
          </div>
        </motion.div>
        {/* bars */}
        <div className=" w-full flex flex-col gap-4 md:gap-2 lg:gap-3 justify-center items-center">
          {/* bar 1 */}
          <div className="flex flex-col gap-1 w-full section__content about__content ">
            {/* heading of bar */}
            <div className="flex justify-between items-end pb-2">
              <span>Easy</span>
              <span>
                <span className="text-titleColor dark:text-darkTitleColor sm:text-xl md:text-lg lg:text-xl">
                  {easySolved}
                </span>
                /{totalEasy}
              </span>
              <span>Beats: {easyBeats}%</span>
            </div>
            <div className="w-[100%] h-1 bg-leetcodeBorderColor rounded-lg">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${easySolvedPercnt}%` }}
                className=" h-1 bg-blue-500 rounded-lg relative"
                transition={{ duration: 1.5, ease: "easeIn" }}
              >
                <span className="text-[0.5rem] md:text-[0.25rem] lg:text-[0.5rem]  text-white absolute right-0 translate-x-full -translate-y-1/2 w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6    bg-blue-400 rounded-full flex justify-center items-center">
                  {easySolvedPercnt}%
                </span>
              </motion.div>
            </div>
          </div>

          {/* bar 2 medium */}
          <div className="flex flex-col gap-1 w-full section__content about__content ">
            {/* heading of bar */}
            <div className="flex justify-between items-end pb-2">
              <span>Medium</span>
              <span>
                <span className="text-titleColor dark:text-darkTitleColor text-xl">
                  {mediumSolved}
                </span>
                /{totalMedium}
              </span>
              <span>Beats: {mediumBeats}%</span>
            </div>
            <div className="w-[100%] h-1 bg-leetcodeBorderColor rounded-lg">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${mediumSolvedPercnt}%` }}
                className=" h-1 bg-yellow-500 rounded-lg relative"
                transition={{ duration: 1.5, ease: "easeIn" }}
              >
                <span className="text-[0.5rem] md:text-[0.25rem] lg:text-[0.5rem]  text-white absolute right-0 translate-x-full -translate-y-1/2 w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6   bg-yellow-400 rounded-full flex justify-center items-center">
                  {mediumSolvedPercnt}%
                </span>
              </motion.div>
            </div>
          </div>

          {/* bar 3 hard */}
          <div className="flex flex-col gap-1 w-full section__content about__content">
            {/* heading of bar */}
            <div className="flex justify-between items-end pb-2">
              <span>Hard</span>
              <span>
                <span className="text-titleColor dark:text-darkTitleColor text-xl">
                  {hardSolved}
                </span>
                /{totalHard}
              </span>
              <span>Beats: {hardBeats}%</span>
            </div>
            <div className="w-[100%] h-1 bg-leetcodeBorderColor rounded-lg">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${hardSolvedPercnt}%` }}
                className=" h-1 bg-red-500 rounded-lg relative"
                transition={{ duration: 1.5, ease: "easeIn" }}
              >
                <span className="text-[0.5rem] md:text-[0.25rem] lg:text-[0.5rem]  text-white absolute right-0 translate-x-full -translate-y-1/2 w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6   bg-red-400 rounded-full flex justify-center items-center">
                  {hardSolvedPercnt}%
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeetCode;
