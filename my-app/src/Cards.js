import React from 'react'

const Cards = (props) => {
  // const {friends} = props;

  return (
    <div>
      
      <div>
        {props.cards.map(friends => (
          <div>
            <img className="profile-img" src={friends.avatar_url} />
            <h1>{friends.login}</h1>
            <a href={friends.html_url}>My GitHub</a>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards