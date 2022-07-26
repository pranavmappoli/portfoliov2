import React from "react";

import { BiCodeCurly } from "react-icons/bs";

function CodeIconAnim() {
  return (
    <div className=" justify-center items-center  text-blue-700   flex">
      <div className="animate-pulse text-2xl sm:text-4xl animation-delay-100  ">
        {"<"}
      </div>
      <div className="animate-pulse animation-delay-200 text-2xl sm:text-2xl   ">
        {"/"}
      </div>
      <div className="animate-pulse  text-2xl sm:text-4xl animation-delay-300 ">
        {">"}
      </div>
    </div>
  );
}

export default CodeIconAnim;
