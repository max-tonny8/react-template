import React, { useState } from 'react';

const Navbar:React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

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
                        <li className="flex items-center font-bold text-[40px] leading-normal">
                            <a href="" className="text-white">MAD DOGS</a>&nbsp;
                            <p className='bg-polygon bg-no-repeat bg-center w-[20px] h-[20px]'></p>
                        </li>
                        <li className="flex items-center font-bold text-[40px] leading-normal">
                            <a href="" className="text-white">MAD DOG CARS</a>&nbsp;
                            <p className='bg-polygon bg-no-repeat bg-center w-[20px] h-[20px]'></p>
                        </li>
                        <li className="flex items-center font-bold text-[40px] leading-normal">
                            <a href="" className="text-white">MD RACERS</a>&nbsp;
                            <p className='bg-polygon bg-no-repeat bg-center w-[20px] h-[20px]'></p>
                        </li>
                        <li className="flex items-center font-bold text-[40px] leading-normal">
                            <a href="" className="text-white">MD LICENSE</a>&nbsp;
                            <p className='bg-polygon bg-no-repeat bg-center w-[20px] h-[20px]'></p>
                        </li>
                        <li className="flex items-center font-bold text-[40px] leading-normal">
                            <a href="" className="text-white">MD RACING</a>&nbsp;
                            <p className='bg-polygon bg-no-repeat bg-center w-[20px] h-[20px]'></p>
                        </li>
                        <li className="flex items-center font-bold text-[40px] leading-nor40l">
                            <a href="" className="text-white">MD TOKEN</a>&nbsp;
                        </li>
                    </ul>
                    <ul className='flex justify-center list-none items-center gap-[20px] mt-[110px] pb-[100px]'>
                        <li>
                            <img className='w-[70px] h-[70px]' src="./image/Twitter_Logo 1.svg" alt="AltTwitter" />
                        </li>
                        <li>
                            <img className='w-[70px] h-[70px]' src="./image/Instagram_Logo 1.svg" alt="AltInstagram" />
                        </li>
                        <li>
                            <img className='w-[70px] h-[70px]' src="./image/Discord-Logo 1.svg" alt="AltDiscord" />
                        </li>
                        <li>
                            <img className='w-[70px] h-[70px]' src="./image/youtube_icon 2.svg" alt="AltYoutube" />
                        </li>
                    </ul>
                </div>
            </div>
            <img className="xl:w-[200px] xl:h-[200px] md:w-[150px] md:h-[150px] max-md:w-[80px] max-md:h-[80px]" src="./image/Logo.svg" alt="AltLogo" />
            <div className="text-white w-full max-xl:hidden flex justify-center gap-10">
                <ul className="flex justify-between ml-auto list-none items-center gap-[40px] pr-10">
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MAD DOGS</a>&nbsp;
                        <p className='bg-polygon bg-no-repeat bg-center w-[15px] h-[15px]'></p>
                    </li>
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MAD DOG CARS</a>&nbsp;
                        <p className='bg-polygon bg-no-repeat bg-center w-[15px] h-[15px]'></p>
                    </li>
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MD RACERS</a>&nbsp;
                        <p className='bg-polygon bg-no-repeat bg-center w-[15px] h-[15px]'></p>
                    </li>
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MD LICENSE</a>&nbsp;
                        <p className='bg-polygon bg-no-repeat bg-center w-[15px] h-[15px]'></p>
                    </li>
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MD RACING</a>&nbsp;
                        <p className='bg-polygon bg-no-repeat bg-center w-[15px] h-[15px]'></p>
                    </li>
                    <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
                        <a href="" className="text-white">MD TOKEN</a>&nbsp;
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                <ul className='flex justify-between max-xl:hidden list-none items-center gap-3'>
                    <li>
                        <img src="./image/Twitter_Logo 1.svg" alt="AltTwitter" />
                    </li>
                    <li>
                        <img src="./image/Instagram_Logo 1.svg" alt="AltInstagram" />
                    </li>
                    <li>
                        <img src="./image/Discord-Logo 1.svg" alt="AltDiscord" />
                    </li>
                    <li>
                        <img src="./image/youtube_icon 2.svg" alt="AltYoutube" />
                    </li>
                </ul>
                <span className='hidden max-xl:block'>
                    <img src="./image/Group 9.svg" alt="" className='w-8 h-8 cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)} />
                </span>
            </div>
        </div>
    );
}

export default Navbar;
