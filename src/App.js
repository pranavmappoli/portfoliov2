import { Container } from "postcss";
import React from "react";
import Hero from "./sections/Hero";
import ThemeChanger from "./components/ThemeChanger";
import Navbar from "./components/Navbar";
import TestContainer from "./components/TestContainer";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <div className="font-popins w-screen bg-bodyColor dark:bg-darkBodyColor text-titleColor dark:text-darkTitleColor ">
      <ThemeChanger></ThemeChanger>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TestContainer></TestContainer>
    </div>
  );
}

export default App;
