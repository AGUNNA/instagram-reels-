import React, { useRef, useState } from 'react'
import "./videocard.css";
import coinBaseReel from './assets/coinBaseReel.mp4';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';



function Videocard({url, likes, shares, channel, avatarSrc, song}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const  videoRef = useRef(null); 
    
        const onVideoPress = () => {
            if (isVideoPlaying) {
                //stop
                videoRef.current.pause();
                setIsVideoPlaying(false)
            } else {
                //play
                videoRef.current.play();
                setIsVideoPlaying(true)
            }
        };

    // useRef
    return (
        <div className='videoCard'>
            <VideoHeader/>
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className='video__player' 
                src={coinBaseReel}
                alt='IG reel video'
                loop
            />  
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default Videocard
