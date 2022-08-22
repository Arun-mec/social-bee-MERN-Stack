import React from 'react'
import './friend.css'

function Friend(props) {

    const pf = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div>
            <li className="leftbarListitem">
                <img className='leftbarImage' src={pf + props.user.profilePicture} alt="" srcset="" />
                <span className="leftbarListitemText">{props.user.username}</span>
            </li>
        </div>
    )
}

export default Friend