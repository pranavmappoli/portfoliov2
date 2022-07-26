import { Container } from "postcss";
import React from "react";
import Hero from "./sections/Hero";
import ThemeChanger from "./components/ThemeChanger";

function App() {
  return (
    <div className="font-popins w-screen bg-bodyColor dark:bg-darkBodyColor">
      <ThemeChanger></ThemeChanger>
      <Hero></Hero>
    </div>
  );
}

export default App;
