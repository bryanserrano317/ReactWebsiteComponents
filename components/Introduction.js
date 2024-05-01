import React from 'react';
import '../App.css';
import './Introduction.css'
 

function Introduction(props) {
    return (
        <div className='intro'>
            <div className='intro-container'>
                <h2 className='introText'>{props.introText}</h2>      
            </div>
        </div>
    )
}

export default Introduction;