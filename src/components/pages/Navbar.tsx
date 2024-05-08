import React, { useState } from 'react';
import NavMobileItem from '../items/NavMobileItem';
import SocialMobileIcon from '../items/SocialMobileIcon';
import NavItem from '../items/NavItem';
import SocialIcon from '../items/SocialIcon';

const Navbar: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navList = ["MAD DOGS", "MAD DOG CARS", "MD RACERS", "MD LICENSE", "MD RACING"];
    const socialIcon = ["./image/Twitter_Logo 1.svg", "./image/Instagram_Logo 1.svg", "./image/Discord-Logo 1.svg", "./image/youtube_icon 2.svg"];

    return (
        <div className="bg-black flex justify-between w-full items-center xl:py-4">
            <div className={`fixed max-xl:h-screen max-sm:overflow-y-scroll text-white w-[100%] top-0 left-[50%] translate-x-[-50%] ${toggleMenu ? "block" : "hidden"}`}>
                <div className="px-8 bg-black items-center">
                    <div className='pt-8 w-full flex justify-end cursor-pointer'>
                        <img src="./image/X.svg" alt="Altclose" onClick={() => setToggleMenu(!toggleMenu)} />
                    </div>
                    <ul className="flex flex-col list-none items-center gap-[20px]">
                        <li className="flex items-center font-bold text-[21px] pb-[30px] leading-normal">
                            <img className="w-full" src="./image/Logo.svg" alt="AltLogo" />
                        </li>
                        {navList.map((item, index) => (
                            <NavMobileItem navmobilename={item} />
                        ))}
                        <li className="flex items-center font-bold text-[40px] leading-normal">
                            <a href="" className="text-white">MD TOKEN</a>&nbsp;
                        </li>
                    </ul>
                    <ul className='flex justify-center list-none items-center gap-[20px] mt-[110px] pb-[100px]'>
                        {socialIcon.map((item, index) => (
                            <SocialMobileIcon linkicon={item} alert="no found image" />
                        ))}
                    </ul>
                </div>
            </div>
            <img className="xl:w-[200px] xl:h-[200px] md:w-[150px] md:h-[150px] max-md:w-[80px] max-md:h-[80px]" src="./image/Logo.svg" alt="AltLogo" />
            <div className="text-white w-full max-xl:hidden flex justify-center gap-10">
                <ul className="flex justify-between ml-auto list-none items-center gap-[40px] pr-10">
                    {navList.map((item, index) => (
                        <NavItem navname={item} />
                    ))}
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MD TOKEN</a>&nbsp;
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                <ul className='flex justify-between max-xl:hidden list-none items-center gap-3'>
                    {socialIcon.map((item, index) => (
                        <SocialIcon linkicon={item} alert="no found image" />
                    ))}
                </ul>
                <span className='hidden max-xl:block'>
                    <img src="./image/Group 9.svg" alt="" className='w-8 h-8 cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)} />
                </span>
            </div>
        </div>
    );
}

export default Navbar;
