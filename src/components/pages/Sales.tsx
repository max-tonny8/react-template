import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ComButton, LatestSales, Utility, PercentBar } from "../items";
import "../../style.css";

interface Latest {
    value: string,
    name: string
}

interface Percent {
    content: string,
    percent: string
}

const Sales = (props: { images: image[] }) => {
    const { images } = props;

    const settings = {
        accessibility: false,
        draggable: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const latestList: Latest[] = [
        {
            value: "9,999",
            name: "items"
        },
        {
            value: "1750",
            name: "Owners"
        },
        {
            value: "70",
            name: "Floor"
        },
        {
            value: "3.09m",
            name: "Volume"
        }
    ];

    const utilityList: string[] = [
        "Non-Custodial Staking on MDToken.io",
        "Non-Custodial Staking on Cardano Lands",
        "Non-Custodial Staking on Ape Society",
        "50% of Monthly Royalties to all Top 1K holders",
        "PFP Utilization",
        "Benefits towards all Future Whitelists",
        "Access to MD Racing Game"
    ];

    const percentList: Percent[] = [
        {
            content: "Highest Sale: 76,069 ADA",
            percent: "100%",
        },
        {
            content: "Total Royalties Distributed: 76,069 ADA",
            percent: "90%",
        },
        {
            content: "Total Staking Platforms: 3 ",
            percent: "75%",
        },
    ];

    return (
        <div className="w-full flex-col pt-[112px] bg-black">
            <p className="font-bold uppercase text-[65px] text-white text-center max-sm:text-[36px]">Latest Sales</p>
            <div className="flex text-white justify-center mt-[60px]">
                {latestList.map((item, index) => (
                    <LatestSales key={index} value={item.value} name={item.name} />
                ))}
            </div>
            <div className="text-center mt-[50px]">
                <ComButton content="Visit JPG.STORE" />
            </div>
            <div className="mt-[48px]">
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div className="flex flex-col items-center text-white" key={index}>
                            <img className="rounded-md" src={item.src} alt={item.alt} />
                            <p className="mt-[31px] uppercase">Sold 5 minutes ago </p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-[130px] flex w-full justify-between pb-[137px] max-lg:pb-[108px] max-sm:pb-[78px] max-lg:mt-[100px] max-sm:mt-[60px] max-xl:flex-col">
                <div className="pl-[160px] text-white max-xl:mb-20 max-xl:pl-[66px]">
                    <p className="font-bold text-[65px] leading-normal ml-[-30px] max-lg:text-[48px] max-sm:text-[36px]">Utility</p>
                    <ul className="mt-[27px]">
                        {utilityList.map((item, index) => (
                            <Utility key={index} content={item} />
                        ))}
                    </ul>

                </div>
                <div className="flex flex-col gap-16 w-[54%] max-xl:ml-auto max-xl:w-full max-xl:pl-[41px]">
                    {percentList.map((item, index) => (
                        <PercentBar key={index} content={item.content} percent={item.percent} />
                    ))}
                </div>
            </div>
            <div>
                <img className="w-full" src="./image/feedback.png" alt="altfeedback" />
            </div>
        </div>
    )
}

export default Sales;
