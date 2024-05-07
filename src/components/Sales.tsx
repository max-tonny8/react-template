import React from "react";

const Sales = () => {
    return (
        <div className="w-full flex-col pt-[112px] bg-black">
            <p className="font-bold uppercase text-[65px] text-white text-center max-sm:text-[36px]">Latest Sales</p>
            <div className="flex text-white justify-center mt-[60px]">
                <div className="flex-col border-r-[1px] border-white pl-[26px] pr-[26px]">
                    <p className="font-medium text-[36px] leading-normal max-sm:text-[24px]">9,999</p>
                    <p className="font-normal text-[18px] leading-normal max-sm:text-[14px]">items</p>
                </div>
                <div className="flex-col border-r-[1px] border-white pl-[26px] pr-[26px]">
                    <p className="font-medium text-[36px] leading-normal max-sm:text-[24px]">1750</p>
                    <p className="font-normal text-[18px] leading-normal max-sm:text-[14px]">Owners</p>
                </div>
                <div className="flex-col border-r-[1px] border-white pl-[26px] pr-[26px]">
                    <p className="font-medium text-[36px] leading-normal max-sm:text-[24px]">70</p>
                    <p className="font-normal text-[18px] leading-normal max-sm:text-[14px]">Floor</p>
                </div>
                <div className="flex-col pl-[26px]">
                    <p className="font-medium text-[36px] leading-normal max-sm:text-[24px]">3.09m</p>
                    <p className="font-normal text-[18px] leading-normal max-sm:text-[14px]">Volume</p>
                </div>
            </div>
            <div className="text-center">
                <button className="text-center uppercase font-bold leading-normal mt-[50px] text-[21px] bg-[#85FF10] h-[58px] w-[185px] max-sm:h-[39px] max-sm:w-[131px] max-sm:text-[16px]">Visit JPG.STORE</button>
            </div>
            <div className="mt-[48px] text-center flex justify-center items-center gap-[19px] px-[90.3px] max-sm:px-0">
                <div>
                    <img className="rounded-md w-[18.013px] h-[31.336px]" src="/Vector 10.svg" alt="dog" />
                </div>
                <div className="flex items-center gap-[53px]">
                    <div className="flex flex-col items-center text-white max-md:hidden">
                        <img className="rounded-md w-[80%]" src="/Rectangle9.png" alt="dog" />
                        <p className="mt-[31px] uppeercase">Sold 5 minutes ago </p>
                    </div>
                    <div className="flex-col text-center text-white max-xl:hidden max-md:block max-md:px-10">
                        <img className="rounded-md w-full" src="/Rectangle9.png" alt="dog" />
                        <p className="mt-[31px] uppeercase">Sold 5 minutes ago </p>
                    </div>
                    <div className="flex flex-col items-center text-white max-md:hidden">
                        <img className="rounded-md w-[80%]" src="/Rectangle9.png" alt="dog" />
                        <p className="mt-[31px] uppeercase">Sold 5 minutes ago </p>
                    </div>
                </div>
                <div>
                    <img className="rounded-md w-[18.013px] h-[31.336px]" src="/Vector 11.svg" alt="dog" />
                </div>
            </div>
            <div className="mt-[130px] flex w-full justify-between pb-[137px] max-xl:pl-[66px] max-xl:flex-col">
                <div className="pl-[160px] text-white max-xl:mb-20 max-xl:pl-[30px]">
                    <p className="font-bold text-[65px] leading-normal ml-[-30px]">Utility</p>
                    <ul className="mt-[27px]">
                        <li className="font-normal text-[24px] leading-normal list-disc">Non-Custodial Staking on MDToken.io</li>
                        <li className="font-normal text-[24px] leading-normal list-disc">Non-Custodial Staking on Cardano Lands</li>
                        <li className="font-normal text-[24px] leading-normal list-disc">Non-Custodial Staking on Ape Society</li>
                        <li className="font-normal text-[24px] leading-normal list-disc">50% of Monthly Royalties to all Top 1K holders</li>
                        <li className="font-normal text-[24px] leading-normal list-disc">PFP Utilization</li>
                        <li className="font-normal text-[24px] leading-normal list-disc">Benifets towards all Future Whitelists</li>
                        <li className="font-normal text-[24px] leading-normal list-disc">Access to MD Racing Game</li>
                    </ul>
                </div>
                <div className="flex-col w-[54%] max-xl:ml-auto max-xl:w-full">
                    <p className="bg-[#85FF10] items-center font-semibold text-[32px] ml-auto leading-normal w-full pt-[20px] pb-[17px] pl-[49px]">Highest Sale: 76,069 ADA</p>
                    <p className="bg-[#85FF10] items-center font-semibold text-[32px] ml-auto mt-[49px] leading-normal w-[90%] pt-[20px] pb-[17px] pl-[49px]">Total Royalties Distributed: 76,069 ADA</p>
                    <p className="bg-[#85FF10] items-center font-semibold text-[32px] ml-auto mt-[60px] leading-normal w-[75%] pt-[20px] pb-[17px] pl-[49px]">Total Staking Platforms: 3 </p>
                </div>
            </div>
            <div>
                <img className="w-full" src="./feedback.png" alt="altfeedback" />
            </div>
        </div>
    )
}

export default Sales;