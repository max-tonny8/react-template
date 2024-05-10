import React, { useState } from 'react'

const NavMobileItem = (props: { parent: string, children: string[] }) => {
    const { parent, children } = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div onMouseDown={() => setDropdownOpen(!dropdownOpen)} onMouseLeave={() => setDropdownOpen(false)}>
            <li className="flex items-center font-bold text-[40px] leading-normal cursor-pointer">
                <p className="text-white">{parent}</p>&nbsp;
                <p className={`${dropdownOpen ? "bg-polygondown2" : "bg-polygonup2"} bg-no-repeat bg-center w-[20px] h-[20px]`}></p>
            </li>
            <div
                className={`text-center ${
                    dropdownOpen
                    ? 'block'
                    : 'hidden'
                    }`}
                >
                {children.map((item, index) => (
                    <DropdownItem key={index} label={item} href='/#' />
                ))}
            </div>
        </div>
    )
}

export default NavMobileItem

const DropdownItem = (props: { label: string, href: string }) => {
    const {label, href} = props;

    return (
      <a
        href={href}
        className='block py-2 px-6 text-black bg-[#85FF10] border-[1px] border-black font-bold text-[24px] leading-normal'
      >
        {label}
      </a>
    )
};