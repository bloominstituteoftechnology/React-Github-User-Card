import React from "react";
import axios from "axios";
import Users from "./Users";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/Kat2bk/followers")
        .then( response => {
            this.setState({
                followers: response.data
            })
        })
        .catch(error => console.log("can't retrieve followers!", error))
    }

    render() {
        return (
            <div className="card">
                <div className="main-profile">
               <img src={this.props.userCard.avatar_url} alt="profile picture" />
               <h2>{this.props.userCard.name}</h2>
               </div>
               <Users followers={this.state.followers} />
            </div>
        )
    }

}

export default UserCard