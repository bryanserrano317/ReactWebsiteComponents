import React from 'react';
import '../App.css';
import './TeamSection.css'
import IntroductionCards from './IntroductionCards';
import { Link } from 'react-router-dom';
 

export const TeamSection = (props) => {
    return (
        <div className='team-container'>
            <img className='itemImage' src={props.imgsrc}></img>
            <div className='team-wrapper'>
            <Link to={`${props.itemLink}`} target="_blank" rel="noopener noreferrer"><h1 className='itemName'>{props.itemName} <br></br> {props.itemSubHeading}</h1></Link>
                <p className='itemInfo'>{props.itemInfo}</p>
            </div>
            
        </div>
    )
}

export default TeamSection;