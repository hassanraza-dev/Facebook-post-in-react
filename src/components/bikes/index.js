import React,{useState} from 'react'
import './index.css'
import FbImageLibrary from 'react-fb-image-grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faComment, faShare, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import Reacts from '../reacts/'
import Moment from 'react-moment';
import FacebookEmoji from 'react-facebook-emoji';
const Bikes = function(props){
    const [emoji,setEmoji] = useState(false)

    const updateEmoji = ()=>{
        setEmoji(true)
    }
    const hideEmoji = ()=>{
        setEmoji(false)
    }
    console.log(FbImageLibrary);
    return(
        <>
        
        <div className="post">
           <div className='avatar'></div>
            <p className="name">{props.name}</p>
            <Moment format="Do MMMM YYYY - HH:mm" style={{color:"gray"}}></Moment>
    <p className='desc'>{props.desc}</p>
            <FbImageLibrary images={[
                "https://wallpapercave.com/wp/wp3647894.jpg",
                "https://images.hdqwalls.com/download/electric-bike-4k-b9-1366x768.jpg",
                "https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg",
                "https://media1.santabanta.com/full1/Bikes/BMW%20Bikes/bmw-bikes-34a.jpg",
                "https://images.wallpaperscraft.com/image/hornet_and_cb100r_bikes_road_74164_1920x1080.jpg"

                ]}/>
              {emoji && <Reacts />}

              <div >
        <FacebookEmoji type="like" size="xs"/>
        <FacebookEmoji type="love" size="xs"/>
        <FacebookEmoji type="wow" size="xs"/>
        <span style={{color:"gray"}}>You,Hassan raza and 60 others</span>
        </div>
                <div className="lcs">
                    
<h2 onMouseOver={updateEmoji} onMouseLeave={hideEmoji}>

<FontAwesomeIcon icon={faThumbsUp} />

</h2>
<h2>
<FontAwesomeIcon icon={faComment} />
</h2>
<h2>
<FontAwesomeIcon icon={faShare} />
</h2>
        </div>
      
        </div>
        
        </>
    )
}
export default Bikes;