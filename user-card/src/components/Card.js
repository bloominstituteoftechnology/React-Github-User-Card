import React from 'react';
import './Card.css'

class Card extends React.Component{
    render(){
        return(
            <div className='card'>
                <h1 className='username'>Username: {this.props.data.username}</h1>
                <h2 className='followers'>Followers: {this.props.data.followers}</h2>
                <div className='design'>'                    '</div>      
            </div>
        )
    }
}

export default Card;