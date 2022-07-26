import { Container } from "postcss";
import React from "react";
import Hero from "./sections/Hero";
import ThemeChanger from "./components/ThemeChanger";
import Navbar from "./components/Navbar";
import TestContainer from "./components/TestContainer";

function App() {
  return (
    <div className=" font-popins w-screen bg-bodyColor dark:bg-darkBodyColor">
      <Hero></Hero>
      {/* <TestContainer></TestContainer> */}
      <ThemeChanger></ThemeChanger>
    </div>
  );
}

export default App;
