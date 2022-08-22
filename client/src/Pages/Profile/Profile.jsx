import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Leftbar from '../../Components/Leftbar/Leftbar'
import Profile from '../../Components/Profile/Profile'
import './profile.css'
function Profilepage() {
    return (
        <div>
            <Navbar />
            <div className="profileContainer">
                <Leftbar />
                <Profile/>
            </div>
        </div>
    )
}

export default Profilepage
