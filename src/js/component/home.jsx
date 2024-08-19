import React from "react";
import {SecondCounter} from "./SecondsCounter";
import ReloadButton from "./button";

const seconds = prompt("Ingrese numero")

//create your first component
const Home = () => {

  return (
    <div className="">
      <SecondCounter seconds={seconds}/>
      <ReloadButton />
    </div>
  );
};

export default Home;
