import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import './post.css' 

function Post(props) {
  const [like,setLike] = useState(props.post.likes)
  const [isLiked,setIsliked] = useState(false)
  const Likefunction = ()=>{
    setLike(isLiked ? like-1:like+1)
    setIsliked(!isLiked)
  }
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='postWrapper'>
        <div className="postTop">
            <img className="postUserImg" src="/assets/users/user6.jpeg" alt="" srcset="" />
            <span className='postUsername'>Annie Sara</span> 
            <span className='postTime'> added a new photo - 5 minutes ago</span>
            <div className="postSettingsIcon">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postMid">
          <div className="postTaglinediv">
            <span className='postTagline'>{props.post.desc}</span> 
          </div>
            <img className="postImage" src={pf+props.post.image} alt="" srcset="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLikes">
            <div className="postBottomLikeSection">
              <FavoriteTwoToneIcon style={{color:'red'}}/>
              <span>Liked by {like} people</span>
            </div>
              <hr/>
          </div>
          <div className="postBottomIcons">
            <div className="postBottomButton" onClick={Likefunction}>
                <ThumbUpOutlinedIcon/>
                <span class="postBottomButtonComment" >Like</span>
            </div>
            <div className="postBottomButton">
                <ChatBubbleOutlineOutlinedIcon/>
                <span class="postBottomButtonComment">Comments</span>
            </div>
          </div>
          <div className="postBottomCommment">
            <hr/>
            <div className="postBottomCommentSection">
              <img className="postBottomCommmentUser" src="/assets/users/user2.jpeg" alt="" srcset="" />
              <div className="postBottomaddComment">
                <input className="postBottomaddCommentText" type="text" placeholder="Add a comment.." />
                <SendIcon/>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Post
