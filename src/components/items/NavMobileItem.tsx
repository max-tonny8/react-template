import React from 'react'

const NavMobileItem = (props: { navmobilename: string }) => {
    const { navmobilename } = props;
    return (
        <li className="flex items-center font-bold text-[40px] leading-normal">
            <a href="" className="text-white">{navmobilename}</a>&nbsp;
            <p className='bg-polygon bg-no-repeat bg-center w-[20px] h-[20px]'></p>
        </li>
    )
}

export default NavMobileItem