import React from 'react'
import Onlinefriend from '../OnlineFriend/Onlinefriend';
import {Users} from '../../dummydata'
import './rightbar.css'

function Rightbar() {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="rightBarTitle">Birthdays</div>
                <div className="rightBarbirthdayDiv">
                    <img className="birthdayIcon" src="/assets/gift.jpeg" alt="" srcset="" />
                    <div className='birthdayText'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </div>
                <div className="rightBarTitle">Sponsered</div>
                <div className="rightBaradvertisementDiv">
                    <img className="advertisementImg" src="/assets/ads.jpg" alt="" srcset="" />
                </div>
                <div className="rightBarTitle">Online Friends</div>
                <hr />
                <div className="rightBarFriends">
                    <ul className="rightbarFriendsList">
                        { Users.map((user)=>{
                        return (
                            <Onlinefriend user={user} />
                        )
                        })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
