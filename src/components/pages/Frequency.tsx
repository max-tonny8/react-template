import React from "react";
import FrequencyItem from "../items/FrequencyItem";

const Frequency = () => {
    const frequencyList = [
        {
            title: "When did Mad Dogs release?",
            content: "The first collection, Mad Dogs, was released in April of 2022. ",
        },
        {
            title: "What was the mint price?",
            content: "The mint price was 30 ADA for both Whitelist and the Public sale. ",
        },
        {
            title: "What is the total supply of Mad Dogs?",
            content: "The total supply of Mad Dog is 9,999. ",
        },
        {
            title: "What is the main utility of a Mad Dog?",
            content: "There are many different utilities you acquire with holding a Mad Dog. It is your ticket to play our game MD Racing which V1.01 will be released in November! Some other utilities include royalties paid out monthly from collection volume, MD Token accumulation, improvements to cars statistics, in-game achievements for MD Tokens and NFT airdrops, WL opportunities, and holder role benefits. ",
        }
    ]
    
    return (
        <div className="w-full bg-black">
            <div className="flex px-[122px] max-xl:px-[25px] mx-auto">
                <div className="w-full flex-col text-white pb-[79px] max-lg:pb-[50px] max-sm:pb-[35px]">
                    <div className="text-center pt-[95px] max-lg:pt-[70px] max-sm:pt-[50px] pb-[28px] max-lg:pb-[20px] max-sm:pb-[13px]">
                        <p className="text-[70px] font-bold uppercase max-md:text-[36px]">FREQUENTLY ASKED QUESTIONS</p>
                    </div>
                    {frequencyList.map((item, index) => (
                        <FrequencyItem title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Frequency;