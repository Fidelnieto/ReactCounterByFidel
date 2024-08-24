import React from "react";
import { SecondCounter } from "./SecondsCounter";
import ReloadButton from "./button";

// const seconds = prompt("Which number you want to reach?");

//create your first component
const Home = () => {
  return (
    <div className="">
      <SecondCounter seconds={5} />
      {/* <ReloadButton /> */}
    </div>
  );
};

export default Home;
