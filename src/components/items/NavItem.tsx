import React from 'react'

const NavItem = (props: { navname: string }) => {
    const { navname } = props;
    return (
        <li className="flex items-center font-bold text-[21px] xl:text-[18px] leading-normal">
            <a href="" className="text-white">{navname}</a>&nbsp;
            <p className='bg-polygon bg-no-repeat bg-center w-[15px] h-[15px]'></p>
        </li>
    )
}

export default NavItem