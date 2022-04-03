import React, { useState, useEffect} from 'react';
import mainLogo from "./assets/Instagram_logo_2016.svg.png"
import './App.css';
import Videocard from './VideoCard';
import './assets/coinBaseReel.mp4'
import db from "./Firebase"

function App() {
    const [reels, setReels] = useState([]);

    useEffect(() => {
      //App component will run once when it loads
      
      db.collection('reels').onSnapshot(snapshot => (
        setReels(snapshot.docs.map(doc => doc.data()))
      )) 
    }, []); 

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src={mainLogo}
          alt=""
        />
         <h1>Reels</h1>
      </div>
     
      <div className="app__videos">
        {/*container of app__videos (scrollable content) */}
        {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
          <Videocard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        {/* <Videocard
          channel='nodibambino'
          avatarSrc="https://lh3.googleusercontent.com/ogw/ADea4I7EyGb1x349x38KR43Wx1djPRJ5qlxnp8JcihFN=s192-c-mo"
          song="test app - Nodibambino"
          url="./assets/coinBaseReel.mp4"
          likes={200}
          shares={36}

        /> */}
        
        
        {/* < video /> */}
        {/* < video /> */}
        {/* < video /> */}
        {/* < video /> */}
      </div>
      
    </div>
  )
}

export default App
 