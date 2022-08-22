import React from 'react'
import './onlinefriend.css'
function Onlinefriend(props) {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div>
            <li className="rightbarFriendItem">
                <div className='rightbarFriendImageDiv'>
                    <img className="rightbarFriendImage" src={pf+props.user.profilePicture} alt="" srcset="" />
                    <span className='onlineIconGreen'> </span>
                </div>
                <span className="rightbarListitemText">{props.user.username}</span>
            </li>
        </div>
    )
}

export default Onlinefriend