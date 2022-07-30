import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

function LeetCode() {
  const [progressValue, setProgressValue] = useState(0);
  const [progressInterval, setprogressInterval] = useState(null);
  const [totalsolvedInterval, settotalsolvedInterval] = useState(null);
  const [totalSolved, setTotalSolve] = useState(0);
  const totalSolvedEndValue = 265;
  const totalQuestions = 2356;
  const progressEndValue = 11;
  const speedProgress = 100;
  const speedSolved = 0;

  useEffect(() => {
    let progressI = setInterval(() => {
      setProgressValue((state) => state + 1);
    }, speedProgress);
    setprogressInterval(progressI);

    let totalSolvedI = setInterval(() => {
      setTotalSolve((state) => state + 1);
    }, speedSolved);
    settotalsolvedInterval(totalSolvedI);
  }, []);

  if (progressValue === progressEndValue) {
    clearInterval(progressInterval);
  }
  if (totalSolved === totalSolvedEndValue) {
    clearInterval(totalsolvedInterval);
  }
  return (
    <div>
      {/* title */}
      <div className="flex justify-left items-center gap-2 pb-4 section__section__contentTitle ">
        LeetCode
        <span className="text-yellow-500 font-bold text-xl">
          <SiLeetcode></SiLeetcode>
        </span>
      </div>
      {/* main flex */}
      <div className="flex justify-center  ">
        {/* round progress */}
        <div
          style={{
            background: `conic-gradient(
                hsl(250, 69%, 61%)${progressValue * 3.6}deg,
                hsla(250, 69%, 61%, 0.40) ${progressValue * 3.6}deg
                )`,
          }}
          className="w-[45%]  aspect-square rounded-full relative shadow-sm"
        >
          <div className="flex items-center flex-col  justify-center w-[93%] section__content bg-containerColor dark:bg-darkContainerColor aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-xl font-semibold ">{totalSolved}</span>
            <div className="h-[1px] w-[80%] bg-leetcodeBorderColor my-1"></div>
            <span className="  opacity-80 ">{totalQuestions}</span>
          </div>
        </div>
        <div className="bg-blue-500 w-full">progress bar</div>
      </div>
    </div>
  );
}

export default LeetCode;
