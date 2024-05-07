import React from "react";
import About from "./components/About";
import Sales from "./components/Sales";
import Frequency from "./components/Frequency";

const Main = () => {
    return (
        <div className="w-full">
            <About />
            <Sales />
            <Frequency />
        </div>
    )
}

export default Main;