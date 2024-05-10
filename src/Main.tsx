import React from "react";
import About from "./components/pages/About";
import Sales from "./components/pages/Sales";
import Frequency from "./components/pages/Frequency";
import images from "./components/items/Image";

const Main = () => {
    return (
        <div className="w-full">
            <About />
            <Sales images={images} />
            <Frequency />
        </div>
    )
}

export default Main;