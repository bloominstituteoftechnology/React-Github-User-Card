import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className ='props'>
      {props.user}
      {props.followers}
    </div>
  )
}
