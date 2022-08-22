import React from 'react'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import './share.css'
function Share() {
  return (
    <div className="shareWrapper">
        <div className="shareWrappertop">
            <div className="shareWrapuser">
                <img className="shareWrapperimg" src="/assets/users/user2.jpeg" alt="" srcset="" />
            </div>
            <div className="shareWrappost">
                <input className="shareWrapposttext" type="text" placeholder="What's on your mind..?" />
                <SendIcon/>
            </div>
        </div>
        <div className="shareWrapperbottom">
            <div className="shareWrapoptions">
                <VideoCameraFrontIcon className='shareWrapCameraIcon'/>
                <span className="shareWrapLivevideotext">Live video</span>
            </div>
            <div className="shareWrapoptions">
                <AddToPhotosIcon className='shareWrapPhotoIcon' />
                <span className="shareWrapLivevideotext">Add photos/videos</span>
            </div>
            <div className="shareWrapoptions">
                <InsertEmoticonIcon className='shareWrapSmileyIcon' />
                <span className="shareWrapLivevideotext">Feeling/Activity</span>
            </div>
        </div>
    </div>
  )
}

export default Share
