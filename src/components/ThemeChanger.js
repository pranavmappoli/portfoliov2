import React, { useEffect, useState } from "react";

import { FaSun, FaRegMoon, FaMoon } from "react-icons/fa";

function ThemeChanger() {
  const [dark, setDark] = useState(false);
  const root = window.document.documentElement;
  useEffect(() => {
    const localVal = localStorage.getItem("darkMode");
    console.log(localVal);
    if (localVal === "true") {
      root.classList.add("dark");
      setDark(true);
    } else {
      localStorage.setItem("darkMode", dark);
    }
  }, []);

  const changeTheme = () => {
    root.classList.toggle("dark");
    setDark((state) => !state);
    localStorage.setItem("darkMode", !dark);
  };
  return (
    <div
      onClick={changeTheme}
      className="fixed top-1/2 right-0 flex justify-center items-center w-11 h-11 rounded-full dark:bg-firstColor bg-darkContainerColor cursor-pointer"
    >
      {dark && <FaSun className="text-xl text-white"></FaSun>}
      {!dark && <FaMoon className="text-xl text-white"></FaMoon>}
    </div>
  );
}

export default ThemeChanger;
