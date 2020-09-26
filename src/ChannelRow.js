import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar 
                className="channelRow__logo"
                src={image}
                alt={channel}
             />
             <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon className="channelRow__verifiedIcons" />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
             </div>
             <div className="channel__Info">
                 <Button className="channelRow__button"  variant="outlined">SUBSCRIBE</Button>
                 <NotificationsNoneOutlinedIcon  className="channelRow__Notification"/>
             </div>
        </div>
    )
}

export default ChannelRow
