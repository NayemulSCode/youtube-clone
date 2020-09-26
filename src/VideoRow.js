import React from 'react'
import './VideoRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Avatar }from '@material-ui/core'
function VideoRow({views,subs,description,timestamp,channel,title,image,verified}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""
            />
            <div className="videoRow__text">
                <h3>{title}</h3>
                
                <p className="videoRow__headline">
                    {/* <span className="videoRow__subs">
                        <span className="videoRow__subsNumer">{subs}</span>  
                        subscribers
                    </span> 
                    {" "}.*/} {views} views . {timestamp} 
                </p>
                <p className="videoRow__cName">
                <Avatar 
                    className="videoRow__avatar"
                    src="https://yt3.ggpht.com/a/AATXAJxYFed0lD-Hw_a5ce6AaeWQF0ddVPVQqNZ1N54jWg=s48-c-k-c0xffffffff-no-rj-mo"
                 />
                    {channel} {verified && <VerifiedIcon className="channelRow__verifiedIcons" />}
                </p>
                <p className="videoRow__des">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
