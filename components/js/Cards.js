import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  return (
    <div className='cards'>
      <h1 className='header'>{props.header}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={props.image}
              text={props.text}
              path={props.path}
            />
            <CardItem
              src={props.image}
              text={props.text}
              path={props.path}
            />
            <CardItem
              src={props.image}
              text={props.text}
              path={props.path}
            />
            <CardItem
              src={props.image}
              text={props.text}
              path={props.path}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;