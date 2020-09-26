import React from 'react'
import './RecommendedVideo.css'
import {Button} from '@material-ui/core'
import VideoCard from './VideoCard'
function RecommendedVideo() {
    return (
        <div className="recommendedVideo">
            <h2>Recommeded</h2>
            <div className="recommendedVideo__button">
                <Button variant="outlined">All</Button>
                <Button variant="outlined">Javascript</Button>
                <Button variant="outlined">Asteroids</Button>
                <Button variant="outlined">Gadgets</Button>
                <Button variant="outlined">Python</Button>
                <Button variant="outlined">React</Button>
                <Button variant="outlined">Asp.net</Button>
                <Button variant="outlined">Computer Science</Button>
                <Button variant="outlined">Work Out</Button>
                <Button variant="outlined">Physics</Button>
            </div>
            <div className="recommendedVideo__videos">
                <VideoCard 
                  title ="চাহিদা বনাম সন্তুষ্টি, এবং তার বাস্তবতা। Zaheed Sabur"  
                  views="50k Views"
                  timestamp="20 Sep 2020"
                  cahnnelImage="https://yt3.ggpht.com/a/AATXAJz0Z_e-05WNiRJ3sWfMzLw1wp3tJdYnNMVzAy3ksq0=s100-c-k-c0xffffffff-no-rj-mo"
                  channel="Zaheed Sabur"
                  image="/images/img1.png"
                />
                <VideoCard 
                  title ="সূরা জিন এর অন্তর তৃপ্তকারী তিলাওয়াত ┇ Recited by Mahmud Huzaifa ┇ An Nafee ┇ আন নাফী"  
                  views="220k Views"
                  timestamp="3 months ago"
                  cahnnelImage="https://yt3.ggpht.com/a/AATXAJydWcmf1ylYsgC8PCRdpvAkkrJkF-9pKd1bJe5G=s100-c-k-c0xffffffff-no-rj-mo"
                  channel="An Nafee "
                  image="/images/img2.png"
                />
                <VideoCard 
                  title ="The Resume That Got Me Into Google and Microsoft (software engineer resume tips)"  
                  views="13.5k Views"
                  timestamp="16 hours ago"
                  cahnnelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
                  channel="Clever Programmer"
                  image="/images/img3.png"
                />
                <VideoCard 
                  title ="Inside The $5 Billion Apple Headquarters"  
                  views="2.1M Views"
                  timestamp="13 Sep 2020"
                  cahnnelImage="https://yt3.ggpht.com/a/AATXAJwjens3DFfemWhv_8uV77wE_OR-fpalrG2GbLi4=s48-c-k-c0xffffffff-no-rj-mo"
                  channel="Tech Vision"
                  image="/images/img4.png"
                />
                <VideoCard 
                  title ="Asteroid (2014 QJ33) Live Event Countdown | Estimated to be Over 360 Feet in Diameter"  
                  views="1k Views"
                  timestamp="18 Sep 2020"
                  cahnnelImage="https://yt3.ggpht.com/a/AATXAJy_54R49tEDgx0ArcbP8IePlTKYeXb0I5EZlqDo=s48-c-k-c0xffffffff-no-rj-mo"
                  channel="Asteroid Station"
                  image="/images/img5.png"
                />
                <VideoCard 
                  title ="Microsoft reveals findings from Project Natick, its experimental undersea datacenter"  
                  views="826k Views"
                  timestamp="5 days ago"
                  cahnnelImage="https://yt3.ggpht.com/a/AATXAJyp8wOmGZigiSZ247KDbDWW3VtVy4wyahidRTZc=s48-c-k-c0xffffffff-no-rj-mo"
                  channel="Microsoft"
                  image="/images/img6.png"
                />
            </div>
        </div>
    )
}

export default RecommendedVideo
