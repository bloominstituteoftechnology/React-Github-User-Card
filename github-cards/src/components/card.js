import React from 'react';


class Card extends React.Component{
    render(){
        return(
            <div>
              <h4>{this.props.item.login}</h4>
              <img className='followpic' src={this.props.item.avatar_url} />
             </div>
        )
    }
}

export default Card