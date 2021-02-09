import React from "react";
import FriendCard from './FriendCard';

class FriendCards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friends: this.props.friends
        }
    }

     

    render(){
        
        return(
           <div>
            
            </div>
        )
    }
}

export default FriendCards;