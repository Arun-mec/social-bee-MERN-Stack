import React from 'react'
import Feed from '../Feed/Feed'
import Closefriends from '../Closefriends/Closefriends'
import './profile.css'
function Profile() {
    return (
    <div className="profile">
    <div className="profileWrapper">
        <div className="profileWrappertop">
            <img className='profileCoverphoto' src="/assets/posts/post5.jpg" alt="" srcset="" />
            <div className="profilePhotoDiv">
                <img className='profilephoto' src="/assets/users/user5.jpeg" alt="" srcset="" />
                <h2 className='profileUsername'>Arun Alakkalpalla</h2>
                <h4 className='profileDesc'> Hi ente pere ebhi sulfiker njan idukkiyil timber business cheyyunu, ente idavelakalil njn rummy kalikkarund!!</h4>
            </div>
        </div>
        <div className="profileWrapperbottom">
            <Feed/>
            <Closefriends/>
        </div>
    </div>
    </div>
)
}

export default Profile
