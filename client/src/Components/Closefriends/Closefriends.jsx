import React from 'react'
import './closefriends.css'
function Closefriends() {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className='Closefriends'>
            <div className="closefriendsWrapper">
                <div className="closefriendProfilephoto">
                    <img className='profileFollowingPhoto' src={`${pf}/users/user1.jpeg`} alt="" />
                    <span className='profileFollowingUser'>Arun Alakkalpalla</span>
                </div>
                <div className="closefriendProfilephoto">
                    <img className='profileFollowingPhoto' src={`${pf}/users/user2.jpeg`} alt="" />
                    <span className='profileFollowingUser'>Arun A</span>
                </div>
                <div className="closefriendProfilephoto">
                    <img className='profileFollowingPhoto' src={`${pf}/users/user3.jpeg`} alt="" />
                    <span className='profileFollowingUser'>Arun Alakkalpalla</span>
                </div>
                <div className="closefriendProfilephoto">
                    <img className='profileFollowingPhoto' src={`${pf}/users/user4.jpeg`} alt="" />
                    <span className='profileFollowingUser'>Arun Alakkalpalla</span>
                </div>
                <div className="closefriendProfilephoto">
                    <img className='profileFollowingPhoto' src={`${pf}/users/user5.jpeg`} alt="" />
                    <span className='profileFollowingUser'>Arun Alakkalpalla</span>
                </div>
                <div className="closefriendProfilephoto">
                    <img className='profileFollowingPhoto' src={`${pf}/users/user6.jpeg`} alt="" />
                    <span className='profileFollowingUser'>Arun Alakkalpalla</span>
                </div>
            </div>  
        </div>
    )
}

export default Closefriends
