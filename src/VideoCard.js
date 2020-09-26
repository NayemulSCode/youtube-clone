import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'
// import Avatar from '@material-ui/core/Avatar'
function VideoCard({image,title,channel,views,timestamp,cahnnelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbline" src={image} alt="" />
            <div className="videoCard__info">
                <Avatar 
                    className="videoCard__avatar"
                    src={cahnnelImage}
                    alt={channel}
                 />
                 <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                 </div>
            </div>

            
        </div>
    )
}

export default VideoCard
