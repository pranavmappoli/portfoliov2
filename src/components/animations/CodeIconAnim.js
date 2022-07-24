import React from "react";

import { BiCodeCurly } from "react-icons/bs";

function CodeIconAnim() {
  return (
    <div className=" absolute bottom-[2%]  text-blue-700 sm:!bottom-1/3 lg:!bottom-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex gap-1">
      <div className="animate-pulse text-xl sm:text-2xl font-bold">{"{"}</div>
      <div className="animate-pulse animation-delay-500 text-xl sm:text-2xl font-bold">
        {"}"}
      </div>
    </div>
  );
}

export default CodeIconAnim;
