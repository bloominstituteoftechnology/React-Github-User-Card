import React from "react";
import "../css/index.css";


class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            
                <div className="follower-card">
                    <img src={this.props.follower.avatar_url} alt="avitar"/>
                    <p>{this.props.follower.login}</p>
                </div>
            
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



}

export default FollowerCard;