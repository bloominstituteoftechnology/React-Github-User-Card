import React from "react";
import FriendCard from './FriendCard';

class FriendCards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friends: []
        }
    }

     componentDidMount(){
         this.setState({friends: this.props.friends})
     }

    render(){
        if(!this.props.friends){
            return <h1>Loading...</h1>
        }
        
        return(
           <>
                {this.props.friends.map((friend) => {
                    return <FriendCard key={friend.id} link={friend.url} />
                })}
            </>
        )
    }
}

export default FriendCards;
