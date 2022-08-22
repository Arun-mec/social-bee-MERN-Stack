import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './navbar.css'
function Navbar() {
    const navigate = useNavigate()
    return (
        <div className="wrapper">
            <div className="leftTopbar">
                <span className='logo' onClick={()=>{navigate('/')}}>Socialbee </span>
            </div>
            <div className="searchBar">
            <SearchIcon className='searchIcon'/>
            <input className="searchInput" placeholder="Enter the people, posts, or videos" />
            </div>
            <div className="rightTopbar">
                <div className="topbarLinks">
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIcon">
                        <PersonIcon/>
                        <span className="countBadge">20</span>
                    </div>
                    <div className="topbarIcon">
                        <ModeCommentIcon/>
                        <span className="countBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <NotificationsIcon/>
                        <span className="countBadge">1</span>
                    </div>
                </div>
                <div className="profileIcon">
                    <img className="userImage" src="/assets/users/user1.jpeg" alt="userImage" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
