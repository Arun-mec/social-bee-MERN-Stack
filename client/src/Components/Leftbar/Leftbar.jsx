import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LayersIcon from '@mui/icons-material/Layers';
import EventIcon from '@mui/icons-material/Event';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import './leftbar.css'
import { Users } from '../../dummydata';
import Friend from '../Friend/Friend';

function Leftbar() {
    return (
        <div className="leftBar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListitem">
                        <RssFeedIcon />
                        <span className="leftbarListitemText">Feed</span>
                    </li>
                    <li className="leftbarListitem">
                        <GroupIcon />
                        <span className="leftbarListitemText">Friends</span>
                    </li>
                    <li className="leftbarListitem">
                        <GroupsIcon />
                        <span className="leftbarListitemText">Family</span>
                    </li>
                    <li className="leftbarListitem">
                        <StoreIcon />
                        <span className="leftbarListitemText">Marketplace</span>
                    </li>
                    <li className="leftbarListitem">
                        <OndemandVideoIcon />
                        <span className="leftbarListitemText">Watch</span>
                    </li>
                    <li className="leftbarListitem">
                        <ScheduleIcon />
                        <span className="leftbarListitemText">Memories</span>
                    </li>
                    <li className="leftbarListitem">
                        <BookmarkIcon />
                        <span className="leftbarListitemText">Saved</span>
                    </li>
                    <li className="leftbarListitem">
                        <LayersIcon />
                        <span className="leftbarListitemText">Pages</span>
                    </li>
                    <li className="leftbarListitem">
                        <EventIcon />
                        <span className="leftbarListitemText">Events</span>
                    </li>
                    <li className="leftbarListitem">
                        <EventRepeatIcon />
                        <span className="leftbarListitemText">Recents</span>
                    </li>
                    <li className="leftbarListitem">
                        <ExpandCircleDownTwoToneIcon />
                        <span className="leftbarListitemText">See more</span>
                    </li>
                    <hr />
                    {Users.map((user) => {
                        return (
                            <Friend user={user} />
                        )
                    })}
    
                </ul>
            </div>
        </div>
    )
}

export default Leftbar
