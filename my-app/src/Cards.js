import React from 'react'

const Cards = (props) => {
  // const {friends} = props;

  return (
    <div>
      
      <div>
        {/* {props.cards[0].login}
        {console.log(props.cards[0])} */}
        {props.cards.map(friends => (
          <div>
            <img src={friends.avatar_url} />
            <h1>{friends.login}</h1>,
            <p>{friends.html_url}</p>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards