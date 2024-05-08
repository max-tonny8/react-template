import React from 'react'

const LatestSales = (props: { value: string, name: string }) => {
    const { value, name } = props;
    return (
        <div className="flex-col border-r-[1px] border-white px-[26px] last:border-none">
            <p className="font-medium text-[36px] leading-normal max-sm:text-[24px]">{value}</p>
            <p className="font-normal text-[18px] leading-normal max-sm:text-[14px]">{name}</p>
        </div>
    )
}

export default LatestSales