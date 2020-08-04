import React from 'react'

const Cards = (props) => {
  return (
    <div>
      
      <div>
        {props.cards[0].login}
        {/* {for(let i = 0; i < props.cards.length; i++) {
          props.cards[i]
        }
      return props.cards.id} */}
      </div>
    </div>
  )
}

export default Cards