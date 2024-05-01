import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AcceptedSection.css';
import { Link } from 'react-router-dom';
 

function AcceptedSection(props) {
    return (
        <div className='midsection'>
            <div className='heading'>
                    {props.heading}
            </div>
            <div className='midsection-container'>
                <div className='imageSection'>
                    <img className="image" src={props.imageSrc} alt='None'/>
                </div>
                <div className='actionButton'>
                    <Link to={props.actionLink}><Button buttonStyle='btn--outline'>More Information</Button></Link>
                </div>             
            </div>
            <hr style={{height:'1px', 'border-width':0, color:'#D0E3FF', 'background-color': '#D0E3FF'}}></hr>
        </div>
    )
}

export default AcceptedSection;