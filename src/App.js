import { Container } from "postcss";
import React from "react";
import Hero from "./sections/Hero";
import ThemeChanger from "./components/ThemeChanger";
import Navbar from "./components/Navbar";
import TestContainer from "./components/TestContainer";

function App() {
  return (
    <div className="font-popins w-screen bg-bodyColor dark:bg-darkBodyColor text-titleColor dark:text-darkTitleColor ">
      <Navbar></Navbar>
      <ThemeChanger></ThemeChanger>
      <Hero></Hero>
      <TestContainer></TestContainer>
    </div>
  );
}

export default App;
