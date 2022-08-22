import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import {Posts} from '../../dummydata'
import './feed.css'
function Feed() {
    return (
        <div className="feed">
            <Share />
            {Posts.map((post)=>{
                return(
                    <Post post={post}  />
                )
            })}
        </div>
    )
}

export default Feed
