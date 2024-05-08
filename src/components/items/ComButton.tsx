import React from 'react'

const ComButton = (props: { content: string }) => {
    const { content } = props;
    return (
        <button className="text-center uppercase font-bold leading-normal text-[21px] bg-[#85FF10] h-[58px] w-[185px] max-md:text-[16px] max-md:font-normal max-md:h-[36px] max-md:w-[130px] max-lg:mb-[15px]">
            {content}
        </button>
    )
}

export default ComButton