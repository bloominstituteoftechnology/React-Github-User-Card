import React, { Component } from 'react';
import Card from './Card'
const CardList = props => {
    return (
        <div className='card-list'>
            {props.people.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    );
};
export default CardList;