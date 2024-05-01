import React from 'react';
import '../App.css';
import './TeamSection.css'
import Slideshow from './Slideshow.js'
 

export const SlideshowWithDescription = (props) => {
    return (
        <div className='team-container'>
            <Slideshow/>
            <div className='team-wrapper'>
                <h1 className='itemName'>{props.itemName} <br></br> {props.itemSubHeading}</h1>
                <br></br>
                <p className='doctorInfo'>{props.itemInfo}</p>
            </div>
            
        </div>
    )
}

export default SlideshowWithDescription;