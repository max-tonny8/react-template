
import React, { useState } from 'react'

const NavItem = (props: { parent: string, children: string[] }) => {
    const { parent, children } = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='relative' onMouseDown={() => setDropdownOpen(!dropdownOpen)} onMouseLeave={() => setDropdownOpen(false)}>
            <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal cursor-pointer hover:text-[#85FF10]">
                <p className="text-white py-2 hover:text-[#85FF10]">{parent}</p>&nbsp;
                <p className={`${dropdownOpen ? "bg-polygondown1" : "bg-polygonup1"} bg-no-repeat bg-center w-[20px] h-[20px]`}></p>
            </li>
            <div
                className={`text-center absolute left-[-10px] top-[35px] ${
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

export default NavItem

const DropdownItem = (props: { label: string, href: string }) => {
    const {label, href} = props;

    return (
      <a
        href={href}
        className='block py-[1px] px-10 text-black bg-[#85FF10] border-[1px] border-black font-bold text-[24px] leading-normal hover:text-[#7a00df]'
      >
        {label}
      </a>
    )
};