import React from 'react'

const PercentBar = (props: { content: string, percent: string }) => {
    const { content, percent } = props;
    return (
        <p className={`bg-[#85FF10] items-center font-semibold text-[32px] max-lg:text-[28px] max-sm:text-[24px] ml-auto leading-normal w-[${percent}] pt-[20px] pb-[17px] pl-[49px] max-lg:pt-[18px] max-lg:pb-[15px] max-lg:pl-[28px] max-sm:pt-[16px] max-sm:pb-[14px] max-sm:pl-[19px]`}>{content}</p>
    )
}

export default PercentBar