import React from "react";

import { BiCodeCurly } from "react-icons/bs";

function CodeIconAnim() {
  return (
    <div className=" static  text-blue-700   flex gap-1">
      <div className="animate-pulse text-xl sm:text-2xl font-bold">{"{"}</div>
      <div className="animate-pulse animation-delay-500 text-xl sm:text-2xl font-bold">
        {"}"}
      </div>
    </div>
  );
}

export default CodeIconAnim;
