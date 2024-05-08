import React from 'react'

const SocialMobileIcon = (props: { linkicon: string, alert: string }) => {
    const { linkicon, alert } = props;
    return (
        <li>
            <img className='w-[70px] h-[70px]' src={linkicon} alt={alert} />
        </li>
    )
}

export default SocialMobileIcon