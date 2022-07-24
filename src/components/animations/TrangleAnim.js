import React from "react";

function TrangleAnim() {
  return (
    <div
      className="animate-bounce  relative w-0 h-0 sm:border-t-[20px] sm:border-t-transparent sm:border-l-[35px] sm:border-l-animGreen sm:border-b-[20px] sm:border-b-transparent
   border-t-[15px] border-t-transparent border-l-[25px] border-l-animGreen border-b-[15px] border-b-transparent
  before:absolute before:opacity-50 before:w-0 before:h-0 before:left-[-20px] before:-top-[15px] before:border-t-[15px] before:border-t-transparent before:border-l-[25px] before:border-l-animGreen before:border-b-[15px] before:border-b-transparent
  before:sm:border-t-[20px]  before:sm:border-l-[35px] before:sm:border-b-[20px] before:sm:-top-[20px] before:sm:-left-[28px]"
    ></div>
  );
}

export default TrangleAnim;
