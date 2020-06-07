import React from "react";
import "../css/index.css";
import axios from "axios";


class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    /*setUser = () => {
        this.props.setUser(this.props.follower.login);
    }*/

    fetchUser = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.props.follower.login}`)
            .then(res => 
                //console.log(res);
                this.props.setUser({
                    login: res.data.login,
                    userName: res.data.name, 
                    bio: res.data.bio,
                    avitarUrl: res.data.avatar_url,
                    followersList: []
                })

                   
            )
            .catch(err => console.log(err));

            //reset the search box
            //this.setState({ ...this.state, userName: "" }) 
      };


    render() {
        return (
            
                <div className="follower-card">
                    <img src={this.props.follower.avatar_url} alt="avitar"/>
                    <p onClick={this.fetchUser}>{this.props.follower.login}</p>
                </div>
            
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



}

export default FollowerCard;