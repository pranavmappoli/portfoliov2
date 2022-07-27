import React from "react";

function Navbar() {
  return (
    <div className="fixed bottom-0 sm:top-0 w-screen h-8 z-50 bg-bodyColor dark:bg-darkBodyColor">
      {/* logo */}
      <div className="flex"></div>
      {/* nav list */}
      <div className="flex">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
