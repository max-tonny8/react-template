import React from 'react'

const Utility = (props: { content: string }) => {
    const { content } = props;
    return (
        <li className="font-normal text-[24px] max-lg:text-[20px] max-sm:text-[14px] leading-normal list-disc">{content}</li>
    )
}

export default Utility