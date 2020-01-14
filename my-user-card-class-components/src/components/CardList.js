import React from 'react'
import UserCard from './UserCard';

const CardList = props => {

 console.log("these", props)
 return (
  <div className="card-list">
  {props.user.map()}
  </div>
 )
}

export default CardList;