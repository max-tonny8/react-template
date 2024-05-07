import React from "react";

const About = () => {
    return (
        <div className="relative bg-about bg-cover z-[90] bg-bottom h-[717px] max-sm:h-[600px]">
            <div className="max-lg:bottom-0 max-lg:right-0 z-[2] absolute max-lg:w-[350px] max-xl:w-[500px] max-2xl:w-[600px] max-2xl:bottom-0 max-xl:bottom-0">
                <img src="./image/dogimg.png" alt="AltAbout" className="w-full" />
            </div>
            <div className="flex justify-end items-center mx-auto max-w-[1440px] w-full h-full max-sm:h-auto">
                <div className="text-white z-10 flex flex-col pr-[155px] w-[50%] max-lg:w-full max-lg:px-10">
                    <p className="text-[70px] font-bold uppercase max-xl:text-[48px] max-sm:text-[36px] max-sm:font-bold">Mad Dogs</p>
                    <p className="text-[30px] font-semibold leading-normal max-xl:text-[24px] max-sm:text-[18px] max-sm:font-semibold">A sold-out collection launched in April 2022, consisting of 9,999 unique algorithmically generated dogs that are speeding around the Cardano blockchain with the meanest cars on the block. </p>
                    <p className="text-[24px] font-normal leading-normal mt-6 max-xl:text-[18px] max-sm:text-[14px] max-sm:font-normal">Our focus with our first launch was not just a brand in the virtual world, but rather a brand in the real world. Owning a Mad Dog gives you exclusive access to a plethora of benefits in both real and the virtual world.</p>
                    <div className="flex mt-[36px] max-lg:flex-col text-black">
                        <button className="text-center uppercase font-bold leading-normal text-[21px] bg-[#85FF10] h-[58px] w-[185px] max-md:text-[16px] max-md:font-normal max-md:h-[36px] max-md:w-[130px] max-lg:mb-[15px]">whitepaper</button>
                        <button className="ml-[40px] text-center uppercase font-bold leading-normal text-[21px] bg-[#85FF10] h-[58px] w-[185px] max-md:text-[16px] max-md:font-normal max-md:h-[36px] max-md:w-[130px] max-lg:ml-0">Ranking</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;