import React from 'react'
import FacebookEmoji from 'react-facebook-emoji';


const Reacts = function(){
    return(
        <div style={{position:"absolute",zIndex:10}}>
        <FacebookEmoji type="like" size="sm"/>
        <FacebookEmoji type="love" size="sm"/>
        <FacebookEmoji type="wow" size="sm"/>
        <FacebookEmoji type="yay" size="sm"/>
        <FacebookEmoji type="angry" size="sm"/>
        <FacebookEmoji type="haha" size="sm"/>
        <FacebookEmoji type="sad" size="sm"/>
        
        </div>
    )
}
export default Reacts; 