import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow';
export default function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image = "https://yt3.ggpht.com/a/AATXAJxYFed0lD-Hw_a5ce6AaeWQF0ddVPVQqNZ1N54jWg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Android School Bangla"
                verified
                subs="1.1M"
                noOfVideos={451}
                description="Welcome to Android School Bangla The Tech Channel, most of the videos are in Bengali . Hear you can find lot of videos about ..."
            />
            <hr />
            <div className="searchPage__latest">
                <h3>Latest from Android School Bangla</h3>
            </div>
            <VideoRow 
                views="14k"
                subs="1.1M "
                verified
                description="Screenshoot is most powerful features in any android feature. Hello dear viewers in this video i will show top 5 screenshot tricks.
                if...."
                timestamp="2 months ago"
                channel="Android School Bangla"
                title="5 way to take Screenshot on Android || Top 5 Screenshot tricks"
                image="/images/recom1.png"
            />
            <VideoRow 
                views="20k"
                subs="1.1M "
                verified
                description="মোবাইল ব্যবহার করুন ভিন্ন স্টাইলে || Ceri Launcher for android !!
                ➡️ Download App: Follow this video step
                🕴️ Business Inquiry:...."
                timestamp="3 months ago"
                channel="Android School Bangla"
                title="মোবাইল ব্যবহার করুন ভিন্ন স্টাইলে || Ceri Launcher for android !!"
                image="/images/recom2.png"
            />
            <hr />
            <VideoRow 
                views="426k"
                subs="1.1M "
                verified
                description="In This video i wll show how to show tp link router admin panel. If you connect with any wifi router you can show and configure...."
                timestamp="1 year ago"
                channel="Android School Bangla"
                title="Wi-Fi পাসওয়ার্ড বের করুন ? || Router Admin Panel || Android School Bangla"
                image="/images/recom3.png"
            />
            <VideoRow 
                views="486k"
                subs="1.1M "
                verified
                description="2nd Channel: https://www.youtube.com/channel/UCx3i...
                in this video i will shear...."
                timestamp="10 months ago"
                channel="Android School Bangla"
                title="🔥 How To Create YouTube Channel From Android Mobile ?"
                image="/images/recom5.png"
            />
            <VideoRow 
                views="28k"
                subs="1.1M "
                verified
                description="In This video i will show how to Make Passport size photo from Android Mobile ? Passport size photo have 
                different width ans....."
                timestamp="6 months ago"
                channel="Android School Bangla"
                title="How to Make Passport size photo from Android Mobile ? Android School Bangla"
                image="/images/recom4.png"
            />
        </div>
    )
}
