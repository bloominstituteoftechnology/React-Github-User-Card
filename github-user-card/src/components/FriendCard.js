import React from 'react';

class FriendCard extends React.Component{

    render(){
        return(
            <div>
                <h2>{this.props.data.name}</h2>
            </div>
        )
    }
}

export default FriendCard;