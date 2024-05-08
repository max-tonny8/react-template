import React from "react";
import About from "./components/pages/About";
import Sales from "./components/pages/Sales";
import Frequency from "./components/pages/Frequency";

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