import React from 'react'

const FrequencyItem = (props: { title: string, content: string }) => {
    const { title, content } = props;
    return (
        <div className="border-b-[1px] border-white pb-[30px] pt-[33px]">
            <p className="text-left px-[45px] font-bold text-[40px] leading-normal max-md:text-[24px]">{title}</p>
            <p className="text-left px-[45px] font-bold text-[21px] leading-normal mt-[13px] max-md:text-[14px] max-md:font-normal">{content}</p>
        </div>
    )
}

export default FrequencyItem