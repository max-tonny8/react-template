import React from 'react'

const SocialIcon = (props: { linkicon: string, alert: string }) => {
    const { linkicon, alert } = props;
    return (
        <li>
            <img src={linkicon} alt={alert} />
        </li>
    )
}

export default SocialIcon